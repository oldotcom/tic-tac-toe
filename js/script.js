"use strict";

const selectBox = document.querySelector('.select-box'),
      selectXBtn = selectBox.querySelector('.playerX'),
      selectOBtn = selectBox.querySelector('.playerO'),
      playBoard = document.querySelector('.play-board'),
      allBox = document.querySelectorAll('section span'),
      players = document.querySelector('.players');

window.onload = () => {
    for (let i = 0; i < allBox.length; i++) {
        allBox[i].setAttribute('onclick', 'clickedBox(this)');
    }
    
    selectXBtn.addEventListener('click', () => {
        selectBox.classList.add('hide');
        playBoard.classList.add('show');
    });
    selectOBtn.addEventListener('click', () => {
        selectBox.classList.add('hide');
        playBoard.classList.add('show');
        players.setAttribute('class', 'players active player');
    });
};

let playerXIcon = "fa-solid fa-xmark";
let playerOIcon = "fa-solid fa-o";

function clickedBox(element) {
    if (players.classList.contains('player')) {
        element.innerHTML = `<i class="${playerOIcon}"></i>`;
        players.classList.add('active');
    } else {
        element.innerHTML = `<i class="${playerXIcon}"></i>`;
        players.classList.add('active');
    }
    element.style.pointerEvents = "none";
}