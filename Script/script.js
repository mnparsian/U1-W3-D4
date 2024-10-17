const extractNumbers = []
const extractNumbersList = document.getElementById('extracted-numbers')


const board = document.getElementById("board");
for (let i = 1; i <= 76; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.id = `cell-${i}`;
  cell.textContent = i;
  board.appendChild(cell);
}

const extract = document.getElementById("extract");
extract.addEventListener("click", () => {
  /* const extractNumber = Math.floor(Math.random() * 76) + 1; */
  let extractNumber;
    do {
        extractNumber = Math.floor(Math.random() * 76) + 1; 
    } while (extractNumbers.includes(extractNumber)); 

  const cell = document.getElementById(`cell-${extractNumber}`);

  /* if(!extractNumbers.includes(extractNumber)) */
    extractNumbers.push(extractNumber)
    cell.style.backgroundColor = "yellow";
    const listItem =document.createElement('li');
    listItem.textContent=extractNumber;
    extractNumbersList.appendChild(listItem);
  
  /* else
  alert ("This cell extracted before") */
  
});


const eraser = document.getElementById("eraser");
eraser.addEventListener('click',()=>{
    for(let i=1; i <= 76;i++){
        const cell = document.getElementById(`cell-${i}`);
        cell.style.backgroundColor="";
    }
    extractNumbers.length=0;
    extractNumbersList.innerHTML='';
    alert("The board is clear!")
}
)

//extra

function generatePlayerBoard() {
    const playerBoard = document.getElementById("player-board");
    playerBoard.innerHTML = ""; 

    const playerNumbers = [];
    while (playerNumbers.length < 24) {
        const randomNum = Math.floor(Math.random() * 76) + 1;
        if (!playerNumbers.includes(randomNum) && !extractNumbers.includes(randomNum)) { 
            playerNumbers.push(randomNum);
        }
    }

    for (let i = 0; i < 24; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.id = `player-cell-${playerNumbers[i]}`;
        cell.textContent = playerNumbers[i];
        playerBoard.appendChild(cell);
    }
}

generatePlayerBoard();