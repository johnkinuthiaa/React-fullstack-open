// separated the server side communicating logic with the ui
type NoteProps ={
    id:number,
    content:string,
    important:boolean
}
const myHeaders =new Headers()
myHeaders.append("Content-Type","application/json")

// this method fetches data and returns a promise of a notes array or undefined
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
// this method returns a promise string
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
export default {fetchData,postNote}