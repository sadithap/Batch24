import { Vehicle } from "./vehicle";

interface Summary{
    vehicles: Vehicle[];
    getTotalVehicle(): number;
    getTotalVehicle(vehicleType: string): number;
    getTotalIncomeVehicle(): number;
    getTotalIncomeVehicle(vehicleType: string): number;
}

export class InfoSummary implements Summary{
    vehicles: Vehicle[];

    constructor(vehicles: Vehicle[]){
        this.vehicles=vehicles;
    }
    setVehicles(n:Vehicle[]): void{
        this.vehicles=n;
    }
    getTotalVehicle(vehicleType?: string): number{
        let count=0;
        if(vehicleType){
            for(let i=0;i<this.vehicles.length;i++){
                if(this.vehicles[i].getVehicleType()===vehicleType){
                    count++;
                }
            }
        }
        else{
            count=this.vehicles.length;
        }
        return count;
    }
    
    getTotalIncomeVehicle(vehicleType?: string): number {
        let totalIncome=0;

        if(vehicleType){
            for(let i=0;i<this.vehicles.length;i++){
                if(this.vehicles[i].getVehicleType()===vehicleType){
                    totalIncome+=this.vehicles[i].getTotal();
                }
            }
        }
        else{
            for(let i=0;i<this.vehicles.length;i++){
                totalIncome+=this.vehicles[i].getTotal();
            }
        }

        return totalIncome;
    }

}