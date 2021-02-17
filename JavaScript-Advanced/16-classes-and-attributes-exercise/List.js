class List{
    constructor (){
        this.numbers = [];
        this.size = 0;
    }

    setSize() {
        this.size = this.numbers.length;
    }

    sort () {
        this.numbers.sort((a, b) => a-b);
    }

    add(elm){
        this.numbers.push(elm);
        this.sort();
        this.setSize();
    }

    remove(index){
        if (this.numbers[index] != undefined){
            this.numbers.splice(index, 1);
            this.setSize();
        } else {
            throw new Error('Index is out of range');
        }
    }

    get(index){
        if (this.numbers[index] != undefined){
            return this.numbers[index];
        } else {
            throw new Error('Index is out of range');
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
console.log(list.numbers);
console.log(list.numbers.length);

console.log('\n---\n');

let list2 = new List();
list2.add(5);
list2.add(3);
list2.remove(0);
console.log(list2.numbers);
console.log(list2.size);