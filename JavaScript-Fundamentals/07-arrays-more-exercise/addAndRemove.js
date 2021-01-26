function addAndRemove(arr){
    let arr2 = [];
    let num = 0;

    for (value of arr){
        num++;
        if (value == "add"){
            arr2.push(num)
        } else {
            arr2.pop()
        }
    }

    if (arr2.length != 0){
        console.log(arr2.join(' '));
    } else {
        console.log("Empty");
    }
}