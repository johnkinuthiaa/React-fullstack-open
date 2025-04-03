// in ts, variables are typed thus prevent re-assigning different types to a variable
const name:string ="john"

const age:number =20
const usesAI:boolean =false

console.log(`my name is ${name} ,
 i am ${age} years old and 
 i use ai for coding: ${usesAI}`
)

//trying to reassign name to 12 does not work and this is good type safety