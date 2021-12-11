import React from 'react';
import './App.css';
import { ProductTable } from './components/ProductTable'
import { PromotionalRulesTable } from './components/PromotionalRulesTable'

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
      </div>
  );
}

export default App;
