function number(num){
    num += 10;
    console.log(num);//output: 20
}
const myNum=10;
number(myNum);
console.log(myNum);//output: 10
//In the above example, the value of myNum is passed to the function number(). The value of myNum is 10. So, the output is 20 and 10.

//this is anohter example of pass by value
function changeValue(value){
    value= 20;
    console.log('Inside function:',value);//output: 20
}
let x=10;
console.log('Before function:',x);//output: 10
changeValue(x);
console.log('After function:',x);//output: 10
//In the above example, the value of x is passed to the function changeValue(). The value of x is 10. So, the output is 10 and 10.