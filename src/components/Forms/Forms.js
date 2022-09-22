import './Forms.scss';
import {useState} from 'react';
import Validations from './Validation';


const Forms = () => {

  const initialState ={
  
    username:"",
    email:"",
    phoneNumber:"",
    password:"",
    confirmPassword:""
  }

  const [values, setValues] = useState(initialState)

  const [errors, setErrors] = useState({});
  
  const onChange =(e) => {
    setValues({...values,[e.target.name]:e.target.value});
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(values.username!== '' || values.email!=='' || values.password!== '' || values.confirmPassword!== ''){

      setValues(initialState);
      setErrors({});
      alert('Data sent successfully');
    }
    else{
      setErrors(Validations(values));
    }

  }
  

  // console.log(values);

  return (
    <>
    <div className="main-form-div">
      <div className="forms">
        <form className="form-design"  onSubmit={handleSubmit}>
        <h1 className="form-design-heading">FORMS</h1>
        <input 
        type="text"
        className='Fieldtext'
        placeholder='Username'
        name='username'
        onChange={onChange}
        value={values.username}
        />
        {errors.username && <span>{errors.username}</span>}      
        <input 
        type="email"
        className='Fieldtext'
        placeholder='email'
        name='email'
        onChange={onChange}
        value={values.email}
        />
        {errors.email && <span>{errors.email}</span>}      
        <input 
        type="password"
        className='Fieldtext'
        placeholder='password'
        name='password'
        onChange={onChange}
        value={values.password}
        />
        {errors.password && <span>{errors.password}</span>}      
        <input 
        type="password"
        className='Fieldtext'
        placeholder='Confirm Password'
        name='confirmPassword'
        onChange={onChange}
        value={values.confirmPassword}
        />
        {errors.confirmPassword && <span>{errors.confirmPassword}</span>}      
        <button className="form-button">SUBMIT</button>
        </form>
      </div>     
    </div>
    </>
  )
}

export default Forms