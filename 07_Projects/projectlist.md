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



