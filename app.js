let msg$con = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let new$btn = document.querySelector("#new-btn");
let container = document.querySelector(".container");
let game = document.querySelector(".game");
let boxes = document.querySelectorAll(".box");
let reset$btn = document.querySelector("#reset-btn");

const winning = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let player0 = true;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (player0){
            box.innerText = "0";
            player0 = false;
            box.style.color = "green"
        }else {
            box.innerText = "X"
            player0 = true;
            box.style.color = "red"
        }
        box.disabled = true; 
        checkWinner(); 
    })
})

const showWinner = (winner) => {
    msg$con.classList.remove("hide");
    msg.innerText = `Congratulations ! Winner is Player ${winner}`;
}

const checkWinner = () => {
    for(let arr of winning){
        pos1 = boxes[arr[0]].innerText;
        pos2 = boxes[arr[1]].innerText;
        pos3 = boxes[arr[2]].innerText;
    
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                showWinner(pos1);
                disableBoxes();
            }
        }
    }
}

const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    })
}

new$btn.addEventListener("click", () => {
    msg$con.classList.add("hide");
    for(box of boxes){
        box.innerText = "";
        box.disabled = false;
    }
})

reset$btn.addEventListener("click", () => {
    for(let box of boxes){
        box.innerText = "";
        box.disabled = false;
    }
})
