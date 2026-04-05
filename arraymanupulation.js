let animals = ['lion', 'monkey', 'dishita', 'duffer'];
// console.log(animals);
// console.log(animals.lengyh());
for(let i=0;i<animals.length;i++){
    console.log(animals[i]);

}
// let marks=[10,20,40,85,70];
// let sum=0;
// for(let i=0;i<marks.length;i++){
//     sum=sum+marks[i];
    
// }
// console.log(sum/marks.length); 
//printing using value
// let a=[10,50,70,80,100];
// 
// let i=0;
// for(let b of a){
//     console.log('value on index ${i}=${b}');
//     i++;
// }
// console.log(a.tostring());
let a = [10, 50, 70, 80, 100];

console.log(a.toString());
let dd=['hello','namaste','bye'];
let ds=['a','b','c','d'];
//concat adds multiple arrays and returns result that must be stored or printed
dd.concat(ds);
console.log(dd.concat(ds));
console.log(dd);
let dwd=dd.concat(ds);
console.log(dwd);
dd.unshift('o');
dd.shift();
console.log(dd.shift());
console.log(dd);
dd.unshift("34","56","78");
console.log(dd);
console.log(dd.slice(3,5));
dd.splice(2,1,"m","t");
console.log(dd);
dd.splice(2,0,"c","l");
console.log(dd);
