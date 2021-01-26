function melrahShake([text, find]) {
    while (true){
        let index1 = text.indexOf(find);
        let index2 = text.lastIndexOf(find);

        if (index1 == index2 || find.length == 0 || index1 == -1 || index2 == -1){
            console.log('No shake.');
            console.log(text);
            break;
        } else {
            text = text.substring(0, index1) + text.substring(index1 + find.length);
            index2 = text.lastIndexOf(find); //recalc index2
            text = text.substring(0, index2) + text.substring(index2 + find.length);

            let index3 = find.length/2;
            find = find.substring(0, index3) + find.substring(index3 + 1);

            console.log('Shaked it.');
        }
    }
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