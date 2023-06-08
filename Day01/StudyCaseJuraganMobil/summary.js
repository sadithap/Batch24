"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoSummary = void 0;
var InfoSummary = /** @class */ (function () {
    function InfoSummary(vehicles) {
        this.vehicles = vehicles;
    }
    InfoSummary.prototype.setVehicles = function (n) {
        this.vehicles = n;
    };
    InfoSummary.prototype.getTotalVehicle = function (vehicleType) {
        var count = 0;
        if (vehicleType) {
            for (var i = 0; i < this.vehicles.length; i++) {
                if (this.vehicles[i].getVehicleType() === vehicleType) {
                    count++;
                }
            }
        }
        else {
            count = this.vehicles.length;
        }
        return count;
    };
    InfoSummary.prototype.getTotalIncomeVehicle = function (vehicleType) {
        var totalIncome = 0;
        if (vehicleType) {
            for (var i = 0; i < this.vehicles.length; i++) {
                if (this.vehicles[i].getVehicleType() === vehicleType) {
                    totalIncome += this.vehicles[i].getTotal();
                }
            }
        }
        else {
            for (var i = 0; i < this.vehicles.length; i++) {
                totalIncome += this.vehicles[i].getTotal();
            }
        }
        return totalIncome;
    };
    return InfoSummary;
}());
exports.InfoSummary = InfoSummary;
