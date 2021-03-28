document.getElementById('form').addEventListener('submit', createStudent);
getStudents();

async function getStudents() {
    const response = await fetch('http://localhost:3030/jsonstore/collections/students');
    const data = await response.json();
    const studentsList = document.querySelector('#results tbody');
    studentsList.innerHTML = '';
    
    Object.values(data).map(n => {
        const newRow = e('tr', {}, 
            e('td', {}, n.firstName),
            e('td', {}, n.lastName),
            e('td', {}, n.facultyNumber),
            e('td', {}, n.grade)
        );
        
        studentsList.appendChild(newRow);
    });
}

async function createStudent(event) {
    event.preventDefault();
    const formData = new FormData (event.target);

    //basic validation
    if (formData.get('firstName') == '' || formData.get('lastName') == '' || formData.get('facultyNumber') == '' || formData.get('grade') == '') {
        return alert('All fields are required!');
    }  

    await fetch('http://localhost:3030/jsonstore/collections/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
           firstName: formData.get('firstName'),
           lastName: formData.get('lastName'),
           facultyNumber: formData.get('facultyNumber'),
           grade: formData.get('grade')
        })
    });

    event.target.reset();
    getStudents();
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