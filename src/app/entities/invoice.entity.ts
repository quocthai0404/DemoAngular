import { Customer } from "./customer.entity";
import { Product } from "./product.entity";

export class Invoice{
    id: number;
    name: string;
    payment: string;
    customer: Customer;
    products: Product[];

}