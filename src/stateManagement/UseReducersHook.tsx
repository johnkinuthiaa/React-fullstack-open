import {useReducer} from "react";



const UseReducersHook =()=>{
    const[state,dispatch] =useReducer((state,action)=>({
        ...state,...action
    }),({
        name:"",
        completedSchool :false,
        age:0,

    }))

    return(
        <div>
            <input type={"text"} placeholder={"name"} onChange={(e)=>dispatch({name:e.target.value})}/>
            <input type={"number"} placeholder={"name"} onChange={(e)=>dispatch({age:e.target.value})}/>
            <input type={"checkbox"} onChange={()=>dispatch({completedSchool:!state.completedSchool})}/>
            <div>
                <div>{state.name}</div>
                <div>{state.age}</div>
                <div>{state.completedSchool?"i completed":"not completed"}</div>
            </div>
        </div>
    )
}
export default  UseReducersHook