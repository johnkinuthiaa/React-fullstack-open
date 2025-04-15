type ModalProps ={
    message:string
}
const Modal =({message}:ModalProps)=>{
    return(
        <div style={{
            display:"flex",
            borderRadius:"5px",
            padding:"10px",
            color:"black",
            backgroundColor:"white",
            boxShadow:"2px 2px 2px rgb(0,0,0)",
            margin:"0 auto",
            width:"20%",
            height:"30px",
            justifyContent:"center",
            alignItems:"center"
        }}>
            <div>{message}</div>
        </div>
    )
}
export default Modal