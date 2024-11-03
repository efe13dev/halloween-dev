import { describe, it, expect } from 'vitest';
import { createMagicPotion } from './index';

describe('createMagicPotion', () => {
  it('debe retornar un array', () => {
    expect(Array.isArray(createMagicPotion([1, 2, 3, 4], 5))).toBe(true);
  });

  it('debe encontrar dos pociones que sumen el objetivo', () => {
    expect(createMagicPotion([4, 5, 6, 2], 8)).toEqual([2, 3]);
  });

  it('debe retornar undefined cuando no hay combinación posible', () => {
    expect(createMagicPotion([1, 2, 3, 4], 9)).toBeUndefined();
  });

  it('debe encontrar la combinación con el índice j más pequeño', () => {
    expect(createMagicPotion([10, 5, 2, 3, 7, 5], 10)).toEqual([3, 4]);
  });
});
