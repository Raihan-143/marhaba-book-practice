//Qstn-1
const mine=50;
const friend='50';
console.log(mine==friend);//out:true
console.log(mine===friend);//out:false

//Qstn-5
console.log("test"=="TEST");//out:false
console.log("test"==="TEST");//out:false

//Qstn-6
const variableX=15;
const variableY='15';
const variableXY=(variableX != variableY);
console.log(variableXY);//out:false
const variableXYT=(variableX !== variableY);
console.log(variableXYT);//out:true

//Qstn-7
const variableA=hello;
const variableB='Hello'
const variableAB=(variableA==variableB);
console.log(variableAB);//out:ReferenceError: hello is not defined
const variableABC=(variableA===variableB);
console.log(variableABC);//out:ReferenceError: hello is not defined

