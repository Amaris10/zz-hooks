/**
 * 在函数组件中创建一个类似于 Redux 中的 getState 方法的东西。
 */
import type { Dispatch, SetStateAction } from 'react';
import { useState, useRef, useCallback } from 'react';

type GetStateAction<S> = () => S;

// 接受一个初始状态，并返回元组形式的结果，包含当前状态、可以改变状态的方法和获取当前状态的方法。
function useGetState<S>(
  initialState: S | (() => S),
): [S, Dispatch<SetStateAction<S>>, GetStateAction<S>];

// 不接受任何参数，返回一个可选类型或未定义的状态值、可以改变状态的方法和获取当前状态的方法。
function useGetState<S = undefined>(): [
  S | undefined,
  Dispatch<SetStateAction<S | undefined>>,
  GetStateAction<S | undefined>,
];

// 接受一个初始状态 (initialState)，该状态可以是任意类型的值或者一个返回状态的函数。
function useGetState<S>(initialState?: S) {
  const [state, setState] = useState(initialState);
  const stateRef = useRef(state);
  stateRef.current = state;

  const getState = useCallback(() => stateRef.current, []);

  // 返回了一个使用 setState 来改变状态的方法和一个用来获取状态当前值的方法。
  return [state, setState, getState];
}

export default useGetState;
