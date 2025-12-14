import 'react-app-polyfill/ie11';

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../.';

const product = {
  id: '1',
  title: 'Coffee Mug - Card! ',
  img: './coffee-mug.png',
};

const App = () => {
  return (
    <ProductCard product={product} initialValues={{ count: 4, maxCount: 10 }}>
      {({ count, isMaxCountReached, maxCount, increaseBy, reset }) => (
        <>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </>
      )}
    </ProductCard>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
