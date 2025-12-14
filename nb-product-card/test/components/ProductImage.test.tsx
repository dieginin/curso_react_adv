import ProductCard, { ProductImage } from '../../src/components';

import React from 'react';
import { product2 } from '../data/products';
import { render } from '@testing-library/react';

describe('ProductImage', () => {
  test('debe de mostrar el componente correctamente con la imagen personalizada', () => {
    const { container } = render(<ProductImage img="custom-image" />);
    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar el componente con la imagen del producto', () => {
    const { container } = render(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );
    expect(container).toMatchSnapshot();
  });
});
