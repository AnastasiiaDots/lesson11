'use strict'

const btn = document.getElementById('btn');
const square = document.getElementById('square');
const text = document.getElementById('text');

const e_btn = document.getElementById('e_btn');

const range = document.getElementById('range');
const circle = document.getElementById('circle');

e_btn.style.display = 'none';

btn.addEventListener('click', () => {
    const color = text.value;
    text.textContent = color;
    square.style.backgroundColor = color;
});

range.addEventListener('input', () => {
    const value = range.value;
    const percent = value + '%';
    circle.style.width = percent;
    circle.style.height = percent;
    // console.log(`Width: ${circle.style.width}, Height: ${circle.style.height}`);
});

console.dir(square);
console.dir(btn);




