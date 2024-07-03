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