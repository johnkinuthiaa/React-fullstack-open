const ReduceArr =()=>{
    const nums:number[] =[1,2,3,4,5,5]
    return(
        <div>{nums.reduce((nums,next)=>nums+next)}</div>
    )
}
export default ReduceArr