function validParentheses(s) {
    let stack = [];
    let array = s;
    let isValid = true;
    let map = {')': '(', '}': '{', ']': '['}


    // long approach
    // array.split('').forEach(c => {
    //     if (c === '(' || c === '{' || c=== '[') {
    //         stack.push(c)   
    //     }
    //     else{
    //         if (stack.length === 0) {
    //             isValid = false;
    //             return;
    //         }
    //         let top = stack.pop()
    //         if (c === ')' && top !== '(') {
    //             isValid = false;
    //         }
    //         else if (c === '}' & top !== '{'){
    //             isValid = false;
    //         }
    //         else if (c === ']' & top !== '['){
    //             isValid = false;
    //         }
    //     }
    // });
    // return isValid && stack.length === 0;

    for (let c of array) {
        if (c in map) {
            if (stack.pop() !== map[c]) return false;
        }else{
            stack.push(c);
        }
    }

    return stack.length === 0;
}

const testCases = [
    "()",      // true
    "()[]{}",  // true
    "(]",      // false
    "([)]",    // false
    "{[]}",    // true
    "(((((())))))",  // true
    "(((((((())))))", // false
];

testCases.forEach(str => {
    console.log(`isValid("${str}") → ${validParentheses(str)}`);
});

