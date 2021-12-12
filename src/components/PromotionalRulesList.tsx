import * as React from "react";

export const PromotionalRulesList: React.FC = () => {

  const promotionRules = [
    {
      active: true,
      rule: "If you buy 2 or more pizzas, the price for each drops to €3.99"
    },
    {
      active: true,
      rule: "If you buy 2 or more 'Clothing' type products, you get €5.00 discount"
    }
  ]

  return (
    <>
    <div className="section-caption">
      <span>Promotional Rules</span>
    </div>
    <ul>
    {promotionRules.map((data,index) => (
        <li key={index}>{data.rule}</li>
    ))}
    
  </ul>
  </>
  );
};
