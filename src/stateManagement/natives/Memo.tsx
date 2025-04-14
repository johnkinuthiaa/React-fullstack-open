// memo does a calculation once ,and it only recalculates if the numbers in the dependency array changes
import {useMemo, useState} from "react";

const Memo =()=>{
    const [numbers] =useState([20,2,4,5,3,6,2,5,8,9,2,3])
    const total=useMemo(()=>{
            console.log("rendered again")
            return numbers.reduce((prev,current)=>prev+current)},
        [numbers])

    return(
        <div>
            <p>The total is {total}</p>
        </div>
    )
}
export default Memo