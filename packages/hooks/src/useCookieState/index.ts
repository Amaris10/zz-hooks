/**
 * 用于在组件中管理一个与 Cookie 相关的状态
 */
import Cookies from 'js-cookie';
import { useState } from 'react';
import useMemoizedFn from '../useMemoizedFn';
import { isFunction, isString } from '../utils';

//  State 类型用于表示 cookie 状态
export type State = string | undefined;

// Options 接口用于表示选项参数，包括 defaultValue 和 Cookies 库中的 CookieAttributes。
export interface Options extends Cookies.CookieAttributes {
  defaultValue?: State | (() => State);
}

function useCookieState(cookieKey: string, options: Options = {}) {
  //初始状态是根据 cookieKey 从 Cookie 中获取的值，如果 Cookie 中存储了对应的值，则初始化 state 为该值；
  // 否则，根据传入的 options.defaultValue 决定状态的初始化值。
  const [state, setState] = useState<State>(() => {
    const cookieValue = Cookies.get(cookieKey);
    if (isString(cookieValue)) return cookieValue;
    if (isFunction(options.defaultValue)) {
      return options.defaultValue();
    }
    return options.defaultValue;
  });
  // 使用 useMemoizedFn 创建了一个记忆化后的更新函数 updateState。
  // updateState 函数接受两个参数：newValue 和 newOptions，根据传入的新值和选项更新状态 state，并将对应的值写入到 Cookie 中。
  const updateState = useMemoizedFn(
    (
      newValue: State | ((prevState: State) => State),
      newOptions: Cookies.CookieAttributes = {},
    ) => {
      const { defaultValue, ...restOptions } = { ...options, ...newOptions };
      const value = isFunction(newValue) ? newValue(state) : newValue;

      setState(value);

      if (value === undefined) {
        Cookies.remove(cookieKey);
      } else {
        Cookies.set(cookieKey, value, restOptions);
      }
    },
  );
  // 返回一个元组包含 state 和 updateState，使用 as const 作为 Hook 的返回值。
  return [state, updateState] as const;
}

export default useCookieState;
