(function () {
    Object.assign(Array.prototype, {
        last() {
            return this[this.length - 1];
        },
        skip(n) {
            const newArr = [...this];
            newArr.splice(0, n);
            return newArr;
        },
        take(n) {
            const newArr = [...this];
            return newArr.splice(0, n);
        },
        sum() {
            return this.reduce((a, c) => a + c, 0);
        },
        average() {
            return this.sum()/this.length;
        }
    });
})();

const arr = [7, 4, 43, 64];

console.log(arr.last()); // 64
console.log(arr.skip(2)); // Array [43, 64]
console.log(arr.take(2)); // Array [7, 4]
console.log(arr.sum()); // 118
console.log(arr.average()); // 29.5
console.log(arr); // Array [ 7, 4, 43, 64 ]