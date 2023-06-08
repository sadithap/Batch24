import { Cars1,Koenigsegg,Hennessey } from "./Inheritance";
import { Competition } from "./Polymorphism";

interface Lamborghini {
    model : string;
    setBrand(brand:string):void
    getSpeed():number
}

class Aventador implements Lamborghini {
    brand: string = 'Lamborghini';
    model: string;
    speed: number;
    price: number;

    constructor(model:string,speed:number,price:number){
        this.model = model;
        this.speed = speed;
        this.price = price
    }

    setBrand(brand: string): void {
        this.brand = brand
    }
    getSpeed(): number {
        return this.speed
    }
    getBrand(brand: string): string {
        return this.brand
    }
    setSpeed(speed:number):void {
        this.speed = speed
    }
    setPrice(price:number):void {
        this.price = price
    }
    getPrice():string {
        return `${this.price}`
    }
    move():void {
        console.log(`${this.getName()} berjalan dengan kecepatan ${this.getSpeed()} mph`);
    }

    getName():string {
        return `${this.brand} ${this.model}`
    }
}

const aventador = new Aventador('Aventador SVJ Roadster',275,6500000);
const venom = new Hennessey('Hennessey',270,1200000,'Venom GT')
const agera = new Koenigsegg('Koenigsegg',273,2500000,'Agera RS')

let cars:Cars1[] = [agera,venom,aventador]

const coompetition = new Competition(cars,1200);
coompetition.getCars();
coompetition.race();
console.log(coompetition.winner());