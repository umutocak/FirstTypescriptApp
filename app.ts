import { Product } from './Product';
import { ProductService } from './ProductService';
let _productService = new ProductService();
let result;

result = _productService.getProducts();
result = _productService.getById(2);

let p = new Product();

p.id = 2;
p.name = "Xiaomi mi 9";
p.price = 400;
p.category = "phone";
 _productService.saveProduct(p);
// _productService.deleteProduct(result);
result = _productService.getProducts();
console.log(result);