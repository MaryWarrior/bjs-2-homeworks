"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = 0;
  d = b**2 - 4 * a * c;
  if(d == 0){
    arr.push(-b / (2 * a));
  }
  if(d > 0){
    arr.push((-b + Math.sqrt(d))/(2*a));
    arr.push((-b - Math.sqrt(d))/(2*a));
  }
  if(d < 0){
    arr = [];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyFee;
  let countFee;
  let S = amount - contribution;
  let p = ((1/12) * percent)/100;
  monthlyFee =  S * (p + (p / (((1 + p)**countMonths) - 1)));
  countFee = monthlyFee * countMonths;
  countFee = Number(countFee.toFixed(2));
  return countFee;
}