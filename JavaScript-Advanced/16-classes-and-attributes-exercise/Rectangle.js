class Rectangle {
    constructor (width, height, color){
        this.width = width;
        this.height = height;
        this.color = color[0].toLocaleUpperCase() + color.substring(1);
    }

    calcArea(){
        return this.width * this.height;
    }
}

const rect = new Rectangle (5, 4, 'green');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
