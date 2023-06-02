
function showPrimeNumber(n){
    let prime=[];
    for(let i=0;i<=n;i++){
        if(isPrime(i)){
            prime.push(i);
        }
    }

    let listPrime='';
    let count=0;
    for(let i=0;i<prime.length;i++){
        listPrime+=prime[i]+'\t';
        count++;
        if(count===5){
            listPrime+='\n';
            count=0;
        }
    }
    return listPrime;
}

function isPrime(n){
    if (n < 2) {
        return false;
    }
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
          return false;
        }
    }
    
    return true;
}

console.log(showPrimeNumber(100));
/**

2	3	5	7	11
13	17	19	23	29
31	37	41	43	47
53	59	61	67	71
73	79	83	89	97

 */


