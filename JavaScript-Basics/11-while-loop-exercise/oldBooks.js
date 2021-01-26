function oldBooks(input){
    let wantedBook = input.shift();
    let libraryCapacity = Number(input.shift());
    let checkedBooks = 0;
    let isFound = false;

    while( checkedBooks < libraryCapacity){
        let currentBook = input.shift();

        if (currentBook !==  wantedBook){
            checkedBooks++;
        } else {
            isFound = true;
            break;
        }
    }

    if (isFound) {
        console.log(`You checked ${checkedBooks} books and found it.`);
    } else {
        console.log("The book you search is not here!");
        console.log(`You checked ${checkedBooks} books.`);
    }
}