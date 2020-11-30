import './Upload.css';
import Header from './header';
import Footer from './footer';
import React, {useState, useContext} from 'react';
import gql from 'graphql-tag';
import {useMutation} from '@apollo/react-hooks';
import { useForm } from './util/hooks';
import { AuthContext } from './context/auth';

function Register(props) {
    const context = useContext(AuthContext)
    const [errors, setErrors] = useState({})

    const { onChange, onSubmit, values } = useForm(registerUser, {
        username: '', 
        password: ''
    })
    
    const [addUser, { loading }] = useMutation(REGISTER_USER, {
      update(_, { data: { register: userData}}){
        window.alert("You've been registered. Go to the login page.")
        context.login(userData)
      },
      onError(err){
        setErrors(err.graphQLErrors[0].extensions.exception.errors);
      },
      variables: values
    });

    function registerUser(){
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