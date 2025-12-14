import React, { CSSProperties, useCallback, useContext } from 'react';

import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

export interface Props {
  style?: CSSProperties;
  className?: string;
}

export const ProductButtons = ({ className, style }: Props) => {
  const { counter, maxCount, increaseBy } = useContext(ProductContext);

  const isMaxReached = useCallback(() => counter === maxCount, [
    counter,
    maxCount,
  ]);

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
        onClick={() => increaseBy(1)}
      >
        +
      </button>
    </div>
  );
};
