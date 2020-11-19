import './Upload.css';
import Header from './header';
import Footer from './footer';
import React, {useState} from 'react';
import gql from 'graphql-tag';
import {useMutation} from '@apollo/react-hooks';
import { useForm } from './util/hooks'; 

function Register(props) {
    const [errors, setErrors] = useState({})
    const [values, setValues] = useState({ 
        username: '', 
        password: ''
      })

    const onChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value})
        console.log("on change")
    }
    const [addUser, { loading }] = useMutation(REGISTER_USER, {
      update(_, result){
        console.log(result)
        props.history.push('/');
      },
      onError(err){
        console.log(err.graphQLErrors[0].extensions.exception.errors);
        setErrors(err.graphQLErrors[0].extensions.exception.errors);
      },
      variables: values
    })

    const onSubmit = (event) => {
        console.log("submit")
        event.preventDefault();
        addUser();
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
            {Object.keys(errors).length > 0 && (
                <div>
                  <ul className="list">
                    {Object.values(errors).map((value) => (
                      <li key={value}>{value}</li>
                    ))}
                  </ul>
                </div>
              )}
          </div>
          <Footer />
        </div>
      )
}

const REGISTER_USER = gql`
  mutation register($username: String! $password: String!) {
    register(registerInput: {username: $username password: $password}) 
    {
      id username createdAt token
    }
  }
`

export default Register;