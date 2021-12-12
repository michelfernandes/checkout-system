import { render } from '@testing-library/react';
import { Product } from '../App';
import { CheckoutScan, CheckoutTable } from './Checkout';

test('Should match Checkout Scan snapshot', () => {
  const checkoutScan = render(<CheckoutScan products={[]} scannedProducts={[]} setScannedProducts={function (products: Product[]): void {} } 
  setTotalPrice={function (price: number): void {} } />);
  expect(checkoutScan).toMatchSnapshot();
});

test('Should match Checkout Table snapshot', () => {
  const checkoutTable = render(<CheckoutTable scannedProducts={[]} totalPrice={0} />);
  expect(checkoutTable).toMatchSnapshot();
});
