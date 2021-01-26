function melrahShake([text, find]) {
    while (find.length != 0){
        let index1 = text.indexOf(find);
        let index2 = text.lastIndexOf(find);

        if (index1 == index2 || index1 == -1 || index2 == -1){
            break;
        } else {
            text = text.substring(0, index2) + text.substring(index2 + find.length);
            text = text.substring(0, index1) + text.substring(index1 + find.length);
    
            let index3 = find.length/2;
            find = find.substring(0, index3) + find.substring(index3 + 1);

            console.log('Shaked it.');
        }
    }

    console.log('No shake.');
    console.log(text);
}
melrahShake(
    [ 'cat', 'cat', '' ]
)

console.log('---');

melrahShake(
    [ 'astalavista baby', 'sta', '' ]
)

console.log('---');

melrahShake(
    [ '##mtm!!mm.mm*mtm.#', 'mtm', '' ]
)