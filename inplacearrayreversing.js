let arr=[]
function reverseArray(array){
    for(let i=array.length-1;i>=0;i--){
        arr.push(array[i])
    }
    return arr
    
}
console.log(reverseArray([1,2,3,4,5,6,7,8,9,10]))