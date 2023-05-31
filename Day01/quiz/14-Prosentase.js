/** Buat program untuk menampilkan prosentasi dari income*/

function getProsentase(start,end){
    if(isNaN(start) || isNaN(end)){
        return `${start} or ${end} harus dalam angka`;
    }
    const selisih=end-start;
    const persen=Math.floor(selisih/start*100);

    if(selisih<0){
        return `Total penurunan income ${persen}%`;
    }
    return `Total kenaikan income ${persen}%`;
}

console.log(getProsentase("abc","bca"));//abc or bca harus dalam angka
console.log(getProsentase(600000.00,750000.00));//Total kenaikan income 25%
console.log(getProsentase(750000.00,650000.00));//Total penurunan income -14%


