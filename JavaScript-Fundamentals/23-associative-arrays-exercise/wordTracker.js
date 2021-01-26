function wordTracker(input) {
    searchWordsArr = input.shift().split(' ');
    searchWords = {}
    for (let word of searchWordsArr){
        searchWords[word] = 0;
    }

    for (let word of input){
        if (searchWords.hasOwnProperty(word)){
            searchWords[word]++
        }
    }

    let sorted = Object.entries(searchWords);
    sorted.sort((a, b) => b[1] - a[1]);

    for (let keys of sorted){
        console.log(`${keys[0]} - ${keys[1]}`); 
    }
}

wordTracker(
    [
    'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task'
    ]     
)