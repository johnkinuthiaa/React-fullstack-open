/* there are two ways of declaring functions
1. using the functions keyword
2. using arrow functions
 */
//1 .functions keyword

function addTwoNumbers(num1:number,num2:number):number{
    return num1+num2
}
const sum =addTwoNumbers(1,3)
// prints out 4
console.log(sum)

//using arrow functions
// the :number specifies the return type of the function

const addTwoNumbersArrowFunction = (num1:number,num2:number):number=>{
    return num1+num2
}
console.log(addTwoNumbersArrowFunction(1,5))
// mapping with arrow functions

const myArray:number[] =[1,2,3,4,5,6]
// if the function returns one thing only theres no need of return statement...only use ()=>value
const numbers =()=>myArray.map((num)=>num)
console.log(numbers())