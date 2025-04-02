let word1 = "abc";
let word2 = "def";

let merge = function(word1,word2){
    let result = "";
    let i = 0;
    let j = 0;

    while (i < word1.length || j < word2.length ) {
        if (i < word1.length) {
            result = result + word1[i];
            i = i +1;
        }

        if (j < word2.length) {
            result = result + word2[j];
            j = j +1;
        }
    }

    return result;
}

let result = merge(word1, word2);

console.log(result)