function knightMoves(start, end){
    moves =  [[2, 1], [1, 2],
    [-1, 2], [-2, 1],
    [-2, -1], [-1, -2],
    [1, -2], [2, -1]
  ];

  function isVaild(){
    return x>=0 && x<8 && y>=0 && x<8;
  }

  let queue = [[start,[end]]]
}