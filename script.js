"use strict";

import {
  monthly,
  form,
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
  click,
  click2,
  left,
  leftL,
  pickPrice,
  planBcolor,
  mORy,
  last,
} from "./utils/variables.js";

import { bntsEvt } from "./utils/next&backbtn.js";
import { changePar } from "./utils/variables.js";

let choseCheck = [];
let doneResizing = null;
bntsEvt();



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
  if (click2 == 1) {
    console.log("entro 0");
    planBtnInside.classList.add("transEfect");
    monthly.classList.add("color");
    yerly.classList.remove("color");
    visible.forEach((p) => {
      p.style.display = "block";
    });
    changePrice();

    changePar({ click2: 2 });
  } else if (click2 == 2) {

    console.log("entro 1 " + click2);

    planBtnInside.classList.remove("transEfect");
    monthly.classList.remove("color");
    yerly.classList.add("color");
    visible.forEach((p) => {
      p.style.display = "none";
    });
    changePrice();
    changePar({ click2: 1 });
  }
  function changePrice() {
    let prcs = [];
    let prcsAdd = [];
    let prcTimes = 0;
    switch (click2) {
      case 1:
        prcs = priceRangeYear;
        prcsAdd = priceRangeYearAdds;
        prcTimes = 10;
        changePar({ mORy: "yr" });
        changePar({ last: "(Yerly)"});
        break;
      default:
        prcs = priceRangeMonth;
        prcsAdd = priceRangeMonthAdds;
        prcTimes = 0.1;
        changePar({ mORy: "mo"});
        changePar({ last: "(Montly)"});
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

  planType[0].classList.add("bcolor");
  changePar({ pickPrice: planType[0].getAttribute("value")});
  changePar(
    {
      planBcolor: document.querySelector(".bcolor .txt p:first-of-type")
    }
  );
};

(function () {
  "user strict";
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
