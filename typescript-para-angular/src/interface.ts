// interfaces (type x interface)

type robot1 = {
    readonly id: number | string;
    name:string;
};
//classe, "molde"
interface robot2 {
    readonly id: number | string;
    name: string;
    sayHello(): string
}

const bot1: robot1 = {
    id: "1",
    name: "megaman",
}

const bot2: robot2 = {
    id: "1",
    name: "megaman",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
}

class Pessoa implements robot2{
    id: string | number;
    name: string;

    //método de entrada da classe
    constructor(id: string | number, name: string){
        this.id = id
        this.name = name
        
    }
    sayHello(): string {
        return `Hello I'm ${this.name}`;
    }
}

const p = new Pessoa(1, "gutsman");
console.log(p.sayHello());