import {
  btn,
  form,
  formLen,
  btnSection,
  btn2,
  planType,
  finalChange,
  checBox,
} from "./variables.js";
import { pageNumBackGround } from "./NumberBackColor.js";
import { formValidation } from "../script.js";
import { printMessagge } from "./printMessage.js";
import { setFinalPrice } from "../script.js";


export let left = 0;
export let click = 0;
export let click2 = 0;
export let leftL = 500;
export let pickPrice = null;
export let planBcolor = "Arcade";
 
export const bntsEvt = () => {
  function myCheck() {
    var i = 0;
    for (i; i < checBox.length; i++) {
      if (checBox[i].checked) {
        return true;
      } else if (i == checBox.length - 1) {
        return false;
      }
    }
  }
  btn.onclick = () => {
    if (click < formLen.length - 2 && true) {
      pageNumBackGround(click, 1);
      click++;
      left += leftL;
      form.style.left = "-" + `${left}` + "px";
      if (click == formLen.length - 2) {
        btn.innerHTML = "Confirm";
        btn.style.backgroundColor = "hsl(243, 100%, 62%)";
        setFinalPrice();
      }
      if (click == 3 && !myCheck()) {
        printMessagge(
          "Are you sure you do not want to enhance your gaming experience?"
        );
      }
      if (click >= 2) {
        backBtn();
        btn2.style.color = "hsl(231, 11%, 63%)";
      }

      if (click > 0 && click < 2) {
        planType[0].classList.add("bcolor");
        pickPrice = planType[0].getAttribute("value");
        planBcolor = document.querySelector(".bcolor .txt p:first-of-type");
      }
    } else if (click > 0 && click < formLen.length - 1) {
      left += leftL;
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
      left = left - leftL;
      form.style.left = "-" + `${left}` + "px";
      click--;
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
