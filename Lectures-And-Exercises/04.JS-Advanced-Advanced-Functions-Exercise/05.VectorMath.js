let solution = {
    add : function(point1, addend){
        return [
          point1[0] + addend[0],
          point1[1] + addend[1]
        ];
    },
    multiply : function(point1, multiplicator){
        return [
            point1[0]*multiplicator,
            point1[1]*multiplicator
        ];
    },
    length : function(point1){
        return Math.sqrt(point1[0]**2 + point1[1]**2);
    },
    dot : function(point1, point2){
        return point1[0]*point2[0] + point1[1]*point2[1];
    },
    cross : function(point1, point2) {
        return point1[0] * point2[1] - point1[1] * point2[0];
    }
};

console.log(solution.add([1, 1], [1, 0]));
console.log(solution.multiply([3.5, -2], 2));
console.log(solution.length([3, -4]));
console.log(solution.dot([1, 0], [0, -1]));
console.log(solution.cross([3, 7], [1, 0]));
