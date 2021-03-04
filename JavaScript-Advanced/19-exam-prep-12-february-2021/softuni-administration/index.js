function solve() {
    const AddBtn = document.querySelector('button');
    const lectureNameElm = document.querySelector('input[name="lecture-name"]');
    const lectureDateElm = document.querySelector('input[name="lecture-date"]');
    const lectureModuleElm = document.querySelector('select[name="lecture-module"]');
    const outputElm = document.querySelector('div.modules');
    const activeModules = {}; //keeping note which modules are added to the Training section

    AddBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (lectureNameElm.value != '' && lectureDateElm.value != '' && lectureModuleElm.value != 'Select module'){
            const lectureName = lectureNameElm.value;
            const lectureDate = lectureDateElm.value.replace('-', '/').replace('-', '/').replace('T', ' - ');
            const lectureModule = lectureModuleElm.value;

            if (!activeModules.hasOwnProperty(lectureModule)){
                const divElm = document.createElement('div');
                const h3Elm = document.createElement('h3');
                const ulElm = document.createElement('ul');
                const liElm = document.createElement('li');
                const delBtn = document.createElement('button');
                const h4Elm = document.createElement('h4');

                divElm.className = 'module';
                liElm.className = 'flex';
                delBtn.className = 'red';

                h3Elm.textContent = lectureModule.toUpperCase() + '-MODULE';
                h4Elm.textContent = lectureName + ' - ' + lectureDate;
                delBtn.textContent = 'Del';

                activeModules[lectureModule] = ulElm;

                liElm.appendChild(h4Elm);
                liElm.appendChild(delBtn);
                ulElm.appendChild(liElm);
                divElm.appendChild(h3Elm);
                divElm.appendChild(ulElm);
                outputElm.appendChild(divElm);
                sortEntries(ulElm);
            } else {
                const ulElm = activeModules[lectureModule];
                const liElm = document.createElement('li');
                const delBtn = document.createElement('button');
                const h4Elm = document.createElement('h4');

                liElm.className = 'flex';
                delBtn.className = 'red';

                h4Elm.textContent = lectureName + ' - ' + lectureDate;
                delBtn.textContent = 'Del';

                liElm.appendChild(h4Elm);
                liElm.appendChild(delBtn);
                ulElm.appendChild(liElm);
                sortEntries(ulElm);
            }

            function sortEntries(ulElm) {
                Array.from(ulElm.children).sort((a, b) => {
                    const aTokens = a.querySelector('h4').textContent.split(' - ');
                    const aDate = aTokens[1] + aTokens[2];
                    const bTokens = b.querySelector('h4').textContent.split(' - ');
                    const bDate = bTokens[1] + bTokens[2];

                    return aDate.localeCompare(bDate);
                }).map(liElm => ulElm.appendChild(liElm));
            }
        }
    });

    outputElm.addEventListener('click', (e) => {
        if (e.target.textContent == 'Del'){
            const divElm = e.target.parentElement.parentElement.parentElement;
            const ulElm = e.target.parentElement.parentElement;
            const liElm = e.target.parentElement;

            liElm.remove();
            if (ulElm.children.length == 0) {
                divElm.remove();
                
                for (let key in activeModules) {
                    if (activeModules[key] == ulElm) {
                        delete activeModules[key];
                        break;
                    }
                }
            }
        }        
    });
};