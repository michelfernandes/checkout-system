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
      <div>
        <ProductTable products={products} setProducts={setProducts}/>
        <div>
          <PromotionalRulesTable rowData={promotionRules}/>
        </div>
        <CheckoutScan products={products}/>
        <CheckoutTable/>
      </div>
  );
}

export default App;
