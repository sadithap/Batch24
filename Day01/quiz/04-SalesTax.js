/**
 * Hitung pajak dari total penjualan
 * function getSalesTax(price, tax)
 */

function getSalesTax(price, tax) {
    if(typeof price!=='number'){
        return ('Price harus dalam angka');
    }
    else if(typeof tax!=='number'){
        return ('Price & Pajak harus dalam angka');
    }
    return (`Total Sales : Rp.${price}\nPajak : 0.${tax}\nTotalHarga+Pajak : Rp.${price+tax}`);
}

console.log(getSalesTax("a", 1));//Price harus dalam angka
console.log(getSalesTax(500, "pajak"));//Price & Pajak harus dalam angka
console.log(getSalesTax("harga", "pajak"));//Pajak harus dalam angka
console.log(getSalesTax(4500, 5));
/**
 Total Sales : Rp.4500
 Pajak : 0.5
 TotalHarga+Pajak : Rp.4505
 
*/
