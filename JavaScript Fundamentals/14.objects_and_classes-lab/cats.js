function cats(arr){
    class cat {
        constructor(name, age){
            this.name = name;
            this.age = age;
        }

        sayMeow() {
            return `${this.name}, age ${this.age} says Meow`
        }
    }
    
    for (value of arr){
        let objElms = value.split(' ');
        let [name, age] = objElms;
        let catObj = new cat(name, age);
        console.log(catObj.sayMeow());
        
    }
}