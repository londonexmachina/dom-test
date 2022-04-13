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

bodyContainer.appendChild(div);