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
export const planBtnInside = document.querySelector(
  "#planCont > #holdBtn > #btn > div"
);
export const monthly = document.querySelector(
  "#planCont > #holdBtn > div:first-of-type"
);
export const yerly = document.querySelector(
  "#planCont > #holdBtn> div:last-of-type"
);
export const price = document.querySelectorAll(".planType .txt p:nth-child(2)");
export const visible = document.querySelectorAll(".yerlyVisible");
export const planType = document.querySelectorAll(".value");
export const finalSum = document.querySelectorAll(".prc2");
export const finalChange = document.querySelector("a");
export const checBox = document.querySelectorAll(".cheBox > input");
export const checBoxDiv = document.querySelectorAll(".boxJs");
export const priceRangeYear = ["$90/yr", "$120/yr", "$150/yr"];
export const priceRangeMonth = ["$9/mo", "$12/mo", "$15/mo"];
export const priceRangeYearAdds = ["$10/yr", "$20/yr", "$20/yr"];
export const priceRangeMonthAdds = ["$1/mo", "$2/mo", "$2/mo"];
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
export let checkReturn = true;
export let pass = false;
export let myReturn = [false, false, false];
let match = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export let choseCheck = [];
// let doneResizing = null;

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
  pass = email.match(match) == null ? 1 : 2;
  confIndex = name.indexOf(" ") < 0 == true ? 1 : 2;
  testPho = valueExp.test(formVal[2].value) == false ? 1 : 2;
  //   doneResizing = obj.doneResizing || doneResizing;
  //   choseCheck = obj.choseCheck || choseCheck;
};
