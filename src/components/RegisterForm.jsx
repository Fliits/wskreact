import React from 'react';
import useForm from '../hooks/formHooks';
import {useUser} from '../hooks/apiHooks';

const RegisterForm = () => {
  const initValues = {
    username: '',
    password: '',
    email: '',
  };

  const doRegister = async () => {
    try {
      const userResult = await postUser(inputs);
      console.log(userResult);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleUserBlur = async () => {
    clearErrors();
    try {
      const checkResult = await checkUser(inputs.username);
      console.log(checkResult);
      if (!checkResult.available) {
        handleError('username', 'username not available');
      }
      // eslint-disable-next-line no-empty
    } catch {}
  };

  const {postUser, checkUser} = useUser();

  const {
    inputs,
    handleInputChange,
    handleSubmit,
    errors,
    handleError,
    clearErrors,
  } = useForm(doRegister, initValues);

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex w-4/5 flex-col">
          <label htmlFor="registeruser">Username</label>
          <input
            className="my-2.5 rounded-md border p-2.5"
            name="username"
            type="text"
            id="registeruser"
            onChange={handleInputChange}
            onBlur={handleUserBlur}
            autoComplete="username"
          />
          <p>{errors?.username}</p>
        </div>
        <div className="flex w-4/5 flex-col">
          <label htmlFor="registerpassword">Password</label>
          <input
            className="my-2.5 rounded-md border p-2.5"
            name="password"
            type="password"
            id="registerpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <div className="flex w-4/5 flex-col">
          <label htmlFor="registeremail">Email</label>
          <input
            className="my-2.5 rounded-md border p-2.5"
            name="email"
            type="email"
            id="registeremail"
            onChange={handleInputChange}
            autoComplete="email"
          />
        </div>
        <button
          className="my-2.5 block w-4/5 rounded-md border bg-stone-500 p-2 text-center text-stone-50 transition-all hover:bg-stone-700 duration-500 ease-in-out"
          type="submit"
        >
          Register
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
