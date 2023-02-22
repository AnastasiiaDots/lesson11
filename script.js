'use strict'

const btn = document.getElementById('btn');
const square = document.getElementById('square');
const text = document.getElementById('text');

const colors = ['red', 'blue', 'green', 'yellow', 'purple'];



btn.addEventListener('click', () => {
    const color = text.value;
    text.textContent = color;
    square.style.backgroundColor = color;
});


console.dir(square);
console.dir(btn)




