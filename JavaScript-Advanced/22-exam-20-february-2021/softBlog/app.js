function solve(){
   const creatorElm = document.getElementById('creator');
   const titleElm = document.getElementById('title');
   const categoryElm = document.getElementById('category');
   const contentElm = document.getElementById('content');
   const createBtn = document.querySelector('.create');
   const postsElm = document.querySelector('main section');
   const archiveElm = document.querySelector('.archive-section ol');

   createBtn.addEventListener('click', (e) => {
      e.preventDefault();
      
      const articleElm = c('article');
      const h1Elm = c('h1', titleElm.value);
      const p1Elm = c('p', 'Category:');
      const p1Inner = c('strong', categoryElm.value);
      const p2Elm = c('p', 'Creator:');
      const p2Inner = c('strong', creatorElm.value);
      const p3Elm = c('p', contentElm.value);
      const divElm = c('div', '', 'buttons');
      const deleteBtn = c('button', 'Delete', 'btn delete');
      const archiveBtn = c('button', 'Archive', 'btn archive');

      deleteBtn.addEventListener('click', () => {
         articleElm.remove();
      });

      archiveBtn.addEventListener('click', () => {
         articleElm.remove();

         const liElm = c('li', h1Elm.textContent);
         archiveElm.appendChild(liElm);

         sortArchive();
      });

      p1Elm.appendChild(p1Inner);
      p2Elm.appendChild(p2Inner);
      divElm.appendChild(deleteBtn);
      divElm.appendChild(archiveBtn);

      articleElm.appendChild(h1Elm);
      articleElm.appendChild(p1Elm);
      articleElm.appendChild(p2Elm);
      articleElm.appendChild(p3Elm);
      articleElm.appendChild(divElm);

      postsElm.appendChild(articleElm);
   })

   function c(type, content, className) {
      const newElm = document.createElement(type);
      newElm.textContent = content;

      if (className) {
         className.split(' ').map(e => newElm.classList.add(e));
      }
      
      return newElm;
  }

   function sortArchive () {
      Array.from(archiveElm.children)
      .sort((a, b) => a.textContent.localeCompare(b.textContent))
      .map(e => archiveElm.appendChild(e));
   }
}
