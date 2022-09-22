import './Forms.scss';
import {useState} from 'react';
import FormInput from './FormInput';

const Forms = () => {

  const [values, setValues] = useState({
    username:"",
    email:"",
    phoneNumber:"",
    password:"",
    confirmPassword:""
  })

  const inputs = [
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"Username",
      errorMessage:"Username has atleast 3 character",
      required:true,
      pattern:"^[A-Za-z0-9]{3,20}$"
      
    },
    {
      id:2,
      name:"email",
      type:"email",
      placeholder:"Email",
      errorMessage:"Enter Valid email address",
      required:true
      
    },
    {
      id:3,
      name:"phoneNumber",
      type:"number",
      placeholder:"Phone Number",
      errorMessage:"Phone Number has 10 numbers only",
      required:true,
      pattern:"^\d{10}$"
      
    },
    {
      id:4,
      name:"password",
      type:"password",
      placeholder:"Password",
      errorMessage:"Password contain atleast 1 uppercase, 1 lowercase and 1 special character ",
      required:true,
      pattern:"(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$"
      
    },
    {
      id:5,
      name:"confirmPassword",
      type:"password", 
      placeholder:"Confirm Password",
      errorMessage:"Password doesn't match",
      required:true,
      pattern:values.password
      
    }
  ]

  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  
  const onChange =(e) => {
    setValues({...values,[e.target.name]:e.target.value});
  }

  // console.log(values);

  return (
    <>
    <div className="main-form-div">
      <div className="forms">
        <form className="form-design" onSubmit={handleSubmit}>
        <h1 className="form-design-heading">FORMS</h1>
        {inputs.map((input)=>(
        <FormInput
         key={input.id} 
         {...input} 
         value={values[input.name]} 
         onChange={onChange}
         />
        ))}
        <button className="form-button">SUBMIT</button>
        </form>
      </div>     
    </div>
    </>
  )
}

export default Forms