"use strict";

import {
  form,
  finalPrice,
  finalSum,
  steps,
  x,
  click,
  leftL,
  pickPrice,
  planBcolor,
  mORy,
  last,
  choseCheck,
  changePar,
} from "./utils/variables.js";

import { bntsEvt } from "./utils/next&backbtn.js";
import { yearOrMonth } from "./utils/yearMonthBtn.js";
import { evtPlanType } from "./utils/evtPlanType.js";
import { evtCheckBox } from "./utils/evtCheBox.js";
let doneResizing = null;

bntsEvt();
yearOrMonth();
evtPlanType();
evtCheckBox();

//  Chebox     ===========================================================

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
