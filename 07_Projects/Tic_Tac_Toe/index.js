const cells = document.querySelectorAll(".cell")
const statusText = document.querySelector(".statusText")
const refreshBtn = document.querySelector(".resetBtn")

const winCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let options= ["","","","","","","","",""]
let currentPlayer = 'X'
let running = false

initializeGame()

function initializeGame(){
   cells.forEach(cell=>cell.addEventListener("click",(e)=>clickedOnCell(e)))
   refreshBtn.addEventListener("click",restartGame)
   statusText.innerText = `${currentPlayer}'s turn`
   running = true
//    console.log("inside end of initialize game");
}

function clickedOnCell(e){
    const index = e.target.getAttribute("cellIndex")
    // console.log("cell index ",index);
    
    if(options[index]!="" || !running){
        return
    }
    updateCell(e,index)
    checkWinner()
}

function updateCell(e,index){
//    console.log("inside update cell");
   options[index] = currentPlayer
//    console.log(options);
   e.target.innerText = currentPlayer
}

function changePlayer(){
    // console.log("inside change player")
    currentPlayer = currentPlayer === 'X'?'O':'X';
    statusText.innerText = `${currentPlayer}'s turn`
}
function checkWinner(){
    // console.log("inside check winner");
    let roundWon = false;
    
    for(let i=0;i<winCondition.length;i++){
        const condition = winCondition[i];
        const cellA = options[condition[0]]
        const cellB = options[condition[1]]
        const cellC = options[condition[2]]

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA === cellB && cellB === cellC){
            roundWon = true;
            break;
        }
    }
    if(roundWon){
        statusText.innerText = `${currentPlayer} wins !`
        running = false
    }else if(!options.includes("")){
        statusText.innerText = `Match Draw`
        running = false;
    }else{
        changePlayer()
    }
}

function restartGame(){
    // console.log("inside restart game");
    currentPlayer = 'X';
    options= ["","","","","","","","",""]
    cells.forEach((cell)=>{
        cell.innerText=""
    })
    running = true;
}