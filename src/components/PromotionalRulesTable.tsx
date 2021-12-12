import * as React from "react";

type PromotionRule = {
    active: boolean,
    rule: string
}

export interface PromotionalRulesTableProps {
  rowData: PromotionRule[];
}
export const PromotionalRulesTable: React.FC<PromotionalRulesTableProps> = ({
    rowData,
}) => {

  return (
    <table>
    <tr>
      <th>Active</th>
      <th>Promotional Rule</th>
    </tr>
    {rowData.map((data) => (
      <tr>
        <td><input type="checkbox" defaultChecked={data.active}/></td>
        <td>{data.rule}</td>
      </tr>
    ))}
    
  </table>
  );
};
