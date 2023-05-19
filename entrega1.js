// agregar a products la propiedad id y que sea autoincremental

class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        const productExists = this.products.some(p => p.code === product.code);
        if (productExists) {
            console.log('Ya existe un producto con ese código. Producto no agregado');
            return;
        }
        const isEmpty = Object.values(product).some(x => x === null || x === '');
        if (isEmpty) {
            console.log('No se puede agregar un producto con campos vacíos');
            return;
        }
        this.products.push(product);
    }

    getProducts() {
        return this.products;
    }

    getProductByCode(code) {
        const product = this.products.find(p => p.code === code);
        if (!product) {
            console.log('Not found');
        }
        return product;
    }
}

const productManager = new ProductManager();

const product1 = {
    title: 'producto de prueba',
    description: 'este es un producto de prueba',
    price: 200,
    thumbnail: 'sin imagen',
    code: 'abc123',
    stock: 25
};

productManager.addProduct(product1);

console.log(productManager.getProducts());

console.log(productManager.getProductByCode('abc123'));



