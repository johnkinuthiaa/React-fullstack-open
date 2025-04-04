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
    const[notes,setNotes] =useState<NoteProps[]>([])
    const myHeaders =new Headers()
    myHeaders.append("Content-Type","application/json")
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
    return(
        <div>
            {notes.map(({content}:NoteProps,index:number) =>(
                <div key={index}>{content}</div>
            ))}
        </div>
    )
}
export default DataFetching