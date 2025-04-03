type DestructuringProps={
    name:string,
    age:number
}
const Destructuring =(props:DestructuringProps)=>{
    // this is one way to destructure props
    // another way is at the params const Destructuring =({name,age}:DestructuringProps)=>{}
    const{name,age} =props
    return(
        <div>{name} {age}</div>
    )
}
export default Destructuring