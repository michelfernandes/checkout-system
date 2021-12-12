import * as React from "react";

export const PromotionalRulesTable: React.FC = () => {

  const promotionRules = [
    {
      active: true,
      rule: "If you buy 2 or more pizzas, the price for each drops to €3.99"
    },
    {
      active: true,
      rule: "If you buy 2 or more Clothing type products, you get €5.00 discount"
    }
  ]

  return (
    <table>
    <tr>
      <th>Active</th>
      <th>Promotional Rule</th>
    </tr>
    {promotionRules.map((data) => (
      <tr>
        <td><input type="checkbox" defaultChecked={data.active}/></td>
        <td>{data.rule}</td>
      </tr>
    ))}
    
  </table>
  );
};
