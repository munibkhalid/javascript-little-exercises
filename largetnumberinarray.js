function largestOfFour(arr){
    var newarr = [];
    var currlargest;
    for(let i = 0;i < arr.length;i++){
        currlargest = 0;
        arr[i].forEach(function(curr){if(curr > currlargest){currlargest = curr}});
        newarr.push(currlargest);
    }
    return newarr;
};

console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));