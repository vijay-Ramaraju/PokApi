import React,{useRef,useEffect} from 'react'

export default function UseRef() {
    const data = useRef(null)
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(data.current.value)
        data.current.value = "Hello world"
        }
        useEffect(()=>{
            data.current.focus()
        },[])
  return (
    <div>
        <form onSubmit={handleSubmit} >
            <input ref={data} type='text' placeholder="Enter username" /><br/>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}
