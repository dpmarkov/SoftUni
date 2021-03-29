import { showDetails } from './details.js';

let main;
let section;

async function onSubmit(event, id) {
    event.preventDefault();

    const formData = new FormData(event.target);

    if (formData.get('title') == '' || formData.get('description') == '' || formData.get('img') == '') {
        return alert('All fields are required!');
    } else {
        const movie = {
            title: formData.get('title'),
            description: formData.get('description'),
            img: formData.get('imageUrl')
        };
    
        const response = await fetch('http://localhost:3030/data/movies/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': sessionStorage.getItem('authToken')
            },
            body: JSON.stringify(movie)
        });

        if (response.ok) {
            showDetails(id);
        } else {
            const error = response.json();
            alert(error.message);
        }
    }
}

export function setupEdit (mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
}

export async function showEdit (event, movieData) {
    event.preventDefault();
    section.querySelector('[name="title"]').value = movieData.title;
    section.querySelector('[name="description"]').value = movieData.description;
    section.querySelector('[name="imageUrl"]').value = movieData.img;
    
    const form = section.querySelector('form');
    form.addEventListener('submit', (event) => onSubmit(event, movieData._id));

    main.innerHTML = '';
    main.appendChild(section);
}