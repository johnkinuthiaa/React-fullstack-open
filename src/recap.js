
let names ="john"

console.log(names)

names ="king"
console.log(names)

const unchanged ="kingkaid"


// data types
// number
let age =20  //int
let PI =3.14259 //float

let isRaining =true //boolean
let name ="my kaname" //string

// concat

const firstname ="king"
const lastname ="kaid"
console.log(`${firstname} ${lastname}`)
// or
console.log(firstname+" " +lastname)

// operators
// 1. comparison

const great =20
const smaller =10
// greater than
if(great>smaller){
    console.log(great>smaller)
}

// greater than or equal to
if(great>=smaller){
    console.log(great>=smaller)
}
// less than than
if(great>smaller){
    console.log(great<smaller)
}
// less than or equal to
if(great>smaller){
    console.log(great<=smaller)
}
// comparison
if(great>smaller){
    console.log(great ===smaller)
}

// logical &&,!=,||

// string operations

let toWorkWith ="ribashaghilogasheshiakili"

// length
console.log(toWorkWith.length)
// starts
console.log(toWorkWith.startsWith("r"))
// ends
console.log(toWorkWith.endsWith("i"))
console.log(toWorkWith.includes("l"))
console.log(toWorkWith.search("s"))

nameSlice =toWorkWith.slice(0,12)

console.log(nameSlice)
console.log(toWorkWith.split(nameSlice).join("-"))
// replace only works on the first instance of the given character
console.log(toWorkWith.replace("i","O"))
// to replace all instances of a letter, use replaceAll

console.log(toWorkWith.replaceAll("i","O"))


let cars =[1,2,3,4,5,5,6,7,8]
console.log(cars[cars.length-2])

console.log(11>'12')

const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];


console.log(shopping[0])
for(const item of shopping){
    console.log(shopping[item])
}
shopping.forEach((item)=>{
    console.log(item)
})
// filter
const cheese =shopping.filter((item)=>item.startsWith("c"))
console.log(cheese)

const include =shopping.filter((item)=>item.includes("cheese"))
console.log(include)

const uppercase =shopping.filter((item)=>item.toUpperCase())
console.log(uppercase)

const maps =shopping.map((item)=>item+1)
console.log(maps)

const longer =shopping.filter((item)=>item.length>4)
console.log(longer)


// finding a value in an array   the find returns the first value that matches the condition
const search ="bread"
const searchForItem=shopping.find((item)=>item.includes("m"))
console.log(searchForItem)

// reducing
const numbers =[1,2,3,4,5,7,8,10]
const reduced =numbers.reduce((prev,current)=>prev+current)
console.log(reduced)

let total =0;
const products =['Underpants:6.99','Socks:5.99','T-shirt:14.99','Trousers:31.99','Shoes:23.99']
for(const prod of products){
    const colonIndex =prod.indexOf(":")
    const item =prod.slice(0,colonIndex)
    let price=parseFloat(prod.slice(colonIndex+1))
    console.log(price)
    total+=price

}
console.log(`The cost of all items is${total.toFixed(2)} `)


// objects
// objects store values in key value pairs
const person ={
    name:"s",
    age:20,
    major:"Computer science major",
    minor:"Business administration",
    languages :[
        "python","javascript","typescript","rust","java","GO"
    ],
    yearsWorked:20,
    salaryPerAnnum:2000000,
    totalAmountEarned :function(){
        return this.yearsWorked*this.salaryPerAnnum
    }
}
const langs =person.languages
person["name"]="john kinuthia"
for(const items of langs){
    console.log(items)
}
console.log(person.totalAmountEarned())








