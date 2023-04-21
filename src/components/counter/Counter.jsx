import './Counter.css'

export default function Counter(){

    const buttonStyle = {
        fontSize : "100px"
    };

    function incrementCounterFunction(){
        console.log("increament clicked")
    }

    return(
        <div className="Counter"> 
        <span className="count">0</span>
        <div>
        <button className="counterButton" onClick={incrementCounterFunction }    style = {buttonStyle} >+1</button>
        </div>
        </div>
    )
}