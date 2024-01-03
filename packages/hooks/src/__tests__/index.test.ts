import * as zzHooks from '..';

describe('zzHooks', () => {
  test('exports modules should be defined', () => {
    Object.keys(zzHooks).forEach((module) => {
      expect(zzHooks[module]).toBeDefined();
    });
  });
});
