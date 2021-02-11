
class Spacecraft{

    constructor (public propulsor: string){}
    jumpIntoHyperspace(){
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }
}

//Interface - um contrato segundo o qual devo ter tais variaveis 
interface Containership{
    cargoContainers: number
}

//Interface fazendo herança de outra interface
interface Smugglership extends Containership{
    hiddenContainers: number
}


export{Spacecraft, Containership, Smugglership}
