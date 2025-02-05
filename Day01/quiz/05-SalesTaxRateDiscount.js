 /**
  * hitung sales discount plus tax rate
  * function getSalesDiscount
  */

 function getSalesDiscount(price,tax,discount){
    if(typeof price!=='number' && typeof tax!=='number' && typeof discount!=='number'){
        return ('Price, Tax & Discount harus dalam angkaa');
    }
    if(typeof price!=='number'){
        return ('Price harus dalam angka');
    }
    if(typeof tax!=='number'){
        return ('Pajak harus dalam angka');
    }
    if(typeof discount!=='number'){
        return ('Discount harus dalam angka');
    }
    const discountP=discount/100*price;
    const priceAfterDiscount=price-discountP;
    const pajak=tax/100*priceAfterDiscount;
    const totPayment=priceAfterDiscount+pajak;
    return (`Total Sales\t: Rp.${price}\nDIscount (5%)\t: Rp.${discountP}\nPriceAfterDiscount\t: Rp.${priceAfterDiscount}\nPajak (10%)\t: Rp.${pajak}\n----------------------------------\nTotalPayment\t: Rp.${totPayment}`);
 }

console.log(getSalesDiscount("a", 1,5));//Price harus dalam angka
console.log(getSalesDiscount(500, "pajak",5));//Pajak harus dalam angka
console.log(getSalesDiscount("harga", "pajak","discount"));//Price, Tax & Discount harus dalam angkaa
console.log(getSalesDiscount(4500, 10,5));
/**
    Total Sales 	: Rp.4500 
    Discount (5%) 	: Rp.225
    PriceAfterDiscount 	: Rp.4275
    Pajak (10%) 	: Rp.427.5
    ----------------------------------
    TotalPayment 	: Rp.4702.5
 */