/**
 * hitung orang yg memiliki berat badan paling tinggi
 */

function getHeavier(w1,wg2,wg3){
    let currentWeight=0;
    if(w1>currentWeight){
        currentWeight=w1;
    }
    if(wg2>currentWeight){
        currentWeight=wg2;
    }
    if(wg3>currentWeight){
        currentWeight=wg3;
    }
    return currentWeight;
}

console.log(getHeavier(12,45,70));//70