//"use strict" - treat all js code as newer version 
// Code readability is should be 
/*  number=> 2 to power53 
 biginit=>
 string=>""- if we add number in "" it become string
 boolean=>true/false
 null=>standalone value-value is often used to represent the intentional absence of any object value. It's a special value that indicates a variable has no value or no object assigned to it.example wearther app. 

 undefined =>
 NaN


*/
let score = "33"
console.log(typeof score)
console.log(typeof(score))

let valueInNumber= Number(score)
console.log(typeof valueInNumber);
console.log( valueInNumber);

let score1= NaN
console.log(typeof score1)
console.log(typeof(score1))

let valueInNumber1= Number(score1)
console.log(typeof valueInNumber1);
console.log( valueInNumber1);

let score2= true
console.log(typeof score2)
console.log(typeof(score2))

let valueInNumber2= Number(score2)
console.log(typeof valueInNumber2);
console.log( valueInNumber2);


let score3=undefined
console.log(typeof score3)
console.log(typeof(score3))

let valueInNumber3= Number(score3)
console.log(typeof valueInNumber3);
console.log( valueInNumber3);

// "33"=> 33
// "33abc"=> NaN
// true=>1; False=0;
// 1=> true, 0=> false 
//""=>false ; "s"=> true

let isLoggedIn=""
let boolenIsLoggedIn=Boolean(isLoggedIn)
console.log(boolenIsLoggedIn)

let someNumber= "33"
let stringNumber= String(someNumber)
console.log(typeof someNumber)



