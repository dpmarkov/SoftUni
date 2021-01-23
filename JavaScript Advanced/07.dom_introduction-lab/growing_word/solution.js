function growingWord() {
  let text = document.querySelector('#exercise p');
  let colorsDiv = document.getElementById('colors');

  if (text.style.fontSize == ""){ //on first click
    text.style.fontSize = "2px";
    text.style.color = "blue";
  } else {
    let lastColor = colorsDiv.children[0];
    let newColor = colorsDiv.children[1];

    lastColor.remove();
    colorsDiv.appendChild(lastColor);
    text.style.color = (newColor.textContent).toLocaleLowerCase();
    console.log(newColor);
    
    text.style.fontSize = parseInt(text.style.fontSize) * 2 + "px";
  }
}