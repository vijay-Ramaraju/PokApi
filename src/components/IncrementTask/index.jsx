import { useState } from "react"
import MultiStatePractice from "../MultiStatePractice"
import Child1 from '../Child1'
import Child2 from "../Child2"
const IncrementTask = ()=>{

    
  const [counter, setCount] = useState({
    count:0,
    inordec:"Nutral",
    info:""
  })
const {count,inordec,info} = counter
const handleIncrement = () =>{
    setCount((prevcounter) =>{
        return{
            ...prevcounter,
        count:prevcounter.count + 1,
        inordec: "Increment"
        }
    })
}    

const handleDecrement = () =>{
    setCount((prevcounter) =>{
        return{
            ...prevcounter,
            count: prevcounter.count - 1,
            inordec: "Decrement"
        }
    })
}

const childcall = (childmessage) =>{
    setCount((prevcounter)=>{
        return{
            ...prevcounter,
            info:childmessage   
        }
    })
}

return(
        <div>
            <button onClick={handleIncrement}>+</button>
           
            <button onClick={handleDecrement} >-</button>
            
            <Child1 childCall={childcall} count = {count} inordec={inordec} />
            {/* {console.log(counter)} */}
            <Child2 info={info} />
        </div>
    )
}
export default IncrementTask