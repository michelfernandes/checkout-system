import * as React from 'react';
import './App.css';
import { ProductTable } from './components/ProductTable';
import { PromotionalRulesList } from './components/PromotionalRulesList';
import { CheckoutTable, CheckoutScan } from './components/Checkout';

export type Product = {
  id: number,
  name: string,
  type: string,
  price: number
}

function App() {
  
  
  const [products, setProducts] = React.useState<Product[]>([
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
  ]);

  const [totalPrice, setTotalPrice] = React.useState(0);
  const [scannedProducts, setScannedProducts] = React.useState<Product[]>([]);

  return (
    <>
      <div style={{textAlign: 'center'}}>
        <h2>Checkout System</h2>
      </div>
      <div style={{display: 'flex'}}>
        <div className="section-container">
          <ProductTable products={products} setProducts={setProducts}/>
        </div>
        <div className="section-container">
            <PromotionalRulesList/>
        </div>
        <div className="section-container">
          <CheckoutScan products={products} scannedProducts={scannedProducts} setScannedProducts={setScannedProducts} setTotalPrice={setTotalPrice}/>
          <CheckoutTable scannedProducts={scannedProducts} totalPrice={totalPrice} />
        </div>
      </div>
    </>
  );
}

export default App;
