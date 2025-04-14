// The use state takes in an array...the value and setter function
"use client"
import {useState } from "react"
const UseStateHook =()=>{
    const [count,setCount] =useState<number>(0)

    function addOne (){
        setCount(count+1)
    }
    const [names,setNames]=useState<string[]>(["john","angela","mwangi"])
    const[name,setName] =useState("")
    return(
        <div>
            <button onClick={addOne}>add</button>
            <div>{count}</div>

            {names.map((nm:string,index:number)=>(
                <div key={index}>{nm}</div>
            ))}

            <input
                type={"text"}
                onChange={(e)=>{
                setName(e.target.value)
            }}/>
            <button onClick={(e)=>{
                e.preventDefault()
                setNames([...names,name])
            }}>Add name</button>
        </div>
    )

}
export default UseStateHook