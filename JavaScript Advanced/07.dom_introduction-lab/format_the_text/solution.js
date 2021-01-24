function solve() {
  let inputElement = document.getElementById('input');
  let inputArr = inputElement.innerHTML.split('.');
  
  //adding dots where needed..................................................................................................
  if (inputArr.length > 0){
    for (let i=0; i<inputArr.length-1; i++){
      inputArr[i] += '.';
    }
  }
  //..................................................................................................adding dots where needed
  
  let paragraphs = [[]];
  let counter = 1;
  let pIndex = 0;

  for (let sentence of inputArr){
    if (counter == 4){
      pIndex++;
      counter = 1;
      paragraphs[pIndex] = [];
    }

    paragraphs[pIndex].push(sentence);

    counter++;
  }

  paragraphs.forEach(x => {
    let newParagraph = document.createElement('p');
    newParagraph.innerHTML = x.join(' ');
    document.getElementById('output').appendChild(newParagraph);
  });
}
  