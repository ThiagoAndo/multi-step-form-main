import {
  finalPrice,
  finalSum,
  pickPrice,
  planBcolor,
  mORy,
  last,
  choseCheck,
  finalPlan,
} from "./variables.js";
export function setFinalPrice() {
  finalPlan.innerHTML = planBcolor.innerHTML + " " + last;
  finalPrice.innerHTML = "&nbsp $" + `${pickPrice}/${mORy}`;
  const total = choseCheck.reduce((currentTotal, item) => {
    return Number(item) + currentTotal;
  }, 0);
  finalSum[3].innerHTML = "+$" + `${total + Number(pickPrice)}/${mORy}`;
}
