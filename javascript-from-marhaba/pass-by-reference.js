function  name(person) {
  person.name = 'John';
  console.log(person.name);//output: John
}
const person = {name: 'Alex'};
name(person); 
console.log(person.name);//output: John
//In the above example, the reference of the object person is passed to the function name(). The object person is {name: 'Alex'}. So, the output is John and John.



//this is another example of pass by reference
function updateJob(job){
    job.title = 'Software Developer';
    console.log('Inside function:',job.title);
}
let employ = {title: 'Web Developer'};
console.log('Before function:',employ.title);
updateJob(employ);
console.log('After function:',employ.title);
//Output: Before function: Web Developer
//Inside function: Software Developer
//After function: Software Developer

//In the above example, the reference of the object employ is passed to the function updateJob(). The object employ is {title: 'Web Developer'}. So, the output is Software Developer and Software Developer.
//In JavaScript, objects are passed by reference. When we pass an object to a function, the reference of the object is passed. So, when we change the object inside the function, the changes are reflected outside the function.