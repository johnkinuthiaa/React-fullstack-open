import ReduceArr from "./ReduceArr.tsx";

type NoteProps ={
    id:number,
    content:string,
    important:boolean
}
const Mapping =()=>{
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
    return(
        <div>
        {/*    rendering the notes - we use the map method*/}
            {notes.map(({id,content}:NoteProps,index)=>(
                <div key={index}>
                    <p>{id}</p>
                    <p>{content}</p>
                </div>
            ))}
            <ReduceArr/>

        </div>
    )
}
export default Mapping