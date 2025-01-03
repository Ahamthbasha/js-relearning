/*
//here the property is defined when you access with dot notation here.It will cause error
const shell={
    "1s" :"firstShell",
    "2nd" :"secondShell",
    "3rd" :"thirdShell"
}

console.log(shell["2nd"])

//here property are defined.when you put obj[age] which cause error.you need to put in the string with in the bracket.
const obj={
    name:"ahamathbasha",
    age:20
}
console.log(obj.name)
console.log(obj["age"])

//deep copy

const person1={
    name:"ahamathbasha",
    age:22
}
const person2=JSON.parse(JSON.stringify(person1))
person2.place="tiruvannamalai"
console.log(person1)
console.log(person2)

//shallow copy:Shallow copy means that only the top-level structure of the array 
// let arr1=[1,2,3,4,5]
// let arr2=[...arr1]//spread Shallow copy.It is new independent array.It will be in separate memory.arr1 changes does not affect arr2
// let arr3=Object.assign([],arr1)//It also create shallow copy.It is new independent array.
// arr1[5]=10
// console.log(arr1)
// console.log(arr2)
// console.log(arr3)

//shallowcopy nested array

// const arr1=[1,2,3,[4,5,[6,7]]]
// const arr2=[...arr1]
// const arr3=Object.assign([],arr1)

// console.log(arr1)
// console.log(arr2)
// console.log(arr3)
//arr2[3][2][0]=10
// console.log(arr1)
// console.log(arr2)
// console.log(arr3)
// [ 1, 2, 3, [ 4, 5, [ 10, 7 ] ] ]
// [ 1, 2, 3, [ 4, 5, [ 10, 7 ] ] ]
// [ 1, 2, 3, [ 4, 5, [ 10, 7 ] ] ]

// arr2[0]=10//Top level property so does not affect other
// console.log(arr1)
// console.log(arr2)
// console.log(arr3)
// [ 1, 2, 3, [ 4, 5, [ 6, 7 ] ] ]
// [ 10, 2, 3, [ 4, 5, [ 6, 7 ] ] ]
// [ 1, 2, 3, [ 4, 5, [ 6, 7 ] ] ]

// arr2[3][0]=10//nested will affect each other
// console.log(arr1)
// console.log(arr2)
// console.log(arr3)
// [ 1, 2, 3, [ 10, 5, [ 6, 7 ] ] ]
// [ 1, 2, 3, [ 10, 5, [ 6, 7 ] ] ]
// [ 1, 2, 3, [ 10, 5, [ 6, 7 ] ] ]

//Object side deep copy
//It is top level.so no problem.Changes does not affect each other.
// let obj1={firstName:"Ahamathbasha",age:25}
// let obj2={...obj1}
// let obj3=Object.assign({},obj1)
// console.log(obj1)
// console.log(obj2)
// console.log(obj3)

// obj1.age=30
// obj2.age=35
// obj3.age=40
// console.log(obj1)
// console.log(obj2)
// console.log(obj3)

//nested obj
//This method only copies the top level property.If we change nested properties here it will modify the others also.Because it gives reference.
// let obj1={name:"ahamathbasha",address:{city:"chennai",pin:606901}}
// let obj2={...obj1}
// let obj3=Object.assign({},obj1)
// obj2.address.city="tiruvannamalai"
// console.log(obj1)
// console.log(obj2)
// console.log(obj3)
// obj1.name="manikbasha"
// obj1.address.city="chennai one"//
// console.log(obj1)
// console.log(obj2)
// console.log(obj3)

//create an array which should take the numbers one by one from the user.And store it in the array.The array size is 5 is in the limit.

// function createArrayWithLimit(){
//     let arr=[]
//     return function (para){
//         if(arr.length<5){
//             arr.push(para)
//         }else{
//             console.log("limit reached")
//         }
//         return arr
//     }
// }
// let array=createArrayWithLimit()
// console.log(array(1))
// console.log(array(2))
// console.log(array(3))
// console.log(array(4))
// console.log(array(5))
// console.log(array(6))

//deepCopy
//Array is an object itself.When an array is inside the object.That time it will be in the nested form.

EXAMPLE:
let shallow={
array1:[1,2,3,4,5]
}

visualrepresentation:
let shallow={
array1:{
0:1,
1:2,
2:3,
3:4,
4:5
}
}

Thats why here if we change anything that affects each other.

// let shallowObj1={
//     array1:[1,2,3,4,5],
//     array2:[6,7,8,9,10]
// }

// let shallowObj2={...shallowObj1}
// let shallowObj3=Object.assign({},shallowObj1)

// let shallowObj4=JSON.parse(JSON.stringify(shallowObj1))//deepcopy
// console.log(shallowObj1)
// console.log(shallowObj2)
// console.log(shallowObj3)
// console.log(shallowObj4)
// shallowObj2.array1[0]=1000
// console.log(shallowObj1)
// console.log(shallowObj2)
// console.log(shallowObj3)
// console.log(shallowObj4)
// shallowObj1.array1[0]=10
// console.log(shallowObj1)
// console.log(shallowObj2)
// console.log(shallowObj3)


////////////////////TRIcKY///////////////////////////////////
let obj1={
    arr:[1,2,3,4,5]
}

let obj2={...obj1}
obj2.arr[0]=10
console.log(obj1)
console.log(obj2)

//Event loop
console.log('start')

setTimeout(()=>{
    console.log("order please")
},1000)

console.log('end')


//fetching data
// URL of the API endpoint
// const url = 'https://jsonplaceholder.typicode.com/posts/1';

// fetch(url)
// .then(response =>{
//     if(!response.ok){
//         throw new Error("there is an error in fetching data")
//     }
//     return response.json()
// })
// .then(data =>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// })

//generator function

function* multiply(n){
    let m=1
    while(true){
        yield m*n
        m++
    }
}
const generator=multiply(2)
for(let i=1;i<=10;i++){
    console.log(generator.next().value)
}
//another example
function* multiply(n){
let m=1
while(true){
    yield m*n
    m++
}
}

const multiply5=multiply(5)
for(let i=1;i<=10;i++){
    console.log(multiply5.next().value)
}

//another example in generator function
function* gen(message){
    while(true){
        yield(message)
    }
}

const greeting=gen("good morning")
for(let i=1;i<=10;i++){
    console.log(greeting.next().value)
}

//higher order function

function x(){
    console.log('hello')
}

function y(x){
    x()
}

y(x)

// const radius=[3,1,2,4]

// const calculateArea=function (radius){
//     let output=[]
//     for(let i=0;i<radius.length;i++){
//         output.push(Math.PI*radius[i]*radius[i])
//     }
//     return output
// }

// console.log(calculateArea(radius))
*/

// (function(){
//     let counter=0
//     function increment(){
//         counter++
//         console.log(counter)
//     }
//     function decrement(){
//         counter--
//         console.log(counter)
//     }
//     //in node js we use global
//     global.counterModule={
//         increment:increment,
//         decrement:decrement
//     }
// })()

// counterModule.increment()
// counterModule.decrement()
// counterModule.increment()

// (function() {
//     let counter=0
//     function increment(){
//         counter++
//         console.log(counter)
//     }
//     function decrement(){
//         counter--
//         console.log(counter)
//     }
//     global.accessMethods={
//         high:increment,
//         low:decrement
//     }
// })()
// accessMethods.high()
// accessMethods.high()
// accessMethods.low()

//loop in object
// const person = {
//     name: "aBIN",
//     AGE: 22
// }

// for(let key in person){
//     console.log(`key is ${key} and values is ${person[key]}`)
// }
// key is name and values is aBIN
// key is AGE and values is 22

//method

// const person={
//     name:"ahamathbasha",
//     display:function(name){
//         return name
//     }
// }
// console.log(person.display("name"))
// console.log(person.display("rajkumar hirani"))

// const person2={
//     movie:"retro",
//     display:function(){
//         return `the object movie name is ${this.movie}`
//     }
// }
// console.log(person2.display("movie"))//When you use this it only shows that.
// console.log(person2.display("basha"))//when you give argument which wont be executable here.because the function does not take any parameter.

// const person3={
//     movie:"dangal",
//     display:function(movieName){
//         return `the movie name ${movieName}`
//     }
// }
// console.log(person3.display(person3["movie"]))
// console.log(person3.display("chanduchampion"))

//Object.keys,Object.entries

// let car=new Object()

// car.name="royal enfield"
// car.model="2024"

// const keys=Object.keys(car)
// console.log(keys)
// const entries=Object.entries(car)
// console.log(entries)

// const obj={
//     name:"Ahamathbasha",
//     address:{
//         city:"tvm",
//         friend:{
//             who:"everyone"
//         }
//     }
// }

// Object.freeze(obj)
// obj.name="ahamathbasha"
// console.log(obj.name)//no change in the top level property

// //nested will affect the changes
// obj.address.city="chennai"
// console.log(obj.address.city)
// console.log(obj)

//Object.seal will be helpfull to modify the existing values
// Object.seal(obj)
// obj.name="ahamathbasha"
// console.log(obj.name)
// //new property cannot be added
// obj.name.address.pincode="706087"
// console.log(obj.name.address.pincode)

//deepfreeze

// function deepFreeze(obj){
//     let propNames=Object.getOwnPropertyNames(obj)
//     for(let name of propNames){
//         const value=obj[name]//here we get the value
//         if(value && typeof value === "object"){
//             deepFreeze(value)
//         }
//     }
//     return Object.freeze(obj)
// }

// const object1={
//     name:"ahamathbasha",
//     address:{
//         city:"tvm",
//         pin:707801
//     }
// }
// object1.address.city="chennai"
// console.log("before deep freeze",object1.address.city)
// deepFreeze(object1)
// object1.address.city="no city"
// console.log("after deep freeze",object1.address.city)

//object delete 
// const obj={
//     name:'',
//     age:23
// }

// obj.name="ahamathbasha"

// console.log(obj)
// delete obj.name
// console.log(obj)


//object.isFrozen()
// const profile={
//     name:"ahamathbasha",
//     address:{
//         city:"tvm"
//     }
// }
// Object.freeze(profile)
// console.log(Object.isFrozen(profile))

//Object prevent extensions new property won't be added but existing property values can be changeable and deletable.

// const profile={
//     name:"basha",
//     address:{
//         city:"chennai"
//     }
// }
// console.log(profile)
// Object.preventExtensions(profile)
// profile.age=20
// console.log(profile)
// profile.address.city="tiruvannamalai"
// console.log(profile)
// profile.name="ahamathbasha"
// console.log(profile)
// delete profile.name
// console.log(profile)
// profile.name="ahamathbasha"
// console.log(profile)

//Object seal wont be deleted but modify the value
// const profile={
//     name:"Ahamathbasha",
//     age:22,
//     address:{
//         city:"Chennai"
//     }
// }
// console.log(profile)
// Object.seal(profile)
// delete profile.age
// console.log(profile)
// console.log(Object.isSealed(profile))


//give the lengthiest string in the given array
// const array = ["hellO", "bYe", "seeYou", "comeBack"]
// const output=array.reduce((acc,cur)=>{
//     if(cur.length > acc.length){
//         return cur
//     }else{
//         return acc
//     }
// },array[0])
// console.log(output)

// const arr = ["hellO", "bYe", "seeYou", "comeBack"];
// let lengthiestArr=arr[0]
// for(let i=0;i<arr.length-1;i++){
//     if(arr[i].length > arr[i+1].length){
//         lengthiestArr=arr[i]
//     }else{
//         lengthiestArr=arr[i+1]
//     }
// }
// console.log(lengthiestArr)

// remove nth element

// const arr=[1,2,3,4,5,6,6,7]
// const n=6

// for(let i=0;i<arr.length;i++){
//     if(arr[i]==n){
//         arr.pop()//form the matching to end everything will be deleted
//     }
// }
// console.log(arr)

// for(let i=0;i<arr.length;i++){
//     if(arr[i]==n){
//         for(let j=i;j<arr.length;j++){
//             arr[j]=arr[j+1]
//             console.log(arr)//[ 1, 2, 3, 4, 5, 6, 7, undefined ]
//         }
//     }
// }
// arr.pop()
// console.log(arr)//[1, 2, 3, 4,5, 6, 7]

//toavoid the undefined we use it to minus the array length
// const arr = [1,2,3,4,5,6,6,7]
// const n  = 6
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==n){
//         for(let j=i;j<arr.length-1;j++){
//             arr[j]=arr[j+1]
//         }
//     }
// }
// arr.pop()
// console.log(arr)

//accessing the numbers
// const n=345
// const second=n.toString().split("")[1]
// console.log(second)
// console.log(second)

//setTimeout
// const interval=setInterval(()=>{
//     console.log("hi")
// },1000)

// setTimeout(()=>{
//     console.log("i am goin to stop you")
//     clearInterval(interval)
// },3000)

//readable format

// console.log('start')
// setTimeout(()=>{
//     console.log('hi')
// },500)
// console.log('end')
// let startDate=new Date().getTime()
// let endDate=startDate
// while(endDate <= startDate+3000){
//     endDate=new Date().getTime()
//     let date=new Date(endDate)
//     console.log(date.toLocaleString())
// }
// console.log("hi")

//shallow copy
// let arr1=[1,2,3,4,5]
// let arr2=arr1
// arr2[5]=10
// console.log(arr1)
// console.log(arr2)

// let obj1={
//     name:'ahamathbasha',
//     age:25
// }

// let obj2=obj1
// obj2.age=30
// console.log(obj1)
// console.log(obj2)

//unique elements
// const arr = [1,2,4,3,2,1]
// const display = []

// for(let i=0;i<arr.length;i++){
//     let flag=0
//     for(let j=0;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             flag++
//         }
//     }
//     if(flag==1){
//         display.push(arr[i])
//     }
// }
// console.log(display)

//weakset

// const object={
//     name:"abin",
//     age:22
// }

// const weak=new WeakSet([object])
// console.log(weak)

// let weakSetObject=new WeakSet()
// let objectOne={}
// let objectTwo={}

// weakSetObject.add(objectOne)
// weakSetObject.add(objectTwo)
// console.log(weakSetObject)
// console.log(weakSetObject.has(objectOne))
// weakSetObject.delete(objectTwo)
// console.log(weakSetObject.has(objectTwo))