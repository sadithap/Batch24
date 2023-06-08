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
exports.Koenigsegg = exports.Hennessey = exports.Cars2 = void 0;
var Cars2 = /** @class */ (function () {
    function Cars2(brand, speed, price) {
        this.brand = brand;
        this.price = price;
        this.speed = speed;
    }
    Cars2.prototype.setBrand = function (brand) {
        this.brand = brand;
    };
    Cars2.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    Cars2.prototype.setPrice = function (price) {
        this.price = price;
    };
    Cars2.prototype.getBrand = function () {
        return this.brand;
    };
    ;
    Cars2.prototype.getSpeed = function () {
        return this.speed;
    };
    Cars2.prototype.getPrice = function () {
        return "".concat(this.price);
    };
    Cars2.prototype.getName = function () {
        return this.brand;
    };
    ;
    Cars2.prototype.move = function () {
        console.log("".concat(this.brand, " berjalan\n    dengan kencang"));
    };
    ;
    return Cars2;
}());
exports.Cars2 = Cars2;
var Hennessey = /** @class */ (function (_super) {
    __extends(Hennessey, _super);
    function Hennessey(brand, speed, price, model) {
        var _this = _super.call(this, brand, speed, price) || this;
        _this.model = model;
        return _this;
    }
    Hennessey.prototype.move = function () {
        console.log("".concat(this.getName(), " berjalan dengan kecepatan ").concat(this.getSpeed(), " mph"));
    };
    Hennessey.prototype.getName = function () {
        return "".concat(this.brand, " ").concat(this.model);
    };
    return Hennessey;
}(Cars2));
exports.Hennessey = Hennessey;
var Koenigsegg = /** @class */ (function (_super) {
    __extends(Koenigsegg, _super);
    function Koenigsegg(brand, speed, price, model) {
        var _this = _super.call(this, brand, speed, price) || this;
        _this.model = model;
        return _this;
    }
    Koenigsegg.prototype.move = function () {
        console.log("".concat(this.getName(), " berjalan dengan kecepatan ").concat(this.getSpeed(), " mph"));
    };
    Koenigsegg.prototype.getName = function () {
        return "".concat(this.brand, " ").concat(this.model);
    };
    return Koenigsegg;
}(Cars2));
exports.Koenigsegg = Koenigsegg;
var venom = new Hennessey('Hennessey', 270, 1200000, 'Venom GT');
var agera = new Koenigsegg('Koenigsegg', 273, 2500000, 'Agera RS');
var Tesla = new Cars2('Tesla', 230, 1200000);
venom.move();
agera.move();
Tesla.move();
