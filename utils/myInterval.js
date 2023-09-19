const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
import { changePar } from "./variables.js";
export const interval = async (val1) => {
  await sleep(100);
  changePar( val1);
};
