import React from 'react';
import './App.css';
import {useFormik} from 'formik';

function App() {
  const formik = useFormik({
    initialValues: {
        emailField: '',
        pswField: ''
      },
      onSubmit: values => {
        console.log('form:', values);
    },
    validate: values => {
        let errors = {};
        if (!values.emailField) {
            errors.emailField = 'Field Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)) {
            errors.emailField = 'Invalid Email Address';
        }
        if (!values.pswField) errors.pswField = 'Field Required';
        return errors;
    }
  });
  return (
    <div Style="margin-left: 10px;">
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input name="emailField" id="emailField" type="text" onChange={formik.handleChange} value={formik.values.emailField}/>
        {formik.errors.emailField ? <div style={{color: 'red'}}>{formik.errors.emailField}</div>: null}
        <div>Password</div>
        <input name="pswField" id="pswField" type="text" onChange={formik.handleChange} value={formik.values.pswField}/>
        {formik.errors.pswField ? <div style={{color: 'red'}}>{formik.errors.pswField}</div>: null}
        <button type="submitBtn" id="submitBtn">Submit</button>
      </form>
    </div>
  );
}

export default App;
