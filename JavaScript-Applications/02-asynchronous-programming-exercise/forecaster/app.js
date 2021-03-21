function attachEvents() {
    const locationElm = document.getElementById('location');
    const forecastElm = document.getElementById('forecast');
    const currentElm = document.getElementById('current');
    const upcomingElm = document.getElementById('upcoming');
    const symbols = {
        'Sunny': '\u2600',          // ☀
        'Partly sunny': '\u26C5',   // ⛅
        'Overcast': '\u2601',       // ☁
        'Rain': '\u2614',           // ☂
        'Degrees': '\u00b0'         // °
    };

    document.getElementById('submit').addEventListener('click', async () => {
        const url = 'http://localhost:3030/jsonstore/forecaster/locations';
        forecastElm.style.display = 'block';

        try {
            if (forecastElm.children[0].textContent == 'Error') { //remove error msg if present
                forecastElm.children[0].remove();
            }

            const response = await fetch(url);
            const data = await response.json();
            const code = data.find(e => e.name.toLowerCase() == locationElm.value.toLowerCase()).code;
            
            const urlC = 'http://localhost:3030/jsonstore/forecaster/today/' + code;
            const urlU = 'http://localhost:3030/jsonstore/forecaster/upcoming/' + code;
            const [responseC, responseU] = await Promise.all([fetch(urlC), fetch(urlU)]);
            const dataC = await responseC.json();
            const dataU = await responseU.json();

            // console.log(dataC);
            // console.log(dataU);

            const resultC = e('div', { className: 'forecasts'},
                e('span', { className: 'condition symbol' }, symbols[dataC.forecast.condition]),
                e('span', { className: 'condition' }, 
                    e('span', { className: 'forecast-data' }, dataC.name),
                    e('span', { className: 'forecast-data' }, `${dataC.forecast.low + symbols['Degrees']}/${dataC.forecast.high + symbols['Degrees']}`),
                    e('span', { className: 'forecast-data' }, dataC.forecast.condition)
                )
            );
            if (currentElm.children.length == 2) { //clear past result
                currentElm.children[1].remove();
            }
            currentElm.appendChild(resultC);

            const resultU = e('div', { className: 'forecast-info' },
                Object.values(dataU.forecast).map( elm => {                    
                    return e('span', { className: 'upcoming' },
                        e('span', { className: 'symbol'}, symbols[elm.condition]),
                        e('span', { className: 'forecast-data'}, `${elm.low + symbols['Degrees']}/${elm.high + symbols['Degrees']}`),
                        e('span', { className: 'forecast-data'}, elm.condition),
                    );
                })
            );

            if (upcomingElm.children.length == 2) { //clear past result
                upcomingElm.children[1].remove();
            }
            upcomingElm.appendChild(resultU);
        } catch (error) {
            console.error(error);
            
            if (forecastElm.children[0].textContent != 'Error') {
                forecastElm.prepend(e('div', { className: 'label'}, 'Error'));
            }
        }
    });
}

attachEvents();

function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') { //add event
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}