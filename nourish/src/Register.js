import './Upload.css';
import Header from './header';
import Footer from './footer';
import React, {useState} from 'react';
import gql from 'graphql-tag';
import {useMutation} from '@apollo/react-hooks';
import { useForm } from './util/hooks'; 

function Register() {
    const [values, setValues] = useState({ 
        username: '', 
        password: ''
      });

    const onChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value})
    }

    const onSubmit = (event) => {
        event.preventDefault();

    }
      return (
        <div>
          <Header />
          <div className="upload-container">
            <form className="upload-form" onSubmit={onSubmit}>
              <div className="input-div">
                <label htmlFor='username'>Username:  </label>
                <input className="input"
                  name='username'
                  placeholder='username'
                  value={values.username}
                  onChange={onChange}
                />
              </div>
              <div className="input-div">
                <label htmlFor='password'>Password:  </label>
                <input className="input"
                  name='password'
                  placeholder='password'
                  value={values.password}
                  onChange={onChange}
                />
              </div>
              <div className="submit-div">
                <button className="upload-button">Submit</button>
              </div>
            </form>
          </div>
          <Footer />
        </div>
      )
}

export default Register;