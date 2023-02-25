'use strict'

const btn = document.getElementById('btn');
const square = document.getElementById('square');
const text = document.getElementById('text');

const e_btn = document.getElementById('e_btn');

const range = document.getElementById('range');
const span = document.getElementById('range-span');
const circle = document.getElementById('circle');

e_btn.style.display = 'none';

const onClick = function () {
    text.textContent = text.value;
    square.style.backgroundColor = text.value;
}

const rangeInput = function () {
    circle.style.width = range.value + '%';
    circle.style.height = range.value + '%';
    span.innerHTML = range.value + '%';
}

rangeInput();
btn.addEventListener('click', onClick);
range.addEventListener('input', rangeInput);

console.dir(square);
console.dir(btn);