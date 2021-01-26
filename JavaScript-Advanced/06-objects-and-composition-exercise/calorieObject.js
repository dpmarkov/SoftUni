function calorieObject (arr){
    let myObj = {};

    for (let i=0; i<arr.length-1; i+=2){
        myObj[arr[i]] = Number(arr[i+1]);
    }

    console.log(myObj);
}

calorieObject(
    ['Yoghurt', '48', 'Rise', '138', 'Apple', '52']
);
console.log('---');
calorieObject(
    ['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']
);