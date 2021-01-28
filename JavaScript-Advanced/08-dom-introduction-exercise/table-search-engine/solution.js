function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchWord = document.getElementById('searchField');
      let rows = Array.from(document.getElementsByTagName('tr'));    
      
      for (let i=2; i<rows.length; i++){
         let cells = rows[i].children;
         let match = false;

         for (let k=0; k<cells.length; k++){
            //checks for every cell on current row of the table
            if (cells[k].textContent.includes(searchWord.value)){
               match = true;               
            }       
         }

         if (match){            
            rows[i].classList.add('select');
         } else {
            rows[i].classList.remove('select');
         }
      }

      searchWord.value = '';
   }
}