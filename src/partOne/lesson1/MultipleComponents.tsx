/*
we can create separate components and use on inside the other
The components can be used as many times are required bringing the concepts of
reusability which is reacts major superpower
its better to create separate files for each component for easier management


The first letter of components should be capitalised;
 */

const MultipleComponents =()=>{
    return(
        <div>
            <div>this is the main component</div>
            {/* we can reuse the other component many times as we need */}
            <AnotherComponent />
            <AnotherComponent/>
            <AnotherComponent/>
            <AnotherComponent/>
        </div>
    )
}
const AnotherComponent =()=>{
    return(
        <div>
            a child component inside the main component
        </div>
    )
}
export default MultipleComponents