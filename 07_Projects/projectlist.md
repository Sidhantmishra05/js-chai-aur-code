#Project Related To Dom

##project link  
[([Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-xty6jy))]

#Solution Code

##Project 1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach(function (button) {
  console.log(buttons);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target)
    const bodycolor=e.target.id;
    switch(bodycolor){
      case "grey":
      body.style.backgroundColor= e.target.id
      break;
      case "red":
      body.style.backgroundColor= e.target.id
      break;
      case "blue":
      body.style.backgroundColor= e.target.id
      break;
      case "yellow":
      body.style.backgroundColor= e.target.id
      break;
    }
  });
});

```

##Project 2

``` javascript
const form=document.querySelector('form');
form.addEventListener('submit', function(e){
  e.preventDefault();
  const height=parseInt(document.querySelector('#height').value);
  const weight=parseInt(document.querySelector('#weight').value);
  const results=document.querySelector('#results');
  if(height === ''|| height < 0 || isNaN(height)){
    results.innerHTML = `Please Enter a Valid number ${height}`;
  }else if(weight === ''|| weight < 0 || isNaN(weight)){
    results.innerHTML = `Please enter a valid number ${weight} `
  }else{
    const bmi=(weight/((height*height)/10000)).toFixed(2);
    if(bmi<18.6){
      results.innerHTML = `<span>${bmi} Under Weight</span>`;
    }
    else if(bmi>18.6 && bmi<24.9){
      results.innerHTML = `<span>${bmi} Normal Range</span>`;
    }
    else{
      results.innerHTML = `<span>${bmi} OverWeight</span>`;
    }
  }
});

```

##Project 3

```javascript
const clock=document.querySelector('#clock')
setInterval(function(){
  let date=new Date();
  clock.innerHTML=date.toLocaleTimeString()
},1000);

```
##Project 4

```javascript
let randomNumber=parseInt(Math.random()*100 + 1)
console.log(randomNumber)
const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrHi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');

const p=document.createElement('p');

let prevGuess=[];
let numGuess=0;

let playGame=true;

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess=parseInt(userInput.value);
    // console.log(guess);
    validateGuess(guess);
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number');
  }else if(guess<1){
    alert('Plaese enter a number more than 100');
  }else if(guess >100){
    alert('Please enter a number more than 100');
  }
  else{
    prevGuess.push(guess);
    if(numGuess===9){
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    }else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess){
  if(guess===randomNumber){
    displayMessage(`You guessed it right`);
    endGame();
  }
  else if(guess<randomNumber){
    displayMessage(`Number is too low`);
  }
  else if(guess>randomNumber){
    displayMessage(`Number is too high`);
  }
}

function displayGuess(guess){
  userInput.value='';
  guessSlot.innerHTML+=`${guess}  `;
  numGuess++;
  remaining.innerHTML=`${10-numGuess}`
}

function displayMessage(message){
  lowOrHi.innerHTML=`<h2>${message}</h2>`
}
function endGame(){
  userInput.value='';
  userInput.setAttribute('disabled','');
  p.classList.add('button');
  p.innerHTML=`<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame=false;
  newGame();
}

function newGame(){
  const newGameButton=document.querySelector('#newGame');
  newGameButton.addEventListener('click',function(e){
    randomNumber=parseInt(Math.random()*100+1);
    console.log(randomNumber)
    prevGuess=[];
    numGuess=0;
    guessSlot.innerHTML='';
    remaining.innerHTML=`${10-numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame=true;
  });
}

```



