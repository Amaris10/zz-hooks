/**
 *
 * 扩展 React 中的 useEffect 或 useLayoutEffect，使其可以在特定目标元素上添加副作用逻辑。
 *
 *
 * 在内部使用了 useRef 创建了多个引用对象，用于保存上一次的目标元素、依赖数组和卸载函数等状态。
 * 使用 useEffectType（即传入的 useEffect 或 useLayoutEffect 函数）来执行副作用逻辑。
 * 在副作用逻辑中，首先判断是否是首次执行，如果是，则执行效果函数并保存相关状态；如果不是首次执行，则比较目标元素和依赖数组是否发生了变化，如果发生了变化，则先执行卸载函数，然后再执行效果函数并更新状态。
 * 使用 useUnmount 来注册在组件卸载时执行的回调函数，用于清理副作用的相关资源。
 */
import type { DependencyList, EffectCallback, useEffect, useLayoutEffect } from 'react';
import { useRef } from 'react';
import useUnmount from '../useUnmount';
import depsAreSame from './depsAreSame';
import type { BasicTarget } from './domTarget';
import { getTargetElement } from './domTarget';

const createEffectWithTarget = (useEffectType: typeof useEffect | typeof useLayoutEffect) => {
  /**
   *
   * @param effect
   * @param deps
   * @param target target should compare ref.current vs ref.current, dom vs dom, ()=>dom vs ()=>dom
   */
  const useEffectWithTarget = (
    effect: EffectCallback,
    deps: DependencyList,
    target: BasicTarget<any> | BasicTarget<any>[],
  ) => {
    const hasInitRef = useRef(false);

    const lastElementRef = useRef<(Element | null)[]>([]);
    const lastDepsRef = useRef<DependencyList>([]);

    const unLoadRef = useRef<any>();

    useEffectType(() => {
      const targets = Array.isArray(target) ? target : [target];
      const els = targets.map((item) => getTargetElement(item));

      // init run
      if (!hasInitRef.current) {
        hasInitRef.current = true;
        lastElementRef.current = els;
        lastDepsRef.current = deps;

        unLoadRef.current = effect();
        return;
      }

      if (
        els.length !== lastElementRef.current.length ||
        !depsAreSame(els, lastElementRef.current) ||
        !depsAreSame(deps, lastDepsRef.current)
      ) {
        unLoadRef.current?.();

        lastElementRef.current = els;
        lastDepsRef.current = deps;
        unLoadRef.current = effect();
      }
    });

    useUnmount(() => {
      unLoadRef.current?.();
      // for react-refresh
      hasInitRef.current = false;
    });
  };

  return useEffectWithTarget;
};

export default createEffectWithTarget;
