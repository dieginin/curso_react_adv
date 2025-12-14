import {
  InitialValues,
  Product,
  ProductCardHandlers,
  ProductContextProps,
  onChangeArgs,
} from '../interfaces/interfaces';
import React, { CSSProperties, JSX, createContext } from 'react';

import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  // children?: ReactElement | ReactElement[]
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  initialValues?: InitialValues;
  product: Product;
  style?: CSSProperties;
  value?: number;
  onChange?: (args: onChangeArgs) => void;
}

export const ProductCard = ({
  product,
  children,
  className,
  initialValues,
  style,
  value,
  onChange,
}: Props) => {
  const {
    counter,
    isMaxCountReached,
    maxCount,
    increaseBy,
    reset,
  } = useProduct({
    initialValues,
    product,
    value,
    onChange,
  });

  return (
    <Provider
      value={{
        counter,
        maxCount,
        product,
        increaseBy,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount,
          product,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};
