//A.BASIC palindrome
//--------CHALLENG TWO: return TRUE or FALSE if it's palindrome

function isItPalindrome(word){
    let regex = /[^A-Za-z0-9]/g;
    word = word.toLowerCase().replace(regex, "");
    let text = word.length; 

    for(let i = 0; i < text/2; i++){
        if(word[i] !== word[text - 1- i]){
            return false;
        }
    }
    return true;
}
let paliYes = 'eye';
let paliNo = 'eyo'
console.log(isItPalindrome(paliYes));
console.log(isItPalindrome(paliNo))