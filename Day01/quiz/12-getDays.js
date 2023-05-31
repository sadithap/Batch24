/** Display year is kabisat and display month */

function getDays(month,year){
    monthNaN=false;
    yearNaN=false;
    if(typeof month!=='number' && isNaN(month)){
        monthNaN=true;
    }
    if(typeof year!=='number' && isNaN(year)){
        yearNaN=true;
    }
    if(monthNaN===true){
        if(yearNaN===true){
            return 'inputan bulan & tahun harus dalam integer';
        }
        return 'inputan bulan harus dalam integer';
    }
    if(yearNaN===true){
        if(monthNaN===true){
            return 'inputan bulan & tahun harus dalam integer';
        }
        return 'inputan tahun harus dalam integer';
    }

    const date=new Date(year,month,0).getDate();
    const kabisat=new Date(year,2,0).getDate();
    const isKabisat= kabisat===29 ? true : false;
    let result=`This month has ${date} days`;
    if(isKabisat===true){
        result+=`, ${year} adalah tahun kabisat`;
    }
    return result;
}

console.log(getDays("a",2021)); //inputan bulan harus dalam integer
console.log(getDays("2","year")); //inputan tahun harus dalam integer
console.log(getDays("m","year"));//inputan bulan & tahun harus dalam integer
console.log(getDays(2,2000)); //This month has 29 days, 2000 adalah tahun kabisat
console.log(getDays(8,2021)); //This month has 31 hari