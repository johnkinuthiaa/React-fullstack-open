import {useState} from "react";

type NoteProps ={
    id:number,
    content:string,
    important:boolean
}
const Forms =()=>{
    // store the notes in an array

    const notes:NoteProps[] = [
        {
            id: 1,
            content: 'HTML is easy',
            important: true
        },
        {
            id: 2,
            content: 'Browser can execute only JavaScript',
            important: false
        },
        {
            id: 3,
            content: 'GET and POST are the most important methods of HTTP protocol',
            important: true
        }
    ]
    const[allNotes,setAllNotes] =useState<NoteProps[]>(notes)
    const[deleteValue,setDeleteValue] =useState("")
    const[singleNote,setSingleNote] =useState<NoteProps>({content: "", id: 0, important: false})
    return(
        <div>
        {/*    first map through the notes*/}
            {allNotes.map(({content},index)=>(
                <div key={index}>{content}</div>
            ))}
            <form onSubmit={(e)=>{
                e.preventDefault()
                setSingleNote({id: allNotes[allNotes.length-1].id+1, important: false, content:deleteValue})
                setDeleteValue("")
                setAllNotes([...allNotes,singleNote])
            }}>
                <input type={"text"}
                       value={deleteValue}
                       onChange={(e)=>{
                           setDeleteValue(e.target.value)
                }}/>
                <button type={"submit"}> create</button>
            </form>
        </div>
    )
}
export default Forms