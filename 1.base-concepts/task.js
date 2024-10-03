"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let D = b**2-4*a*c
  if (D<0){
    return arr;
  }
  else if (D==0){
    let root = -b/(2*a);
    arr.push (root);
  }
  else if (D>0){
    let root1 = (-b + Math.sqrt(D) )/(2*a);
    let root2 = (-b - Math.sqrt(D) )/(2*a);
    arr.push (root1);
    arr.push (root2);
  }
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    let P = (percent/100)/12;
    let S = amount - contribution;
    let n = countMonths;
    let pay = S * (P + (P / (((1 + P)**n) - 1)));
    let mortgage = Math.round((pay*n)*100)/100;
    return mortgage;

  }

