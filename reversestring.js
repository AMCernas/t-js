function reversestring(iString){
let rString = "";

for (let i = iString.length - 1; i >= 0; i--) {
    rString = rString + iString[i];
}
return rString;
}

// let result = reversestring("hello");
// console.log(result)


function reverseString(stringInput){
    let reverseString = "";

    for (let i = stringInput.length - 1; i >= 0; i--) {
        reverseString = reverseString + stringInput[i]
        
    }
    return reverseString;
}

let result = reverseString("zorra")

console.log(result)