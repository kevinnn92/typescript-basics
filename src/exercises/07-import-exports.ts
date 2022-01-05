import { Product, calculateTaxProduct } from "./06-func-args-destructuring";

const cart: Product[] = [
    {
        desc: 'phone 1',
        price: 199
    },
    {
        desc: 'phone 2',
        price: 399
    },
]

const [total, tax] = calculateTaxProduct(cart)
console.log(total);
console.log(tax);
console.log(total + tax);


