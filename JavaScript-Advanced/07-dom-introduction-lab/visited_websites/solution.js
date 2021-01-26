function solve() {
  let container = document.querySelector('.middled');
  let links = Array.from(container.childNodes);
  
  links.forEach(element => {
    element.addEventListener("click", function(){
      let paragraph = element.children[1]
      let text = paragraph.textContent;
      let textArr = text.split(' ');
      
      textArr[1] = Number(textArr[1]) + 1;
      paragraph.textContent = textArr.join(' ');
    })
  });
}