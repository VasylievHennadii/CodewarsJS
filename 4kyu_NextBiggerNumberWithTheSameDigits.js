// You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// If no bigger number can be composed using those digits, return -1:

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1


// first solution
function nextBigger(n){  
    var chars = n.toString().split('');
    var i = chars.length-1;
    while(i > 0) {
      if (chars[i]>chars[i-1]) break;
      i--;
    }
    if (i == 0) return -1;
    var suf = chars.splice(i).sort();
    var t = chars[chars.length-1];
    for (i = 0; i < suf.length; ++i) {
      if (suf[i] > t) break;
    }
    chars[chars.length-1] = suf[i];
    suf[i] = t;
    var res = chars.concat(suf);
    var num = parseInt(res.join(''));  
    return num;
  }


// second solution
function maxWithDigits(n) {
    return parseInt(n.toString().split("").sort(function(a, b) { return b - a; }).join(""));
}
function nextBigger(n) { 
    let mx = maxWithDigits(n)
    for (i = n + 1; i <= mx; i++) 
        if (maxWithDigits(i) === mx)
        return i;
    return -1;
}


// third solution
var swap = function(str, idx1, idx2) {
    var arr = str.split(""), temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
    return arr.join("");
}

var getPivot = function(str, compare) {
    for(var i = str.length; str > 0; i--) {
        if(str[i] > compare)
            return i;
    }
    return str.length - 1;
}

var nextBigger = function(str) {
    str = str.toString();
    for(var i = str.length-1; i >= 0; i--) {
        if(str[i] > str[i-1]) {
            str = swap(str, i-1, getPivot(str, str[i-1]));
            return parseInt(str.substring(0, i) + str.substring(i).split("").map( a => parseInt(a)).sort( (a, b) => a - b).join(""));
        }
    }
    return -1;
}