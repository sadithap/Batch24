/** ubah value string ke date 
 *  gunakan split
 *  inputan s = bulan/hari/tahun
*/


function strToDate(s){
    const dateSplited=s.split('/');

    const year=parseInt(dateSplited[2]);
    const month=parseInt(dateSplited[0])-1;
    const day=parseInt(dateSplited[1]);

    const date=new Date(year,month,day);

    if(isNaN(date)){
        return `${s} bad format date`;
    }

    return date;
}

console.log(strToDate('12/30/2021'));//Thu Dec 30 2021 00:00:00 GMT+0700 (Western Indonesia Time)
console.log(strToDate('12/aa/bb')); //12/aa/bb bad format date