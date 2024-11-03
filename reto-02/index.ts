function battleHorde(zombies: string, humans: string): string {
  if (zombies.length !== humans.length) {
    throw new Error('Las cadenas deben tener la misma longitud');
  }

  let difference = 0;

  for (let i = 0; i < zombies.length; i++) {
    difference += parseInt(zombies[i]) - parseInt(humans[i]);
  }

  if (difference === 0) return 'x';
  return difference > 0 ? `${difference}z` : `${-difference}h`;
}

// Pruebas
console.log(battleHorde('242', '334')); // -> "2h"
console.log(battleHorde('4598', '7682')); // -> "3z"
