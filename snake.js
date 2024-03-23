var user = "y";
var comp = "x";
var draw = 0, userpoint = 0, comppoint = 0;
var score1=0, score2=0;
const select = () => {
    let n = Math.random();
    if (n < 0.33) {
        comp = "snake"
        document.querySelector("#ques").innerHTML=`<img src="1711126214194.jpg" alt="" class="opt">`
    }
    else if (n > 0.33 && n < 0.667) {
        comp = "water";
        document.querySelector("#ques").innerHTML=`<img src="1711126319765.jpg" alt="" class="opt">`
    }
    else {
        comp = "gun"
        document.querySelector("#ques").innerHTML=`<img src="IMG_20240322_231008.jpg" alt="" class="opt">`

    }


}

function compare() {
    if (user == comp) {
        draw = 1;

    }
    if (user == "snake" && comp == "water") {
        userpoint = 1;
    }
    else if (user == "snake" && comp == "gun") {
        comppoint = 1;
    }
    else if (user == "water" && comp == "gun") {
        userpoint = 1;
    }
    else if (user == "water" && comp == "snake") {
        comppoint = 1;
    }
    else if (user == "gun" && comp == "snake") {
        userpoint = 1;
    }
    else if (user == "gun" && comp == "water") {
        comppoint = 1;
    }
score();
}


var s = document.getElementById("snake");
s.addEventListener("click", () => {

    user = "snake";
    select();
    compare();
    rs();
    rest();
})
var w = document.getElementById("water");
w.addEventListener("click", () => {
    user = "water";
     select();
    compare();
    rs();
    rest();
})
var g = document.getElementById("gun");
g.addEventListener("click", () => {
    user = "gun";
     select();
    compare();

    rs();
rest();
})

function rs() {
    if (userpoint > 0) {
        document.querySelector(".result").innerHTML = "You Won!"
    }
    else if (comppoint > 0) {
        document.querySelector(".result").innerHTML = "Better Luck Next Time!"
    }
    else if (draw > 0) {
        document.querySelector(".result").innerHTML = "Draw"

    }


    console.log("user =", user, userpoint);
    console.log("comp =", comp, comppoint);
}
function rest() {
    userpoint = 0;
    comppoint = 0;
    draw = 0;

}
function score(){
    score1+=userpoint;
    score2+=comppoint;
    document.querySelector(".score").innerHTML=`SCORE : <br>USER : ${score1}<br>COMP : ${score2}`
}
