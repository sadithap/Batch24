"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Inheritance_1 = require("./Inheritance");
var Polymorphism_1 = require("./Polymorphism");
var Aventador = /** @class */ (function () {
    function Aventador(model, speed, price) {
        this.brand = 'Lamborghini';
        this.model = model;
        this.speed = speed;
        this.price = price;
    }
    Aventador.prototype.setBrand = function (brand) {
        this.brand = brand;
    };
    Aventador.prototype.getSpeed = function () {
        return this.speed;
    };
    Aventador.prototype.getBrand = function (brand) {
        return this.brand;
    };
    Aventador.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    Aventador.prototype.setPrice = function (price) {
        this.price = price;
    };
    Aventador.prototype.getPrice = function () {
        return "".concat(this.price);
    };
    Aventador.prototype.move = function () {
        console.log("".concat(this.getName(), " berjalan dengan kecepatan ").concat(this.getSpeed(), " mph"));
    };
    Aventador.prototype.getName = function () {
        return "".concat(this.brand, " ").concat(this.model);
    };
    return Aventador;
}());
var aventador = new Aventador('Aventador SVJ Roadster', 275, 6500000);
var venom = new Inheritance_1.Hennessey('Hennessey', 270, 1200000, 'Venom GT');
var agera = new Inheritance_1.Koenigsegg('Koenigsegg', 273, 2500000, 'Agera RS');
var cars = [agera, venom, aventador];
var coompetition = new Polymorphism_1.Competition(cars, 1200);
coompetition.getCars();
coompetition.race();
console.log(coompetition.winner());
