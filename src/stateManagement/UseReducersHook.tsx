import {useReducer} from "react";

const UseReducersHook =()=>{
    const[state,dispatch]=useReducer((state,action)=>({
        ...state,...action
    }),{
        name:"",
        age:0
    })
    return(
        <div>
            <input type={"text"} onChange={(e)=>dispatch({name:e.target.value})}/>
            <input type={"number"} onChange={(e)=>dispatch({age:e.target.value})}/>
            <div>{state.name}</div>
            <div>{state.age}</div>
        </div>
    )
}
export default  UseReducersHook