function lockedProfile() {
    document.querySelector('main').addEventListener('click', onClick);

    function onClick (ev) {
        if (ev.target.tagName == 'BUTTON'){
            let lock = ev.target.parentNode.querySelector('input[type=radio]').checked;
            const hiddenInfo = ev.target.previousSibling.previousSibling;
            
            if (!lock) { //unlocked profile
                if (ev.target.textContent == 'Hide it'){
                    ev.target.textContent = 'Show more';
                    hiddenInfo.style.display = 'none';
                } else {
                    ev.target.textContent = 'Hide it';
                    hiddenInfo.style.display = 'block';
                }
            }
        }
    }
}