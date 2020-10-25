function catalogue(arr){
    arr.sort((a, b) => {return a.toUpperCase().localeCompare(b.toUpperCase())});
    
    let currentLetter = arr[0][0].toUpperCase();;
    console.log(currentLetter);

    for (let el of arr){
        el = el.replace(' : ', ': ');
        firstLetter = el[0].toUpperCase();

        if (firstLetter == currentLetter){
            console.log("  " + el);
        } else {
            currentLetter = firstLetter;
            console.log(currentLetter);
            console.log("  " + el);
        }
    }
}