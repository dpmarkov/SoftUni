function countStringOccurrences(text, search) {
    text = " " + text.trim() + " ";
    search = ` ${search} `;

    let found = text.includes(search);
    let count = 0;

    while (found){
        text = text.replace(search, ' found it ');
        count++;
        found = text.includes(search);
    }

    console.log(count);
}

countStringOccurrences(
    "is is is", "is"
)