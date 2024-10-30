function createMagicPotion(
  potions: number[],
  target: number
): number[] | undefined {
  let result: number[] | undefined = undefined;
  let minJ = potions.length;

  for (let i = 0; i < potions.length - 1; i++) {
    for (let j = i + 1; j < potions.length; j++) {
      if (potions[i] + potions[j] === target && j < minJ) {
        result = [i, j];
        minJ = j;
      }
    }
  }
  return result;
}

console.log(createMagicPotion([4, 5, 6, 2], 8)); // [2, 3]
console.log(createMagicPotion([1, 2, 3, 4], 9)); // undefined
console.log(createMagicPotion([10, 5, 2, 3, 7, 5], 10)); // [3, 4]
