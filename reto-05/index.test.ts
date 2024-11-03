import { describe, it, expect } from 'vitest';
import { escapePyramidHead } from './index';

describe('escapePyramidHead', () => {
  it('debe retornar un numero', () => {
    expect(typeof escapePyramidHead([['▲', 'T']])).toBe('number');
  });

  describe('casos de escape', () => {
    it('debe retornar 1 para el caso más simple', () => {
      expect(escapePyramidHead([['▲', 'T']])).toBe(1);
    });

    it('debe retornar 2 para este caso', () => {
      expect(
        escapePyramidHead([
          ['T', '.', '#', '.'],
          ['.', '.', '.', '.'],
          ['▲', '.', '.', '#'],
          ['.', '#', '#', '#']
        ])
      ).toBe(2);
    });

    it('debe retornar 8 para este caso', () => {
      expect(
        escapePyramidHead([
          ['.', '.', '#', '.', '▲'],
          ['#', '.', '#', '.', '#'],
          ['.', '.', '.', '.', '.'],
          ['#', '#', '#', '.', '#'],
          ['T', '.', '.', '.', '.']
        ])
      ).toBe(8);
    });

    it('debe retornar -1 cuando no hay escape posible', () => {
      expect(
        escapePyramidHead([
          ['#', '#', '#'],
          ['▲', '.', '#'],
          ['.', '#', 'T']
        ])
      ).toBe(-1);
    });
  });
});
