import { Vehicle,SUV,Taxi,PrivateJet } from "./vehicle";
import { InfoSummary } from "./summary";

//format noPolice/Register,order/rent,orderPerKM/driver,vehicleType,year,price,seat,TransactionDate

let v1=new SUV('D 1001 UM',500000,150000,'SUV',2010,350000000,4,'10/01/2023');
let v2=new SUV('D 1002 UM',500000,150000,'SUV',2010,350000000,4,'10/01/2023');
let v3=new SUV('D 1003 UM',500000,150000,'SUV',2015,350000000,5,'12/01/2023');
let v4=new SUV('D 1004 UM',500000,150000,'SUV',2015,350000000,5,'13/01/2023');
let v5=new Taxi('D 11 UK',45,4500,'Taxi',2002,175000000,4,'12/01/2023');
let v6=new Taxi('D 12 UK',75,4500,'Taxi',2015,225000000,4,'13/01/2023');
let v7=new Taxi('D 13 UK',90,4500,'Taxi',2020,275000000,4,'13/01/2023');
let v8=new PrivateJet('ID8089',35000000,15000000,'PrivateJet',2015,150000000000,12,'23/12/2022');
let v9=new PrivateJet('ID8099',55000000,25000000,'PrivateJet',2018,175000000000,15,'25/12/2022');

let vehicle:Vehicle[]=[v1,v2,v3,v4,v5,v6,v7,v8,v9];

const summary=new InfoSummary(vehicle);
console.log('Total vehicle : '+summary.getTotalVehicle());
console.log('Total SUV : '+summary.getTotalVehicle('SUV'));
console.log('Total income SUV : '+summary.getTotalIncomeVehicle('SUV'));
console.log('Total income Taxi : '+summary.getTotalIncomeVehicle('Taxi'));
console.log('Total income PrivateJet : '+summary.getTotalIncomeVehicle('PrivateJet'));
console.log('Total income vehicle : '+summary.getTotalIncomeVehicle());