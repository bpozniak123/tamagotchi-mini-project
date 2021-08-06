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
		this.hunger = 0
		this.sleep = 0
		this.boredom = 0
		this.dies = true

	}
	updateAttributes(){
	    let hunger = document.querySelector('#Hunger')
	    hunger.textContent = `Hunger: ${this.hunger}`
	    let sleep = document.querySelector('#Sleep')
	    sleep.textContent = `Sleep: ${this.sleep}`
	    let boredom = document.querySelector('#Boredom')
	    boredom.textContent = `Boredom: ${this.boredom}`
	     let age = document.querySelector('#Age')
	    age.textContent = `Age: ${this.age}`
  	};
	getName(){
		let displayName = document.querySelector('h2')
		displayName.textContent = userInput
	};
	getAge(){
		this.age++
	};
	getHunger(){
		this.hunger++
	};
	getSleep(){
		this.sleep++
	};
	getBoredom(){
		this.boredom++
	};
	getDies(){
		if(this.age===10 || this.hunger===10 || this.sleep===10 || this.boredom===10){
			this.dies == true
			alert("GAME OVER!")
			location.reload()
		}
	};
}
//-----Setup a new game---------
class start {
	startGame(){
		const start = new Tamagotchi(userInput)
		let ageVariable = age(start)
		this.start.getAge()
		this.start.getHunger()
		this.start.getSleep()
		this.start.getBoredom()
		this.start.getDies()
	}

//Increase pet's age every X minutes ***COMMIT***
	// function age(name){
	// 	return window.setInterval (function(){
	// 		name.getAge()
	// 		console.log(name.age)
	// 	},2000)
	// },

//Increase pet's hunger //***COMMIT***
	function eat(){
		return window.setInterval (function(){
			name.getHunger()
			this.start.hunger-- //APPLY TO OTHERS!!!!!
			console.log(this.hunger)
		},1500)
	};

//Increase sleepiness //***COMMIT***
	function sleep(){
		return window.setInterval (function(){
			name.getSleep()
			console.log(this.sleep)
		},1000)
	};

//Increase Boredom //***COMMIT***
	function bored(){
		return window.setInterval (function(){
			name.getBoredom()
			console.log(this.boredom)
		},1000)
	};
}
//---------Button Functions--------

//FEED ME --> MORPH pizza to strawberry
const feedMe = document.querySelector("#feed")
feedMe.addEventListener('click', (event) => {
	let strawberry = document.querySelector("img")
	strawberry.setAttribute("src", "Images/newstrawb.png")
	start.eat()

})

//Animate pet
const move = document.querySelector("#play")
move.addEventListener('click', (event) => {
	let strawberry = document.querySelector("img")
	strawberry.setAttribute("src", "Images/newstrawb.png")
	strawberry.style.marginLeft = "50px"
	strawberry.style.marginRight = "50px"
})

//Change background to dark blue -> Lights Off button
const lightsOut = document.querySelector("#lights")
lightsOut.addEventListener('click', (event) => {
	let darkBackground = document.querySelector("#screen")
	darkBackground.style.backgroundColor = 'navy'
	document.body.style.backgroundImage = "url('Images/NorthernLights.jpeg')"
	
	let changeDevice = document.querySelector("#device")
	changeDevice.style.backgroundColor = 'black'
	start.sleep()
})


//---------End Game---------
// /Pet dies if hunger, boredom, or sleepiness reaches 0 //***COMMIT***
// const petAlive = (function(){
// 	if age==10 || hunger=10 || sleep==10 || boredom==10{
// 		this.alive == true
// 		alert("GAME OVER!")
// 	}
// })

//---------Setups-----------
// const sleep = document.getElementById()
// getName()

let userInput = " "
promptBox()
// const start = new Tamagotchi(userInput)
// let ageVariable = age(start)

