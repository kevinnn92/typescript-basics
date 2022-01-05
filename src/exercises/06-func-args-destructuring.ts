export interface Product {
    desc: string;
    price: number;
}

const product1: Product = {
    desc: 'iPhone X11',
    price: 999
}

const product2: Product = {
    desc: 'Video Game Platinum Edition',
    price: 130
}

const items = [product1, product2]


export function calculateTaxProduct(products: Product[]): [number, number] {
    let total = 0
    products.forEach(({price}) => { // destructuring func. arguments
        total += price
    });

    
    return [total, total * .16]
}

const [total, tax] = calculateTaxProduct(items)

console.log(`The total is: ${total}`);
console.log(`The tax is ${tax}`);
console.log(`The total of the purchase is ${total + tax}`);

