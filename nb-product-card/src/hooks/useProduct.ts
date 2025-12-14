import { InitialValues, Product, onChangeArgs } from '../interfaces/interfaces';
import { useEffect, useRef, useState } from 'react';

interface useProductArgs {
  initialValues?: InitialValues;
  product: Product;
  value?: number;
  onChange?: (args: onChangeArgs) => void;
}

export const useProduct = ({
  initialValues,
  product,
  value = 0,
  onChange,
}: useProductArgs) => {
  const [counter, setCounter] = useState(initialValues?.count || value);
  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    const newValue = Math.min(
      Math.max(counter + value, 0),
      initialValues?.maxCount || Infinity
    );
    setCounter(newValue);

    onChange && onChange({ product, count: newValue });
  };

  const reset = () => setCounter(initialValues?.count || value);

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(initialValues?.count || value);
  }, [value, initialValues?.count]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  const maxCount = initialValues?.maxCount || Infinity;
  return {
    counter,
    isMaxCountReached: maxCount === counter,
    maxCount,

    increaseBy,
    reset,
  };
};
