import { useState } from "react"
function Child1(props) {
    const {count, inordec , childCall} = props
function handleEmergency(){
childCall("child1 is lost")
}

    return(     
        <div>
            <h1>I am child one
                </h1>
            <h2>{count}</h2>
            <button onClick={handleEmergency} type="button">Emergency</button>  
        </div>

    )
}

export default Child1