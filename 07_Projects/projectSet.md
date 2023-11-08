# Project Related to DOM

## 1. Color Changer

## Project link
(Replit link)[https://replit.com/@MuraliAirody/ColorChanger]

### HTML
```html
 <!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <div class="canvas">
    <h1>Background Color Switcher</h1>
    <span class="button" id="grey"></span>
    <span class="button" id="yellow"></span>
    <span class="button" id="red"></span>
    <span class="button" id="purple"></span>
    <h2>Try to click one of the color above</h2>
    <span>background color of the page will change</span>
  </div>
  <script src="script.js"></script>
  <script src="https://replit.com/public/js/replit-badge-v2.js" theme="dark" position="bottom-right"></script>
</body>

</html>

```

### JS

```js

const button = document.querySelectorAll(".button")
const body = document.querySelector("body")

button.forEach((button)=>{
  // console.log(button)
  button.addEventListener("click", (e)=>{
     const color = e.target.id;
     body.style.backgroundColor = color;
  })
})

```
### CSS
```css
html {
  height: 100%;
  width: 100%;
  margin: 0;
}

span {
  display: block;
}
.canvas {
  margin: 10px auto 100px;
  width: 80%;
  text-align: center;
}

.button {
  width: 100px;
  height: 100px;
  border: solid black 2px;
  display:inline-block;
}

#grey {
  background: grey;
}

#red {
  background: red;
}
#purple {
  background: purple;
}
#yellow {
  background: yellow;
}


```
## 2. BMI calculator

## Project link
(Replit link)[https://replit.com/@MuraliAirody/BMIcalculator]

### HTML


```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <div class="container">
    <h1>BMI Calculator</h1>
    <form>
      <p><label>Height in CM: </label><input type="text" id="height" /></p>
      <p><label>Weight in KG: </label><input type="text" id="weight" /></p>
      <button>Calculate</button>
      <div id="results"></div>
      <div id="weight-guide">
        <h3>BMI Weight Guide</h3>
        <p>Under Weight = Less than 18.6</p>
        <p>Normal Range = 18.6 and 24.9</p>
        <p>Overweight = Greater than 24.9</p>
      </div>
    </form>
  </div>
  <script src="script.js"></script>
  <script src="https://replit.com/public/js/replit-badge-v2.js" theme="dark" position="bottom-right"></script>
</body>

</html>
```

### JS

```js
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const height = parseInt(document.querySelector("#height").value)

  const weight = parseInt(document.querySelector("#weight").value)

  const results = document.querySelector("#results")

  if (height === '' || height < 0 || isNaN(height)) {

    results.innerHTML = "Please enter a valid height"

  } else if (weight < 0 || isNaN(weight) || weight === " ") {

    results.innerHTML = "Please enter a valid weight"

  } else {

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `your bmi is ${bmi}`

    if (bmi < 18.6) {
      const span = document.createElement("span");
      span.appendChild(document.createTextNode(" your underweight"))
      results.appendChild(span)

    }
    if (bmi > 18.6 && bmi < 24.9) {
      const span = document.createElement("span");
      span.appendChild(document.createTextNode(" your in a Normal range"))
      results.appendChild(span)
    }
    if (bmi > 24.9) {
      const span = document.createElement("span");
      span.appendChild(document.createTextNode(" your overweight"))
      results.appendChild(span)
    }
  }

})
```

### CSS

```css
.container {
  width: 100%;
  height: 700px;

  background-color: #969696;
  padding: 10px 30px;
}

#height,
#weight {
  width: 150px;
  height: 25px;
  margin-top: 30px;
  border: 5px black solid;
}
#weight-guide h3{
  margin:auto;
}
#weight-guide {
  margin-left: 75px;
  margin-top: 25px;
}

#results {
  font-size: 35px;
  margin-left: 90px;
  margin-top: 20px;
  color: rgb(241, 241, 241);
}

button {
  text-align: center;
  width: 150px;
  height: 35px;
  margin-left: 95px;
  margin-top: 25px;
  background-color: greenyellow;
  padding: 1px 10px;
  border-radius: 8px;
  color: #212121;
  text-decoration: none;
  border: 2px solid #212121;

  font-size: 25px;
  font-weight: bolder;
}

h1 {
  padding-left: 15px;
  padding-top: 25px;

}

```

## 3. Digital Clock

## Project link
(Replit link)[https://replit.com/@MuraliAirody/DigitalClock]

### HTML

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <div class="center">
    <div id="banner"><span>Your local time</span></div>
    <div id="clock"></div>
  </div>
  <script src="script.js"></script>

  <script src="https://replit.com/public/js/replit-badge-v2.js" theme="dark" position="bottom-right"></script>
</body>

</html>
```

### JS

```javascript
const clock = document.getElementById("clock")

setInterval(() => {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000)
```

### CSS

```css
html {
  height: 100%;
  width: 100%;
}
body{
  background-color: black;
}
.center{
  /* margin: 200px auto 200px; */
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
}
#clock {
  font-size: 40px;
  background-color: orange;
  padding: 20px 50px;
  margin-top: 10px;
  border-radius: 10px;
  color: black;
}
```

## 4. Guess the Number

## Project link
(Replit link)[https://replit.com/@MuraliAirody/Guess-the-number]

### HTML

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <div id="wrapper">
    <h1>Number guessing game</h1>
    <p class="inst"><span>Instruction</span> </p>
    <p>Try and guess a random number between 1 and 100.</p>
    <p>You have 10 attempts to guess the right number.</p>
    </br>
    <form class="form">
      <label2 for="guessField" id="guess">Guess a number</label>
        </br>
        <input type="text" id="guessField" class="guessField">
        <input type="submit" id="subt" value="Submit guess" class="guessSubmit">
    </form>

    <div class="resultParas">
      <p>Previous Guesses: <span class="guesses"></span></p>
      <p>Guesses Remaining: <span class="lastResult">10</span></p>
      <p class="lowOrHi"></p>
    </div>
  </div>
  <script src="script.js"></script>

  <script src="https://replit.com/public/js/replit-badge-v2.js" theme="dark" position="bottom-right"></script>
</body>

</html>
```

### JS

```js
const userInput = document.querySelector("#guessField");
const submitBtn = document.querySelector("#subt");
const guessField = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startNewGame = document.querySelector(".resultParas");

let randomNumber = Math.round(Math.random()*100 + 1)
let guesses=[]
let playgame = true
let guessCount = 0

const p = document.createElement('p');

if(playgame){

  submitBtn.addEventListener("click", (e)=>{
    // console.log("inside submit button")

    e.preventDefault();
    const guess = parseInt(userInput.value)
    // console.log(guess)
    validateGuess(guess)
   
  })
  
}

function validateGuess(guess){
  if(guess<1 || guess>100 || isNaN(guess)){
    displayMessage('please enter the guess between 1 to 100')
  }else{
    // console.log(guessCount)
    // console.log(`random number ${randomNumber}`)
    if(guessCount>=10){
      
      // displayGuess(guess)
      displayMessage(`Game Over. Random number was ${randomNumber}`)
      gameEnd();
    }else{
      guesses.push(guess)

      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  console.log(`guess value inside check guess ${guess}`)
  if (guess === randomNumber) {
    // console.log("got it");
    displayMessage(`You guessed it right`);
    gameEnd();
  } else if (guess < randomNumber) {
    // console.log("low");

    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    // console.log("high");

    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess){
   userInput.value = ""
   guessField.innerHTML += `${guess} `
   guessCount++;
   console.log(`guess count inside displaygame ${guessCount}`)
   remaining.innerHTML = `${10-guessCount}`
}

function displayMessage(message){
  // console.log(message)
  lowOrHi.innerHTML = `<span>${message}</span>`
}

function gameEnd(){
  // console.log("inside end game")
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  submitBtn.setAttribute('disabled'," ")
  p.classList.add('button');
  p.innerHTML = `<h3 id="newGame">Start new Game</h3>`;
  startNewGame.appendChild(p);
  playgame = false;
  newGame();
}
function newGame(){
  // console.log("inside new game")

  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    // console.log("inside new game button")

    randomNumber = parseInt(Math.random() * 100 + 1);
    guesses = [];
    guessCount= 0;
    guessField.innerHTML = '';
    remaining.innerHTML = `${10 - guessCount} `;
    userInput.removeAttribute('disabled');
    submitBtn.removeAttribute('disabled');
    startNewGame.removeChild(p);
    lowOrHi.innerHTML='';
    
    playgame = true;
  });
}
```

### CSS
```css

body {
  background-color: #212121;
}


#wrapper {
  box-sizing: border-box;
  text-align: center;
  width: 450px;
  height: 650px;
  background-color: #474747;
  color: #fff;
  font-size: 25px;
  margin: 0 auto;
}

.lastResult {
  color: white;
  padding: 7px;
}

.guesses {
  color: white;
  padding: 7px;
}

button {
  background-color: #141414;
  color: #fff;
  width: 250px;
  height: 50px;
  border-radius: 25px;
  font-size: 30px;
  border-style: none;
  margin-top: 30px;
  /* margin-left: 50px; */
}

#subt {
  background-color: #161616;
  color: #ffffff;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  font-size: 20px;
  border-style: none;
  margin-top: 50px;
  /* margin-left: 75px; */
}

#guessField {
  color: #000;
  width: 250px;
  height: 50px;
  font-size: 30px;
  border-style: none;
  margin-top: 25px;

  /* margin-left: 50px; */
  border: 5px solid #6c6d6d;
  text-align: center;
}

#guess {
  font-size: 25px;
  /* margin-left: 90px; */
  margin-top: 120px;
  color: #fff;
}

.guesses {
  margin-left: 10px;
  background-color: #7a7a7a;
}


h1 {
  background-color: #161616;

  color: #fff;
  text-align: center;
}

p {
  font-size: 16px;
  text-align: center;
}

.inst{
  color:red
}
```