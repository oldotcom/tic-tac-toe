"use strict";

const selectBox = document.querySelector('.select-box'),
      selectXBtn = selectBox.querySelector('.playerX'),
      selectOBtn = selectBox.querySelector('.playerO'),
      playBoard = document.querySelector('.play-board');

window.onload = () => {
    selectXBtn.addEventListener('click', () => {
        selectBox.classList.add('hide');
        playBoard.classList.add('show');
    });
    selectOBtn.addEventListener('click', () => {
        selectBox.classList.add('hide');
        playBoard.classList.add('show');
    });
};