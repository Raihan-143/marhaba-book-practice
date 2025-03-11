//Qstn-1
let num=15
let copy=num
copy=25
console.log(num,copy)//output: 15,25

//Qstn-2
 let arr=[1,2,3]
    let copyArr=arr
    copyArr.push(88)
    console.log(arr,copyArr)
    //output: [1,2,3,88],[1,2,3,88]

//Qstn-3
let language={
    name:'JS',
    age:30,
}
let newVersion=language
newVersion.key='Location'
newVersion.value='Browseer'
console.log(language,newVersion)