import {useEffect, useState} from "react";

type NoteProps ={
    id:number,
    content:string,
    important:boolean
}

const DataFetching =()=>{

    useEffect(() => {
        fetchData().then(()=>console.log("data fetched")).catch((e)=> {
            throw new Error(e+"<<<<<<<")
        })
    }, []);

    const[newNote,setNewNote] =useState<NoteProps>({
        id:0,
        content:"",
        important:false
    })
    const[inputContent,setInputContent] =useState<string>("")
    const[notes,setNotes] =useState<NoteProps[]>([])

    const myHeaders =new Headers()
    myHeaders.append("Content-Type","application/json")

    // fetching the data from the server

    const fetchData =(async ()=>{
        const response = await fetch("http://localhost:3001/notes",{
            method:"GET",
            headers:myHeaders
        })
        if(response.ok){
            const data =await response.json()
            setNotes(data)
        }
    })

    // posting to the server
    const postNote =async ()=>{
        const response =await fetch("http://localhost:3001/notes",{
            method:"POST",
            headers:myHeaders,
            body:JSON.stringify({newNote})
        })
        if(response.ok){
            const data =await response.json()
            console.log(data.toString() +"<<<")
        }
    }

    return(
        <div>
            {notes.map(({content}:NoteProps,index:number) =>(
                <div key={index}>{content}</div>
            ))}

            <form onSubmit={(e)=>{
                e.preventDefault()
                setNewNote({content: inputContent, id: notes.length+1, important: false})
                postNote()
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