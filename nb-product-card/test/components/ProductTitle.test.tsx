import { ProductCard, ProductTitle } from '../../src/components';

import React from 'react';
import { product1 } from '../data/products';
import { render } from '@testing-library/react';

describe('ProductTitle', () => {
  test('debe de mostrar el componente correctamente con el titulo personalizado', () => {
    const { container } = render(
      <ProductTitle title="Custom Product" className="custom-class" />
    );
    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar el componente con el nombre del producto', () => {
    const { container } = render(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );
    expect(container).toMatchSnapshot();
  });
});
