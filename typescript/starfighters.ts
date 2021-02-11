import {Spacecraft, Containership, Smugglership} from './base-ships'


export class MillenniumFalcon extends Spacecraft implements Containership, Smugglership{

    cargoContainers: number  //devido a implementação da interface Containership
    hiddenContainers: number

    constructor(){
        super("hyperdrive")
        this.cargoContainers = 4 //inicializo o atributo do contrato (interface)
        this.hiddenContainers = 1
        
    }

    jumpIntoHyperspace(){
        if(Math.random() >= 0.5){
            super.jumpIntoHyperspace()
        }else{
            console.log("Failed to jump into hyperspace")
        }
    }

}