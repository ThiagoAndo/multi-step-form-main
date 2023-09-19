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
  click,
  click2,
  left,
  leftL,
  pickPrice,
  planBcolor,
  mORy,
  myVAlue,
  last,
} from "./utils/variables.js";
import { printMessagge } from "./utils/printMessage.js";
import { bntsEvt } from "./utils/next&backbtn.js";
import { changePar } from "./utils/variables.js";

import { interval } from "./utils/myInterval.js";
let choseCheck = [];
let doneResizing = null;
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
    changePar({ myVAlue: formVal[0].value });
    let condition = myVAlue.indexOf(" ") < 0;
    if (!condition) {
      return true;
    } else {
      printMessagge("Make sure to fill in Your Name and Surname.", 0);
    }
  }
  function checkEamil() {
    changePar({ myVAlue: formVal[0].value });
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
  if (click2 == 1) {
    console.log("entro 0");
    planBtnInside.classList.add("transEfect");
    monthly.classList.add("color");
    yerly.classList.remove("color");
    visible.forEach((p) => {
      p.style.display = "block";
    });
    changePrice();

    interval({ click2: 2 });
  } else if (click2 == 2) {

    console.log("entro 1 " + click2);

    planBtnInside.classList.remove("transEfect");
    monthly.classList.remove("color");
    yerly.classList.add("color");
    visible.forEach((p) => {
      p.style.display = "none";
    });
    changePrice();
    interval({ click2: 1 });
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
