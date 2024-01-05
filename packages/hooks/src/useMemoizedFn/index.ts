/**
 * 创建一个具有记忆化性质的函数，这样可以在组件中多次使用同一个函数实例，
 * 从而提高性能，避免不必要的函数重新创建。
 */

import { useMemo, useRef } from 'react';
import { isFunction } from '../utils';
import isDev from '../utils/isDev';

// 定义类型别名，任意参数的函数
type noop = (this: any, ...args: any[]) => any;

type PickFunction<T extends noop> = (
  this: ThisParameterType<T>,
  ...args: Parameters<T>
) => ReturnType<T>;

function useMemoizedFn<T extends noop>(fn: T) {
  if (isDev) {
    if (!isFunction(fn)) {
      console.error(`useMemoizedFn expected parameter is a function, got ${typeof fn}`);
    }
  }
  // 存储传入函数
  const fnRef = useRef<T>(fn);

  fnRef.current = useMemo(() => fn, [fn]);

  // 存储记忆化后的函数
  const memoizedFn = useRef<PickFunction<T>>();
  if (!memoizedFn.current) {
    memoizedFn.current = function (this, ...args) {
      return fnRef.current.apply(this, args);
    };
  }

  return memoizedFn.current as T;
}

export default useMemoizedFn;
