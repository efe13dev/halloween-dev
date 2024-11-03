export function createMagicPotion(
  potions: number[],
  target: number
): number[] | undefined {
  let result: number[] | undefined = undefined;
  // eslint-disable-next-line @typescript-eslint/prefer-destructuring
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
