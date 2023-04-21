export default function Counter(){

    function incrementCounterFunction(){
        console.log("increament clicked")
    }

    return(
        <div className="Counter"> 
        <span className="count">0</span>
        <button className="counterButton" onClick={incrementCounterFunction}>increment</button>
        </div>
    )
}