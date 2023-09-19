"use strict";

import {
  form,
  finalPrice,
  planType,
  finalSum,
  checBoxDiv,
  steps,
  x,
  click,
  leftL,
  pickPrice,
  planBcolor,
  mORy,
  last,
  choseCheck,
} from "./utils/variables.js";

import { bntsEvt } from "./utils/next&backbtn.js";
import { changePar } from "./utils/variables.js";
import { yearOrMonth } from "./utils/yearMonthBtn.js";
let doneResizing = null;
bntsEvt();
yearOrMonth();

(function () {
  planType.forEach((plan) => {
    plan.addEventListener("click", function () {
      for (var i = 0; i < planType.length; i++) {
        planType[i].classList.remove("bcolor");
      }
      changePar({ pickPrice: this.getAttribute("value") });
      plan.classList.add("bcolor");
    });
  });
})();
//  End of Plans Type (month or Year)=====================================
//  Chebox     ===========================================================
(function () {
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
    changePar({ leftL: 350 });

    resizing();
  } else {
    displayTxt("block");
    changePar({ leftL: 500 });

    resizing();
  }
}

function resizing() {
  changePar({ left: click * leftL });
  form.style.left = "-" + click * leftL + "px";
}
function displayTxt(dis) {
  steps.forEach((step) => {
    step.style.display = dis;
  });
}
clearTimeout(doneResizing);
