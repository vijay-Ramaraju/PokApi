import { useState } from "react"
import './index.css'

let randomChar = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
function PasswordGen (){
const [password, setPassword] = useState("");
const [rangeNum, setRangeNum] = useState(12);



const handleRange = (e) =>{
    setRangeNum(e.target.value)
    let randomPass= ""
    for(let i = 0; i < e.target.value; i++){
        const sampleRandomPass = Math.ceil(Math.random() * 63)
        randomPass += randomChar[sampleRandomPass-1]
    }
    console.log(randomPass)
    setPassword(randomPass)
}
 
return (
<div className="password-gen-main-container">
    <textarea rows={6} cols={30} className="pass-display" type="text" value={password} />
    <div>
        <input type="range"   onChange={handleRange} /> 
        <span>{rangeNum}</span>
    </div>
</div>

)

}
export default PasswordGen