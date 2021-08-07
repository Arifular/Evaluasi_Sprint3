class Animal {
    fungsi (name, isMamal) {
        this.name = name
        this.isMamal = isMamal
    }
}

class Frog extends Animal {
    constructor(name, isMamal){
    super(name, isMamal)
    }
    jump() {
        return `hop hop`; 
    }
} 

class Ape extends Animal{
    constructor(name, isMamal){
    super(name, isMamal)
    }
    yell(){
        return `Auooo`
    }
}

let frogKu = new Frog()
let apeKu = new Ape()

console.log(frogKu);
console.log(apeKu);