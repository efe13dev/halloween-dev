export function findSafestPath(dream: number[][]): number {
  const [rows, cols] = [dream.length, dream[0].length];

  // Usamos un solo array para almacenar los resultados
  const dp: number[] = Array<number>(cols).fill(Infinity);

  // Inicializamos con la primera fila
  const [[firstValue]] = dream;
  dp[0] = firstValue;

  for (let j = 1; j < cols; j++) {
    dp[j] = dp[j - 1] + dream[0][j];
  }

  // Procesamos el resto de las filas
  for (let i = 1; i < rows; i++) {
    dp[0] += dream[i][0];

    for (let j = 1; j < cols; j++) {
      dp[j] =
        Math.min(
          dp[j], // valor desde arriba
          dp[j - 1] // valor desde la izquierda
        ) + dream[i][j];
    }
  }

  return dp[cols - 1];
}
