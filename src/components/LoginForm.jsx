import React from 'react';
import useForm from '../hooks/formHooks';
import {Navigate} from 'react-router';
import {useUserContext} from '../hooks/contextHooks';

const LoginForm = () => {
  const initValues = {
    username: '',
    password: '',
  };

  const {handleLogin} = useUserContext();
  const doLogin = async () => {
    try {
      const loginResult = await handleLogin(inputs);
      console.log(loginResult);
    } catch (error) {
      console.error(error.message);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doLogin,
    initValues,
  );

  console.log(inputs);
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex w-4/5 flex-col">
          <label htmlFor="loginuser">Username</label>
          <input
            className="my-2.5 rounded-md border p-2.5"
            name="username"
            type="text"
            id="loginuser"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div className="flex w-4/5 flex-col">
          <label htmlFor="loginpassword">Password</label>
          <input
            className="my-2.5 rounded-md border p-2.5"
            name="password"
            type="password"
            id="loginpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <button
          className="my-2.5 block w-4/5 rounded-md border bg-stone-500 p-2 text-center text-stone-50 transition-all hover:bg-stone-700 duration-500 ease-in-out"
          type="submit"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
