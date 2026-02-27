//checking for no maximum among 3 numbers
let a=Number(prompt("enter 1 no"));
let b=Number(prompt("enter 2 no"));
let c=Number(prompt("enter  3 no"));
let result=(a>b)?((a>c)?a:c):((b>c)?b:c);
document.write(result);