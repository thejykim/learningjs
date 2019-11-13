const main = document.getElementById('main');

const logo = document.createElement('img');
logo.src = 'https://raw.githubusercontent.com/taniarascia/sandbox/master/ghibli/logo.png';
logo.setAttribute('align', 'center');

const container = document.createElement('div');
container.setAttribute('class', 'container');

main.append(logo);
main.append(container);

var request = new XMLHttpRequest();

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function() {
	var data = JSON.parse(this.response);

	data.forEach(movie => {
		let card = document.createElement('div');
		card.setAttribute('class', 'card');

		let header = document.createElement('h1');
		header.textContent = movie.title;

		let p = document.createElement('p');
		movie.description = movie.description.substring(0, 300);
		p.textContent = movie.description + '...';

		let a = document.createElement('a');
		let link = document.createTextNode("Check it out!");

		a.appendChild(link);
		a.title = "Link";
		a.href = movie.url;

		container.append(card);
		card.append(header);
		card.append(p);
		card.append(a);

	})
}

request.send();

var req = new XMLHttpRequest();

req.open("POST", "https://yodish.p.rapidapi.com/yoda.json");

req.query({
	"text": "Master Obiwan has lost a planet."
});

req.headers({
	"x-rapidapi-host": "yodish.p.rapidapi.com",
	"x-rapidapi-key": "8b07516f75msh514cbc65b1a29c9p115c90jsn9c4627f976c7",
	"content-type": "application/x-www-form-urlencoded"
});

req.form({});

req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});