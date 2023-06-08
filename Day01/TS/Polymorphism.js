"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Competition = void 0;
var Competition = /** @class */ (function () {
    function Competition(cars, distance) {
        this.cars = cars;
        this.distance = distance;
        this.ranks = this.cars;
    }
    Competition.prototype.setCars = function (cars) {
        this.cars = cars;
    };
    Competition.prototype.getCars = function () {
        console.log('Mobil yang terdaftar: ');
        for (var i in this.cars) {
            console.log("".concat(Number(i) + 1, ".").concat(this.cars[i].getName(), " : ").concat(this.cars[i].getSpeed(), " MPH"));
        }
    };
    Competition.prototype.setDistance = function (distance) {
        this.distance = distance;
    };
    Competition.prototype.getDistance = function () {
        return this.distance;
    };
    Competition.prototype.setRaceTime = function () {
        for (var _i = 0, _a = this.ranks; _i < _a.length; _i++) {
            var car = _a[_i];
            car.times = this.distance / car.getSpeed();
        }
    };
    Competition.prototype.race = function () {
        console.log('Lomba balap mobil dimulai !!');
        for (var _i = 0, _a = this.cars; _i < _a.length; _i++) {
            var car = _a[_i];
            car.move();
        }
        this.setRaceTime();
        this.ranks.sort(function (obj1, obj2) {
            if (obj1.times < obj2.times) {
                return -1;
            }
            else if (obj1.times > obj2.times) {
                return 1;
            }
            else {
                return 0;
            }
        });
        console.log('Lomba balap mobil talah berakhir');
    };
    Competition.prototype.winner = function () {
        return "Pemenang untuk lomba balap mobil kali ini ialah ".concat(this.ranks[0].getName(), " dengan waktu ").concat(this.ranks[0].times, " jam");
    };
    return Competition;
}());
exports.Competition = Competition;
