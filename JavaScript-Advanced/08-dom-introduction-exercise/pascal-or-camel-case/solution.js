function solve() {
  let input = document.getElementById('text').value;
  let required = document.getElementById('naming-convention').value;
  let words = input.split(' ');
  let result;

  if (required == 'Camel Case'){
    words.forEach((word, i) => {
      word = word.toLocaleLowerCase();
      words[i] = word[0].toLocaleUpperCase() + word.substring(1);
    });
    words[0] = words[0].toLocaleLowerCase();

    result = words.join('');
  } else if (required == 'Pascal Case'){
    words = words.map(word => {
      word = word.toLocaleLowerCase();
      word = word[0].toLocaleUpperCase() + word.substring(1);
      return word;
    });
    console.log(words);
    
    result = words.join('');    
  } else {
    result = 'Error!';
  }

  document.getElementById('result').textContent = result;
}