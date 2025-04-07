function findthemissingnumber(numbers){

    n = numbers.length + 1;
    let expected = n * (n + 1)/2;
    actualSum = 0;
    for (let index = 0; index < numbers.length; index++) {
        actualSum = actualSum + numbers[index]   
    }
    let missingNumber = expected - actualSum;
    return missingNumber;
}

const testCases = [
    { arr: [1, 2, 4, 5, 6],  expected: 3 },
    { arr: [3, 7, 1, 2, 8, 4, 5],  expected: 6 },
    { arr: [1, 2, 3, 4, 6], expected: 5 },
    { arr: [2], expected: 1 },
    { arr: [1, 3], expected: 2 }
];

testCases.forEach(({ arr, expected }, index) => {
    const result = findthemissingnumber(arr);
    console.log(`Test ${index + 1}: Expected ${expected}, Got ${result} - ${result === expected ? '✅' : '❌'}`);
});