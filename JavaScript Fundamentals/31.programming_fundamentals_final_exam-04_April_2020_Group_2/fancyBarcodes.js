function fancyBarcodes(input) {
    let pattern = /^@#+(?<value>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+$/;
    let count = Number(input.shift());

    for (let i=0; i<count; i++){
        if (pattern.test(input[i])){
            let match = input[i].match(pattern);
            let value = match['groups'].value;
            let productGroup = '';

            for (let char of value){
                if (!isNaN(Number(char))){
                    productGroup += char;
                }
            }

            if (productGroup == ''){
                productGroup = '00';
            }

            console.log(`Product group: ${productGroup}`);
        } else {
            console.log("Invalid barcode");
        }
    }
}

fancyBarcodes(
    [ '3', '@#FreshFisH@#', '@###Brea0D@###', '@##Che46sE@##' ]
)

console.log('---');

fancyBarcodes(
    [
        '6',
        '@###Val1d1teM@###',
        '@#ValidIteM@#',
        '##InvaliDiteM##',
        '@InvalidIteM@',
        '@#Invalid_IteM@#',
        '@#ValiditeM@#'
    ]
)