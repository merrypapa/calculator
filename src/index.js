// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
let xNum = [0, 0],
  numberOfInput = 0,
  selectOp = "";
const zeroBtn = document.querySelector(".zeroBtn"),
  oneBtn = document.querySelector(".oneBtn"),
  twoBtn = document.querySelector(".twoBtn"),
  threeBtn = document.querySelector(".threeBtn"),
  fourBtn = document.querySelector(".fourBtn"),
  fiveBtn = document.querySelector(".fiveBtn"),
  sixBtn = document.querySelector(".sixBtn"),
  sevenBtn = document.querySelector(".sevenBtn"),
  eightBtn = document.querySelector(".eightBtn"),
  nineBtn = document.querySelector(".nineBtn"),
  resultNum = document.querySelector(".resultNum"),
  addBtn = document.querySelector(".addBtn"),
  subBtn = document.querySelector(".subBtn"),
  mulBtn = document.querySelector(".mulBtn"),
  divBtn = document.querySelector(".divBtn"),
  clearBtn = document.querySelector(".clearBtn"),
  equalBtn = document.querySelector(".equalBtn");

function handleXInput(event) {
  const inputNum = event.target.value;
  xNum[numberOfInput] = xNum[numberOfInput] * 10 + parseInt(inputNum);
  resultNum.innerHTML = xNum[numberOfInput];
}

const operations = {
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  mul: function (a, b) {
    return a * b;
  },
  div: function (a, b) {
    return a / b;
  }
};

function handleoperatoin(event) {
  if (numberOfInput === 1) {
    if (selectOp === "+") {
      xNum[0] = operations.add(xNum[0], xNum[1]);
    } else if (selectOp === "-") {
      xNum[0] = operations.sub(xNum[0], xNum[1]);
    } else if (selectOp === "*") {
      xNum[0] = operations.mul(xNum[0], xNum[1]);
    } else if (selectOp === "/") {
      xNum[0] = operations.div(xNum[0], xNum[1]);
    }
    resultNum.innerHTML = xNum[0];
  } else {
    numberOfInput = 1;
  }
  selectOp = event.target.value;
  xNum[1] = 0;
}

function handleclear(event) {
  xNum = [0, 0];
  numberOfInput = 0;
  resultNum.innerHTML = xNum[0];
}

function handleequal(event) {
  if (selectOp === "+") {
    xNum[0] = operations.add(xNum[0], xNum[1]);
  } else if (selectOp === "-") {
    xNum[0] = operations.sub(xNum[0], xNum[1]);
  } else if (selectOp === "*") {
    xNum[0] = operations.mul(xNum[0], xNum[1]);
  } else if (selectOp === "/") {
    xNum[0] = operations.div(xNum[0], xNum[1]);
  }
  xNum[1] = 0;
  resultNum.innerHTML = xNum[0];
}
function init() {
  zeroBtn.addEventListener("click", handleXInput);
  oneBtn.addEventListener("click", handleXInput);
  twoBtn.addEventListener("click", handleXInput);
  threeBtn.addEventListener("click", handleXInput);
  fourBtn.addEventListener("click", handleXInput);
  fiveBtn.addEventListener("click", handleXInput);
  sixBtn.addEventListener("click", handleXInput);
  sevenBtn.addEventListener("click", handleXInput);
  eightBtn.addEventListener("click", handleXInput);
  nineBtn.addEventListener("click", handleXInput);
  addBtn.addEventListener("click", handleoperatoin);
  subBtn.addEventListener("click", handleoperatoin);
  mulBtn.addEventListener("click", handleoperatoin);
  divBtn.addEventListener("click", handleoperatoin);
  equalBtn.addEventListener("click", handleequal);
  clearBtn.addEventListener("click", handleclear);
}
init();
