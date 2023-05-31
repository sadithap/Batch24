/**
 * hitung detik ke dalam day, hour, minute and seconds
 */


function getPeriodTimes(seconds) {
    
    if(isNaN(seconds)){
        return (`${seconds} is not number`);
    }
    let toInt=parseInt(seconds);
    var days = Math.floor(toInt / (24*60*60));
    toInt %= 24*60*60;

    var hours = Math.floor(toInt / (60*60));
    toInt %= 60*60;

    var minutes = Math.floor(toInt / 60);
    toInt %= 60;
    
    return (`${days} hari ${hours} jam ${minutes} menit ${toInt} detik`);
}

console.log(getPeriodTimes("700005A"));//700005A is not number
console.log(getPeriodTimes("700005"));//8 hari 2 jam 26 menit 45 detik