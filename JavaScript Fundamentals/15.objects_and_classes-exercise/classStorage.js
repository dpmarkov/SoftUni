class Storage{
    constructor (capacity){
        this.capacity = capacity;
        this.storage = [];
    }

    get totalCost(){
        let sum = 0;
        this.storage.forEach(obj => {
            sum += obj.price * obj.quantity;
        });
        return sum;
    }

    addProduct(product){
        this.storage.push(product);
        this.capacity -= product['quantity'];
        return;
    }

    getProducts(){
        let result = [];
        this.storage.forEach(obj => {
            result.push(JSON.stringify(obj));
        });

        return result.join('\n');
    }
}




let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
let productThree = {name: 'Bread', price: 1.10, quantity: 8};

let storage = new Storage(50);

storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);

let output = storage.getProducts();
console.log(output);

