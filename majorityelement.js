function majorityElement(nums) {
    let count = 0;
    let n;

    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            n = nums[i];
            count = 1;
        }else if (nums[i] === n){
            count++;
        }else{
            count--;
        }
    }
    return n;
}

console.log(majorityElement([2, 2, 1, 1, 2, 2, 2]));