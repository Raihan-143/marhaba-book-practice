/**
 * using "parseInt" & "perseFloat" for convert string to number
 */

//Qstn-1
const funnyMath='20';
const realNumber=parseInt(funnyMath);
const addingNumber=realNumber+10;
console.log(addingNumber);//out:30

//Qstn-2
const divisionNumber='3.14159';
const fixedNumber=parseInt(divisionNumber);
console.log(fixedNumber);//out:3

//Qstn-3
const loverBoy=Number('premikBoy');
console.log(loverBoy);//NaN

//Qstn-4
const n1=3.456;
const n2=2.789;
const total=n1+n2;
const totalNumber=parseFloat(total.toFixed(2));
console.log(totalNumber);//out:6.25

//Qstn-5
const s1=parseFloat('56.78');
const s2=parseFloat('12.34');
const sum=s1+s2;
console.log(sum);//out:69.12

//Qstn-6
const q1=parseFloat('10.5678');
const q2=parseFloat('5.4321');
const addition=q1+q2;
console.log(addition.toFixed(1));//out:16.0

//Qstn-7
const d1=parseFloat('42.45689754');
console.log(d1.toFixed(3));//out:42.457