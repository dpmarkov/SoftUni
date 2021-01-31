function attachEventsListeners() {
    const main = document.querySelector('main');
    
    main.addEventListener('click', onClick);
    
    function onClick (ev){        
        if (ev.target.tagName == 'INPUT' && ev.target.type == 'button'){
            let value = Number(ev.target.parentNode.querySelector('input[type=text]').value);
            
            if (ev.target.id == 'daysBtn'){
                document.getElementById('hours').value = value * 24;
                document.getElementById('minutes').value = value * 1440;
                document.getElementById('seconds').value = value * 86400;
            } else if (ev.target.id == 'hoursBtn'){
                document.getElementById('days').value = value / 24;
                document.getElementById('minutes').value = value * 60;
                document.getElementById('seconds').value = value * 3600;
            } else if (ev.target.id == 'minutesBtn'){
                document.getElementById('days').value = value / 1440;
                document.getElementById('hours').value = value / 60;
                document.getElementById('seconds').value = value * 60;
            } else { //seconds
                document.getElementById('days').value = value / 86400;
                document.getElementById('hours').value = value / 3600;
                document.getElementById('minutes').value = value / 60;
            }
        }
    }
}