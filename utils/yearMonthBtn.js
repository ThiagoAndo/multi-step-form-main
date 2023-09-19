//  Plans Type (month or Year)===================================================

import {
  monthly,
  addPrice,
  planBtn,
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
  click2,
  choseCheck,
} from "./variables.js";
import { changePar } from "./variables.js";
export const yearOrMonth = () => {
  let prcs = [];
  let prcsAdd = [];
  let prcTimes = 0;
  planBtn.onclick = () => {
    for (var i = 0; i < planType.length; i++) {
      planType[i].classList.remove("bcolor");
    }
    choseCheck.length = 0;
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

    const changeVAlue = () => {
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
    };

    if (click2 == 1) {
      planBtnInside.classList.add("transEfect");
      monthly.classList.add("color");
      yerly.classList.remove("color");
      visible.forEach((p) => {
        p.style.display = "block";
      });
      changePrice();
      changePar({ click2: 2 });
    } else if (click2 == 2) {
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
      switch (click2) {
        case 1:
          prcs = priceRangeYear;
          prcsAdd = priceRangeYearAdds;
          prcTimes = 10;
          changePar({ mORy: "yr" });
          changePar({ last: "(Yerly)" });
          changeVAlue();
          break;
        case 2:
          prcs = priceRangeMonth;
          prcsAdd = priceRangeMonthAdds;
          prcTimes = 0.1;
          changePar({ mORy: "mo" });
          changePar({ last: "(Montly)" });
          changeVAlue();
          break;
        default:
          console.log("Something went wrong");
      }
    }

    planType[0].classList.add("bcolor");
    changePar({ pickPrice: planType[0].getAttribute("value") });
    changePar({
      planBcolor: document.querySelector(".bcolor .txt p:first-of-type"),
    });
  };
};
