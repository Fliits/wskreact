import {useState, useEffect} from 'react';
import {fetchData} from '../utils/fetchData';

const useMedia = (loadMedia = true) => {
  const [mediaArray, setMediaArray] = useState([]);
  useEffect(() => {
    const getMedia = async () => {
      try {
        const json = await fetchData(import.meta.env.VITE_MEDIA_API + '/media');
        const jsonWithUsers = await Promise.all(
          json.map(async (item) => {
            const user = await fetchData(
              import.meta.env.VITE_AUTH_API + '/users/' + item.user_id,
            );
            item.username = user.username;
            return item;
          }),
        );
        setMediaArray(jsonWithUsers);
      } catch (error) {
        console.error('Error fetching media: ', error);
      }
    };
    if (loadMedia) {
      getMedia();
    }
  }, [loadMedia]);

  return mediaArray;
};

const useUser = () => {
  const postUser = async (inputs) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };

    return await fetchData(import.meta.env.VITE_AUTH_API + '/users', options);
  };

  const getUserByToken = async (token) => {
    const options = {
      authorisation: 'Bearer ' + token,
    };
    return await fetchData(
      import.meta.env.VITE_AUTH_API + '/users/token',
      options,
    );
  };

  const checkUser = async (username) => {
    return await fetchData(
      import.meta.env.VITE_AUTH_API + '/users?username=' + username,
    );
  };

  return {postUser, getUserByToken, checkUser};
};
const useAuth = () => {
  const postLogin = async (inputs) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };
    const loginResult = await fetchData(
      import.meta.env.VITE_AUTH_API + '/auth/login',
      fetchOptions,
    );
    localStorage.setItem('token', loginResult.token);
    return loginResult;
  };
  return {postLogin};
};

export {useMedia, useUser, useAuth};
