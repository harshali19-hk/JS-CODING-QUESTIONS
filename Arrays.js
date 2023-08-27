//  Javascript program to swap two numbers without using temporary variable

let z=10
let y=20
 z=z+y; //30
y=z-y; //30-20=10
z=z-y; //30-10=20 
console.log(z,y)
z=z*y // 10*20=200
y=z/y //200/20=10
z=z/y //  200/10=20
console.log(z,y)

//  Javascript program to swap 3 variables without using temporary variable
 let l=10,m=20,n=30;

  function swapThree() {
    l= l+m+n //10+20+30=60
    m=l-(m+n) // 60-(20+30)=10
    n=l-(m+n) // 60-(10+30)=20
    l=l-(m+n) // 60-(10+20)=30
    return `${l} ${m} ${n}`
  }
 console.log(swapThree())

 let p=10,q=20,r=30;
   // Store XOR of all in a
   p = p ^ q ^ r; 
 
   // After this, b has value of a
   q = p ^ q ^ r; 

   // After this, c has value of b
   r = p ^ q ^ r;

   // After this, a has value of c
   p = p ^ q ^ r;
   console.log(p,q,r)


// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    
    return []; 
}

const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result)




// output based questions--

//1)
function fruit () {
    console.log(name)
    console.log(price)
    var name = 'hey'
    let price = 20
}
fruit()

//2)
for (var i=0 ; i<3 ; i++) {
    function close(x){
        setTimeout(() => {
            console.log(x)
        }, 2000);
    }
    close(i)
}

//3)
console.log( true ,typeof true)
console.log(+true , typeof +true)  // adding + before any DT converts it to number

console.log(!"Harshu") // adding single nigation before a string gives false 
console.log(!!"Harshu") //adding double nigation before a string gives true 
console.log(typeof 'Harshu')

console.log(!!null)
console.log(!!'')
console.log(!!1)

//4)
let data = 'size'
const bird = {
    size : 'small'
}
console.log(bird[data])
console.log(bird["size"])
console.log(bird.size)
console.log(bird.data)

//5)
let c = {name : 'peter'}
let d;
d=c
c.name = 'dazzy'
console.log(d.name) 

//6)
 var x;
var x=10
// let x=10
console.log(x)

//7)
let a = 3
let b =new Number(3)
console.log(a == b)
console.log(a === b)

//8)
function sum(a,b){
    return a+b
}
console.log(sum(1 , '2'))

//9)
let number = 0
console.log(number++)
console.log(++number)
console.log(number)

//10)
function getAge(...args){
    console.log(args , typeof args)
}
getAge(24)

//11)
function getAge(){
    'use strict'  // hosting will not work when used 'use Strict'
    age = 24;
    console.log(age)
}
getAge()

//12)
const sum = eval('10*10+5')
console.log(sum)

//13)
//how long will be cool_secret accessible?
sessionStorage.setItem('cool_secret' , 123)

//14)
const obj = {1:'a' , 2:'b' , 3:'c', name : "harshu"}
console.log(obj.hasOwnProperty('1'))
console.log(obj.hasOwnProperty(1))
console.log(obj.hasOwnProperty(name))  //it considers it as variable
console.log(obj.hasOwnProperty('name'))


//15)
for (let i=1 ; i<5 ; i++) {
    if (i === 3) continue;
    console.log(i)
}

//16)
const foo = () => {
  console.log("first");
};
const bar = () =>
  setTimeout(() => {
    console.log("second");
  });
const baz = () => {
  console.log("third");
};
bar()
foo()
baz()

//17)
//question on event bubbling-- 
{/* <div>
   <div onclick="console.log('first div')">
     <div
       onclick="setTimeout(() => {
         console.log('second div')
       },2000);"
     >
       <button onclick="console.log('button')">Click!</button>
     </div>
   </div>
 </div> */}

//18)
 const person = { name : "dazzy"}
 
 function sayHi(age){

    return `hello my name is ${this.name} and im ${age} year old!`
    
  }
  console.log(sayHi.call(person,24))
  console.log(sayHi.bind(person,30)())

//19)
 function sayHello() {
    //return (()=> 0)()
    return (()=> 'hello')()
 }
 console.log(sayHello() , typeof sayHello())


 //20)
 function sayHello() {
    return ()=> 0
 }
 console.log(sayHello() , typeof sayHello())

//21)
 function sayHello() {
    return ()=> 0
 }
 console.log(sayHello()() , typeof sayHello()())

 //22)
console.log(typeof typeof 1)

//23)
const numbers = [1,2,3,4]
numbers[6] = 11
console.log(numbers)

//24)
const numbers = [1,2,3,4]
numbers[4] = numbers
console.log(numbers)

//25)
console.log(setTimeout(() => {console.log('Hi')}, 1000))
console.log(setTimeout(() => {console.log('Hi')}, 1000))
console.log(setTimeout(() => {console.log('Hi')}, 1000))

//26)
let x = new Array(...'hello')
console.log(x)
console.log(...'Hey')

//27)
const promise = new Promise((res,rej)=>{
    setTimeout(res , 2000 , 'one');
})
console.log(promise)

//28)
let data1 = 3 + 4 + '5'
console.log(data1,typeof data1)
console.log(typeof 3 + 4 + '5')
console.log(typeof (3 + 4 + +'5'))

//29)
console.log([] == [])  //false  bcoz they have diffrent memory locations

//30)
let numData = [1,2,3].map(num => {
    if (typeof num === 'number') return ; // output is undefined bcoz we are returning nothing 
    return num *2
})
console.log(numData) 


//31)
function getInfo(member) {
    member.name = 'dazzy'
}

const personName = {name : 'sarah'}

getInfo(personName)
console.log(personName)

//32)
function Car() {
    this.brand = 'tata'
    return {make : 'kia' }
}
const myCar = new Car()
console.log(myCar.brand)


//33)
// IIFE
(()=> {
   let  x = (y=10)
    console.log(x)
})()
console.log(x)

//34)
(()=> {
    let  x = y=10
 })()
 console.log(y)

 //35)
// will it throw error
 (()=> {
    let  x = 10
 })()

 (()=> {
    let  x = 10
 })()


//36)
console.log(! true - true) 

console.log(true + + "10")

















