export function escapePyramidHead(room: string[][]): number {
  // Encontrar posiciones iniciales usando flat()
  const flatRoom = room.flat();
  const pyramidIndex = flatRoom.indexOf('▲');
  const playerIndex = flatRoom.indexOf('T');

  const pyramidPos = [
    Math.floor(pyramidIndex / room[0].length),
    pyramidIndex % room[0].length
  ];
  const playerPos = [
    Math.floor(playerIndex / room[0].length),
    playerIndex % room[0].length
  ];

  // Direcciones posibles: arriba, derecha, abajo, izquierda
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
  ];

  // Cola para BFS y objeto de visitados
  const queue: Array<[number, number, number]> = [
    [pyramidPos[0], pyramidPos[1], 0]
  ];
  const visited: Record<string, boolean> = {
    [`${pyramidPos[0]},${pyramidPos[1]}`]: true
  };

  while (queue.length > 0) {
    const current = queue.shift();
    if (current === undefined) continue;
    const [row, col, steps] = current;

    if (row === playerPos[0] && col === playerPos[1]) return steps;

    directions.forEach(([dx, dy]) => {
      const newRow = row + dx;
      const newCol = col + dy;
      const key = `${newRow},${newCol}`;

      const isInBounds =
        newRow >= 0 &&
        newRow < room.length &&
        newCol >= 0 &&
        newCol < room[0].length;

      const isValidCell =
        isInBounds && room[newRow][newCol] !== '#' && !visited[key];

      if (isValidCell) {
        queue.push([newRow, newCol, steps + 1]);
        visited[key] = true;
      }
    });
  }

  return -1;
}

const room = [
  ['.', '.', '#', '.', '▲'],
  ['#', '.', '#', '.', '#'],
  ['.', '.', '.', '.', '.'],
  ['#', '#', '#', '.', '#'],
  ['T', '.', '.', '.', '.']
];

console.log(escapePyramidHead(room));
