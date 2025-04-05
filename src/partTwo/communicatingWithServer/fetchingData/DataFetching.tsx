import {useEffect, useState} from "react";

// this is the notes from the service class...it provides us with crud for the notes
import notes from "./services/notes.ts";

type NoteProps ={
    id:number,
    content:string,
    important:boolean
}
const DataFetching =()=>{

    useEffect(() => {
        notes.fetchData().then((response)=>typeof(response) !=="undefined"&&setNotes(response)).catch((e)=> {
            setMessage(new Error(e+"Error fetching data").message)
        })
    }, []);

    const[newNote,setNewNote] =useState<NoteProps>({
        id:0,
        content:"",
        important:false
    })
    const[inputContent,setInputContent] =useState<string>("")
    const[notess,setNotes] =useState<NoteProps[]>([])
    const[message,setMessage] =useState<string>("")
    return(
        <div>
            {message&&<div style={{color:"red"}}>{message}</div>}
            {notess.map(({content}:NoteProps,index:number) =>(
                <div key={index}>{content}</div>
            ))}

            <form onSubmit={(e)=>{
                e.preventDefault()
                setNewNote({content: inputContent, id: notess.length+1, important: false})
                notes.postNote(newNote).then((response)=>console.log(response))
            }}>
                <input
                    type={"text"}
                    required={true}
                    placeholder={"Enter a new note:..."}
                    onChange={(e)=>setInputContent(e.target.value)}
                />
                <button className={"submit"}>submit</button>
            </form>
        </div>
    )
}
export default DataFetching