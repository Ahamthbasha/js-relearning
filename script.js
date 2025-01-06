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

//callback
// function java(){
//     console.log("ahamathbasha knows java")
// }

// setTimeout(()=>{
//     java()
// },3000)

// var start=((data)=>{
//     console.log("Data",data)
// })

// var end=function(callback){
//     callback("callback is working")
// }

// end(start)

//find

// const arr=[1,2,2]

// let first=arr.find((n)=>{
//     return n>=2
// })
// console.log(first)

// let firstIndex=arr.findIndex((n)=>{
//     return n>=2
// })
// console.log(firstIndex)

// let lastIndex=arr.findLastIndex((n)=>{
//     return n>=2
// })
// console.log(lastIndex)

//sort the array
// const arr=[1,2,3,4,5,6,7,8,9]
// arr.sort()
// console.log(arr)
// arr.sort((n1,n2)=>{
//     return n2-n1
// })
// console.log(arr)

//< will be descending and > will be ascending
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]<arr[j]){
//             let temp=arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp
//         }
//     }
// }
// console.log(arr)

//Find the maximum repeated words in a sentence

// const para = "Bob hit a ball, the hit BALL flew far after it was hit."
// const banned = "hit"

// const array=para.toLowerCase().replace(/[^a-zA-Z ]/g, "").split(" ")

// console.log(array)

// let wordCount={}

// for(let word of array){
//     if(word !==banned){
//         if(wordCount[word]){
//             wordCount[word]++
//         }else{
//             wordCount[word]=1
//         }
//     }
// }
// console.log(wordCount)

// const entries=Object.entries(wordCount)
// console.log(entries)
// console.log(entries.length)
// let maxCount=0
// let maxWord=""

// for(let i=0;i<entries.length;i++){
//     if(entries[i][1]>maxCount){
//         maxCount=entries[i][1]
//         maxWord=entries[i][0]
//     }
// }
// console.log(`maxCount is ${maxCount} and maxword is ${maxWord}`)

// function add(a,b){
//     return new Promise((resolve,reject)=>{
//         if(a&&b != "undefined"){
//             resolve(a+b)
//         }else{
//             reject("number needed")
//         }
//     })
// }

// function multiply(a,b){
//     return new Promise((resolve,reject)=>{
//         if(a&&b != "undefined"){
//             resolve(a*b)
//         }else{
//             reject("number needed")
//         }
//     })
// }

// add(2,4)
// .then((sum)=>{
//     console.log(sum)
// })
// .catch((error)=>{
//     console.log(error)
// })
// multiply(2,2)
// .then((resolve)=>{
//     console.log(resolve)
// })
// .catch((error)=>{
//     console.log(error)
// })

// function add(a,b){
//     return new Promise((resolve,reject)=>{
//         if(a && b){
//             resolve(a+b)
//         }else{
//             reject("no is not defined")
//         }
//     })
// }

// function multiply(a,b){
//     return new Promise((resolve,reject)=>{
//         if(a && b){
//             resolve(a*b)
//         }else{
//             reject("no is needed")
//         }
//     })
// }

// function divide(a,b){
//     return new Promise((resolve,reject)=>{
//         if(a && b!=0){
//             resolve(a/b)
//         }else{
//             reject("no is needed")
//         }
//     })
// }

// add(4,6)
// .then((resolve)=>{
//     console.log("add:",resolve)
//     return multiply(resolve,2)
// })
// .then((resolve)=>{
//     console.log("product:",resolve)
//     return divide(resolve,2)
// })
// .then((resolve)=>{
//     console.log("divide:",resolve)
// })
// .catch((reject)=>{
//     console.log(reject)
// })

//shadowing

// function shadow(){
//     let a=10
//     var b=5
//     if(true){
//         let a=20
//         var b=30
//         console.log(a)
//         console.log(b)
//     }
//     console.log(a)
//     console.log(b)
// }
// shadow()

//shallowCopy
// const obj1={
//     name:"ahamathbasha",
//     desig:"senior software developer"
// }
// const obj2=obj1
// obj2.name="Ahamathbasha"
// console.log(obj1)
// console.log(obj2)

//slice
// const array = ["Mango","Orange","Apple","Banana"]
// console.log(array.slice(1,3))
// console.log(array)
//splice affect the original
// console.log(array.splice(0,1,"Maaza"))//[ 'Mango' ]
// console.log(array)//[ 'Maaza', 'Orange', 'Apple', 'Banana' ]
//toSplice does not affect the original
// console.log(array.toSpliced(0,1,"Rambootan"))
// console.log(array)

// 

// function name(){
//     console.log("ahamathbasha")
// }

// const time=setInterval(()=>{
//     name()
// },1000)

// setTimeout(()=>{
//     console.log("i am going to stop you")
//     clearInterval(time)
// },3000)

//generator

// function* gen(n){
//     let m=1
//     while(true){
//         yield m*n
//         m++
//     }
// }

// const three=gen(3)
// for(let i=1;i<=10;i++){
//     console.log(three.next().value)
// }

//deepcopy
// const obj1={a:1,b:2,c:{d:5}}
// const obj2=JSON.parse(JSON.stringify(obj1))
// obj2.c.d=20
// console.log(obj2)
// console.log(obj1)

//set
// let object1={name:"ahamath"}
// let object2={name:"basha"}

// let mySet=new Set(Object.entries(object1))
// console.log(mySet)
// let weakSet=new WeakSet()
// weakSet.add(object1)
// console.log(weakSet)

//find the vowels in the given string and add in the new array

// let s="hello"
// let vowels=['a','e','i','o','u','A','E','I','O','U']
// let vow=[]
// for(let i=0;i<s.length;i++){
//     if(vowels.includes(s[i])){
//         vow.push(s[i])
//     }
// }
// console.log(vow)

// //in the vowels array reverse and modify e to o and o to e.

// let rev=vow.reverse()
// console.log(rev)
// let str1=""
// let k=0
// for(let i=0;i<s.length;i++){
//     if(vowels.includes(s[i])){
//         str1=str1+rev[k]
//         k++
//     }else{
//         str1=str1+s[i]
//     }
// }
// console.log(str1)

//call
// function greet(){
//     console.log(`hi ${this.name}`)
//     console.log(`your age is ${this.age}`)
// }
// const object={name:"ahamathbasha",age:"22"}
// greet.call(object)
// const object2={name:"ahamath",age:"22"}
// greet.call(object2)

//apply
// function motivation(message1,message2){
//     console.log(`mr.${this.name}.your age is ${this.age}. ${message1} ${message2}`)
// }
// const person={name:"ahamath",age:25}
// motivation.apply(person,["age is not a problem","to acheive"])

//bind
// function happy(){
//     console.log(`good morning from ${this.name}`)
// }
// const object={name:"ahamathbasha"}
// const greet=happy.bind(object)
// greet()

//Anagram

// let word1="silent"
// let word2="listen"

// word1=word1.split("").sort().join("")
// console.log(word1)
// word2=word2.split("").sort().join("")
// console.log(word2)
// if(word1==word2){
//     console.log("anagram")
// }

// const person={name:'abin',age:6,school:null}
// const defaultValue="Error"
// //const {name,age,school}=person
// console.log(person.school??defaultValue)

// const arr=["ahamathbasha","nangopan","muthudhasan","manikandaprabhu","madhankumar","sharik"]

// const result=arr.map((elements)=>{
//     return elements[0]
// })
// console.log(result)

// const obj={
//     firstName:"Ahamathbasha",
//     lastName:"F"
// }
// const print=function display(desig){
//     return `${this.firstName} ${this.lastName} ${desig}`
// }

//console.log(print.call(obj,"seniorSoftwareEngineer"))
// const displayFunction=print.bind(obj)
// console.log(displayFunction("buissnessMan"))

// function myAge(){
//     console.log(this.age)
// }
// let student={age:5}
// myAge.call(student)

// let obj={}
// if(Object.keys(obj)==0){
//     console.log("object is empty")
// }else{
//     console.log("object is not empty")
// }

//In object we dont have length property.It will show wrong answer if we use length property directly.

//currying

// function multiplication(a){
//     return function (b){
//         return a*b
//     }
// }

// const multiplicationOfTwo=multiplication(2)
// console.log(multiplicationOfTwo(5))

// function maths(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }

// const result=maths(1)(2)(3)
// console.log(result)

//find the duplicate

// const arr=[1,2,3,4,4,5,5,4,5,6,7,8]
// const duplicateArr=[]

// for(let i=0;i<arr.length;i++){
//     let flag=0
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             flag++
//         }
//     }
//     if(flag>1){
//         duplicateArr.push(arr[i])
//     }
// }
// console.log(duplicateArr)

// let uniqueArr=[]
// for(let i=0;i<arr.length;i++){
//     let flag=0
//     for(let j=0;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             flag++
//         }
//     }
//     if(flag==1){
//         uniqueArr.push(arr[i])
//     }
// }
// console.log(uniqueArr)

// function* gen(){
//     yield 1
//     yield "hi"
//     yield 54
// }

// const generator=gen()
// for(let i=1;i<=3;i++){
// console.log(generator.next().value)
// }

//Object questions
// let abc = [{a:[{bc: 9}]} ,{b:[{dc: 89}]} ,{x:[{sc: 39}]} , {s:[{xc: 82}]}  ]

// let sum = 0
// for(let i of abc) {
//     let index = Object.values(i)[0][0];
//     sum += Object.values(index)[0]
// }

// console.log(sum)

//find the largest length of the array

// const str = 'India is my country my'
// let arr=str.split(" ")

// let largestlength=arr[0]
// for(let i=0;i<arr.length;i++){
//     if(arr[i].length > largestlength.length){
//         largestlength=arr[i]
//     }
// }
// console.log(largestlength)

//find the object who scored high marks
// const details=[
//     {name:"Vignesh",class:"12th",score:90,status:"PASS"},
//     {name:"Abin",class:"12th",score:91,status:"PASS"},
//     {name:"Logesh",class:"12th",score:96,status:"PASS"},
//     {name:"Harish",class:"12th",score:73,status:"PASS"},
// ]
// let max=details[0]
// for(let i=1;i<details.length;i++){
//     if(details[i].score>max.score){
//         max=details[i]
//     }
// }
// console.log(max)


// function oddOrEven(num){
//     return new Promise((resolve,reject)=>{  
//         if(typeof num=='number' && num%2==0){
//             resolve("it is even")
//         }else{
//             reject("it is odd")
//         }
//     })
// }
// oddOrEven(6)
// .then((resolve)=>{
//     console.log(resolve)
// })
// .catch((reject)=>{
//     console.log(reject)
// })

// function Person(name,age,place){
//     this.name=name
//     this.age=age
//     this.place=place
// }

// Person.prototype.Nationality="indian"

// const Abin=new Person("Ahamathbasha",22,"tvm")
// console.log(Abin.Nationality)

// function asynchronous_operational_method(){
//     let firstPromise=new Promise((resolve,reject)=>{
//         resolve("hello")
//     })
//     let secondPromise=new Promise((resolve,reject)=>{
//         resolve("basha")
//     })
//     let allsettled=Promise.allSettled([firstPromise,secondPromise])
//     return allsettled
// }

// async function display(){
//     const data=await asynchronous_operational_method()
//     console.log(data)
// }

// display()

// const factorial=function fact(n){
//     if(n==0||n==1){
//         return 1
//     }
//     return n*fact(n-1)
// }
// console.log(factorial(5))

// const arr = [1,2,3,4,5,55,6]

// const highest=arr.reduce((acc,cur)=>{
//     if(cur>acc){
//         acc=cur
//     }
//     return acc
// })
// console.log(highest)

// const arr=[1,2,3,4,5,6,7]
// const set=new Set(arr)
// set.add(8)
// console.log(set)
// console.log(set.size)
// console.log(set.delete(8))
// console.log(set.has(1))

// const num = ["apple","banana","orange"]
// const arr=num.toSpliced(0,2,"Kiwi","java")
// console.log(arr)

// const Person={
//     name:"ahamathbasha",
//     age:22,
//     greet:function(msg){
//         console.log(`my name is ${this.name} and age is ${this.age}.Message is ${msg}`)
//     }
// }

// const person1={
//     name:"Ahamathbasha",
//     age:21
// }

// const message=Person.greet.bind(person1)
// message("hello")
// Person.greet.call(person1,"good morning")
// Person.greet.apply(person1,["good morning"])

//deep freeze

// const person={
//     name:"ahamathbasha",
//     age:25,
//     address:{
//         city:"chennai",
//         pincode:606901
//     }
// }

// function deepfreeze(obj){
//     let propNames=Object.getOwnPropertyNames(obj)
//     for(let name of propNames){
//         let value=obj[name]
//         if(value && typeof value == "object"){
//             deepfreeze(obj)
//         }
//     }
//     return Object.freeze(obj)
// }

// deepfreeze(person)

// person.address.city="tvm"
// console.log(person)

//factory function

// function createPerson(name,age){
//     return{
//         name:name,
//         age:age,
//         greet:function(){
//             console.log(`my name is ${this.name} and age is ${this.age}`)
//         }
//     }
// }

// const person1=createPerson('abin',22)
// console.log(person1)

// for(var i=1;i<=10;i++){
//     setTimeout(()=>{
//         console.log("inner")
//     },5000)
//     console.log("outer")
// }
//outer will be print ten times
//inner will print ten times

// const str="madam"
// const newStr=str.split("").reverse().join("")
// console.log(newStr)
// if(str==newStr){
//     console.log("true")
// }else{
//     console.log("false")
// }

// const arr = [1, 3, 4, 2, 6, 9, 8, 5];

// let firstLargest = 0;
// let secondLargest = 0;
// let thirdLargest = 0;  // Initialize thirdLargest with 0

// // Find the first largest element
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > firstLargest) {
//         firstLargest = arr[i];
//     }
// }
// console.log("First Largest:", firstLargest);

// // Find the second largest element
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > secondLargest && arr[i] !== firstLargest) {
//         secondLargest = arr[i];
//     }
// }
// console.log("Second Largest:", secondLargest);

// // Find the third largest element
// for(let i=0;i<arr.length;i++){
//     if(arr[i] > thirdLargest && arr[i] != firstLargest && arr[i] != secondLargest){
//         thirdLargest=arr[i]
//     }
// }
// console.log("Third Largest:",thirdLargest)

//finding first and second largest
// const Person = [{name: "Abin", age: 22, score: 78},
//     {name:"Logesh", age: 21, score: 79},
//     {name: "Vignesh", age: 22, score: 80},
//     {name:"basha", age: 23, score: 100},
//     {name: "Harish", age: 22, score: 82}]
    
// let max = Person[0]
// for(let i=0;i<Person.length;i++){
//     if(Person[i].score > max.score){
//         max=Person[i]
//     }
// }
// console.log(max)
// let secondMax=Person[0]
// for(let i=0;i<Person.length;i++){
//     if(Person[i].score > secondMax.score && Person[i].score != max.score){
//         secondMax=Person[i]
//     }
// }
// console.log(secondMax)

//sum the given arr condition is greater than 30

// const ar = [10,20,30,40,50]
// let sum=ar.reduce((acc,cur)=>{
//     if(cur>30){
//       return  acc+cur
//     }else{
//         return acc
//     }
// },0)
// console.log(sum)

//find the sum of the array of object

// let sum=0
// const array = [{abc:3, efg:4}, {abc: 3, efg:4}, {abc: 3, efg: 4}, {abc:3,efg:4}]
// for(let i=0;i<array.length;i++){
//     sum=sum+array[i].abc+array[i].efg
// }
// console.log(sum)

// let y = 4;
// function num(){
//     y = 8;
//     console.log("The no: inside the func: " + y)
// }

// num()
// console.log(y)

//constructor

// function Person(name,age,place){
//     this.name=name,
//     this.age=age,
//     this.place=place
// }

// const ahamath=new Person("Ahamathbasha",20,"tvm")
// console.log(ahamath)

// const array = [10 ,20 , 30 , 40, 50]

// array.splice(2,0,25)

// console.log(array)

// const output = array.reduce((acc, curr)=>{
//     if(curr>30){
//         return curr+acc
//     }else{
//         return acc
//     }
// },0)

// console.log(output)
// let max = 0
// const hi = array.reduce((acc,curr)=>{
//     if(curr>max){
//         return curr
//     }else {
//         return max
//     }
// },0)

// console.log(hi)


// let big = array.reduce((acc, curr)=>{
//     return acc+curr
// },0)

// console.log(big)

// let fil = array.filter((x)=>{
//     if(x%2==0){
//         return x
//     }
// })

// console.log(fil)

// let map = array.map((x)=>{
// return x*x
// })

// console.log(map)

//every method

// const array=[2,7,8,5]
// const out=array.every((n)=>n%2==0)
// console.log(out)

//factory function 
// function createPerson(name,age){
//     return {
//         name:name,
//         age:age,
//         greet:function(){
//             console.log(`name is ${this.name} and age is ${this.age}`)
//         }
//     }
// }
// const person=createPerson("ahamathbasha",20)
// console.log(person)

//flat

// const arr=[1,2,3,[4,5,[6,7,8]]]
// console.log(arr.flat(2))

//flatMap

// const array=[1,2,3]
// const flatMap=array.flatMap((x)=>{
//     return [x,x*2]
// })
// console.log(flatMap)

//generator

// function* gen(){
//     let m=2
//     while(true){
//         yield m
//         m+=2
//     }
    
// }

// const twoTable=gen()
// for(let i=1;i<=10;i++){
//     console.log(twoTable.next().value)
// }

//map

// const array=[1,3,4,5,6,7,8]
// const output=array.map((n)=>{
//     return n*4
// })
// console.log(output)

//nullish

// const value=null
// console.log(value ?? "hi")

//optional chaining

// const person={
//     name:"Abin",
//     age:22,
//     address:{
//         city:"kochi"
//     }
// }

// console.log(person.address?.pincode?.code?.no)
// // console.log(person.address.pincode.code).It show error

// const Person = {
//     id:1,
//     name: "Abin",
//     address: {
//         street: "Abc",
//         city: null
//     }
// }
// console.log(Person.address?.city)//if the value is mentioned it will give otherwise undefined

//remove vowels

// function vowels(str){
//     return str.replace(/[aeiou]/gi,'')
// }
// console.log(vowels("ahamath"))

// const array=[2,3,5,5]
// const array1=new Set(array)
// console.log(array1)

//Take the first character of each string and store it in the array
// const string=["apple", "banana", "orange", "grape", "kiwi"];

// const firstLetter=string.map((s)=>{
//     return s[0]
// })
// console.log(firstLetter)

// let str = "lucky"

// for(let i=str.length-1;i>=0;i--){
//     console.log(str[i])
// }

// let words = ["alice","bob","charlie"], s = "abc"
// let firstLetter=""
// for(let i=0;i<words.length;i++){
//     firstLetter=firstLetter+words[i][0]
// }
// console.log(firstLetter===s)

// let n=11
// console.log(n.toString(2))

//closure

// function n(){
//     let x=10
//     function inner(){
//         console.log(x)
//     }
//     return inner()
// }
// n()

//default function

// function name(name="Ahamathbasha"){
//     console.log(name)
// }
// name()

// function fact(n){
//     if(n==0||n==1){
//         return 1
//     }
//     return n*fact(n-1)
// }
// console.log(fact(5))

// const array = ["apple", "mango", "orange"]
// for(let n of array){
//     console.log(n)
// }

// const object = {name: "Abin", age: 22}
// for(let i in object){
//     console.log(i)
// }

// for(let i in object){
//     console.log(object[i])
// }

// const Animal={
//     sound:function(){
//         return `${this.name} makes sound`
//     }
// }

// const dog=Object.create(Animal)
// dog.name="dog"
// console.log(dog)
// console.log(dog.sound())

// let n="abin"
// console.log(n.search("n"))

// let pattern=/best/
// let string="I am the best"
// console.log(pattern.test(string))

//remove vowels

// let str = "Hi HEllo How ARE yoU"
// str=str.replaceAll(/[aeiou]/gi,"")
// console.log(str)

//store the repeated odd no in a set

// const array = [1,2,2,3,4,5,6,7,7,3]
// const set=new Set()

// for(let i=0;i<array.length;i++){
//     let flag=0
//     for(let j=0;j<array.length;j++){
//         if(array[i]==array[j]){
//             flag++
//         }
//     }
//     if(flag>1){
//         if(array[i]%2!=0){
//             set.add(array[i])
//         }
//     }
// }
// console.log(set)

// let array=["apple","orange","banana"]
// let set=new Set(array)
// set.forEach((element)=>{
//     console.log(element)
// })
// console.log(...array)
// console.log(...set,...array)
// console.log(...set)

// const arr = ["Amal", "Arun", "Kiran", "manoharan", "Anandhu", "Manu", "Sachin", "Sivasankaran", "Amarnadh"];

// arr.sort()
// console.log(arr)

// const arr=[1,2,2,3,4]
// arr.length=0
// console.log(arr)

// let output="abinbabu"
// let out1=output.substring(0,4)
// let out2=output.substring(4,0)
// let out3=output.substr(0,4)
// let out4=output.substr(4,0)//it does not support for the reverse
// console.log(out1)
// console.log(out2)
// console.log(out3)
// console.log(out4)

//unique elements
// const array = [2,4,5,39,2,4,10]
// let unique=[]
// for(let i=0;i<array.length;i++){
//     let flag=0
//     for(let j=0;j<array.length;j++){
//         if(array[i]==array[j]){
//             flag++
//         }
//     }
//     if(flag==1){
//         unique.push(array[i])
//     }
// }
// console.log(unique)

//objectarr find the sum 
// const abc = [{df:5,adf:4},{ddf:5,adf:4},{ddf:5,adfd:4}]
// let arr=[]
// for(let i=0;i<abc.length;i++){
//     arr.push(Object.values(abc[i]))
// }
// console.log(arr)
// console.log(arr[0][0])
// let sum=0
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         sum=sum+arr[i][j]
//     }
// }
// console.log(sum)

//find the sum of the array of object
// let arr = [{ab: 1, cd: 2}, {ab: 3, cd: 4}, {ab: 5, cd: 6}]

// let sum=0
// for(let i=0;i<arr.length;i++){
//     sum=sum+arr[i].ab+arr[i].cd
// }
// console.log(sum)

// const person = {
//     name:"Abin",
//     location: {
//         city: "Chennai"
//     }
// }

//shallow copy by 

// const person1=Object.assign(person,{first:1,second:2})
// console.log(person)
// console.log(person1)

// const abc = [{af:[3,4,4]},{adf:[3,4,4]},{afd:[3,4,4]},{daldf:[3,4,4]}]

// let arr=[]
// for(let i=0;i<abc.length;i++){
//     arr.push(Object.values(abc[i]))
// }
// arr=arr.flat(2)
// console.log(arr)
// let sum=0
// for(let i=0;i<arr.length;i++){
//     sum+=arr[i]
// }
// console.log(sum)

// let names = ["Mary","John","Emma"], heights = [180,165,170]

// var sortPeople = function(names, heights) {
//     let arr = []
//     for(let i = 0 ; i< names.length; i++){
//         arr.push({name: names[i], height: heights[i]})
//     }

//     arr.sort((a,b)=>{
//         return b.height - a.height
//     })

//     console.log(arr)

//     let ans = arr.map((x)=>
//     {
//         return x.name
//     })

//     return ans
    
// };

// console.log(sortPeople(names,heights));

//sort it in height based
// let names = ["Mary","John","Emma"], heights = [180,165,170]
// let arr=[]
// for(let i=0;i<names.length;i++){
//     arr.push({name:names[i],height:heights[i]})
// }
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i].height>arr[j].height){
//             let temp=arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp
//         }
//     }
// }
// console.log(arr)

//memoization

// let calculation=(n)=>{
//     let sum=0
//     for(let i=1;i<=n;i++){
//         sum=sum+i
//     }
//     return sum
// }

// let memoization=(fun)=>{
//     let cache={}
//     return function(...args){
//         let n=args[0]
//         if(n in cache){
//             return cache[n]
//         }else{
//             let result=fun(...args)
//             cache[n]=result
//             return result
//         }
//     }
// }

// const efficient=memoization(calculation)
// console.time()
// console.log(efficient(5))
// console.timeEnd()
// console.time()
// console.log(efficient(5))
// console.timeEnd()


//recursion

// function countDown(n){
//     if(n<=0){
//         console.log("done")
//         return
//     }
//     console.log(n)
//     countDown(n-1)
// }
// countDown(5)

//promise add

// function add(a,b){
//     return new Promise((resolve,reject)=>{
//         if(typeof a =='number' && typeof b=='number'){
//             resolve(a+b)
//         }else{
//             reject("numbers datatype only allowed")
//         }
//     })
// }

// add(5,4)
// .then((resolve)=>{
//     console.log(resolve)
// })
// .catch((reject)=>{
//     console.log(reject)
// })

//promise race

// let promise1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("promise1")
//     },3000)
// })

// let promise2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("promise2")
//     },1000)
// })

// let promise3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("promise3")
//     },2000)
// })

// Promise.race([promise1,promise2,promise3])
// .then((resolve)=>{
//     console.log(resolve)
// })
// .catch((reject)=>{
//     console.log(reject)
// })

//async await function

// function add(a,b){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(typeof a=='number' && typeof b=='number'){
//                 resolve(a+b)
//             }else{
//                 reject("number only allowed")
//             }
//         },1000)
//     })
// }

// async function addTwoNumber(a,b){
//     try{
//         let result=await add(a,b)
//         console.log(result)
//     }catch(error){
//         console.log(error)
//     }
// }

// addTwoNumber(4,5)

// (()=>{
//     console.log("iife")
// })()

// (function add(a,b){
//     let sum=a+b
//     console.log(sum)
// })(5,4)


//counter

// const counter=(()=>{
//     let count=0
//     return{
//         increment:(()=>{
//             count++
//             return count
//         }),
//         decrement:(()=>{
//             count--
//             return count
//         }),
//         getCount:(()=>{
//             return count
//         })
//     }
// })()
// console.log(counter.increment())
// console.log(counter.increment())
// console.log(counter.increment())
// console.log(counter.decrement())
// console.log(counter.getCount())

//constructor
// class person{
//     constructor(name,age,desig){
//         this.name=name
//         this.age=age
//         this.desig=desig
//     }
//     getDetails(){
//         console.log(`the name is ${this.name} and the age is ${this.age} and the designation is ${this.desig}`)
//     }
// }
// const basha=new person("ahamathbasha",22,"senior software engineer")
// basha.getDetails()

//currying
// function add(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }
// const addition=add(1)(2)(3)
// console.log(addition)

//generator
// function* gen(){
//     let n=4
//     while(true){
//         yield n
//         n+=4
//     }
// }
// const multiplyFour=gen()
// for(let i=1;i<=10;i++){
//     console.log(multiplyFour.next().value)
// }

//optional chaining
// const person = {
//     name:'sathish',
//     age:12,
//     address:{
//         city:'thanjavur'
//     }
// }

// console.log(person.address?.pincode?.code)

//object
// const person={name:'ahamathbasha',age:29,school:'ksms',get Details(){return 'Iam '+this.name}}
//console.log(person.Details)

// const person2=person
// person2.name="Ahamathbasha"
// console.log(person)
// console.log(person2)

// person.details=function detials(){
//     return `${this.name} and ${this.age}`
// }

// console.log(person)

// const stringify=JSON.stringify(person)
// console.log(stringify)

//object getter and setter

// const obj={count:0}

// Object.defineProperty(obj,'increment',{
//     get:function(){
//         this.count++
//         return this.count
//     }
// })

// Object.defineProperty(obj,'decrement',{
//     get:function(){
//         this.count--
//         return this.count
//     }
// })
// Object.defineProperty(obj,'Add',{
//     set:function(value){
//         this.count+=value
//         return this.count
//     }
// })
// Object.defineProperty(obj,'Sub',{
//     set:function(value){
//         this.count-=value
//         return this.count
//     }
// })

// console.log(obj.increment)
// console.log(obj.increment)
// obj.Add=4
// console.log(obj.count)

//prototype
// function Person(fname,lname,age){
//     this.firstname=fname
//     this.lastname=lname
//     this.age=age
// }

// const basha=new Person("ahamathbasha","F",21)

// Person.prototype.Nationality="indian"
// console.log(basha)
// console.log(basha.Nationality)

// Person.prototype.greet=function(){
//     return `good morning sir`
// }
// console.log(basha.greet())

let text='My name is Sathish'
// console.log(text.length)

// console.log(text.charAt(3))
// console.log(text.charCodeAt(3))
// console.log(text[3])
// console.log(text.at(3))

// console.log(text.slice(0,3))
// console.log(text.slice(0))
// console.log(text.slice(-1))
// console.log(text.slice(-5))
// console.log(text.slice(-5,-2))

// console.log(text.substring(-5,-1))//it wont allow negative
// console.log(text.substring(0,5))
// console.log(text.substr(-5,5))//It allow negative also.

// console.log(text.repeat(3))

// console.log(text.replace('h',''))
// console.log(text.replaceAll('h',''))

// console.log(text.lastIndexOf('h'))

// console.log(text.search(/name/gi))

// console.log(text.match(/is/))
// console.log(text.match(/is/gi))
// console.log(text.match('s'))

// const output=text.matchAll('s')
// console.log(output)//it gives the iterator.We need to modify that for further operations

// const arr=Array.from(output)
// console.log(arr)

// console.log(text.includes('My'))
// console.log(text.startsWith('M'))
// console.log(text.endsWith('s'))

//reverse an array

// let arr=[5,4,3,2,1]
// let start=0
// let end=arr.length-1
// while(start<end){
//     let temp=arr[start]
//     arr[start]=arr[end]
//     arr[end]=temp
//     start++
//     end--
// }
// console.log(arr)

//let num=[1,2,3,4,5]
//find the largest element from the array
// function findLargestNo(arr){
// let largest=0 
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>largest){
//         largest=arr[i]
//     }
// }
// return largest
// }
// console.log(findLargestNo(num))

//sum of the array
// function sum(arr){
//     let sum=0
//     for(let i=0;i<arr.length;i++){
//         sum=sum+arr[i]
//     }
//     return sum
// }

// console.log(sum(num))

//delete the element from the given array

// function deleteNO(arr,no){
//     let index=arr.indexOf(no)
//     arr.splice(index,1)
//     return arr
// }
// console.log(deleteNO([1,2,3,4,5],2))

//find the array has duplicates elements or not

// function dupllicateOrNot(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]==arr[j]){
//                 return "array has duplicate element"
//             }
//         }
//     }
//     return "array does not have duplicate element"
// }

// console.log(dupllicateOrNot([1,2,3,4,5,1]))

//find and store the duplicate elements in an array

// function storeDuplicate(arr){
//     let duplicate=[]
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]==arr[j] && !duplicate.includes(arr[i])){
//                 duplicate.push(arr[i])
//             }
//         }
//     }
//     return duplicate
// }
// console.log(storeDuplicate([1,2,2,3,2,1,1,5,5,6,6,6]))

//remove the duplicates elements from the given array

// function removeDuplicate(arr){
//     let newArr=[]
//     for(let i=0;i<arr.length;i++){
//         if(!newArr.includes(arr[i])){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }
// console.log(removeDuplicate([1,2,2,3,2,1,1,5,5,6,6,6]))

//concat arrays using spread operator

// function concat(arr1,arr2){
//     let output=[...arr1,...arr2]
//     return output
// }

// console.log(concat([1,2,3,4,5],[1,2,3,4,5]))

//loop a string array and print their length

// function printLength(arr){
//     for(let n of arr){
//         console.log(`${n} length is ${n.length}`)
//     }
// }
// printLength(['sathish','kumar','baskaran'])

//find the unique elements in the given array

// function uniqueElements(arr){
//     let unique=[]
//     for(let i=0;i<arr.length;i++){
//         let flag=0
//         for(let j=0;j<arr.length;j++){
//             if(arr[i]==arr[j]){
//                 flag++
//             }
//         }
//         if(flag==1){
//             unique.push(arr[i])
//         }
//     }
//     return unique
// }

// console.log(uniqueElements([1,2,3,4,1,2,4,99]))

//find the prime no in the array and sum the prime no

// const arr = [1, 2, 3, 4,5,6,7,8,9,10];

// function findPrimeAndSum(arr){
//     let flag=0
//     let primeSum=0
//     for(let i=0;i<arr.length;i++){
//         let n=arr[i]
//         for(let i=1;i<=n;i++){
//             if(n%i==0){
//                 flag++
//             }
//         }
//         if(flag==2){
//             primeSum+=n
//         }
//         flag=0
//     }
//     return primeSum
// }

// console.log(findPrimeAndSum(arr))

//reverse a string

// function reverse(str){
//     return str.split(" ").reverse().join(" ")
    
// }
// console.log(reverse('My name is Sathish'))

//palindrome or not

// function isPalindrome(str){
//     let input=str.toLowerCase()
//     let reverse=input.split(" ").reverse().join(" ")
//     if(input===reverse){
//         return "string is palindrome"
//     }else{
//         return "string is not palindrome"
//     }
// }

// console.log(isPalindrome("Malayalam"))

//check the given word is anagram or not

// function checkAnagram(str1,str2){
//     let word1=str1.split("").sort().join("")
//     let word2=str2.split("").sort().join("")
//     if(word1==word2){
//         return 'anagram'
//     }else{
//         return 'not anagram'
//     }
// }
// console.log(checkAnagram("listen","silent"))

//find the largest word in the given string

// let string="My name is sathish"
// function findLargestString(string){
// let str=string.split(" ")
// console.log(str)
// let largest=str[0]
// for(let i=0;i<str.length;i++){
//     if(str[i].length>largest.length){
//         largest=str[i]
//     }
// }
// return largest
// }
// console.log(findLargestString(string))

//count number of words in a string

// function countWords(str){
//     let n=str.split(" ").length
//     return n
// }
// console.log(countWords("My name is Ahamathbasha"))

//Remove vowels in a string

// function removeVowels(str){
//     return str.replaceAll(/[aeiou]/gi,'')
// }
// console.log(removeVowels("augmentation"))

//check vowel is in the string

// function checkVowels(str){
//     if(/[aeiou]/gi.test(str)){
//         return "it has vowels"
//     }
//     return "it does not has vowels"
// }
// console.log(checkVowels("augmentation"))

//count no of vowels in the given string

// function countVowelsInString(str){
//     let count=0
//     for(let i=0;i<str.length;i++){
//         if("aeiouAEIOU".includes(str[i])){
//             count++
//         }
//     }
//     return count
// }
// console.log(countVowelsInString("Augmentation"))

//count occurence of the specific character

// function countSpecificCharacter(str,char){
//     let count=0
//     for(let i=0;i<str.length;i++){
//         if(str[i].toLowerCase()===char.toLowerCase()){
//             count++
//         }
//     }
//     return count
// }

// console.log(countSpecificCharacter('Journey to the center of the earth','e'))

//removeDuplicates

//Helloloooo

// function removeDuplicates(str){
//     let string=""
//     for(let i=0;i<str.length;i++){
//         for(let j=0;j<str.length;j++){
//             if(str[i]==str[j] && !string.includes(str[i])){
//                 string+=str[i]
//             }
//         }
//     }
//     str=string
//     return str
// }
// console.log(removeDuplicates("Helloloooo"))

//find the substring of the given string

// function searchSubstr(str,substr){
//     let index=str.indexOf(substr)
//     if(index>0){
//         return index 
//     }
//     return "It is not found"
// }

// console.log(searchSubstr("My name is sathish","i"))

//capitalize first letter of each word

// function capitalizeFirstLetter(str){
//     let words=str.split(" ")
//     let firstLetter=words.map((map)=>{
//         return map[0].toUpperCase()+map.slice(1)
//     })
//     return firstLetter
// }
// console.log(capitalizeFirstLetter('my name is ahamathbasha'))

//character frequency

// const str="hello world"
// function countFrequencies(str){
// let charCount={}
// for(let i=0;i<str.length;i++){
//     let char=str[i]
//     if(charCount[char]){
//         charCount[char]++
//     }else{
//         charCount[char]=1
//     }
// }
// return charCount
// }

// console.log(countFrequencies(str))

//find the non repeating characters

// const str="hellol"

// function unique(str){
//     let unique=[]
//     for(let i=0;i<str.length;i++){
//         let flag=0
//         for(let j=0;j<str.length;j++){
//             if(str[i]==str[j]){
//                 flag++
//             }
//         }
//         if(flag==1){
//             unique.push(str[i])
//         }
//     }
//     return unique.join("")
// }

// console.log(unique(str))

//object


// const nestedArray = [
//     { "ab": 2 },
//     [
//         { "bf": 3 }
//     ],
//     { "df": 5 },
//     [
//         { "gh": 1 },
//         [
//             { "ij": 4 }
//         ]
//     ]
// ];
// let values=[]
// for(let i=0;i<nestedArray.length;i++){
//     if(Array.isArray(nestedArray[i])){
//         for(let j=0;j<nestedArray[i].length;j++){
//             if(typeof nestedArray[i][j]==="object"){
//                 values.push(...Object.values(nestedArray[i][j]))
//             }
//             else if(typeof nestedArray[i][j]=="number"){
//                 values.push(nestedArray[i][j])
//             }
//         }
//     }
//     else if(typeof nestedArray[i]==='object'){
//         values.push(...Object.values(nestedArray[i]))
//     }
//     else if(typeof nestedArray[i]==='number'){
//         values.push(nestedArray[i])
//     }
// }
// console.log(values)
// let n

// for(let i=0;i<values.length;i++){
//     if(typeof values[i]==="object"){
//          n=Object.values(values[i])
//     }
// }
// values.pop()
// values.push(...n)
// console.log(values)

// let sum=values.reduce((acc,cur)=>acc+cur)
// console.log(sum)

//6-1-2025

//1.find the sum of the given array of object

// const BC = [5, 6, 7, 2, {a: 9}]
//  let sum=0
//  for(let i of BC){
//      if(typeof i=="number"){
//         sum=sum+i
//      }else if(typeof i=="object"){
//         let obj=Object.values(i)[0]
//            sum+=obj
        
//      }
//  }
//  console.log(sum)

//2.find the sum and learning here

// let arr=[{ab:1},{bc:2},{cd:3}]
// let sum=0
// for(let i of arr){
//     sum+=Object.values(i)//it will return like[1][2][3].When you add it js will convert it into string.you will get (0123).
// }
// console.log(sum)

// let arr=[{ab:1},{bc:2},{cd:3}]
// let sum=0
// for(let i of arr){
//     sum+=Object.values(i)[0]
// }
// console.log(sum)

//3.sum of object values

// let arr = [{x: 10}, {y: 20}, {z: 30}];
// let sum=0
// for(let i of arr){
//     sum+=Object.values(i)[0]
// }
// console.log(sum)

//4.Create a program that concatenates all the keys of the objects in the array into a single string.
// let arr = [{a: 1}, {b: 2}, {c: 3}];
// let keys=""
// for(let i of arr){
//     keys+=Object.keys(i).join("")
// }
// console.log(keys)

//5.Write a program that counts the total number of properties across all objects in the array.It includes the dupllicates
// let arr = [{name: 'Alice'}, {age: 25}, {location: 'NYC'}];
// let properties=[]
// for(let i of arr){
//     properties.push(...Object.keys(i))
// }
// console.log(properties)
// let totalCount=properties.length
// console.log(totalCount)

//it does not includes the duplicates

// let arr = [{name: 'Alice'}, {age: 25}, {location: 'NYC'}];
// let properties=[]
// for(let i of arr){
//     properties.push(...Object.keys(i))
// }
// let unique=new Set(properties)
// let totalCount=unique.size
// console.log(totalCount)

//6.Find the maximum value from the object

// let arr = [{age: 20}, {age: 30}, {age: 25}];

// let max=0

// for(let i of arr){
//     let value=Object.values(i)[0]
//     if(value>max){
//         max=value
//     }
// }
// console.log(max)

//7.Write a function that takes an array of objects, and for each object, creates a new object where the key and value are swapped.
// let arr = [{name: 'Alice'}, {age: 25}];
// // Output: [ { Alice: 'name' }, { '25': 'age' } ]

// function swap(arr){
//     return arr.map((obj)=>{
//         let newObj={}
//         for(let i in obj){
//             newObj[obj[i]]=i
//         }
//         return newObj
//     })
// }

// console.log(swap(arr))

//8.Write a program that checks if any object in the array contains a specific key (e.g., "name").\

//let arr = [{name: 'Alice'}, {age: 25}, {location: 'NYC'}];
// let keyToFind='name'
// let key=[]
// for(let i of arr){
//     key.push(...Object.keys(i))
// }
// console.log(key)
// console.log(key.includes(keyToFind))

//optimized solution
// let key='age'
// for(let i of arr){
//     if((Object.keys(i)).includes(key)){
//         console.log("key found")
//         break
//     }
// }

//9.Write a program that sums the values of a specific property ("amount") in an array of objects.

//let arr = [{amount: 100}, {salary: 200}, {amount: 300}];
// let property='amount'
// let sum=0
// for(let i of arr){
//     if(Object.keys(i)==property){
//         sum+=Object.values(i)[0]
//     }
// }
// console.log(sum)

//optimized solutions

// let property='amount'
// let sum=0
// for(let i of arr){
//     if(i.hasOwnProperty(property)){
//         sum+=i[property]
//     }
// }
// console.log(sum)

//10.Create a program that filters all objects in the array where the value of the "status" key is "active".

// let arr = [{status: 'active'}, {status: 'inactive'}, {status: 'active'}];
// let statusActive=[]
// for(let i of arr){
//     if(Object.values(i)[0]=='active'){
//         statusActive.push(i)
//     }
// }
// console.log(statusActive)

//11.Write a program to convert the array of objects into a single array of values, where each object is flattened into its value.

// let arr = [{x: 5}, {y: 10}, {z: 15}];
// let k=0
// for(let i of arr){
//     arr[k]=Object.values(i)[0]
//     k++
// }
// console.log(arr)

//12.Write a program that groups the objects in the array by the "category" key.
// let arr = [
//     {category: 'Fruit', item: 'Apple'},
//     {category: 'Vegetable', item: 'Carrot'},
//     {category: 'Fruit', item: 'Banana'}
//   ];

  //output should be look like this
// {
//   Fruit: [
//     {category: 'Fruit', item: 'Apple'},
//     {category: 'Fruit', item: 'Banana'}
//   ],
//   Vegetable: [
//     {category: 'Vegetable', item: 'Carrot'}
//   ]
// }

// let grouped={}

// for(let i of arr){
//     let category=i.category
//     if(!grouped[category]){
//         grouped[category]=[]
//     }
//     grouped[category].push(i)
// }
// console.log(grouped)

//13.Sum of All Values Across Multiple Objects
// let arr = [{x: 10, b: 20}, {c: 30, d: 40}, {e: 50, f: 70}];
// let sum=0
// for(let i of arr){
//     sum+=Object.values(i)[0]+Object.values(i)[1]
// }
// console.log(sum)//220

//14. Write a program that multiplies each numeric value in the objects by a given factor (e.g., 2). Return a new array of objects where each value is multiplied by the factor.


// let arr = [{x: 10, b: 20}, {c: 30, d: 40}, {e: 50, f: 70}];
// for(let obj of arr){
//     console.log(obj)//gives the entire object
//     for(let key in obj){
//         console.log(`key:${key}`)//keys
//         console.log(`values:${obj[key]}`)//values
//     }
// }

// let arr = [{x: 10, b: 20}, {c: 30, d: 40}, {e: 50, f: 70}];
// let factor = 2;
// let newArr=[]

// for(let obj of arr){
//     let newObj={}
//     for(let key in obj){
//         newObj[key]=obj[key]*factor
//     }
//     newArr.push(newObj)
// }
// console.log(newArr)

//15.:Find the Average of All Values Across Objects
// let arr = [{x: 10, b: 20}, {c: 30, d: 40}, {e: 50, f: 70}];
// let sum=0
// let count=0
// for(let obj of arr){
//     for(let key in obj){
//         sum+=obj[key]
//         count++
//     }
// }
// let average=sum/count
// console.log(average)//36.666666666666664

//16.Find the Maximum and Minimum Values Across All Objects

// let arr = [{x: 10, b: 20}, {c: 5, d: 40}, {e: 50, f: 70}];

// let max=-Infinity
// let min=Infinity

// for(let obj of arr){
//     for(let key in obj){
//         if(obj[key]>max){
//             max=obj[key]
//         }
//         if(obj[key]<min){
//             min=obj[key]
//         }
//     }
// }
// console.log(max)
// console.log(min)

//17.Subtract Values Between Two Objects

// let obj1 = {x: 10, b: 20, c: 30};
// let obj2 = {x: 5, b: 10, c: 15};
// //expected output
// //{ x: 5, b: 10, c: 15 }

// let result={}

// for(let key in obj1){
//     result[key]=obj1[key]-obj2[key]
// }
// console.log(result)

//18.Compute the Product of All Values in a Single Object
// let obj = {x: 2, b: 3, c: 4};
// let product=1
// for(let key in obj){
//     product*=obj[key]
// }
// console.log(product)

//19.Compute the Product of All Values in a Single Object
// let arr = [{x: 10, b: 20}, {x: 30, b: 40}, {x: 50, b: 60}];
// let newObj={}

// for(let obj of arr){
//     for(let key in obj){
//         if(newObj[key]){
//             newObj[key]+=obj[key]
//         }else{
//             newObj[key]=obj[key]
//         }
//     }
// }
// console.log(newObj)

//20.Group Values Based on Range
// let arr = [{x: 5, b: 8}, {x: 15, b: 18}, {x: 25, b: 28}, {x: 35, b: 38}];
// let grouped = {};

// function getRange(value){
//     let rangeStart=Math.floor(value/10)*10
//     let rangeEnd=rangeStart+9
//     return `${rangeStart}-${rangeEnd}`
// }

// for(let obj of arr){
//     for(let key in obj){
//         let range=getRange(obj[key])
//         if(!grouped[range]){
//             grouped[range]=[]
//         }
//         grouped[range].push(obj)
//     }
// }
// console.log(grouped)