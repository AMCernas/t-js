function containsDuplicate(nums) {
    let seen = new Set();
    return nums.some(num => {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
        return false;
    });
}


function containsDuplicate2(nums){
    let seen = new Set();
    for (const num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
}

console.log(containsDuplicate2([5, 6, 7, 8, 9, 6]));
