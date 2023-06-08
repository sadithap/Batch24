export class Vehicle{
    protected vehicleType: string;
    protected year: number;
    protected price: number;
    protected tax: number;
    protected seat: number;
    protected transactionDate: string;
    protected total: number;
    
    constructor(vehicleType: string,year: number,price: number,seat: number,transactionDate: string,total:number){
        this.vehicleType=vehicleType;
        this.year=year;
        this.price=price;
        this.tax=(price*0.01);
        this.seat=seat;
        this.transactionDate=transactionDate;
        this.total=total;
    }

    
    setVehicleType(n:string):void{
        this.vehicleType=n;
    }
    setYear(n:number):void{
        this.year=n;
    }
    setPrice(n:number):void{
        this.price=n;
    }
    setTax(n:number):void{
        this.tax=n;
    }
    setSeat(n:number):void{
        this.seat=n;
    }
    setTransactionDate(n:string):void{
        this.transactionDate=n;
    }
    setTotal(n:number):void{
        this.total=n;
    }
    getVehicleType():string{
        return this.vehicleType;
    }
    getYear():number{
        return this.year;
    }
    getPrice():number{
        return this.price;
    }
    getTax():number{
        return this.tax;
    }
    getSeat():number{
        return this.seat;
    }
    getTransactionDate():string{
        return this.transactionDate;
    }
    getTotal():number{
        return this.total;
    }
}

export class PrivateJet extends Vehicle{
    protected noRegister: string;
    protected rent: number;
    protected driver: number;

    constructor(noRegister:string,rent:number,driver:number,vehicleType: string,year: number,price: number,seat: number,transactionDate: string){
        super(vehicleType,year,price,seat,transactionDate,(rent+driver));
        this.noRegister=noRegister;
        this.rent=rent;
        this.driver=driver;
    }

    setNoRegister(n:string):void{
        this.noRegister=n;
    }
    setRent(n:number):void{
        this.rent=n;
    }
    setDriver(n:number):void{
        this.driver=n;
    }
    getNoRegister():string{
        return this.noRegister
    }
    getRent():number{
        return this.rent;
    }
    getDriver():number{
        return this.driver;
    }
    getDetail():string{
        return `No. Police:${this.getNoRegister()}\nType: ${this.getVehicleType()}\nYear: ${this.getYear()}\nPrice: ${this.getPrice()}\nTax: ${this.getTax()}\nSeat: ${this.getSeat()}\nTransaction Date: ${this.getTransactionDate()}\nTotal : ${this.getTotal()}`;
    }
}

export class Car extends Vehicle{
    protected noPolice: string;

    constructor(noPolice:string,vehicleType: string,year: number,price: number,seat: number,transactionDate: string,total:number){
        super(vehicleType,year,price,seat,transactionDate,total);
        this.noPolice=noPolice;
    }

    setNoPolice(n:string):void{
        this.noPolice=n;
    }
    getNoPolice():string{
        return this.noPolice;
    }
    getDetail():string{
        return `No. Police:${this.getNoPolice()}\nType: ${this.getVehicleType()}\nYear: ${this.getYear()}\nPrice: ${this.getPrice()}\nTax: ${this.getTax()}\nSeat: ${this.getSeat()}\nTransaction Date: ${this.getTransactionDate()}\nTotal : ${this.getTotal()}`;
    }
}

export class SUV extends Car{
    protected rent: number;
    protected driver: number;

    constructor(noPolice:string,rent:number,driver:number,vehicleType: string,year: number,price: number,seat: number,transactionDate: string){
        super(noPolice,vehicleType,year,price,seat,transactionDate,(rent+driver));
        this.rent=rent;
        this.driver=driver;
    }
    setRent(n:number):void{
        this.rent=n;
    }
    setDriver(n:number):void{
        this.driver=n;
    }
    getRent():number{
        return this.rent;
    }
    getDriver():number{
        return this.driver;
    }
}

export class Taxi extends Car{
    protected order: number;
    protected orderPerKM: number;

    constructor(noPolice:string,order:number,orderPerKM:number,vehicleType: string,year: number,price: number,seat: number,transactionDate: string){
        super(noPolice,vehicleType,year,price,seat,transactionDate,(order*orderPerKM));
        this.order=order;
        this.orderPerKM=orderPerKM;
    }
    setOrder(n:number):void{
        this.order=n;
    }
    setOrderPerKM(n:number):void{
        this.orderPerKM=n;
    }
    getOrder():number{
        return this.order;
    }
    getOrderPerKM():number{
        return this.orderPerKM;
    }
}

//format noPolice/Register,order/rent,orderPerKM/driver,vehicleType,year,price,seat,TransactionDate

// let car1=new Taxi('DR12',10,5000,'Taxi',2018,150000000,4,'10/01/2023');
// let jet1=new PrivateJet('DR12',1000000,5000000,'Taxi',2018,400000000,4,'10/01/2023');
// console.log(car1.getDetail());
// console.log(jet1.getDetail());