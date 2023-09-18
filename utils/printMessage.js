//Adding functionality to box message when the form is not fill in properly
import { formVal, infoBox, infoBoxMess, block } from "./variables.js";

export const printMessagge = (msg, num) => {
  infoBox.classList.add("message");
  block.classList.add("blockFrom");
  infoBoxMess.innerHTML = msg;
  setTimeout(() => {
    window.addEventListener("click", evtCloseScreen);
  }, 500);
  const removeEvtWindow = () => {
    window.removeEventListener("click", evtCloseScreen);
  };

  function evtCloseScreen() {
    infoBox.className = "print";
    block.classList.remove("blockFrom");
    if (num != undefined) {
      formVal[num].focus();
    }
    removeEvtWindow();
  }
};