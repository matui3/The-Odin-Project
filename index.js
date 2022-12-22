const p = document.createElement('p');
p.style.cssText = 'color: red';
p.textContent = "Hey I'm red!";

const h3 = document.createElement('h3');
h3.style.cssText = 'color: blue';
p.textContent = "I'm a blue h3!";

const div = document.createElement('div');
div.setAttribute('style', 'border-color: black, background-color: pink');
const h1 = document.createElement('h1');
const p1 = document.createElement('p1');
div.appendChild(h1);
div.appendChild(p1);

h1.textContent = "I'm in a div!";
p.textContent = "ME TOO!";

// Method 2 below
const btn = document.querySelector('%btn');
btn.onclick = () => alert("Hello World")

const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {
    alert("Hello World");
});