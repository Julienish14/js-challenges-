// palindrome string is a string that reads the same forward and backward
// for example eye or Racecar
function palindrome(str){
    let string=str.toLowerCase().split('');
    return string.join('')===string.reverse().join('')
}
console.log(palindrome("eye"))
