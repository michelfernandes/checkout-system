import { render } from '@testing-library/react';
import { Product } from '../App';
import { ProductTable } from './ProductTable';

test('Should match Product Table snapshot', () => {
  const productTable = render(<ProductTable products={[]} setProducts={function (products: Product[]): void {
    throw new Error('Function not implemented.');
  } } />);
  expect(productTable).toMatchSnapshot();
});
