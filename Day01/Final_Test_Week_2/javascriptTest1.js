function totalLompat(x,y,k){
    let count=0;
    while(x<=y){
        count++;
        x+=k;
    }

    return `output : ${count}`;
}

console.log(totalLompat(10,85,30));