"use strict";
exports.__esModule = true;
exports.SimpleDataSource = void 0;
var Product_1 = require("./Product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new Product_1.Product(1, "Samsung s5", "Telefon", 1000), new Product_1.Product(2, "Samsung s6", "Telefon", 2000), new Product_1.Product(3, "Samsung s7", "Telefon", 3000), new Product_1.Product(4, "Samsung s8", "Telefon", 4000));
    }
    SimpleDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
