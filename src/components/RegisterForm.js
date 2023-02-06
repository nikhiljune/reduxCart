import React, { useState } from 'react'
import { Formik, useFormik } from 'formik';
import { signUpSchema } from '../schemas';
import axios from 'axios';


const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
}
export const RegisterForm = (props) => {
  
  const url='https://jsonplaceholder.typicode.com/posts'
  const [data, setdata] = useState()
  const { values, handleBlur, handleChange, touched, handleSubmit, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      console.log("values", values);
      setdata(values)
      
      axios.post(url,values).then((response)=>{
        console.log(response);
      }).catch(error=>{
        console.log(error);
      })
      action.resetForm();
    }
  })

 

  // console.log('data', data);

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6 my-3">
            <label htmlFor="name" style={{ color: props.dark ? 'white' : 'black' }}>Name</label>
            <input type="text" className="form-control" placeholder="First name" name='name' id='name' value={values.name} onChange={handleChange} onBlur={handleBlur} />
            {errors.name && touched.name ? (<p style={{ color: 'red' }}>{errors.name}</p>) : null}
          </div>
          <div className="form-group col-md-6 my-3">
            <label htmlFor="email" style={{ color: props.dark ? 'white' : 'black' }}>Email</label>
            <input type="email" className="form-control" id="email" placeholder="Email" name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
            {errors.email && touched.email ? (<p style={{ color: 'red' }}>{errors.email}</p>) : null}

          </div>
          <div className="form-group col-md-6 my-3">
            <label htmlFor="password" style={{ color: props.dark ? 'white' : 'black' }}>Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} />
            {errors.password && touched.password ? (<p style={{ color: 'red' }}>{errors.password}</p>) : null}

          </div>
          <div className="form-group col-md-6 my-3">
            <label htmlFor="confirmPassword" style={{ color: props.dark ? 'white' : 'black' }}>Confirm Password</label>
            <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" name='confirmPassword' value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} />
            {errors.confirmPassword && touched.confirmPassword ? (<p style={{ color: 'red' }}>{errors.confirmPassword}</p>) : null}

          </div>
        </div>
        {/* <div className="form-group">
    <label htmlFor="inputAddress">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress2">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputCity">City</label>
      <input type="text" className="form-control" id="inputCity"/>
    </div>
    <div className="form-group col-md-4">
      <label htmlFor="inputState">State</label>
      <select id="inputState" className="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div className="form-group col-md-2">
      <label htmlFor="inputZip">Zip</label>
      <input type="text" className="form-control" id="inputZip"/>
    </div>
  </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" htmlFor="gridCheck">
        Check me out
      </label>
    </div>
  </div> */}
        <button type="submit" className="btn btn-primary my-2">Register</button>
      </form>
    </div>
  )
}

export default RegisterForm;