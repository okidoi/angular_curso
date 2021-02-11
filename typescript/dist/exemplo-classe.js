"use strict";
exports.__esModule = true;
var base_ships_1 = require("./base-ships");
var starfighters_1 = require("./starfighters");
//metodos locais - fora da classe
function goodForTheJob(ship) {
    return ship.cargoContainers > 2;
}
function goodForSmuggler(ship) {
    return ship.hiddenContainers > 0;
}
//testando a funcao local
var falcon = new starfighters_1.MillenniumFalcon();
falcon.jumpIntoHyperspace();
console.log(goodForTheJob(falcon)); // ao executar deve mostrar true. 
console.log(goodForSmuggler(falcon)); // ao executar deve mostrar true. 
var normalShip = new base_ships_1.Spacecraft('hyperdrive');
normalShip.jumpIntoHyperspace();
//outra forma de implementar o metodo com arra
var goodForTheJob2 = function (ship) { return ship.cargoContainers > 2; };
console.log("Is Falcon good for the job? " + (goodForTheJob2(falcon) ? 'yes' : 'no'));
