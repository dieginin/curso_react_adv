import { fireEvent, render } from '@testing-library/react';

import { ProductCard } from '../../src/components';
import React from 'react';
import { product1 } from '../data/products';

describe('ProductCard', () => {
  test('debe de mostrar el componente correctamente', () => {
    const { container } = render(
      <ProductCard product={product1}>{() => <h1>ProductCard</h1>}</ProductCard>
    );
    expect(container).toMatchSnapshot();
  });

  test('debe incrementar el contador', () => {
    const { container } = render(
      <ProductCard product={product1}>
        {({ count, increaseBy }) => (
          <>
            <h1>ProductCard</h1>
            <span>{count}</span>
            <button onClick={() => increaseBy(1)} />
          </>
        )}
      </ProductCard>
    );

    expect(container).toMatchSnapshot();

    const counter = container.getElementsByTagName('span')[0];
    const button = container.getElementsByTagName('button')[0];

    fireEvent.click(button);
    expect(counter.innerHTML).toBe('1');
  });
});
