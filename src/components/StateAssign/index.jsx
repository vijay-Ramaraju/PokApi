import { useState } from 'react'
import img1 from '../../../images/img1.jpg'
import img3 from '../../../images/img2.png'
import img2 from '../../../images/img3.jpg'


const StateAssign = () =>{

    const [count, setCount] = useState(0)
    const images = [img1,img2,img3]

    const handlePrev = () =>{
        setCount((oldCount) => oldCount === 0 ? images.length-1 : oldCount-1  )
    }

    function handleNext() {
        setCount((prev)=> prev === images.length-1 ? 0: prev + 1)
    }

    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:"center"}}>
            <button style={{alignSelf:"center"}} onClick={handlePrev}>Prev</button>
            <img style={{width:"500px", height:"500px"}} src={images[count]} alt="" />
            <button onClick={handleNext}>Next</button>
        </div>
    )
}
export default StateAssign;