console.log("Ben's Tamagotchi")

// START THE GAME WITH PROMPT
// const promptBox = () => {
	// let userInput = prompt("Please enter your Pizzagotchi name!")
// }

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
  	}
	// getName(){
	// 	let displayName = document.querySelector('h2')
	// 	displayName.textContent = userInput
	// };
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
		// this.dies == true
		// clearInterval(newGame.age())
		
		// if(this.age===10 || this.hunger===10 || this.sleep===10 || this.boredom===10){
			// this.dies == true
		// 	alert("GAME OVER!")
		// 	location.reload()
	}
}

//-----Setup a new game---------
// class Start1 {
	// function startGame(){ //<-- DO NOT UNCOMMENT!!!
	const newGame = new Tamagotchi("userInput")
		// let ageVariable = age(start)
			newGame.ageID = age()
			newGame.eatID = eat()
			newGame.sleepID= sleep()
			newGame.boredID= bored()
			newGame.diesID = getDies()
			newGame.attributesID =updateAttributes()
	// }

// console.log(newGame)
//Increase pet's age every X minutes ***COMMIT***
	function age(){
		return window.setInterval(function(){
			newGame.getAge();
			newGame.updateAttributes()
			// newGame.age ++
			console.log(this.age) 
			// if (this.age >= 1){
			// 	clearInterval(age())
			// }
		},2000)
	}


// Increase pet's hunger //***COMMIT***
	function eat(){
		return window.setInterval(function(){
			newGame.getHunger()
			newGame.updateAttributes()
			// newGame.hunger-- 
			console.log(this.hunger)
		},1500)
	}

// Increase sleepiness //***COMMIT***
	function sleep(){
		return window.setInterval(function(){
			newGame.getSleep()
			newGame.updateAttributes()
			// newGame.sleep--
			console.log(this.sleep)
		},1000)
	}

// Increase Boredom //***COMMIT***
	function bored(){
		return window.setInterval(function(){
			newGame.getBoredom()
			newGame.updateAttributes()
			// newGame.boredom++
			console.log(this.boredom)
		},1000)
	}

// End Game

	// function end(){
	// 	if(this.age===10 || this.hunger===10 || this.sleep===10 || this.boredom===10){
	// 		newGame.gameTimer = newGame.getDies()
	// 		alert("GAME OVER!")
	// 		location.reload()
	// }
//---------Button Functions--------

//Start Button
// const startButton = document.querySelector("#start")
// startButton.addEventListener('click', (event)=>{
// 	let posX = Math.ceil(Math.random()*50)
// 	let posY = Math.ceil(Math.random()*50)
// 	document.getElementById(".imgContainer").style.left = `${posX}`
// 	document.getElementById(".imgContainer").style.top = `${posY}`
// })

// startButton.onclick = function(){
// 	interval = setInterval(changePosition, 500);
// }
//FEED ME --> MORPH pizza to strawberry
const feedMe = document.querySelector("#feed")
feedMe.addEventListener('click', (event) => {
	let strawberry = document.querySelector("img")
	strawberry.setAttribute("src", "Images/newstrawb.png") 
	// startGame.eat()
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
	document.body.style.backgroundImage = "url('Images/north.jpeg')"
	// document.body.style.backgroundImage = "url('Images/NorthernLights.jpeg')"

	let changeDevice = document.querySelector("#device")
	changeDevice.style.backgroundColor = 'black'
	// startGame.sleep()
 })
// }
// promptBox()