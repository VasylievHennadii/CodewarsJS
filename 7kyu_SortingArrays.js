// Given two arrays, a1 and a2, sort the elements of a2 based on the first letters of elements in a1.

// Example 1
// var a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino'];
// var a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus'];

// returns ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']
// Example 2
// var a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin'];
// var a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo'];

// returns ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']
// Each element in the arrays will start with a unique letter and there will only be a single match for each element.


// first option
function sortArray(a1, a2) {
    let n = a1.length;
    let res = [];
    for (i = 0; i < n; i++) {
        let resa1 = a1[i];
        for (j = 0; j < n; j++) {
            let resa2 = a2[j];
            if (resa1[0] == resa2[0]) {
                res[i] = a2[j];
            }
        }
    } return res;
}

// second option
const sortArray = (a1, a2) => a1.map( v => a2.find( w => v[0]===w[0] ) );