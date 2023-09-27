# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Code](#code)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

### Screenshot

</br>

#### Mobile

</br>
<p align="center">
    <img src="./screenshots/Mob2.PNG" alt="Mobile Version Picture">
</p>
</br>
<p align="center">
    <img src="./screenshots/Mob3.PNG" alt="Mobile Version Picture">
</p>
</br>
<p align="center">
    <img src="./screenshots/Mob4.PNG" alt="Mobile Version Picture">
</p>
</br>
<p align="center">
    <img src="./screenshots/Mob5.PNG" alt="Mobile Version Picture">
</p>
</br>
</br>

#### Desktop

</br>
<p align="center">
    <img src="./screenshots/Desk1.PNG" alt="Desktop Version Picture">
</p>
</br>
<p align="center">
    <img src="./screenshots/Desk2.PNG" alt="Desktop Version Picture">
</p>
</br>
<p align="center">
    <img src="./screenshots/Desk3.PNG" alt="Desktop Version Picture">
</p>
</br>
<p align="center">
    <img src="./screenshots/Desk4.PNG" alt="Desktop Version Picture">
</p>
<p align="center">
    <img src="./screenshots/Desk5.PNG" alt="Desktop Version Picture">
</p>
</br>

### Links

- Solution URL: [Solution Frontend Mentor](https://www.frontendmentor.io/solutions/mobilefirst-html5-css-js-wR9hS7nsf2)
- Live Site URL: [live site](https://thiagoando.github.io/multi-step-form-main/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- Java Script

### What I learned
<div style="text-align: justify">
    I chose the Multi-step form challenge because it seemed to have a reasonable demand for coding. I love coding!
I built this web page using pure Java script and its features like modules, and arrow functions to make the code readable and easy to change. JS is an easy and enjoyable program language to code with. The downside of programming with it is that the commands can get a little verbose. That's why most programmers still use libraries such as JQuery.
By completing this great challenge, I got to learn how to test the functionalities of the web page to prevent bugs and make sure that everything works as it is supposed to. I have decided to change the original workflow to provide the user with a better experience. First of all, Once the user writes their data and presses the Next Step button, the page will not allow going back to the form to prevent user input error. Second of all, I let a plan already chosen as a basic plan (Arcade/mo). Finally, If the user does not choose an Add service, the page will ask them if they are sure of passing this advantage.
</div>

<br/>
<br/>

## Code


All the code were spread trough ten modules plus the main script [script.js]
<br/>

### Modules

- [Variables](#module-variables)
- [Form validation](#module-form-validation)
- [Buttons interaction](#module-buttons-interaction )
- [Change Backgound](#module-num-colour)
- [Print message](#module-print-message) 
- [Year month button](#module-year-month)
- [Plan type](#module-evt-plan-type)
- [Adjust screen](#module-adjust-screen)
- [Final Price](#module-set-final-price)

### Module-Variables 
<br/>
<div style="text-align: justify">
 The feature module of JS does not allow to change variable's value through modules. It transforms a let variable into a const variable. As I wanted to keep all variables in one place, the solution is creating a function [changePar] to change the variable's value on the variables module. 
</div>
<br/>

```js
export const btn = document.querySelector(".botton > span:last-of-type");
export const form = document.querySelector("ul");
export const formLen = document.querySelectorAll("ul > li");
export const btnSection = document.querySelector(".botton");
export const btn2 = document.querySelector(".botton span:first-of-type");
export const formVal = document.querySelectorAll("form > input");
export const pagNum = document.querySelectorAll("#header  span ");
export const infoBox = document.querySelector(".print");
export const infoBoxMess = document.querySelector(".print > h3");
export const closeScreen = document.querySelector(".print > div");
export const addPrice = document.querySelectorAll(".prc1");
export const block = document.querySelector("#container > div:first-of-type");
export const planBtn = document.getElementById("btn");
export const finalPrice = document.querySelector(".prc3");
export const price = document.querySelectorAll(".planType .txt p:nth-child(2)");
export const visible = document.querySelectorAll(".yerlyVisible");
export const planType = document.querySelectorAll(".value");
export const finalSum = document.querySelectorAll(".prc2");
export const finalChange = document.querySelector("a");
export const checBox = document.querySelectorAll(".cheBox > input");
export const checBoxDiv = document.querySelectorAll(".boxJs");
export const priceRangeYear = { 0: "$90/yr", 1: "$120/yr", 2: "$150/yr" };
export const priceRangeMonth = { 0: "$9/mo", 1: "$12/mo", 2: "$15/mo" };
export const priceRangeYearAdds = { 0: "$10/yr", 1: "$20/yr", 2: "$20/yr" };
export const priceRangeMonthAdds = { 0: "$1/mo", 1: "$2/mo", 2: "$2/mo" };
export const steps = document.querySelectorAll(".onliDesk");
export const x = window.matchMedia("(max-width: 441px)");
export const valueExp = new RegExp(
  "^\\+[3]{1}[5]{1}[3]{1}-[0-9]{2}-[0-9]{3}-[0-9]{4}$"
);
export const msg = "Make sure to fill in your ";
export const msg1 = "Make sure to fill in Your Name and Surname.";
export const msg2 = "Make sure to enter a valid email.";
export const msg3 = "Make sure to enter a valid Phone Number.";
export const msg4 = "Make sure to fill in the form.";
export const msg5 =
  "Are you sure you do not want to enhance your gaming experience?";
const planBtnInside = document.querySelector(
  "#planCont > #holdBtn > #btn > div"
);
const monthly = document.querySelector(
  "#planCont > #holdBtn > div:first-of-type"
);
const yerly = document.querySelector("#planCont > #holdBtn> div:last-of-type");
export const myObj = {
  0: { 0: planBtnInside, 1: "transEfect" },
  1: { 1: monthly, 2: "color" },
  2: { 2: yerly, 3: "color" },
};
export const finalPlan = document.querySelector("#arcade");
export let prcTimes = 0;
export let testPho = false;
export let confIndex = false;
export let left = 0;
export let click = 0;
export let click2 = 1;
export let leftL = 500;
export let pickPrice = null;
export let planBcolor = "Arcade";
export let mORy = "mo";
export let name = "";
export let email = "";
export let last = "(Montly)";
export let pass = false;
export let myReturn = [false, false, false];
export let choseCheck = [];
export let atrr;
export let cBox;
export let disp;
export let doneResizing;
let match = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const changePar = (obj = {}) => {
  left = obj.left || left;
  click = obj.click || click;
  click2 = obj.click2 || click2;
  leftL = obj.leftL || leftL;
  pickPrice = obj.pickPrice || pickPrice;
  planBcolor = obj.planBcolor || planBcolor;
  mORy = obj.mORy || mORy;
  name = obj.name || name;
  email = obj.email || email;
  last = obj.last || last;
  prcTimes = obj.prcTimes || prcTimes;
  atrr = obj.atrr || atrr;
  cBox = obj.cBox || cBox;
  disp = obj.disp || disp;
  doneResizing = obj.doneResizing || doneResizing;
  pass = email.match(match) == null ? 1 : 2;
  confIndex = name.includes(" ");
  testPho = valueExp.test(formVal[2].value) == false ? 1 : 2;
};

```
### Module-Form-Validation

<div style="text-align: justify">
The form validation function will be strict and make all the checks to prevent the user from forgetting to enter important data or entering an incorrect value to the form, making sure that no faulty data will be add to the database and making it easier for the back and code to do their respective validation. The first procedure of the form validation function is to check if all the fields are done. If, the user forgets one of the fields, it will send a message saying what is messing. Then, when the form is complete, it will start the validadion of the data passed.
</div>
<br/>


```js
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

```


### Module-Buttons-Interaction 
<div style="text-align: justify">
The solution I initially found to this challenge was to put the entire HTML content of the form in a list tag and display it vertically. So, the function [btnEvt] will add functionality to the buttons [Next step, Go back] and the link [change]. They will manipulate the Dom by skipping the list to the left or right of the screen.
</div>
<br/>

```js
import {
  btn,
  form,
  formLen,
  btnSection,
  btn2,
  planType,
  finalChange,
  checBox,
  left,
  leftL,
  click,
  changePar,
  msg5,
} from "./variables.js";
import { pageNumBackGround } from "./numColor.js";
import { formValidation } from "./formValidation.js";
import { printMessagge } from "./printMessage.js";
import { setFinalPrice } from "./finalPrice.js";

export const btnsEvt = () => {
  function myCheck() {
    for (var i = 0; i < checBox.length; i++) {
      if (checBox[i].checked) {
        return true;
      } else if (i == checBox.length - 1) {
        return false;
      }
    }
  }
  const myConditionNextBtn = () => {
    switch (click) {
      case 1:
        planType[0].classList.add("bcolor");
        changePar({ pickPrice: planType[0].getAttribute("value") });
        changePar({
          planBcolor: document.querySelector(".bcolor .txt p:first-of-type"),
        });
        break;
      case 2:
        backBtn();
        btn2.style.color = "hsl(231, 11%, 63%)";
        break;
      case 3:
        myCheck() == false ? printMessagge(msg5) : (btn.innerHTML = "Confirm");
        btn.style.backgroundColor = "hsl(243, 100%, 62%)";
        setFinalPrice();
        break;
      default:
        console.log("Something went wrong!");
    }
  };
  const myConditionBackBtn = () => {
    switch (click) {
      case 1:
        btn2.style.color = "hsl(0, 0%, 100%)";
        btn2.removeEventListener("click", myConditionBackBtn);
        break;
      case 2:
        setValBackBtn();
        break;
      case 3:
        setValBackBtn();
        btn.innerHTML = "Next Step";
        btn.style.backgroundColor = "hsl(213, 96%, 18%)";
        break;
      default:
        console.log("Something went wrong!");
    }
  };
  const setValNextBtn = () => {
    changePar({ click: click + 1 });
    changePar({ left: left + leftL });
    form.style.left = "-" + `${left}` + "px";
  };
  const setValBackBtn = () => {
    changePar({ left: left - leftL });
    form.style.left = "-" + `${left}` + "px";
    changePar({ click: click - 1 });
    pageNumBackGround(click, 2);
  };
  btn.onclick = () => {
    if (click < formLen.length - 2 && formValidation()) {
      pageNumBackGround(click, 1);
      setValNextBtn();
      myConditionNextBtn();
    } else if (click > 0 && click < formLen.length - 1) {
      setValNextBtn();
      btnSection.className = "display";
    }
  };
  const backBtn = () => {
    btn2.addEventListener("click", myConditionBackBtn);
  };
  finalChange.onclick = (event) => {
    event.preventDefault();
    for (var i = 0; i < 2; i++) {
      myConditionBackBtn();
    }
  };
};

```
### Module-Num-Colour

<div style="text-align: justify">
 The [pageNumBackGround] function will indicate to the user which page of the form they are by changing the background colour of the circles on the page as they press the buttons to skip forwards or backwards. 
</div>
<br/>

```js
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
```
## Module-Print-Message

<div style="text-align: justify">
 The [pageNumBackGround] function will indicate to the user which page of the form they are by changing the background colour of the circles on the page as they press the buttons to skip forwards or backwards. 
</div>
<br/>

```js

import { formVal, infoBox, infoBoxMess, block, myReturn } from "./variables.js";
export const printMessagge = (msg, num) => {
  infoBox.classList.add("message");
  block.classList.add("blockFrom");
  infoBoxMess.innerHTML = msg;
  myReturn[num] = false;
  setTimeout(() => {
    window.addEventListener("click", evtCloseScreen);
  }, 500);
  const removeEvtWindow = () => {
    window.removeEventListener("click", evtCloseScreen);
  };
  const  evtCloseScreen = () => {
    infoBox.className = "print";
    block.classList.remove("blockFrom");
    if (num != undefined) {
      formVal[num].focus();
    }
    removeEvtWindow();
  }
};
```

### Module-Year-Month

<div style="text-align: justify">
 The [yearOrMonth] function will change the plans and add on prices. The button is built with JS and CSS transition animation. Also, it will empty all the data from the user's choice already in storage. If, before confirmation of purchase, the user decides to change from a monthly to an anual plan, they will have to select services again.
</div>
<br/>

```js
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
        changeClases(myObj, "block", 3);
        changePrice();
        changePar({ click2: 2 });
      } else {
        changeClases(myObj, "none", 7);
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

```
## Module-Evt-Plan-Type
<div style="text-align: justify">
The [evtPlanType] function will highlight the plan chosen by changing the background colour. Also, it will store the price of the plan in an array for the final sum.
</div>
<br/>

```js
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

```

## Module-Evt-Check-Box

<div style="text-align: justify">
The [evtCheckBox] function will highlight the add-on service chosen by the user by changing the background color and storing the price data on an array. Also, it will erase the data from the array and unmark the add-on if the checkbox is unchecked. 
</div>
<br/>

```js
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

```

## Module-Adjust-Screen
<div style="text-align: justify">
The [adjustScreen] adjusts the position of the HTML list and displays the actual step of the form when the screen is resized to a smaller or larger size. This function is more to test the web page while building it. However, it is very satisfying to see the JS repositioning the form.
</div>
<br/>

```js
import {
  form,
  steps,
  x,
  click,
  leftL,
  changePar,
  doneResizing,
} from "./variables.js";
export const adjustScreen = () => {
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

```

### Module-Set-Final-Price
<div style="text-align: justify">
The [setFinalPrice] function will sum up all the services chosen by the user and display them in step four of the form, where the user will get all the data from the previous steps displayed and check and confirm their purchase.
</div>
<br/>

```js
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

```
### Continued development

It is well known that working with dates and strings is not a simple task. It demands the good expertise of the programmer. It is much simpler to perform form validation using the functionalities of HTML 5 (required). However, programming a form validation using a programming language gives more control over what is required from the user. By having to identify the characters typed by the user, I realize the necessity to increase my knowledge of understading regular expressions better. The next step is to get a better grasp of it.

## Author

- Github - [Thiago Ando de Freitas](https://github.com/ThiagoAndo)
- Frontend Mentor - [@ThiagoAndo](https://www.frontendmentor.io/profile/ThiagoAndo)
- Alive Website - [multi-step-form-main](https://thiagoando.github.io/multi-step-form-main/)
