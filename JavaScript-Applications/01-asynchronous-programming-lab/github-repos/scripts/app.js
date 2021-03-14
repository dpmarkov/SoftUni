function loadRepos() {
	const username = document.getElementById('username').value;

	const url = `https://api.github.com/users/${username}/repos`;

	fetch(url).then(response => response.json().then(data => {
		const ulElm = document.getElementById('repos');
		ulElm.innerHTML = '';

		data.forEach(r => {
			const liElm = document.createElement('li');
			liElm.textContent = r.full_name;
			ulElm.appendChild(liElm);
		});
	}));
}