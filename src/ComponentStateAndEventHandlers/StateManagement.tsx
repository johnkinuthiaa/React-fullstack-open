// changing data should be handled via states..they should update on the screen everytime the value changes
import {useState} from "react";

const StateManagement =()=>{
//     we use useState() function to handle the changing data
//     lets create a simple counter which updates after 2s
    const[value,setValue] =useState<number>(0)
    // a user manipulated counter
    const[count,setCount] =useState<number>(0)


    setInterval(()=>{
        // removed value+1
        setValue(value)
    },2000)
    return(
        <div>
            <div>value: {value}</div>
            <div>
                <button onClick={()=>setCount(count+1)}>+</button>
                <div>{count}</div>
                <button onClick={()=>count>0&&setCount(count-1)}>-</button>
            </div>
        </div>
    )
}
export default StateManagement