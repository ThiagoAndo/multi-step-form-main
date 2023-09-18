"use strict";

import {
  monthly,
  form,
  formVal,
  addPrice,
  planBtn,
  finalPrice,
  planBtnInside,
  yerly,
  price,
  visible,
  planType,
  finalSum,
  checBox,
  checBoxDiv,
  priceRangeYear,
  priceRangeMonth,
  priceRangeYearAdds,
  priceRangeMonthAdds,
  steps,
  x,
} from "./utils/variables.js";
import { printMessagge } from "./utils/printMessage.js";
import { bntsEvt, click,  left, leftL } from "./utils/next&backbtn.js";
let choseCheck = [];
let mORy = "mo";
let myVAlue;
let doneResizing = null;
let planBcolor = "Arcade";
let last = "(Montly)";
let thisLeft = left;
let thisLeftL = leftL;
let pickPrice = null;
let click2 = 0;
bntsEvt();
//   Information Box ===============================================

//   Information Box ==============================================
//   Next step and Go back buttons ================================

//  End of  Next step and Go back buttons ================================
//  Form Validation ======================================================
export function formValidation() {
  if (click > 0) {
    return true;
  }
  let emp = [];
  for (var i = 0; i < formVal.length; i++) {
    if (formVal[i].value == "") {
      emp.push(formVal[i].value);
    }
  }
  empty();
  function empty() {
    if (
      formVal[0].value == "" &&
      formVal[1].value == "" &&
      formVal[2].value == ""
    ) {
      printMessagge("Make sure to fill in the form.");
    } else {
      checkEmpty();
    }
  }
  function checkEmpty() {
    for (var i = 0; i < formVal.length; i++) {
      if (formVal[i].value == "") {
        printMessagge("Make sure to fill in your " + formVal[i].name + ".", i);
        break;
      }
    }
  }
  function checkName() {
    myVAlue = formVal[0].value;
    var condition = myVAlue.indexOf(" ") < 0;
    if (!condition) {
      return true;
    } else {
      printMessagge("Make sure to fill in Your Name and Surname.", 0);
    }
  }
  function checkEamil() {
    myVAlue = formVal[1].value;
    const pass = myVAlue.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if (pass) {
      return true;
    } else {
      printMessagge("Make sure to enter a valid email.", 1);
    }
  }
  function checkNumber() {
    let valueExp = new RegExp(
      "^\\+[3]{1}[5]{1}[3]{1}-[0-9]{2}-[0-9]{3}-[0-9]{4}$"
    );
    if (valueExp.test(formVal[2].value)) {
      return true;
    } else {
      printMessagge("Make sure to enter a valid Phone Number.", 2);
    }
  }
  if (emp.length == 0) {
    if (checkName() && checkEamil() && checkNumber()) {
      return true;
    }
  }
}
//  End of Form Validation ======================================================
//  Plans Type (month or Year)===================================================
planBtn.onclick = () => {
  for (var i = 0; i < planType.length; i++) {
    planType[i].classList.remove("bcolor");
  }
  choseCheck = [];
  checBox.forEach((box) => {
    box.checked = false;
  });
  checBoxDiv.forEach((box) => {
    let atrr = box.getAttribute("value");
    let atrrName = document.getElementById(atrr);
    let disp = document.querySelector("." + atrrName.name);
    disp.classList.add("display");
    box.classList.remove("dcolor");
  });
  if (click2 == 0) {
    planBtnInside.classList.add("transEfect");
    monthly.classList.add("color");
    yerly.classList.remove("color");
    visible.forEach((p) => {
      p.style.display = "block";
    });
    changePrice();
  }
  function changePrice() {
    let prcs = [];
    let prcsAdd = [];
    let prcTimes = 0;
    switch (click2) {
      case 0:
        prcs = priceRangeYear;
        prcsAdd = priceRangeYearAdds;
        prcTimes = 10;
        mORy = "yr";
        last = "(Yerly)";
        break;
      default:
        prcs = priceRangeMonth;
        prcsAdd = priceRangeMonthAdds;
        prcTimes = 0.1;
        mORy = "mo";
        last = "(Montly)";
    }
    for (var i = 0; i <= 2; i++) {
      price[i].innerHTML = prcs[i];
      addPrice[i].innerHTML = prcsAdd[i];
      finalSum[i].innerHTML = prcsAdd[i];
      planType[i].setAttribute(
        "value",
        planType[i].getAttribute("value") * prcTimes
      );
      checBox[i].setAttribute(
        "value",
        checBox[i].getAttribute("value") * prcTimes
      );
    }
  }
  if (click2 == 1) {
    planBtnInside.classList.remove("transEfect");
    monthly.classList.remove("color");
    yerly.classList.add("color");
    visible.forEach((p) => {
      p.style.display = "none";
    });
    changePrice();
  }
  click2++;
  if (click2 == 2) click2 = 0;
  planType[0].classList.add("bcolor");
  pickPrice = planType[0].getAttribute("value");
  planBcolor = document.querySelector(".bcolor .txt p:first-of-type");
};

(function () {
  "user strict";
  planType.forEach((plan) => {
    plan.addEventListener("click", function () {
      for (var i = 0; i < planType.length; i++) {
        planType[i].classList.remove("bcolor");
      }
      pickPrice = this.getAttribute("value");
      plan.classList.add("bcolor");
      planBcolor = document.querySelector(".bcolor .txt p:first-of-type");
    });
  });
})();
//  End of Plans Type (month or Year)=====================================
//  Chebox     ===========================================================
(function () {
  "user strict";
  checBoxDiv.forEach((box) => {
    box.addEventListener("click", function () {
      const atrr = this.getAttribute("value");
      const atrrName = document.getElementById(atrr);
      const disp = document.querySelector("." + atrrName.name);
      const cBox = document.getElementById(atrr);

      if (atrrName.checked === false) {
        choseCheck.push(atrrName.value);
        box.classList.add("dcolor");
        disp.classList.remove("display");
        cBox.checked = true;
      } else {
        box.classList.remove("dcolor");
        disp.classList.add("display");
        choseCheck.splice(choseCheck.indexOf(atrrName.value), 1);
        cBox.checked = false;
      }
    });
  });
})();
export function setFinalPrice() {
  let finalPlan = document.querySelector("#arcade");
  finalPlan.innerHTML = planBcolor.innerHTML + " " + last;
  finalPrice.innerHTML = "&nbsp $" + `${pickPrice}` + "/" + mORy;
  const total = choseCheck.reduce((currentTotal, item) => {
    return Number(item) + currentTotal;
  }, 0);
  finalSum[3].innerHTML = "+$" + `${total + Number(pickPrice)}` + "/" + mORy;
}
//  End of Chebox ======================================================
//======================= Mobile Version =================================
window.addEventListener("resize", function () {
  this.clearTimeout(doneResizing);
  doneResizing = this.setTimeout(function () {
    responsive(x);
  }, 100);
});
responsive(x);
function responsive(maxWidth) {
  if (maxWidth.matches) {
    displayTxt("none");
    thisLeftL = 350;
    resizing();
  } else {
    displayTxt("block");
    thisLeftL = 500;
    resizing();
  }
}

function resizing() {
  thisLeft = click * thisLeftL;
  form.style.left = "-" + click * thisLeftL + "px";
}
function displayTxt(dis) {
  steps.forEach((step) => {
    step.style.display = dis;
  });
}
clearTimeout(doneResizing);
