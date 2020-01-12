// Wikipedia article on Pascal's Triangle: http://en.wikipedia.org/wiki/Pascal's_triangle
// Write a function that, given a depth (n), returns a single-dimensional array/list representing Pascal's Triangle from the first to the n-th level.
// For example:
// pascalsTriangle(4) == [1, 1, 1, 1, 2, 1, 1, 3, 3, 1]


// first solution
function pascalsTriangle(n) {
    let arr = [], idx = 0;    
    for ( let i = 0; i < n; i++ ) {
      idx = arr.length - i;
      for ( let j = 0; j < i+1; j++ )
        (j === 0 || j === i) ? arr.push(1) : 
        arr.push( arr[ idx+j ] + arr[ idx+j-1 ] );
    }    
    return arr;
}

// second solution
function pascalsTriangle(n) {
    var ret = new Array(n * (n + 1) / 2);
    var row = 1, col = 1;
    for (var i = 0, len = ret.length; i < len; i++) {
      if (col === 1 || col === row) {
        ret[i] = 1;
      }
      else {
        ret[i] = ret[i - row] + ret[i - row + 1];
      }
      if (col === row) {
        col = 1;
        row++;
      }
      else {
        col++;
      }
    }
    return ret;
}