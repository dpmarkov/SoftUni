function create(words) {
   let content = document.getElementById('content');

   words.forEach(text => {
      let newDiv = document.createElement('div');
      let paragraph = document.createElement('p');

      paragraph.textContent = text;
      paragraph.style.display = 'none';

      newDiv.appendChild(paragraph);
      content.appendChild(newDiv);
   });

   content.addEventListener('click', onClick);

   function onClick(ev) {
      ev.target.querySelector('p').style = '';
   }
}