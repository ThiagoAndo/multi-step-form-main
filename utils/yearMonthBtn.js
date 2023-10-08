//  Plans Type (month or Year)===================================================

import {
  addPrice,
  planBtn,
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
  prcTimes,
  myObj,
  disp,
} from "./variables.js";
import { changePar } from "./variables.js";
import { getAtrr } from "./evtCheBox.js";
export const yearOrMonth = () => {
  changePar({ prcTimes: 0 });
  planBtn.onclick = () => {
    for (var i = 0; i < planType.length; i++) {
      planType[i].classList.remove("bcolor");
    }
    choseCheck.length = 0;
    checBox.forEach((box) => {
      box.checked = false;
    });
    checBoxDiv.forEach((box) => {
      getAtrr({ 0: box });
      disp.classList.add("display");
      box.classList.remove("dcolor");
    });
    const returObj = () => {
      if (click2 === 1) {
        return {
          priceRangeYear,
          priceRangeYearAdds,
        };
      } else {
        return {
          priceRangeMonth,
          priceRangeMonthAdds,
        };
      }
    };
    const changeVAlue = () => {
      for (var i = 0; i <= 2; i++) {
        price[i].innerHTML = Object.values(returObj())[0][i];
        addPrice[i].innerHTML = Object.values(returObj())[1][i];
        finalSum[i].innerHTML = Object.values(returObj())[1][i];
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
    const changeClases = (obj = {}, par, condition) => {
      for (var i = 0; i <= 2; i++) {
        if (condition <= 3 && condition >= 2) {
          obj[i][i].classList.add(obj[i][i + 1]);
          condition--;
        } else {
          obj[i][i].classList.remove(obj[i][i + 1]);
          condition--;
          condition--;
        }
      }
      visible.forEach((p) => {
        p.style.display = par;
      });
    };
    (function () {
      if (click2 == 1) {
        changeClases(myObj, "none", 3);
        changePrice();
        changePar({ click2: 2 });
      } else {
        changeClases(myObj, "block", 7);
        changePrice();
        changePar({ click2: 1 });
      }
    })();
    function changePrice() {
      switch (click2) {
        case 1:
          changePar({ prcTimes: 10 });
          changePar({ mORy: "yr" });
          changePar({ last: "(Yerly)" });
          changeVAlue();
          break;
        case 2:
          changePar({ prcTimes: 0.1 });
          changePar({ mORy: "mo" });
          changePar({ last: "(Montly)" });
          changeVAlue();
          break;
        default:
          console.log("Something went wrong");
      }
    }
    (function () {
      planType[0].classList.add("bcolor");
      changePar({ pickPrice: planType[0].getAttribute("value") });
      changePar({
        planBcolor: document.querySelector(".bcolor .txt p:first-of-type"),
      });
    })();
  };
};
