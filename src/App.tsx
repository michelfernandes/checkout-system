import * as React from 'react';
import './App.css';
import { ProductTable } from './components/ProductTable';
import { PromotionalRulesTable } from './components/PromotionalRulesTable';
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

  const promotionRules = [
    {
      active: true,
      rule: "If you buy 3 pizza, one is free"
    },
    {
      active: false,
      rule: "If you spend over 30EUR you get 10% off the total price"
    }
  ]

  return (
    <>
      <div style={{textAlign: 'center'}}>
        <h2>Checkout System</h2>
      </div>
      <div style={{display: 'flex'}}>
        <div style={{width:'33%'}}>
          <ProductTable products={products} setProducts={setProducts}/>
        </div>
        <div style={{width:'33%'}}>
            <PromotionalRulesTable rowData={promotionRules}/>
        </div>
        <div style={{width:'33%'}}>
          <CheckoutScan products={products} scannedProducts={scannedProducts} setScannedProducts={setScannedProducts} setTotalPrice={setTotalPrice}/>
          <CheckoutTable scannedProducts={scannedProducts} totalPrice={totalPrice} />
        </div>
      </div>
    </>
  );
}

export default App;
