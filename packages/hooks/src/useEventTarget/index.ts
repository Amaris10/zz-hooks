/**
 * 处理事件目标值变化，
 * 通过给定的选项可以实现对初始值和值的转换设定，
 * 并返回了一个包含当前值和相应操作函数的元组。
 */
import { useCallback, useState } from 'react';
import useLatest from '../useLatest';
import { isFunction } from '../utils';

interface EventTarget<U> {
  target: {
    value: U;
  };
}

export interface Options<T, U> {
  initialValue?: T;
  transformer?: (value: U) => T;
}

function useEventTarget<T, U = T>(options?: Options<T, U>) {
  const { initialValue, transformer } = options || {};
  const [value, setValue] = useState(initialValue);

  const transformerRef = useLatest(transformer);

  const reset = useCallback(() => setValue(initialValue), []);

  const onChange = useCallback((e: EventTarget<U>) => {
    const _value = e.target.value;
    if (isFunction(transformerRef.current)) {
      return setValue(transformerRef.current(_value));
    }
    // no transformer => U and T should be the same
    return setValue(_value as unknown as T);
  }, []);

  return [
    value,
    {
      onChange,
      reset,
    },
  ] as const;
}

export default useEventTarget;
