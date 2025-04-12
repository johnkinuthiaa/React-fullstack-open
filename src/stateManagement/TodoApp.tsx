import {useEffect, useReducer, useState} from "react";

const TodoApp =()=>{
    const [todo,setTodo] =useState("")
    const [state,dispatch] =useReducer((state,action)=>({
        ...state,...action
    }),({
        todos:[]
    }))
    useEffect(()=>{
        console.log(state.todos)
    },[state.todos])

    return(
        <div style={{margin:"0px auto",
            display:"flex",
            flexDirection:"column",
            width:"80%",
            alignItems:"center",
            justifyContent:"center"
        }}>
            <h1>Todo app</h1>
            <div style={{marginTop:"40px"}}>
                <form
                    style={{width:"100%"}}
                    onSubmit={(e)=>{
                        e.preventDefault()
                        dispatch({todos:[...state.todos,todo].sort()})

                        setTodo("")
                    }}
                >
                    <input type={"text"}
                           style={{padding:10,marginRight:5}}
                           value={todo}
                           onChange={(e)=>setTodo(e.target.value)}
                    />
                    <button style={{padding:10,backgroundColor:"rgb(50,100,200)",color:"white",cursor:"pointer"}}>create</button>
                </form>
                <div>{state.todos.map((todo,index)=>(
                    <div key={index}>
                        {todo}
                    </div>
                ))}</div>
            </div>
        </div>
    )
}
export default TodoApp