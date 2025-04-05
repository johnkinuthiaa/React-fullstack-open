type NoteProps ={
    id:number,
    content:string,
    important:boolean
}
const myHeaders =new Headers()
myHeaders.append("Content-Type","application/json")
const fetchData =(async ():Promise<NoteProps[]|undefined> =>{
    const response = await fetch("http://localhost:3001/notes",{
        method:"GET",
        headers:myHeaders
    })
    if(response.ok){
        return await response.json()
    }
})

// posting to the server
const postNote =async ({id,content,important}:NoteProps):Promise<string>=>{
    const response =await fetch("http://localhost:3001/notes",{
        method:"POST",
        headers:myHeaders,
        body:JSON.stringify({
            id:id,content:content,important:important
        })
    })
    if(response.ok){
        return "created"
    }else{
        return(response.statusText)
    }
}
export default {
    fetchData:fetchData,
    postNote:postNote
}