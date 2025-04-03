const myNumbers:number[] =[1,2,3,4,5,5,6]
console.log(myNumbers)

myNumbers.pop()
myNumbers.push(100)

console.log(myNumbers.length)
myNumbers.filter((num)=> {
    return num === 1
})
myNumbers.forEach((num)=>{
    console.log(num)
})
myNumbers.map((num)=>{
    console.log(num)
})
