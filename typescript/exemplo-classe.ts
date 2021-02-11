
//Nome de classe sempre maiuscula
//construtores
//atributos
//this, new
//construtor enxutos 
//herança

//Classe Base
class Spacecraft{

    constructor (public propulsor: string){}
    jumpIntoHyperspace(){
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }  //eu quem coloquei pois o exemplo não mostrava
}


//Interface - um contrato segundo o qual devo ter tais variaveis 
interface Containership{
    cargoContainers: number
}

//Interface fazendo herança de outra interface
interface Smugglership extends Containership{
    hiddenContainers: number
}

//Classe concreta realizando herança e implemetando interface
class MillenniumFalcon extends Spacecraft implements Containership, Smugglership{

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
console.log(`Is falcon good for the job? ${goodForTheJob2(falcon) ? 'yes': 'no'}`)