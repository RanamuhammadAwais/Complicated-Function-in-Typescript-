"use strict";
function letterFinder(word, match) {
    let condition1 = typeof (word) == 'string' && word.length > 2;
    let conditio2 = typeof (match) == 'string' && match.length == 1;
    if (condition1 == true && conditio2 == true) {
        for (let i = 0; i < word.length; i++) {
            if (word[i] == match) {
                //if the current character at position i in the word is equal to the match
                console.log('Found the', match, 'at', i);
            }
            else {
                console.log('---No match found at', i);
            }
        }
    }
    else {
        console.log("Please pass correct arguments to the function.");
    }
}
console.log(letterFinder("cat is an animal , which is beautiful", "c"));
