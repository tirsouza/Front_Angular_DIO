//classes

/*
    data modifiers - também pode ser usado em métodos
    public - pode ser acessado, modificador publico
    private - só pode ser acessada por dentro da classe
    protected - só pode ser acessado dentro da classe e subclasses que herdam essa classe
    */



    class Character {
        public name?: string; 
        strength: number; 
        skill: number;
    
        constructor(name: string, strength: number, skill: number){
            this.strength = strength;
            this.skill = skill;
        }
    
        attack(): void{
            console.log(`Attack with ${this.strength} points`);
        }
    }
    
    //Character: superclass
    //Magician: subclass
    class Magician extends Character{
        magicPoints: number
        constructor(name: string, strength: number, skill: number, magicPoints: number){
            super(name, strength, skill);
            this.magicPoints = magicPoints;
    
        }
    }
    
    
    const p1 = new Character("Ryu", 10, 98);
    const p2 = new Magician("Mago", 9, 30, 100);
    p1.attack();
    