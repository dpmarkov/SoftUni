function getInfo() {
    const input = document.getElementById('stopId');
    const stopNameElm = document.getElementById('stopName');
    const busesList = document.getElementById('buses');
    const url = 'http://localhost:3030/jsonstore/bus/businfo/' + input.value;

    getBusesList(url);

    async function getBusesList(url) {
        try {
            busesList.innerHTML = ''; //clear buses list

            const response = await fetch(url);
            const data = await response.json();

            stopNameElm.textContent = data.name;
            
            Object.entries(data.buses).forEach(([busId, time]) => {
                const newLiElm = document.createElement('li');

                newLiElm.textContent = `Bus ${busId} arrives in ${time} minutes`;
                busesList.appendChild(newLiElm);
            });
            
            input.value = ''; //clear input
        } catch (error){
            //console.error(error);
            stopNameElm.textContent = 'Error';
        }
    }
}