import React, { useState } from "react";

const MultiStatePractice = () => {
  const [userDetails, setUserDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenum:"",
    gender:"",
    dob:"",
    tnc:false,
  });
let borderColor
  const [errorState, SetErrorState] = useState({
    firstname:"",
    email:"",
    phonenum:""
  })

  
const [touchField,setTouchField] = useState({
  firstname: false,
  email:false,
  phonenum:false
})

  // console.log(userDetails);
  const handleSubmit = () => {};
  const onHandelChange = (event, key)=>{
    
    setUserDetails((oldState)=>{
        return{
            ...oldState,
            [key]:event.target.value
        }


    })
    validateTheForm(event,key)
  }

  const validateTheForm = (event,inputvalue)=>{
    const values = event.target.value
    const localError = {}
      if (inputvalue === "firstname"){
        const numberRegex = /.*[0-9].*/       // validating name
        if(values && !values.match(numberRegex)){
          localError[inputvalue] = ""
        }else if(values && values.match(numberRegex)){
          localError[inputvalue] = "Name should be string"
        }else{
          localError[inputvalue] = "*Required*"
        }
        
    }if (inputvalue === "email"){
      const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;  // email verification 
      if(values && values.match(emailRegex)){
          localError[inputvalue] =""
      }else if (values && !values.match(emailRegex)){
        localError[inputvalue] ="Email should be valid"
      }else{  
        localError[inputvalue]="required"
      }
    }

    SetErrorState((old) => {
      return{
        ...old,
        ...localError
      }
    })
  }


  const onBlurChange = (event, inputkey) =>{
    const touchedObj = {}
    touchedObj[inputkey] = true

    setTouchField((old)=>{
      return{
        ...old,
        ...touchedObj
      }
    })
    
    borderColor = touchField.inputkey ? "border-touched" : "border-default"
  }

console.log(userDetails)
  return (
    <div style={{ marginLeft: "50px" }}>
      <form onSubmit={handleSubmit} style={{}}>
        <label>Firstname</label>
        <input onChange={(e)=>{onHandelChange(e,"firstname")}}
        onBlur={(event)=>{onBlurChange(event,"firstname")}}
        className={borderColor}
        type="text" />
        <p style={{color:"Red", fontStyle:"italic"}}>{errorState.firstname}</p>
        <br />
        <br />
        <label>Lastname</label>
        <input onChange={(e)=>{onHandelChange(e,"lastname")}}
        
        type="text" />
        <br />
        <br />
        <label>Email</label>
        <input onChange={(e)=>{onHandelChange(e,"email")}} 
        onBlur={(event)=>{onBlurChange(event,"email")}}
        type="email" />
        <p style={{color:"Red", fontStyle:"italic"}}>{errorState.email}</p>
        <br />
        <br />
        <label>Phone No.</label>
        <input onChange={(e)=>{onHandelChange(e,"phonenum")}} 
        onBlur={(event)=>{onBlurChange(event,"phonenum")}}
        type="number" />
        <p>{errorState.phonenum}</p>
        <br />
        <br />
        <label>Gender</label>
        <select onChange={(e)=>{onHandelChange(e,"gender")}}>
          <option value={1}>Male</option>
          <option value={2}>Female</option>
        </select>
        <br />
        <br />

        <label>D.O.B</label>
        <input onChange={(e)=>{onHandelChange(e,"dob")}} type="date" />
        <br />
        <br />
        <div>
          <input onChange={(e)=>{onHandelChange(e,"tnc")}} type="checkbox" />
          <label>Agree Terms and conditions</label>
        </div>
      </form>
    </div>
  );
};
export default MultiStatePractice;
