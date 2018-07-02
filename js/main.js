

const buildRectangles = function ( squareSize ) {
  rectangles = {}
  // eg square size = 4 x 4
  for ( let i = 1; i <= squareSize; i++ ) {
    for ( let j = 1; j <= squareSize; j++ ) {
      if (i === j) {
        continue
      } else {
        let area = i * j
        if ( rectangles['area' + area] === undefined ) {
          rectangles['area' + area] = {
            x: i,
            y: j
          }
        }
      }
    }
  }

  return rectangles;
}

const fillSquare = function ( squareSize, rectangles ) {
    const squareArea = squareSize * squareSize;
    const rectangleAreas = Object.keys( rectangles );
    const squareGrid = [];

    for (let y = 0; y < squareSize; y++ ){
      squareGrid[y] = [];
      for (let x = 0; x < squareSize; x++ ) {
        squareGrid[y][x] = 0;
      }
    }

    // now find fewest possible rectancles that would fill the grid
    
}
