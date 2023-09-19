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
export const yerly = document.querySelector("#planCont > #holdBtn> div:last-of-type");
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
export  const steps = document.querySelectorAll(".onliDesk");
export  const x = window.matchMedia("(max-width: 441px)");
export let left = 0;
export let click = 0;
export let click2 = 1;
export let leftL = 500;
export let pickPrice = null;
export let planBcolor = "Arcade";
// let choseCheck = [];
export let mORy = "mo";
export let myVAlue = 0;
// let doneResizing = null;
export let last = "(Montly)";

export const changePar = (obj = {}) => {
  left = obj.left || left;
  click = obj.click || click;
  click2 = obj.click2 || click2;
  leftL = obj.leftL || leftL;
  pickPrice = obj.pickPrice || pickPrice;
  planBcolor = obj.planBcolor || planBcolor;
  mORy = obj.mORy || mORy;
  myVAlue = obj.myVAlue || myVAlue;
  last = obj.last || last;
  //   doneResizing = obj.doneResizing || doneResizing;
  //   choseCheck = obj.choseCheck || choseCheck;
};