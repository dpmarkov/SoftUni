function search() {
   let searchWord = document.querySelector('input').value;
   let liElements = Array.from(document.querySelectorAll('ul#towns li'));
   let resultElm = document.getElementById('result');
   let foundItems = 0;
   
   for (let liElm of liElements){
      if (liElm.innerHTML.includes(searchWord)){
         liElm.style = 'font-weight: bold; text-decoration: underline';
         foundItems++;
      } else {
         liElm.style = '';
      }
   }

   resultElm.textContent = `${foundItems} matches found`;
}
