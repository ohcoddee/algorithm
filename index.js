const starCanvas = document.querySelector(".star-canvas");

function addStar() {
  const star = document.createElement("span");
  star.innerText = "*";

  starCanvas.appendChild(star);
}

function addSpace() {
  const star = document.createElement("span");
  star.innerText = "·";

  starCanvas.appendChild(star);
}

function addBr() {
  const br = document.createElement("br");

  starCanvas.appendChild(br);
}

// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < i + 1; j++) {
//     addStar();
//   }
//   addBr();
// }

// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 5 - i; j++) {
//     addStar();
//   }
//   addBr();
// }

// for (let i = 0; i < 5; i++) {
//   for (let k = 0; k < 4 - i; k++) {
//     addSpace();
//   }
//   for (let j = 0; j < i + 1; j++) {
//     addStar();
//   }
//   addBr();
// }

for (let i = 1; i < 10; i++) {
  for (let j = 1; j < i + 1; j++) {
    addStar();
  }
  // for (let k = 1; k < i - k; k++) {
  //   addStar();
  // }
  addBr();
}
