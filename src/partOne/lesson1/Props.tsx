type PageProps={
    age:number,
    name:string
}

const Props =()=>{
    return(
        <div>
            {/* we pass the props as attributes to the component  */}
            <ComponentWithProps name={"john kinuthia"} age={20}/>
            {/* you can pass different values to the attributes making the components dynamic and reusable */}
            <ComponentWithProps name={"Angela"} age={20}/>
        </div>
    )
}
/* here we pass name and age as props for the component...
props allow us to pass values from one component to another */
const ComponentWithProps =({age,name}:PageProps)=>{
    return(
        <div>
            <p>Hello again...My name is {name} and i'm {age} years old</p>
        </div>
    )
}
export default Props;