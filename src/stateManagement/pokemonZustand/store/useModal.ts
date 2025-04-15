import {create} from "zustand";

type Modal ={
    message:string,
    setModalMessage:({message}:Modal)=>void
}
const useModal =create<Modal>()((set)=>({
    message:"",
    setModalMessage:(({message}:Modal)=>set(()=>({
        message:message
    })))
}))
export default useModal