class Cars {
    private brand: string;
    private speed: number;
    private price: number;

    constructor (brand:string, speed:number, price: number) {
        this.brand = brand;
        this.price = price;
        this.speed = speed;
    }

    setBrand(brand:string):void {
        this.brand = brand
    }
    setSpeed(speed:number):void {
        this.speed = speed
    }
    setPrice(price:number):void {
        this.price = price
    }
    getBrand(): string {
    return this.brand;
    };
    getSpeed(): number {
    return this.speed;
    }
    getPrice(): string {
    return `${ this.price }`;
    }
    getName(): string {
    return this.brand;
    };
    move(): void {
    console.log(`${ this.brand } berjalan
    dengan kencang`);
    };
    }

const ferraris = new Cars('ferrari',220,1000000);

ferraris.setSpeed(1000)
console.log(ferraris.getSpeed());
ferraris.move();
console.log(ferraris.getPrice());