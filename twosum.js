function twosum(nums, target){
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            } 
        }
    }
    return [];
}

let result = twosum([5,6,3,1,4,6],12);
console.log(result)