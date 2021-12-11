import React from 'react';
import './App.css';
import { ProductTable } from './components/ProductTable'
import { PromotionalRulesTable } from './components/PromotionalRulesTable'
import { CheckoutTable, CheckoutScan } from './components/CheckoutTable';

function App() {

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
        <ProductTable />
        <div>
          <PromotionalRulesTable rowData={promotionRules}/>
        </div>
        <CheckoutScan productsList={[
    {
      name: "Curry Sauce",
      price: 1.95,
    },
    {
      name: "Pizza",
      price: 5.99,
    },
    {
      name: "Men’s T-Shirt ",
      price: 25.00,
    }
  ]}/>
        <CheckoutTable/>
      </div>
  );
}

export default App;
