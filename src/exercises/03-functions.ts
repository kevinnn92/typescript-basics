// Regular Functions
function add(a: number, b: number): number {
    return a + b
}

const result1 = add(12,20)
console.log(result1);

// Arrow Functions
const subtract = (x: number, y: number): number => {
    return x - y
}
console.log(subtract(20,10));

// Option Params in Functions
function multiply(num1:number, num2?: number, base: number = 2): number {
    return num1 * base
}

console.log(multiply(11));

// --------- Objects as Params inside Functions
interface Character {
    name: string;
    hp: number;
    showHP: () => number
}

const character1 = {
    name: 'superman',
    hp: 80,
    showHP() {
        return this.hp
    }
}

function cure(character: Character, cureXP: number):Character {
    character.hp += cureXP
    
    return character
}

console.log(cure(character1, 15));
console.log(character1.showHP());

