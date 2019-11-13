const main = document.getElementById('main')

let name = "Sample Name"

let alreadySet = false

let nameBar = document.getElementById('nameBar')

window.onload=updateName();

function setName(){
	if (!alreadySet){
		name = document.getElementById('name').value
		let confirmation = document.createElement('p')
		confirmation.setAttribute('id', 'confirmation')
		confirmation.textContent = "Name set, " + name

		main.append(confirmation)
		alreadySet = true
	} else {
		name = document.getElementById('name').value
		let confirmation = document.createElement('p')
		confirmation.setAttribute('id', 'confirmation')
		confirmation.textContent = "Name set, " + name

		main.append(confirmation)
	}
	updateName()
	setTimeout(function(){
		removeConfirmation()
	}, 3000)
}

function updateName(){
	nameBar.textContent = "Welcome, " + name
}

function removeConfirmation() {
	let prevMsg = document.getElementById('confirmation')
	main.removeChild(prevMsg)
}

class User {
	name
	id

	constructor(name, id) {
		this.name = name
		this.id = id
	}

	getName() {
		return name
	}

	getID() {
		return id
	}

	setName(newName) {
		name = newName
	}

	greetUser() {
		return "Hello, " + name + "!"
	}
}

function newUser(string, num){
	new User(string, num)
	
}