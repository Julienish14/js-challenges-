//A. BASIC
//----------CHALLENG Number One.
    //a js function that return the prime number out of array of number
function whichIsPrime(arr){
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
let array = [2, 3, 5, 1, 4, 11, 8];
console.log(" The prime number are : " +whichIsPrime(array));