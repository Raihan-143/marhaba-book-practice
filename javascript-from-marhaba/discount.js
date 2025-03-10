//Qstn-1
const price=5000;
if(price>3000){
    const discount=price/100*5;
    const pay=price-discount;
    console.log(`You get 5% discount and you have to pay ${pay}`);
}else if(price>6000){
    const discount=price/100*15;
    const pay=price-discount;
    console.log(`You get 3% discount and you have to pay ${pay}`);
}else if(price>=4500){
    const discount=price/100*10;
    const pay=price-discount;
    console.log(`You get 20% discount and you have to pay ${pay}`);
}
//Output: You get 5% discount and you have to pay 4750
//In the above example, the price is greater than 3000 and less than 6000. So, the output is "You get 5% discount and you have to pay 4750".

//Qstn-2
const age=20;
const price2=500;
if(age<12){
    console.log('You are eligible to vote');

}else if(age>60){
    const discount=price2/100*50;
    const pay=price2-discount;
    console.log(`You get 50% discount and you have to pay ${pay}`);
}else{
    console.log('You have to pay full price');
}
//Output: You have to pay full price
//In the above example, the age is less than 12. So, the output is "You have to pay full price".

//Qstn-3
const bankBalance=5000;
if(bankBalance>1000){
    console.log('Do deposit');
}else if(bankBalance>=1000 && bankBalance<=5000){
    console.log('Bindass life');
} else if(bankBalance>5000){
    console.log('You are rich, marry me');
}
//Output: do deposit
//In the above example, the bank balance is greater than 1000. So, the output is "Do deposit".

//Qstn-4
const examMarks=75;
if(examMarks<50){
    console.log('You are Fail');
}
else if(examMarks>=50 && examMarks<=80){
    console.log('You are Pass');
}else if(examMarks>80){
    console.log('You got A+');
}
//Output: You are Pass
//In the above example, the exam marks are greater than 50 and less than 80. So, the output is "You are Pass".

//Qstn-5
const bookPage=442;
if(bookPage<100){
    console.log('this is a small book');
}else if(bookPage>=100 && bookPage<=500){
    console.log('this is a mid size book');
}
else if(bookPage>500){
    console.log('heart attack size book');
}
//Output: this is a mid size book
//In the above example, the book page is greater than 100 and less than 500. So, the output is "this is a mid-size book".

