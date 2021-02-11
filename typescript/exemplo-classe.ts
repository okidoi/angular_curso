import {Spacecraft, Containership, Smugglership} from './base-ships'
import {MillenniumFalcon} from './starfighters'

//metodos locais - fora da classe
function goodForTheJob(ship: Containership): boolean{
    return ship.cargoContainers > 2
}

function goodForSmuggler(ship: Smugglership): boolean{
    return ship.hiddenContainers > 0
}

//testando a funcao local
let falcon = new MillenniumFalcon()
falcon.jumpIntoHyperspace()
console.log(goodForTheJob(falcon))  // ao executar deve mostrar true. 
console.log(goodForSmuggler(falcon))  // ao executar deve mostrar true. 

let normalShip = new Spacecraft('hyperdrive')
normalShip.jumpIntoHyperspace()


//outra forma de implementar o metodo com arra
let goodForTheJob2 = (ship: Containership) => ship.cargoContainers > 2
console.log(`Is Falcon good for the job? ${goodForTheJob2(falcon) ? 'yes': 'no'}`)