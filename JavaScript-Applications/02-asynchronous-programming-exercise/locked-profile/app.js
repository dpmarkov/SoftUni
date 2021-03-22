async function lockedProfile() {
    const main = document.getElementById('main');
    const url = 'http://localhost:3030/jsonstore/advanced/profiles';
    const response = await fetch(url);
    const data = await response.json();
    let i = 1;
    
    main.innerHTML = '';

    Object.values(data).forEach(elm => {
        const button = e('button', {}, 'Show more');
        const radio = e('input', { type: 'radio', name: `user${i}Locked`, value: 'lock', checked: 'true' });
        const hiddenInfo = e('div', { id: `user${i}HiddenFields` }, 
            e('hr'),
            e('label', {}, 'Email:'),
            e('input', { type: 'email', name: `user${i}Email`, value: elm.email, disabled: 'true', readonly: 'true'}),
            e('label', {}, 'Age:'),
            e('input', { type: 'email', name: `user${i}Age`, value: elm.age, disabled: 'true', readonly: 'true'}),
        );
        
        const profileCard = e('div', { className: 'profile' },
            e('img', { src: 'iconProfile2.png', className: 'userIcon' }),
            e('label', {}, 'Lock'),
            radio,
            e('label', {}, 'Unlock'),
            e('input', { type: 'radio', name: `user${i}Locked`, value: 'unlock' }), e('br'),
            e('hr'),
            e('label', {}, 'Username'),
            e('input', { type: 'text', name: `user${i}Username`, value: elm.username, disabled: 'true', readonly: 'true'}),
            hiddenInfo,
            button
        );

        button.addEventListener('click', () => {
            if (!radio.checked) { //unlocked
                if (window.getComputedStyle(hiddenInfo, null).display == 'none') {
                    button.textContent = 'Hide it';
                    hiddenInfo.style.display = 'block';
                } else {
                    button.textContent = 'Show more';
                    hiddenInfo.style.display = 'none';
                }
            }
        });

        i++;
        main.appendChild(profileCard);
    });
}

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