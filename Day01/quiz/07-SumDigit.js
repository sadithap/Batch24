/**
 * input 4 digit integer lalu hitung jumlahnya
 */

function sumDigit(n){
    toInt=parseInt(n);
    if(isNaN(toInt)){
        return (`${n} is not number, try again...`);
    }
    if(toInt>=10000){
        return (`${n} harus lebih kecil dari 10000`);
    }
    toString=String(toInt);
    digit=toString.split("");
    total=0;
    for(let i=0;i<digit.length;i++){
        total+=parseInt(digit[i]);
    }
    return total;
}

console.log(sumDigit(1234)); //10
console.log(sumDigit("1234"));//10
console.log(sumDigit(12345));//12345 harus lebih kecil dari 10000
console.log(sumDigit("a123"));//a123 is not number, try again...