let mode="darkmode";
let color;
if (mode==="darkmode"){
    color="black";
}
console.log(color);
//conditional statement
let age =25;
if(age<18){
    console.log("junior");
}else if (age>60){

    console.log("senior");
}
else{
    console.log("middle");
}
//question 1 for checking divisibility
let num =prompt("enter a number");
if(num%5==0){
    console.log("divisible by 5");
}else{
    console.log("not divisible by 5");
}