/** berapa banyak tahun kabisat antara tahun1 ke tahun2 */

function howManyKabisat(year1,year2){
    let count=0;
    for(let i=year1;i<=year2;i++){
        if(isKabisat(i)){
            count++;
        }
    }

    return `Kabisat : ${count}`;
}

function isKabisat(year){
    const date=new Date(year,2,0);
    if(date.getDate()===29){
        return true;
    }
    return false;
}

console.log(howManyKabisat(1997,2021));