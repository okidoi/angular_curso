//Nome de classe sempre maiuscula
//construtores
//atributos
//this, new
//construtor enxutos 
//herança
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Classe Base
var Spacecraft = /** @class */ (function () {
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    Spacecraft.prototype.jumpIntoHyperspace = function () {
        console.log("Entering hyperspace with " + this.propulsor);
    }; //eu quem coloquei pois o exemplo não mostrava
    return Spacecraft;
}());
//Classe concreta realizando herança e implemetando interface
var MillenniumFalcon = /** @class */ (function (_super) {
    __extends(MillenniumFalcon, _super);
    function MillenniumFalcon() {
        var _this = _super.call(this, "hyperdrive") || this;
        _this.cargoContainers = 4; //inicializo o atributo do contrato (interface)
        _this.hiddenContainers = 1;
        return _this;
    }
    MillenniumFalcon.prototype.jumpIntoHyperspace = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.jumpIntoHyperspace.call(this);
        }
        else {
            console.log("Failed to jump into hyperspace");
        }
    };
    return MillenniumFalcon;
}(Spacecraft));
//metodos locais - fora da classe
function goodForTheJob(ship) {
    return ship.cargoContainers > 2;
}
function goodForSmuggler(ship) {
    return ship.hiddenContainers > 0;
}
//testando a funcao local
var falcon = new MillenniumFalcon();
falcon.jumpIntoHyperspace();
console.log(goodForTheJob(falcon)); // ao executar deve mostrar true. 
console.log(goodForSmuggler(falcon)); // ao executar deve mostrar true. 
var normalShip = new Spacecraft('hyperdrive');
normalShip.jumpIntoHyperspace();
//outra forma de implementar o metodo com arra
var goodForTheJob2 = function (ship) { return ship.cargoContainers > 2; };
console.log("Is falcon good for the job? " + (goodForTheJob2(falcon) ? 'yes' : 'no'));
