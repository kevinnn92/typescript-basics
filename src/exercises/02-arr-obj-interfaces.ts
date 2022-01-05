interface Person {
    name: string;
    age: number;
    isDeveloper: boolean;
    hobbies: string[],
    city?: string // optional property
}

let countries: string[] = ['Mexico', 'USA', 'Canada', 'France']
// console.log(countries);

const person1: Person = {
    name: 'Kevin',
    age: 29,
    isDeveloper: true,
    hobbies: ['reading', 'coding']
}

console.log(person1);

