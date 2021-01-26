function aggregateElements(arr){
    function sum(arr){
        let result = 0;

        arr.forEach(
            x => result += x
        );

        return result;
    }

    function sumI(arr){
        let result = 0;
        
        arr.forEach(
            x => result += 1/x
        );

        return result;
    }

    function concat(arr){
        let result = '';
        
        arr.forEach(
            x => result += x
        );

        return result;
    }

    console.log(sum(arr));
    console.log(sumI(arr));
    console.log(concat(arr));
}

aggregateElements([1, 2, 3]);
console.log('---');
aggregateElements([2, 4, 8, 16]);