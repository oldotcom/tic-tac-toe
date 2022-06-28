"use strict";

const selectBox = document.querySelector('.select-box'),
      selectXBtn = selectBox.querySelector('.playerX'),
      selectOBtn = selectBox.querySelector('.playerO'),
      playBoard = document.querySelector('.play-board'),
      allBox = document.querySelectorAll('section span'),
      players = document.querySelector('.players'),
      resultBox = document.querySelector('.result-box'),
      wonText = resultBox.querySelector('.won-text'),
      replayBtn = resultBox.querySelector('button');

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
let playerSign = "";
let runBot = true;

function clickedBox(element) {
    playerSign = "X";

    if (players.classList.contains('player')) {
        element.innerHTML = `<i class="${playerOIcon}"></i>`;
        players.classList.add('active');

        playerSign = "O";
        element.setAttribute("id", playerSign);
    } else {
        element.innerHTML = `<i class="${playerXIcon}"></i>`;
        players.classList.add('active');
        element.setAttribute("id", playerSign);
    }
    selectWinner();
    
    playBoard.style.pointerEvents = "none";
    element.style.pointerEvents = "none";

    let randomDelayTime = ((Math.random() * 1000) + 200).toFixed();
    
    setTimeout(() => {
        bot(runBot);
    }, randomDelayTime);
}

function bot(runBot) {
    if (runBot) {
        playerSign = "O";
        let array = [];
        
        for (let i = 0; i < allBox.length; i++) {
            if (allBox[i].childElementCount == 0) {
                array.push(i);
            }
        }
        let randomBox = array[Math.floor(Math.random() * array.length)];
        
        if (array.length > 0) {
            if (players.classList.contains('player')) {
                allBox[randomBox].innerHTML = `<i class="${playerXIcon}"></i>`;
                players.classList.remove('active');

                playerSign = "X";
                allBox[randomBox].setAttribute("id", playerSign);
            } else {
                allBox[randomBox].innerHTML = `<i class="${playerOIcon}"></i>`;
                players.classList.remove('active');
                allBox[randomBox].setAttribute("id", playerSign);
            }
            selectWinner();
        }

        playBoard.style.pointerEvents = "auto";
        allBox[randomBox].style.pointerEvents = "none";
    }
}

function getID(idname) {
    return document.querySelector(".box" + idname).id;
}

function checkID(val1, val2, val3, sign) {
  if (getID(val1) == sign && getID(val2) == sign && getID(val3) == sign) {
     return true;
  } 
}

function selectWinner() {
    if (checkID(1, 2, 3, playerSign) || checkID(4, 5, 6, playerSign) || checkID(7, 8, 9, playerSign) || (checkID(1, 4, 7, playerSign)) || checkID(2, 5, 8, playerSign) || checkID(3, 6, 9, playerSign) || checkID(1, 5, 9, playerSign) || checkID(3, 5, 7, playerSign)) {
        runBot = false;
        bot(runBot);

        setTimeout(() => {
            playBoard.classList.remove('show');
            resultBox.classList.add('show');
        }, 1000);

        wonText.innerHTML = `Player <p>${playerSign}</p> won the game!`;
    } else {
        if (getID(1) != "" && getID(2) != "" && getID(3) != "" && getID(4) != "" && getID(5) != "" && getID(6) != "" && getID(7) != "" && getID(8) != "" && getID(9) != "") {
            runBot = false;
            bot(runBot);
    
            setTimeout(() => {
                playBoard.classList.remove('show');
                resultBox.classList.add('show');
            }, 1000);

            wonText.textContent = `Match has been drawn!`;
        }
    }
}

replayBtn.addEventListener('click', () => {
    window.location.reload();
});
