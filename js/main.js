const FIRST_PROJECT = "FIRST_PROJECT";
console.log(FIRST_PROJECT+"\n\n");

let temp = 0;
let text = document.querySelector("h1").textContent;


btn.addEventListener("click", nn);

function nn() {
let randomColor = Math.floor(Math.random()*16777215).toString(16);
    if (temp == 0) {
        document.querySelector("h1").textContent = "Jsi se zabit!";
        temp = 1;
    }else if (temp == 1) {
        document.querySelector("h1").textContent = "jsi dumb asf";
        temp = 2;
    }else if (temp == 2) {
        document.querySelector("h1").textContent = "Kill yourself";
        temp = 3;
    }else {
        document.querySelector("h1").textContent = text;
        temp = 0;
    }

    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;


    randomColor = 0;
}