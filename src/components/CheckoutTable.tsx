import * as React from "react";

type Product = {
    name: string,
    price: number
}

interface CheckoutScanProps {
    productsList: Product[];
}

export const CheckoutScan: React.FC<CheckoutScanProps> = ({
    productsList
}) => {

  const handleScanClick = () => {
    alert("scanned")
  }

  return (
    <div>
    <select name="cars" id="productsSelectionList">
    {productsList.map((data) => (
        <option value={data.name}>{data.name}</option>
    ))}
    </select>
    <button onClick={handleScanClick}>Scan</button>
    </div>
    
  );
};



export const CheckoutTable: React.FC = () => {

  const [totalPrice, setTotalPrice] = React.useState(0);
  const [scannedProducts, setScannedProducts] = React.useState([{
      product: "Pizza",
      price: 5.50
  }]);

  return (
    <>
    <div>
      <table>
        <tr>
          <th>Product</th>
          <th>Price</th>
        </tr>
      {scannedProducts.map((data) => (
        <tr>
          <td>{data.product}</td>
          <td>{data.price}</td>
        </tr>
      ))}
      </table>
    </div>
    <div>
        Total price: {totalPrice}
    </div>
    </>
    
  );
};


