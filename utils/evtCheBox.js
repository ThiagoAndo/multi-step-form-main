import {
  checBoxDiv,
  choseCheck,
  atrr,
  cBox,
  disp,
  changePar,
} from "./variables.js";

export const getAtrr = (obj = {}) => {
  changePar({ atrr: obj[0].getAttribute("value") });
  changePar({ cBox: document.getElementById(atrr) });
  changePar({ disp: document.querySelector("." + cBox.name) });
};

export const evtCheckBox = () => {
  checBoxDiv.forEach((box) => {
    box.addEventListener("click", function () {
      getAtrr({ 0: box });
      if (cBox.checked === false) {
        choseCheck.push(cBox.value);
        box.classList.add("dcolor");
        disp.classList.remove("display");
        cBox.checked = true;
      } else {
        box.classList.remove("dcolor");
        disp.classList.add("display");
        choseCheck.splice(choseCheck.indexOf(cBox.value), 1);
        cBox.checked = false;
      }
    });
  });
};
