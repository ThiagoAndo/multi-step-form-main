import {
  formVal,
  click,
  changePar,
  pass,
  myReturn,
  msg1,
  msg2,
  msg3,
  msg4,
  confIndex,
  msg,
  testPho,
} from "./variables.js";
import { printMessagge } from "./printMessage.js";

//  Form Validation ======================================================
export const formValidation = () => {
  const checkName = () => {
    changePar({ name: formVal[0].value });
    confIndex == false ? printMessagge(msg1, 0) : (myReturn[0] = true);
    return myReturn[0];
  };

  const checkEamil = () => {
    changePar({ email: formVal[1].value });
    pass == 1 ? printMessagge(msg2, 1) : (myReturn[1] = true);
    return myReturn[1];
  };
  const checkNumber = () => {
    testPho == 1 ? printMessagge(msg3, 2) : (myReturn[2] = true);
    return myReturn[2];
  };

  const checkEmpty = () => {
    if (
      formVal[0].value == "" &&
      formVal[1].value == "" &&
      formVal[2].value == ""
    ) {
      printMessagge(msg4);
    } else {
      for (var i = 0; i < formVal.length; i++) {
        if (formVal[i].value == "") {
          printMessagge(msg + formVal[i].name + ".", i);
          break;
        } else if (
          i === formVal.length - 1 &&
          checkName() &&
          checkEamil() &&
          checkNumber()
        ) {
          return true;
        }
      }
    }
  };

    if (click > 0) {
      return true;
    } else {
      return checkEmpty();
    }
};
