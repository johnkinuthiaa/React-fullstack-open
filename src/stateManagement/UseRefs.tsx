import {useRef} from "react";

const UseRefs =()=>{
    // it is used to get reference to a html element
    const inputRef =useRef(null)
    // console.log(inputRef?.current.value)
    return(
        <div>
            <input type={"text"} ref={inputRef}/>

        </div>
    )
}
export default UseRefs