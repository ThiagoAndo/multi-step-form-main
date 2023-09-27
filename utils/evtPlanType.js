// Adding event to Plans=================================
import { changePar, planType } from "./variables.js";
export const evtPlanType = () => {
  planType.forEach((plan) => {
    plan.addEventListener("click", function () {
      for (var i = 0; i < planType.length; i++) {
        planType[i].classList.remove("bcolor");
      }
      changePar({ pickPrice: this.getAttribute("value") });
      plan.classList.add("bcolor");
    });
  });
};
