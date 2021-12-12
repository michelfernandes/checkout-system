import * as React from "react";
import { Product } from '../App';

interface CheckoutScanProps {
    products: Product[];
    scannedProducts: Product[];
    setScannedProducts: (products: Product[]) => void;
    setTotalPrice: (price: number) => void;
}

export const CheckoutScan: React.FC<CheckoutScanProps> = ({
    products,
    scannedProducts,
    setScannedProducts,
    setTotalPrice
}) => {

  const [selected, setSelected] = React.useState(1);

  const handleScanClick = () => {
    const newScannedProduct = products.find(t => t.id === selected);
    setScannedProducts([...scannedProducts, newScannedProduct!]);
    
  }

  React.useEffect(() => {
    const total = scannedProducts.reduce((a,b) => { return a + b.price},0)
    setTotalPrice(total);
  },[scannedProducts,setTotalPrice])

  const handleSelectionChange = (event) => {
    const selectedId = event.target.value;
    setSelected(Number(selectedId));
  }

  return (
    <div>
    <select onChange={handleSelectionChange} name="products" id="productsSelectionList">
    {products.map((data) => (
        <option value={data.id}>{data.name}</option>
    ))}
    </select>
    <button onClick={handleScanClick}>Scan</button>
    </div>
    
  );
};

interface CheckoutTableProps{
  scannedProducts: Product[]
  totalPrice: number
}

export const CheckoutTable: React.FC<CheckoutTableProps> = ({
  scannedProducts,
  totalPrice
}) => {
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
          <td>{data.name}</td>
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


