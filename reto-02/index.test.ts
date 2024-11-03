import { describe, it, expect } from 'vitest';
import { battleHorde } from './index';

describe('battleHorde', () => {
  it('debe retornar un string', () => {
    expect(typeof battleHorde('242', '334')).toBe('string');
  });

  it('debe retornar "x" cuando hay un empate de poder', () => {
    expect(battleHorde('444', '282')).toBe('x');
  });

  it('debe retornar poder+"h" cuando ganan los humanos', () => {
    expect(battleHorde('242', '334')).toBe('2h');
  });

  it('debe retornar poder+"z" cuando ganan los zombies', () => {
    expect(battleHorde('444', '333')).toBe('3z');
  });
});
