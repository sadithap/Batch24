const arr=[3,8,9,7,6];

function rotateArray(array,n){
    let result='';
    let tempArray=array;
    let lastIndex;
    for(let i=0;i<n;i++){
        tempArray=array;
        lastIndex=array[array.length-1];
        array.pop();
        array.unshift(lastIndex);
        result+=`${tempArray} => ${array}\n`;
    }

    return result;
}

console.log(rotateArray(arr,3));