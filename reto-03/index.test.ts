import { describe, it, expect } from 'vitest';
import { findSafestPath } from './index';

describe('findSafestPath', () => {
  it('debe retornar un número', () => {
    expect(
      typeof findSafestPath([
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1]
      ])
    ).toBe('number');
  });

  it.each([
    [
      [
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1]
      ],
      7
    ],
    [
      [
        [1, 1, 1],
        [2, 2, 2],
        [1, 1, 1]
      ],
      6
    ],
    [
      [
        [5, 1, 1],
        [1, 1, 1],
        [1, 1, 5]
      ],
      13
    ],
    [
      [
        [1, 9, 1],
        [2, 9, 1],
        [2, 1, 1]
      ],
      7
    ]
  ])(
    'debe retornar el camino más seguro en la matriz dada',
    (matrix, expected) => {
      expect(findSafestPath(matrix)).toBe(expected);
    }
  );
});
