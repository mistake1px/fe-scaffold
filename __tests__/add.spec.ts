import add from '../src/index';
import { expect, it } from 'vitest';

it('the result will be 4', () => {
  expect(add(2, 2)).toBe(4);
});
