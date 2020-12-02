import "./Upload.css";
import Header from "./header";
import Footer from "./footer";
import React, { useContext, useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { useForm } from "./util/hooks";
import { AuthContext } from "./context/auth";

function Login(props) {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});

  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    username: "",
    password: "",
  });

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, { data: { login: userData } }) {
      context.login(userData);
      props.history.push("/");
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  function loginUserCallback() {
    loginUser();
  }

  return (
    <div>
      <Header />
      <div className="upload-container">
        <form className="upload-form" onSubmit={onSubmit}>
          <div className="input-div">
            <label htmlFor="username">Username: </label>
            <input
              className="input"
              name="username"
              placeholder="username"
              value={values.username}
              onChange={onChange}
            />
          </div>
          <div className="input-div">
            <label htmlFor="password">Password: </label>
            <input
              className="input"
              name="password"
              placeholder="password"
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
  );
}

const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      username
      createdAt
      token
    }
  }
`;
export default Login;
