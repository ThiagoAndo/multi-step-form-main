/* In this module I have added the interaction of the Monthly or
 Yearly, next, back buttons. Also, the linck change that is 
 located on the last step of the form.  */

import {
  btn,
  form,
  formLen,
  btnSection,
  btn2,
  planType,
  finalChange,
  checBox,
  left,
  leftL,
  click,
  changePar,
  msg5,
} from "./variables.js";
import { pageNumBackGround } from "./numColor.js";
import { formValidation } from "./formValidation.js";
import { printMessagge } from "./printMessage.js";
import { setFinalPrice } from "../script.js";

export const bntsEvt = () => {
  function myCheck() {
    for (var i = 0; i < checBox.length; i++) {
      if (checBox[i].checked) {
        return true;
      } else if (i == checBox.length - 1) {
        return false;
      }
    }
  }

  const myConditionNextBtn = () => {
    switch (click) {
      case 1:
        planType[0].classList.add("bcolor");
        changePar({ pickPrice: planType[0].getAttribute("value") });
        changePar({
          planBcolor: document.querySelector(".bcolor .txt p:first-of-type"),
        });
        break;
      case 2:
        backBtn();
        btn2.style.color = "hsl(231, 11%, 63%)";
        break;
      case 3:
        myCheck() == false ? printMessagge(msg5) : (btn.innerHTML = "Confirm");
        btn.style.backgroundColor = "hsl(243, 100%, 62%)";
        setFinalPrice();
        break;
      default:
        console.log("Something went wrong!");
    }
  };

  const myConditionBackBtn = () => {
    switch (click) {
      case 1:
        btn2.style.color = "hsl(0, 0%, 100%)";
        btn2.removeEventListener("click", myConditionBackBtn);
        break;
      case 2:
        setValBackBtn();
        break;
      case 3:
        setValBackBtn();
        btn.innerHTML = "Next Step";
        btn.style.backgroundColor = "hsl(213, 96%, 18%)";
        break;
      default:
        console.log("Something went wrong!");
    }
  };
  const setValNextBtn = () => {
    changePar({ click: click + 1 });
    changePar({ left: left + leftL });
    form.style.left = "-" + `${left}` + "px";
  };

  const setValBackBtn = () => {
    changePar({ left: left - leftL });
    form.style.left = "-" + `${left}` + "px";
    changePar({ click: click - 1 });
    pageNumBackGround(click, 2);
  };

  btn.onclick = () => {
    if (click < formLen.length - 2 && formValidation()) {
      pageNumBackGround(click, 1);
      setValNextBtn();
      myConditionNextBtn();
    } else if (click > 0 && click < formLen.length - 1) {
      setValNextBtn();
      btnSection.className = "display";
    }
  };

  const backBtn = () => {
    btn2.addEventListener("click", myConditionBackBtn);
  };

  finalChange.onclick = (event) => {
    event.preventDefault();
    for (var i = 0; i < 2; i++) {
      myConditionBackBtn();
    }
  };
};
