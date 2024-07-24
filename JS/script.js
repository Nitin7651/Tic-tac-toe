let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgametn = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],

];
const resetGame = () =>{
    turn0 = true;
    enablebleboxes();
    msgContainer.classList.add("hide");
};


boxes.forEach((box) => {
    box.addEventListener("click", () => {
       
        if (turn0) {
            box.innerText = "0";
            turn0 = false;
        } else {
            box.innerText = "x";
            turn0 = true;
        }
        box.disabled = true;

        CheckWinner();


    });
});
const enablebleboxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const disebleboxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
};
 const showWinner = (Winner) => {
 msg.innerText = `Cougratulatios,Winner is ${Winner}`;
 msgContainer.classList.remove("hide");
 disebleboxes();
 }

const CheckWinner = () => {
    for (let pattern of  winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !=  "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                
                showWinner(pos1Val);
            }
        }

    }
}
newgametn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);







































// let mode = document.querySelector("#mode");
// let currmode ="light";

// mode.addEventListener("click", () =>{
//     if (currmode === "light") {
//         currmode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     } else {
//         currmode = "light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }
//     console.log(currmode);
// })


// let bn1 = document.querySelector("#bn1");

// // bn1.onclick = ()  => {
// //     console.log("bn1 was clicked");

// // }
// bn1.addEventListener("click", (evt) =>{
//     console.log("button1 was clicked");
//     console.log(evt);
//     console.log(evt.type);
// })
// bn1.addEventListener("click", () =>{
//     console.log("button1 was clicked - handler2     ");
// })
// let div = document.querySelector("div");

// div.onmouseover = () => {
//     console.log("you are on box ");
// }