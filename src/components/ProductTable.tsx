import React from "react";
import ReactDOM from "react-dom";
import CRUDTable,
{
  Fields,
  Field,
  CreateForm,
  DeleteForm,
} from "react-crud-table";


export let products = [
    {
      id: 1,
      name: "Curry Sauce",
      type: "Food",
      price: 1.95,
    },
    {
      id: 2,
      name: "Pizza",
      type: "Food",
      price: 5.99,
    },
    {
      id: 3,
      name: "Men’s T-Shirt ",
      type: "Clothing",
      price: 25.00,
    }
  ];

const SORTERS = {
  NUMBER_ASCENDING: mapper => (a, b) => mapper(a) - mapper(b),
  NUMBER_DESCENDING: mapper => (a, b) => mapper(b) - mapper(a),
  STRING_ASCENDING: mapper => (a, b) => mapper(a).localeCompare(mapper(b)),
  STRING_DESCENDING: mapper => (a, b) => mapper(b).localeCompare(mapper(a)),
};

const getSorter = (data) => {
  const mapper = x => x[data.field];
  let sorter = SORTERS.STRING_ASCENDING(mapper);

  if (data.field === "id") {
    sorter = data.direction === "ascending" ?
      SORTERS.NUMBER_ASCENDING(mapper) : SORTERS.NUMBER_DESCENDING(mapper);
  } else {
    sorter = data.direction === "ascending" ?
      SORTERS.STRING_ASCENDING(mapper) : SORTERS.STRING_DESCENDING(mapper);
  }

  return sorter;
};


let count = products.length;
const service = {
  fetchItems: (payload) => {
    let result = Array.from(products);
    result = result.sort(getSorter(payload.sort));
    return Promise.resolve(result);
  },
  create: (product) => {
    count += 1;
    products.push({
      ...product,
      id: count,
    });
    return Promise.resolve(product);
  },
  delete: (data) => {
    const product = products.find(t => t.id === data.id);
    products = products.filter(t => t.id !== product!.id);
    return Promise.resolve(product);
  },
};

const styles = {
  container: { margin: "auto", width: "fit-content" },
};

export const ProductTable = () => (
  <div style={styles.container}>
    <CRUDTable
      caption="Products"
      fetchItems={payload => service.fetchItems(payload)}
    >
      <Fields>
        <Field
          name="id"
          label="Id"
          hideInCreateForm
          readOnly
        />
        <Field
          name="name"
          label="Name"
          placeholder="Name"
        />
        <Field
          name="type"
          label="Type"
        />
        <Field
          name="price"
          label="Price"
          placeholder="Price"
        />
      </Fields>
      <CreateForm
        title="Create a new product!"
        message=""
        trigger="Create product"
        onSubmit={product => service.create(product)}
        submitText="Create"
        validate={(values) => {
          const errors = {};
          if (!values.title) {
            //errors.title = "Please, provide product\"s title";
          }

          if (!values.description) {
            //errors.description = "Please, provide product\"s description";
          }

          return errors;
        }}
      />
      <DeleteForm
        title="Product Deletion"
        message="Are you sure you want to delete the product?"
        trigger="Delete"
        onSubmit={product => service.delete(product)}
        submitText="Delete"
        validate={(values) => {
          const errors = {};
          if (!values.id) {
            //errors.id = "Please, provide id";
          }
          return errors;
        }}
      />
    </CRUDTable>
  </div>
);