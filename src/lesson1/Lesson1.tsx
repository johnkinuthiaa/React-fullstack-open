const Lesson1 =()=>{
    //   lesson 1: add dates and other variables
    const name:string ="john kinuthia";
    const date =new Date()
    const timeRightNow =date.toDateString()
    const year=date.getFullYear()
    return (
        <div>
            <p>Hello guys!! my name is {name} and its {timeRightNow} in kenya!</p>
            <p>I am learning react again in {year} because i decided i'll learn react native later</p>
        </div>
    )
}
export default Lesson1