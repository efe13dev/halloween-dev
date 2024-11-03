import { describe, it, expect } from 'vitest';
import { findTheKiller } from './index';

describe('findTheKiller', () => {
  it('debe retornar un string', () => {
    expect(
      typeof findTheKiller('~q~r~s~t~u~v~w~x~y~z$', [
        'John',
        'Jane',
        'Mary',
        'Bob'
      ])
    ).toBe('string');
  });
  it('debe retornar el nombre del asesino', () => {
    expect(
      findTheKiller('d~~~~~a', [
        'Dracula',
        'Freddy Krueger',
        'Jason Voorhees',
        'Michael Myers'
      ])
    ).toBe('Dracula');
  });
  it('debe retornar un string vacio si no hay coincidencia', () => {
    expect(findTheKiller('~r~dd$', ['Freddy', 'Freddier', 'Fredderic'])).toBe(
      ''
    );
  });
  it('debe retornar todos los nombres si no hay tildes', () => {
    expect(
      findTheKiller('~~~~~~', ['Pennywise', 'Leatherface', 'Agatha'])
    ).toBe('Pennywise,Leatherface,Agatha');
  });
  it('debe retornar el unico nombre que coincide en la longitud', () => {
    expect(
      findTheKiller('~~~~~~$', ['Pennywise', 'Leatherface', 'Agatha'])
    ).toBe('Agatha');
  });
});
