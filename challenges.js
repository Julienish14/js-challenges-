//A. BASIC
//----------CHALLENG Number One.
    //a js function that return the prime number out of array of number
/*  function whichIsPrime(arr){
        function findPrime(number) {
            if (number <= 1) {
            return false;
            } else {
            for (let i = 2; i < number; i++) {
                if (number % i == 0) {
                return false;
                }
            }
            return true;
            }
        }
        let newarray = [];
        for(let i = 0; i < arr.length; i++){
            if(findPrime(arr[i])) newarray.push(arr[i]);
        }
        return newarray;
    }
alert("js challenges A.BASIC Number One.");
  let array = prompt('Enter an number in array');
  alert("This is the Prime number : " +whichIsPrime(array));
// console.log('The number is prime : ' +whichIsPrime([9, 2, 4, 6, 7, 11]));
*/

//--------CHALLENG TWO: return TRUE or FALSE if it's palindrome
/*
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
alert("js challenges A.Basic Number Two.");
let x = prompt('enter any word :');
alert("IS THIS WORD : \"" +x+ " \" A PALINDROME ? "+isItPalindrome(x));
  
*/
//B. ARRAYS AND OBJECTS
//Challenge B.1
/*
 const primeArray= [1,2,3,4,5,6,7,8,9];

let primeSort = (array) => array.filter( el => el % 2 !== 0);
// console.log(primeSort(primeArray));
alert('js challenge B.ARRAYS AND OBJECTS number One')
let prim = prompt('Enter numbers of your array : ');
alert(primeSort(prim))
*/
//Challenge Number Three: return the reversed array
/*
function reverseNumber(number){
    let reversed = [];
    for(let i = number.length-1; i >=0; i--){
        reversed.push(number[i]);
    }
    return reversed; 
}
alert("Js Challenges B.ARRAYS AND OBJECTS Number Three.");
let y = prompt("Enter numbers of your array : ");
alert("THE REVERSED VERSION OF THIS ARRAY IS : " +reverseNumber(y))
*/

//Challenge Number Four: 