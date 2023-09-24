import {
  form,
  steps,
  x,
  click,
  leftL,
  changePar,
  doneResizing,
} from "./variables.js";

export const responsive = () => {
  window.addEventListener("resize", function () {
    this.clearTimeout(doneResizing);
    changePar({
      doneResizing: this.setTimeout(function () {
        responsive(x);
      }, 100),
    });
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
};
