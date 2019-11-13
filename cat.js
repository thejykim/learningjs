const main = document.getElementById('main');

const container = document.createElement('div');
container.setAttribute('class', 'container');

main.append(container);

fetch('https://api.thecatapi.com/v1/images/search')
.then(response => {
	response.json();
})
.then(data => {
  console.log(data.url) // Prints result from `response.json()` in getRequest
})
.catch(error => console.error(error))