console.log("Ben's Tamagotchi")

// START THE GAME WITH PROMPT
const promptBox = () => {
	let userInput = prompt("Please enter your Pizzagotchi name!")
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
		clearInterval(game.currentTime);
		game.death();
	}
}


//Increase pet's age every X minutes //***COMMIT***


//Increase pet's hunger hunger //***COMMIT***

//Increase sleepiness //***COMMIT***

//Increase Boredom //***COMMIT***


//Pet dies if hunger, boredom, or sleepiness reaches 0 //***COMMIT***

//Morph pet at certain ages //***COMMIT***

//Have burgergotchi appear at night.


// const sleep = document.getElementById()
// getName()

// const start = new Tamagotchi(userInput)
promptBox()
