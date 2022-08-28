"use strict";

let sourceText = document.querySelector("p.text").innerText;
let editableText = sourceText;
//console.log(editableText);
const pattern1 = /'/g;
const pattern2 = /:\s'/gm;
const pattern3 = /'$/gm;
//console.log(editableText.match(pattern1));
//console.log(editableText.match(pattern2));
//console.log(editableText.match(pattern3));

document.querySelector('.but1').addEventListener('click', () => {
    editableText = sourceText;
    editableText = editableText.replace(pattern1, '\"');
    document.querySelector('.text').innerText = editableText;
});

document.querySelector('.but2').addEventListener('click', () => {
    editableText = sourceText;
    editableText = editableText.replace(pattern2, ': \"');
    editableText = editableText.replace(pattern3, '\"');
    document.querySelector('.text').innerText = editableText;
});

document.querySelector('.but3').addEventListener('click', () => {
    document.querySelector('.text').innerText = sourceText;
});


