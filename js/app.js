console.log("Ben's Tamagotchi")

// START THE GAME WITH PROMPT
const promptBox = () => {
	userInput = prompt("Please enter your Pizzagotchi name!")
}

//ATTRIBUTES OF TAMAGOTCHI
class Tamagotchi{
	constructor(name){
		this.name = name
		this.age = 1
		this.hunger = 5
		this.sleep = 3
		this.boredom = 10
		this.alive = true

	}
	getName(){
		let displayName = document.querySelector('h2')
		displayName.textContent = userInput
	}
	getAge(){
		this.age++
	}
	getHunger(){
		this.hunger++
		}
	getSleep(){
		this.sleep++
		}
	getBoredom(){
		this.boredom++
	}
	getDies(){
		this.alive = false;
		clearInterval(begin.timeInt);
		begin.death();
	}
}


// Setup a new game

// const begin = {
// 	timer: 0,
// 	player: null,
// 	createName(name) {
// 		const pizza = new Tamagotchi(name);
// 		this.player = pizza;
// 		}
// 	},

// 	timer(){
// 		this.timeInt = setInterval(() => {
// 			this.timer++
// 			if(this.timer % 30 === 0){
// 				this.player.getAge()
// 				if(this.player.age === 5){
// 					}

// 				}
// 			}
// 			if(this.timer % 15 === 0)
// 		})
// 	}

//Increase pet's age every X minutes //***COMMIT***
function age(name){
	return window.setInterval (function(){
		name.getAge()
		console.log(name.age)
	},1000)
}

//Increase pet's hunger hunger //***COMMIT***
function eat(){
	return window.setInterval (function(){
		name.getHunger()
		console.log(this.hunger)
	},1000)
}

//Increase sleepiness //***COMMIT***
function sleep(){
	return window.setInterval (function(){
		name.getSleep()
		console.log(this.sleep)
	},1000)
}

//Increase Boredom //***COMMIT***
function bored(){
	return window.setInterval (function(){
		name.getBoredom()
		console.log(this.boredom)
	},1000)
}

//Pet dies if hunger, boredom, or sleepiness reaches 0 //***COMMIT***

//Morph pet at certain ages //***COMMIT***

//Have burgergotchi appear at night.

const petAlive = window.setInterval(function(){
	if ()
})
// const sleep = document.getElementById()
// getName()

let userInput = " "
promptBox()
const start = new Tamagotchi(userInput)
let ageVariable = age(start)


