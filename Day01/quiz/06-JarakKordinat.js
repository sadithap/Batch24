/**
 * Menghitung jarak kordinat
 * 𝑑 = √(𝑥1 − 𝑥2)^2 + (𝑦1 −𝑦2)^2
 */

function getCordinat(x1,y1,x2,y2) {
   const ix1=parseInt(x1);
   const iy1=parseInt(y1);
   const ix2=parseInt(x2);
   const iy2=parseInt(y2);
    if(isNaN(ix1) ||isNaN(iy1) ||isNaN(ix2) ||isNaN(iy2)){
        return ('input kordinat dalam angka');
   }
   const result=Math.sqrt(Math.pow((ix1 - ix2), 2) + Math.pow((iy1 - iy2), 2));;
   return result;
}

console.log(getCordinat(3,4,-4,-5)); //9
console.log(getCordinat("1","2","-1","-2")); //1
console.log(getCordinat("x","2","-y","-2")); //input kordinat dalam angka
console.log(getCordinat(3.2,4.5,-4.4,-5)); //13.695801445917125