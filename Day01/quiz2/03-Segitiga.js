/** buat segitiga  */ 
let index=5;
    
for (let i = 0; i < 6; i++) {
    let output=' ';
    for(let j=1;j<index;j++){
        output+=j+' ';
    }
    index--;
    console.log(output);
} 
// output 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 

console.log();
index=5;
for (let i = 0; i < 6 ; i++) {
    let output=' ';
    for(let j=index;j>0;j--){
        output+=j+' ';
    }
    index--;
    console.log(output);
}  

// output
// 5 4 3 2 1  
// 4 3 2 1  
// 3 2 1
// 2 1  
// 1  

