'use strict'

const btn = document.getElementById('btn');
const square = document.getElementById('square');
const text = document.getElementById('text');

const e_btn = document.getElementById('e_btn');

e_btn.style.display = 'none';

btn.addEventListener('click', () => {
    const color = text.value;
    text.textContent = color;
    square.style.backgroundColor = color;
});




console.dir(square);
console.dir(btn)




