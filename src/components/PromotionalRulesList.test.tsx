import { render } from '@testing-library/react';
import { PromotionalRulesList } from './PromotionalRulesList';

test('Should match Promotional Rules snapshot', () => {
  const promotionalRulesList = render(<PromotionalRulesList />);
  expect(promotionalRulesList).toMatchSnapshot();
});
