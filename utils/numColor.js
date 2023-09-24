//Changin page's background number when user click on next and back buttons

import { pagNum } from "./variables.js";

export const pageNumBackGround = (cllickNum, call) => {
  switch (call) {
    case 2:
      pagNum[cllickNum + 1].classList = "pNum";
      pagNum[cllickNum].classList.add("pageNum");
      break;

    default:
      pagNum[cllickNum].classList = "pNum";
      pagNum[cllickNum + 1].classList.add("pageNum");
  }
};
