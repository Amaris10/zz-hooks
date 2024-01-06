// 获取目标元素所在的文档或者shadow DOM
import type { BasicTarget } from '../utils/domTarget';
import { getTargetElement } from '../utils/domTarget';

declare type TargetValue<T> = T | undefined | null;

// 接收一个 BasicTarget 数组作为参数，用于检查是否所有目标元素都在shadow DOM中
const checkIfAllInShadow = (targets: BasicTarget[]): boolean => {
  return targets.every((item) => {
    const targetElement = getTargetElement(item);
    if (!targetElement) return false;
    // @ts-ignore
    if (targetElement.getRootNode() instanceof ShadowRoot) return true;
  });
};

//  获取节点所在的shadow DOM节点
const getShadow = (node: TargetValue<Element>) => {
  if (!node) {
    return document;
  }
  return node.getRootNode();
};

// 接收一个 BasicTarget 或 BasicTarget 数组作为参数，用于获取目标元素所在的文档或者shadow DOM。
const getDocumentOrShadow = (target: BasicTarget | BasicTarget[]): Document | Node => {
  if (!target || !document.getRootNode) {
    return document;
  }

  const targets = Array.isArray(target) ? target : [target];

  if (checkIfAllInShadow(targets)) {
    return getShadow(getTargetElement(targets[0]));
  }

  return document;
};

export default getDocumentOrShadow;
