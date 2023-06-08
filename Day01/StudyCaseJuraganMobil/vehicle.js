"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Taxi = exports.SUV = exports.Car = exports.PrivateJet = exports.Vehicle = void 0;
var Vehicle = /** @class */ (function () {
    function Vehicle(vehicleType, year, price, seat, transactionDate, total) {
        this.vehicleType = vehicleType;
        this.year = year;
        this.price = price;
        this.tax = (price * 0.01);
        this.seat = seat;
        this.transactionDate = transactionDate;
        this.total = total;
    }
    Vehicle.prototype.setVehicleType = function (n) {
        this.vehicleType = n;
    };
    Vehicle.prototype.setYear = function (n) {
        this.year = n;
    };
    Vehicle.prototype.setPrice = function (n) {
        this.price = n;
    };
    Vehicle.prototype.setTax = function (n) {
        this.tax = n;
    };
    Vehicle.prototype.setSeat = function (n) {
        this.seat = n;
    };
    Vehicle.prototype.setTransactionDate = function (n) {
        this.transactionDate = n;
    };
    Vehicle.prototype.setTotal = function (n) {
        this.total = n;
    };
    Vehicle.prototype.getVehicleType = function () {
        return this.vehicleType;
    };
    Vehicle.prototype.getYear = function () {
        return this.year;
    };
    Vehicle.prototype.getPrice = function () {
        return this.price;
    };
    Vehicle.prototype.getTax = function () {
        return this.tax;
    };
    Vehicle.prototype.getSeat = function () {
        return this.seat;
    };
    Vehicle.prototype.getTransactionDate = function () {
        return this.transactionDate;
    };
    Vehicle.prototype.getTotal = function () {
        return this.total;
    };
    return Vehicle;
}());
exports.Vehicle = Vehicle;
var PrivateJet = /** @class */ (function (_super) {
    __extends(PrivateJet, _super);
    function PrivateJet(noRegister, rent, driver, vehicleType, year, price, seat, transactionDate) {
        var _this = _super.call(this, vehicleType, year, price, seat, transactionDate, (rent + driver)) || this;
        _this.noRegister = noRegister;
        _this.rent = rent;
        _this.driver = driver;
        return _this;
    }
    PrivateJet.prototype.setNoRegister = function (n) {
        this.noRegister = n;
    };
    PrivateJet.prototype.setRent = function (n) {
        this.rent = n;
    };
    PrivateJet.prototype.setDriver = function (n) {
        this.driver = n;
    };
    PrivateJet.prototype.getNoRegister = function () {
        return this.noRegister;
    };
    PrivateJet.prototype.getRent = function () {
        return this.rent;
    };
    PrivateJet.prototype.getDriver = function () {
        return this.driver;
    };
    PrivateJet.prototype.getDetail = function () {
        return "No. Police:".concat(this.getNoRegister(), "\nType: ").concat(this.getVehicleType(), "\nYear: ").concat(this.getYear(), "\nPrice: ").concat(this.getPrice(), "\nTax: ").concat(this.getTax(), "\nSeat: ").concat(this.getSeat(), "\nTransaction Date: ").concat(this.getTransactionDate(), "\nTotal : ").concat(this.getTotal());
    };
    return PrivateJet;
}(Vehicle));
exports.PrivateJet = PrivateJet;
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(noPolice, vehicleType, year, price, seat, transactionDate, total) {
        var _this = _super.call(this, vehicleType, year, price, seat, transactionDate, total) || this;
        _this.noPolice = noPolice;
        return _this;
    }
    Car.prototype.setNoPolice = function (n) {
        this.noPolice = n;
    };
    Car.prototype.getNoPolice = function () {
        return this.noPolice;
    };
    Car.prototype.getDetail = function () {
        return "No. Police:".concat(this.getNoPolice(), "\nType: ").concat(this.getVehicleType(), "\nYear: ").concat(this.getYear(), "\nPrice: ").concat(this.getPrice(), "\nTax: ").concat(this.getTax(), "\nSeat: ").concat(this.getSeat(), "\nTransaction Date: ").concat(this.getTransactionDate(), "\nTotal : ").concat(this.getTotal());
    };
    return Car;
}(Vehicle));
exports.Car = Car;
var SUV = /** @class */ (function (_super) {
    __extends(SUV, _super);
    function SUV(noPolice, rent, driver, vehicleType, year, price, seat, transactionDate) {
        var _this = _super.call(this, noPolice, vehicleType, year, price, seat, transactionDate, (rent + driver)) || this;
        _this.rent = rent;
        _this.driver = driver;
        return _this;
    }
    SUV.prototype.setRent = function (n) {
        this.rent = n;
    };
    SUV.prototype.setDriver = function (n) {
        this.driver = n;
    };
    SUV.prototype.getRent = function () {
        return this.rent;
    };
    SUV.prototype.getDriver = function () {
        return this.driver;
    };
    return SUV;
}(Car));
exports.SUV = SUV;
var Taxi = /** @class */ (function (_super) {
    __extends(Taxi, _super);
    function Taxi(noPolice, order, orderPerKM, vehicleType, year, price, seat, transactionDate) {
        var _this = _super.call(this, noPolice, vehicleType, year, price, seat, transactionDate, (order * orderPerKM)) || this;
        _this.order = order;
        _this.orderPerKM = orderPerKM;
        return _this;
    }
    Taxi.prototype.setOrder = function (n) {
        this.order = n;
    };
    Taxi.prototype.setOrderPerKM = function (n) {
        this.orderPerKM = n;
    };
    Taxi.prototype.getOrder = function () {
        return this.order;
    };
    Taxi.prototype.getOrderPerKM = function () {
        return this.orderPerKM;
    };
    return Taxi;
}(Car));
exports.Taxi = Taxi;
//format noPolice/Register,order/rent,orderPerKM/driver,vehicleType,year,price,seat,TransactionDate
// let car1=new Taxi('DR12',10,5000,'Taxi',2018,150000000,4,'10/01/2023');
// let jet1=new PrivateJet('DR12',1000000,5000000,'Taxi',2018,400000000,4,'10/01/2023');
// console.log(car1.getDetail());
// console.log(jet1.getDetail());
