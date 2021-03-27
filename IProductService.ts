import { Product } from "./Product";

// Bunlar bizim metodlarımız. Bu metodlar ile veri alacağız.
// Bunların içerisini dolduracağız.
export interface IProductService {
    getById(id: number): Product;
    getProducts(): Array<Product>;
    saveProduct(product: Product): void;
    deleteProduct(product: Product): void;
}