import { calculateSimpleInterest } from "./CalculateInterest.js";
var principal = 10000;
var numberOfYears = 10;
var rateOfInterest = 5;
const percentConstant = 100;
let interestAmount = calculateSimpleInterest(
  principal,
  numberOfYears,
  rateOfInterest
);

console.log("Interest is "+interestAmount);
