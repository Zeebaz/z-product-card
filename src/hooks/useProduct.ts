import { useEffect, useRef, useState } from "react";
import { InitialValues, onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({
  onChange,
  product,
  initialValues,
  value = 0,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef<boolean>(false);

  console.log(initialValues?.count);
  console.log({ value });

  /* 
    - Dejar en ese orden los useEffect, ya que es el orden de compilacion
    - Es necesario el cleanup para controlar en montado y desmontado inicial
      por el strinct mode React
  */
  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const increaseBy = (value: number) => {
    /* if (initialValues?.maxCount)
      if (counter + value > initialValues.maxCount) {
        return;
      } */

    let newValue = Math.max(counter + value, 0);

    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }

    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  return {
    counter,
    isMaxCountReached:
      !!initialValues?.maxCount && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,
    increaseBy,
    reset,
  };
};
