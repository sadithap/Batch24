/**
 * Convert rupiah to other currency
 */

function convertToRupiah(money,type){
    if(type==='yen'){
        return `${money} yen = Rp.${(money/1000)*130120}`;
    }
    if(type==='usd'){
        return `${money} usd = Rp.${(money/100)*1438250}`;
    }
    if(type==='euro'){
        return `${money} euro = Rp.${(money/100)*1600000}`;
    }
    return 'no match type currency';
}

console.log(convertToRupiah(1000,'yen'));//1000 yen  = Rp.130.120
console.log(convertToRupiah(100,'usd'));//100 dollar  = Rp.1.438.250
console.log(convertToRupiah(100,'euro'));//100 dollar  = Rp.1.600.000
console.log(convertToRupiah(100,''));//no match type currency