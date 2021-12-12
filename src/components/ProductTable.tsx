import * as React from "react";
import CRUDTable,
{
  Fields,
  Field,
  CreateForm,
} from "react-crud-table";
import type { Product } from '../App'

interface ProductTableProps {
  products: Product[],
  setProducts: (products: Product[]) => void
}

export const ProductTable: React.FC<ProductTableProps> = ({
  products,
  setProducts
}) => {

  let count = products.length;
  const service = {
    fetchItems: () => {
      let result = Array.from(products);
      return Promise.resolve(result);
    },
    create: (product) => {
      count += 1;
      setProducts([...products,{...product,id:count}])
      return Promise.resolve(product);
    },
    delete: (data) => {
      const product = products.find(t => t.id === data.id);
      const filteredproducts = products.filter(t => t.id !== product!.id);
      setProducts(filteredproducts);
      return Promise.resolve(product);
    },
  };

return(
  <div>
    <CRUDTable
      caption="Products"
      fetchItems={() => service.fetchItems()}
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
        />
        <Field
          name="type"
          label="Type"
        />
        <Field
          name="price"
          label="Price"
          type="number"
        />
      </Fields>
      <CreateForm
        title="Create a new product!"
        message=""
        trigger="Create product"
        onSubmit={product => service.create(product)}
        submitText="Create"
      />
    </CRUDTable>
  </div>
);
      }