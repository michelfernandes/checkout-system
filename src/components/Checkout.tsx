import * as React from "react";
import { Product } from '../App';
import { CheckoutService } from "../service/CheckoutService";
import { PizzaPriceRule } from "../rules/PizzaPriceRule";
import { ClothingDiscountRule } from "../rules/ClothingDiscountRule";

const checkoutService = new CheckoutService([new PizzaPriceRule(),new ClothingDiscountRule()]);
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
    checkoutService.scan(newScannedProduct!);
    setScannedProducts([...scannedProducts, newScannedProduct!]);
  }

  React.useEffect(() => {
    setTotalPrice(checkoutService.totalPrice);
  },[scannedProducts,setTotalPrice])

  const handleSelectionChange = (event) => {
    const selectedId = event.target.value;
    setSelected(Number(selectedId));
  }

  return (
    <>
      <div className="section-caption">
        <span>Checkout</span>
      </div>
      <div>
      <select onChange={handleSelectionChange} className="product-selection" name="products" id="productsSelectionList">
      {products.map((data) => (
        <option value={data.id}>{data.name}</option>
        ))}
      </select>
      <button className="crud-button" onClick={handleScanClick}>Scan</button>
      </div>
    </>
    
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
      <table className="crud-table" >
        <tr>
          <th className="crud-table__header-cell">Product</th>
          <th className="crud-table__header-cell">Price</th>
        </tr>
      {scannedProducts.map((data) => (
        <tr>
          <td className="crud-table__cell">{data.name}</td>
          <td className="crud-table__cell">{data.price}</td>
        </tr>
      ))}
      </table>
    </div>
    <div className="section-caption">
        Total price: {totalPrice}
    </div>
    </>
    
  );
};


