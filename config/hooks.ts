export const menus = [
  {
    title: 'Effect',
    children: ['useDebounceFn', 'useThrottleFn', 'useUpdateEffect'],
  },
  {
    title: 'DOM',
    children: [
      'useTitle',
      'useClickAway',
      'useDocumentVisibility',
      'useDrop',
      'useEventListener',
      'useEventTarget',
      'useFullscreen',
      'useHover',
      'useInViewport',
      'useLongPress',
      'useMouse',
      'useKeyPress',
      // 'useMutationObserver',
      // 'useResponsive',
      // 'useScroll',
      // 'useSize',
    ],
  },
  {
    title: '生命周期',
    children: ['useUnmount'],
  },
  {
    title: '状态',
    children: [
      'useBoolean',
      'useToggle',
      'useDebounce',
      'useCookieState',
      'useGetState',
      'useLocalStorageState',
      'useSessionStorageState',
      'useMap',
      'useSet',
      'usePrevious',
      'useResetState',
      'useRafState',
    ],
  },
  {
    title: '进阶',
    children: ['useLatest', 'useMemoizedFn'],
  },
  {
    title: '请求',
    children: [],
  },
];
