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
  pickPrice,
  planBcolor,
} from "./variables.js";
import { pageNumBackGround } from "./NumberBackColor.js";
import { formValidation } from "../script.js";
import { printMessagge } from "./printMessage.js";
import { setFinalPrice } from "../script.js";
import { changePar } from "./variables.js";

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

  const myCondition = () => {
    if (click == formLen.length - 2) {
      btn.innerHTML = "Confirm";
      btn.style.backgroundColor = "hsl(243, 100%, 62%)";
      setFinalPrice();
    } 
    if (click == 3 && !myCheck()) {
      alert("entrou");
      printMessagge(
        "Are you sure you do not want to enhance your gaming experience?"
      );
    } 
    if (click >= 2) {
      backBtn();
      btn2.style.color = "hsl(231, 11%, 63%)";
    }  if (click > 0 && click < 2) {
      planType[0].classList.add("bcolor");
      changePar({ pickPrice: planType[0].getAttribute("value") });
      changePar({
        planBcolor: document.querySelector(".bcolor .txt p:first-of-type"),
      });
    }
  };

  btn.onclick = () => {
    if (click < formLen.length - 2 && true) {
      console.log(click);
      pageNumBackGround(click, 1);
      changePar({ click: click + 1 });
      changePar({ left: left + leftL });
      form.style.left = "-" + `${left}` + "px";
      myCondition();
    } else if (click > 0 && click < formLen.length - 1) {
      changePar({ left: left + leftL });
      form.style.left = "-" + `${left}` + "px";
      btnSection.className = "display";
      click++;
    }
  };
  function backBtn() {
    btn2.addEventListener("click", backBtnPart2);
  }
  finalChange.onclick = (event) => {
    event.preventDefault();
    for (var i = 0; i < 2; i++) {
      backBtnPart2();
    }
  };
  function backBtnPart2() {
    if (click >= 1) {
      changePar({ left: left - leftL });
      form.style.left = "-" + `${left}` + "px";
      changePar({ click: click - 1 });

      pageNumBackGround(click, 2);
    }
    if (click < 2) {
      btn2.style.color = "hsl(0, 0%, 100%)";
      btn2.removeEventListener("click", backBtnPart2);
    }
    if (click == 2) {
      btn.innerHTML = "Next Step";
      btn.style.backgroundColor = "hsl(213, 96%, 18%)";
    }
  }
};
