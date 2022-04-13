const bodyContainer = document.querySelector('body');
const pContent = document.createElement('p');

pContent.classList.add('redText');
pContent.textContent = 'Hey I\'m red!';

bodyContainer.appendChild(pContent);

const containerStyle = document.querySelector('p').style;

containerStyle.setProperty('color','red');

const h3 = document.createElement('h3');

h3.classList.add('blueText');
h3.textContent = 'I\'m a blue h3';

bodyContainer.appendChild(h3);

const styleH3 = document.querySelector('h3').style;
styleH3.setProperty('color','blue');

const div = document.createElement('div');
div.classList.add('div');
bodyContainer.appendChild(div);

const divContainer = document.querySelector('div');
const h1 = document.createElement('h1');
h1.textContent = "pls work";
divContainer.appendChild(h1);

const p2 = document.createElement('p');
p2.textContent = "ME TOO!";

divContainer.appendChild(p2);

//const styleDiv = document.querySelector('div').style;
//styleDiv.setProperty('background-color','pink');

div.setAttribute("style", "background-color:pink;border:solid black 3px;");