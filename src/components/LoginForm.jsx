import React, {useState} from 'react';
import useForm from '../hooks/formHooks';
import {useAuth} from '../hooks/apiHooks';
import {Navigate} from 'react-router';

const LoginForm = () => {
  const initValues = {
    username: '',
    password: '',
  };

  const [toHome, setToHome] = useState(false);

  const doLogin = async () => {
    try {
      const loginResult = await postLogin(inputs);
      console.log(loginResult);
    } catch (error) {
      console.error(error.message);
    }
  };

  const {postLogin} = useAuth();

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doLogin,
    initValues,
  );

  console.log(inputs);
  if (toHome) {
    return <Navigate to="/" />;
  } else {
    return (
      <>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} afterSubmit={() => setToHome(true)}>
          <div>
            <label htmlFor="loginuser">Username</label>
            <input
              name="username"
              type="text"
              id="loginuser"
              onChange={handleInputChange}
              autoComplete="username"
            />
          </div>
          <div>
            <label htmlFor="loginpassword">Password</label>
            <input
              name="password"
              type="password"
              id="loginpassword"
              onChange={handleInputChange}
              autoComplete="current-password"
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </>
    );
  }
};

export default LoginForm;
