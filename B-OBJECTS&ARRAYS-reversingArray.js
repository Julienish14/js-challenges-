//B.OBJECTS & ARRAYS 

function reverseNumber(arraynumb){
    let reversed = [];
    for(let i = arraynumb.length-1; i >=0; i--){
        reversed.push(arraynumb[i]);
    }
    return reversed; 
}
let arr = [5, 6, 3, 9, 0];
console.log(reverseNumber(arr));