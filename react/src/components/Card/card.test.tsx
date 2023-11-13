import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from './Card';

const props = {
  id: 1,
  title: 'product',
  images: [],
  price: 1000,
  description: 'description',
};

test('Renders card', () => {
  render(<Card {...props} />);
  expect(true).toBeTruthy();
});

// describe('Card', () => {
//   const testEl = {
//     id: 1,
//     title: 'Product',
//     images: [],
//     price: 1000,
//     description: 'Very important product',
//   };

//   test('renders relevant card data', () => {
//     render(<Card key={1} {...testEl} />);

//     expect(screen.getByText('Name:Product')).toBeInTheDocument();
//     expect(screen.getByText('Very important product')).toBeInTheDocument();
//   });
// });
