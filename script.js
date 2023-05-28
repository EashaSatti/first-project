// function wel() {
//   let r = document.getElementById("welcome-el");
//   let n = "easha";
//   let g = " Assalam-o-Alaikum";

//   let s = n + g;
//   let b = (r.innerText = s);
//   console.log(b);
// }

// let userName = "eashaSatti";
// console.log(userName);

// let message = "you have recieved new notification";
// console.log(message);
// console.log("My name is " + userName + " and message is " + message);

// let points = 6;
// let bonus = "23";
// let total = 7 + bonus;
// console.log(total);

// function countdown() {
//   setTimeout(() => {
//     console.log(1);
//     console.log(2);
//     console.log(3);
//     console.log(4);
//     console.log(5);
//   }, 3000);
// }

let IncreBtn = document.getElementById("incerment-btn");
let countEl = document.getElementById("count-el");
let ResetBtn = document.getElementById("reset");
let SaveBtn = document.getElementById("save1-el");
let para = document.getElementById("para");
// let SaveBtn1 = document.getElementById("save-el");

IncreBtn = 0;
function increment() {
  IncreBtn = IncreBtn + 1;
  countEl.innerText = IncreBtn;
}
// function save() {
//   // let sav;
//   // sav = IncreBtn;
//   console.log(IncreBtn);
// }
function Decrement() {
  let newVar;
  if (IncreBtn > 0) {
    newVar = --IncreBtn;
  }
  // IncreBtn = 0;
  // if ((countEl = 0)) {
  countEl.innerText = newVar;
}
// }
function reset() {
  IncreBtn = 0;
  countEl.innerText = 0;
}
function prevEntry() {
  let countStr = IncreBtn + " - ";
  SaveBtn.textContent += countStr;
}
// function clearE() {
//   IncreBtn = 0;
//   SaveBtn.innerText = "No Previous Element";
// }
function reset1() {
  IncreBtn = 0;
  para.innerText = "all elements cleared";
}
