// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

multiplicationTable = function(size) {
    var C = [];
    var temp = 0;
    var k = 1;
    var n = 1;
    for (var i = 0; i < size; i++) C[i] = [];
    for ( i = 0; i < size; i++) {
        k = i+1;
        for (var j = 0; j < size; j++) {
            n = j + 1;
            temp = k * n;            
            C[i][j] = temp;            
        }
    }    
    return C;
}