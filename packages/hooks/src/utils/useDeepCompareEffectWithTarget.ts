/**
 * 支持深比较依赖数组的 useEffect 版本，使得只有在依赖数组深度变化时才触发 effect。
 * 这对于需要进行深比较的场景非常有用，例如依赖数组中包含复杂对象或数组。
 */
import type { DependencyList, EffectCallback } from 'react';
import { useRef } from 'react';
import type { BasicTarget } from './domTarget';
import useEffectWithTarget from './useEffectWithTarget';
import { depsEqual } from './depsEqual';

const useDeepCompareEffectWithTarget = (
  effect: EffectCallback,
  deps: DependencyList,
  target: BasicTarget<any> | BasicTarget<any>[],
) => {
  const ref = useRef<DependencyList>();
  const signalRef = useRef<number>(0);

  if (!depsEqual(deps, ref.current)) {
    ref.current = deps;
    signalRef.current += 1;
  }

  useEffectWithTarget(effect, [signalRef.current], target);
};

export default useDeepCompareEffectWithTarget;
