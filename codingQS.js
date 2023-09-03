
// Questions --

//1) Reverse each wrord in a string--
let str = "hey Harshali how are you ?"
//console.log(str);
let res = str.split(" ").map((item) =>{ 
 return  item.split("").reverse().join("")
})
//console.log(res);


//2) How to check if an object is an array or not? --
const arr = (element)=> {
  return Array.isArray(element)
}
// console.log(arr([]));
// console.log(arr({}));


//3) How to empty an array in javascript, do not reset it to new array and do not loop through to pop each value--
const emptyArray = [1,2,3,4,5,6]
emptyArray.length=0
//console.log(emptyArray);


//4) check if an No is an integer--
let nums = 56.2
if(nums%1 === 0){
   console.log("it is an integer")
}
else console.log("not integer")
// or 
console.log(Number.isInteger(98))

// Functions--
//5) duplicate the array --  arr = [1,2,3,4]  output = [1,2,3,4,1,2,3,4]
let arr1 = [1,2,3,4] 
function duplicate(arr) { 
   return arr.concat(arr) 
}
//console.log(duplicate(arr1));


//6) write a function that reverses a number

function num(a){
   let res =  +(a.toString().split("").reverse().join(""))
   return Number(res)
  //or
  //return  +(a.toString().split("").reverse().join(""))
}
//console.log(num(12) , typeof num(12))


//7) write a program/function that checks wether the passed string is palendrom or not--
function stringPalChecker(str) {
    let newStr =  str.split("").reverse().join("")
    return str === newStr ? "string is palendrom" : "string is not palendrom"
}
// console.log(stringPalChecker("loop"))
// console.log(stringPalChecker("123321"))


//8) js function that returns a passed string with letters in alphabetical order--
function string(str) {
  return str.split("").sort().join("")
}
// console.log(string("apple"));
// console.log(string("73920"));


//9) write a javascript function that accepts a string as a parameter and converts the first letter of each word in the string in uppercase--
let wishMe = "good morning dear! how are you?"
function xyz(str){
  let newStr = str.split(" ").map((item)=> {
     let x = item.charAt(0).toUpperCase() + item.substring(1)
     return x
  })
  return newStr.join(" ")
}
//console.log(xyz(wishMe));


//write a JS function that accepts an argument and returns the type
// Note: there are 6 possible values that typeOf returns: object,boolean, function, number, string and undefined.

function typeTeller(arg){
  return typeof arg
}
// console.log(typeTeller([]))
// console.log(typeTeller({}))
// console.log(typeTeller(12))
// console.log(typeTeller('hey'))
// console.log(typeTeller(true))
// console.log(typeTeller(undefined))
//console.log(typeTeller(function () {}))



//11) write a JS function to get the number of occurences of each letter in speified string--

function occurences(str) {
  let occ = {}
   str.split("").map((letter)=>{
      return occ.hasOwnProperty(letter) ? (occ[letter]++) : (occ[letter]=1) 
    })
   return occ
}
//console.log(occurences("loop"));
            //or (when paased array)
let wordsArr = ['hey' , 'bey', 'may' , 'bey' , 'bey' , 'hey']
const occurence = (word)=> {
  let obj = {}
   word.map((ele)=>{
       return obj.hasOwnProperty(ele) ? (obj[ele]++) : (obj[ele] = 1)
   })
   return obj
}
//console.log(occurence(wordsArr));



// Loops--

// loop an array and add all members of it
const sumArr = [1,2,3,4,5,6,7,8]
let sum = 0
sumArr.forEach((ele)=>{
    sum += ele
})
//console.log(sum); 

//12) in an array of numbers and strings, only add those members that are not string--

const members = ['aaaakj' , 8 , 'heelo' , 'jhello', 11 , '6767' , 1] 
let add = 0
let str1 = []
members.forEach((item=> {
     if(typeof item === 'number'){
      add += item
     }
     if(typeof item === 'string'){
      str1.push(item)
     }
}))
// console.log(str1);
// console.log(add);

// loop an array of objects and remove all objects that dont have genders value male--

const persons = [
   {name : 'sofi' , gender : 'female'},
   {name : 'danial' , gender : 'male'},
   {name : 'martha' , gender : 'female'},
   {name : 'alexender' , gender : 'male'},
   {name : 'mariya' , gender : 'female'}
]
// filter method creates a new array 
let result = persons.filter((elem)=> {
  return elem.gender === 'male'
  
})
//console.log(result)

// but if we want to make changes to existing array then --
let count = 0 
persons.forEach((item)=> { 
  if (item.gender !== 'male') count ++
})
//console.log(count);

for (let i = 1 ; i <= count ; i++){
  for (let j = 0 ; j < persons.length ; j++) {
    if (persons[j].gender !== 'male'){
      persons.splice(j,1)
    }
   
  }
}
//console.log(persons)


//Arrays--

// write a js function that clone an array--

function cloneArray(arr){
   return [...arr]
}
let newArr = cloneArray([1,2,3,4,5])
//console.log(newArr);
           //or
function cloneArray(arr){
  let newarr = []
  arr.forEach((e)=>{
    newarr.push(e)
  })
  return newarr
}           
let newarr = cloneArray([4,5,6,78])
//console.log(newarr);
         //or
function cloneArray(arr){
  return arr.map((e)=>{
    return e;
  })
}  
let clonedArr =  cloneArray([0,5,6,9])      
//console.log(clonedArr);


// write a js function to get firt element of an array.passing the parameter 'n' will return the first "n" elements of an array--

function pqr(arr , n=1) {
  if (n <= arr.length){
    for(let i = 0 ; i < n ; i++){
      console.log(arr[i]);
    }
  }
  else {
    console.log(n +" : " +"not enough elements");
  }
}
//pqr([10,20,30,50,60] ,3)


// write a js function to get firt element of an array.passing the parameter 'n' will return the last "n" elements of an array--(different than before )
function lastItem(arr , n=1) {
  if (n <= arr.length){
    for(let i = 0 ; i < n ; i++){
      console.log(arr[arr.length-1-i]);
    }
  }
  else {
    console.log(n +" : " +"not enough elements");
  }
}
//lastItem([11,22,33,55,66] ,3)


// write a js program to find the most frequent item of an array--

function freq(arr){
  var freq = {}
  arr.forEach((elem)=>{
    freq.hasOwnProperty(elem) ? (freq[elem]++) : (freq[elem] = 1)
  })
  console.log(freq);
  let res = Object.keys(freq).reduce((acc , next)=>{
    return freq[acc] > freq[next] ? acc : next
  })
  console.log(res);
}
//freq([1,3,4,6,6,4,3,3,2,66,5])



// program to  reverse an Array--
let reverseArr = [10,20,30,40,50]
function xyz(arr){
  for(let i = 0 ; i<arr.length ; i++){
    console.log(arr[arr.length-1-i]);
  } 
     //or
//console.log(arr.reverse());
}
//xyz(reverseArr)


// write  a program to shuffle an array--

function shuffle(arr){
   let totalShuffleArea = arr.length;
   
   while(totalShuffleArea > 0){
    totalShuffleArea--
   let indexToBeExchanged = Math.floor(Math.random() * totalShuffleArea)
   let temp = arr[totalShuffleArea]
   arr[totalShuffleArea] = arr[indexToBeExchanged]
   arr[indexToBeExchanged] = temp
   }
   
   return arr
}
//console.log(shuffle([1,2,3,4,5,6,7]))



// write a js program to compute the union of two arrays-- sample data: input(union([1,2,3] , [100,9,3,2]))    output: [1,2,3,100,9]

function union(arr1,arr2){
 return [...new Set(arr1.concat(arr2))]
 
}
let output = union([1,2,3] , [100,9,3,2])
//console.log(output)


// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

function twoSum(number, target) {
  for (let i = 0; i < number.length; i++) {
      for (let j = i + 1; j < number.length; j++) {
          if (number[i] + number[j] === target) {
              return [i, j];
          }
      }
  }
  
  return []; 
}

const number = [2, 7, 11, 15];
const target = 9;
const addition = twoSum(nums, target);
//console.log(result)






