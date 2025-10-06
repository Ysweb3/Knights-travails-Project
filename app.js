function knightMoves(start, end){
    moves =  [[2, 1], [1, 2],
    [-1, 2], [-2, 1],
    [-2, -1], [-1, -2],
    [1, -2], [2, -1]
  ];

  function isValid(x,y){
    return x>=0 && x<8 && y>=0 && x<8;
  }

  let queue = [[start,[end]]]
  let visited = new Set([start.toString()]); 

  while (queue.length > 0) {
    let [current, path] = queue.shift(); // get first item and removes the first element
    let [x, y] = current;//sets the current as a simple array

    for (let [dx, dy] of moves) {
      let next = [x + dx, y + dy];
      if (isValid(next[0], next[1]) && !visited.has(next.toString())) {
        visited.add(next.toString());
        queue.push([next, [...path, next]]);
      }
    }
    //simple if statement to check the pos
    if (x === end[0] && y === end[1]) {
      console.log(`You made it in ${path.length - 1} moves!`);
      path.forEach(p => console.log(p));
      return path;
    }

  }
}

knightMoves([0,0],[5,6])