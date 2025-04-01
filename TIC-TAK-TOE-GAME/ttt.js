let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msg = document.querySelector(".msg");
let msgcontainer = document.querySelector(".msg-container");
let turn0 = true;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box clicked");
        if (turn0) {
            box.innerText = "O";
            box.classList.add("green");
            box.classList.remove("red");
            turn0 = false;
        } else {
            box.innerText = "X";
            box.classList.add("red");
            box.classList.remove("green");
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const boxdisabled = () => {
    for (box of boxes) {
        box.disabled = true;
    }
};

const boxenable = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("red", "green");
    }
};

const resetgame = () => {
    turn0 = true;
    boxenable();
    msgcontainer.classList.add("hide");
};

const showwinner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    boxdisabled();
};

const checkwinner = () => {
    for (pattern of winpatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("Winner", pos1);
                showwinner(pos1);
            }
        }
    }
};

newbtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);
