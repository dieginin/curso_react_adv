import React, { CSSProperties, useContext } from 'react';

import { ProductContext } from './ProductCard';
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export interface Props {
  style?: CSSProperties;
  className?: string;
  img?: string;
}

export const ProductImage = ({ img, className, style }: Props) => {
  const { product } = useContext(ProductContext);

  const imageSource = img ? img : product.img ? product.img : noImage;

  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={imageSource}
      alt="Product"
      style={style}
    />
  );
};
