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

  const postMedia = async (file, inputs, token) => {
    const data = {
      ...inputs,
      ...file,
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    };
    return await fetchData(import.meta.env.VITE_MEDIA_API + '/media', options);
  };

  const deleteMedia = async (token) => {
    const options = {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return await fetchData(import.meta.env.VITE_MEDIA_API + '/media', options);
  };

  const modifyMedia = async (token, inputs, file) => {
    const data = {
      ...inputs,
      ...file,
    };
    const options = {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    };
    return await fetchData(import.meta.env.VITE_MEDIA_API + '/media', options);
  };

  return {mediaArray, postMedia, deleteMedia, modifyMedia};
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
      headers: {
        authorization: 'Bearer ' + token,
      },
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
  return {postUser, checkUser, getUserByToken};
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
    //localStorage.setItem('token', loginResult.token);
    return loginResult;
  };
  return {postLogin};
};

const useFile = () => {
  const postFile = async (file, token) => {
    const formData = new FormData();
    formData.append('file', file);

    const fetchOptions = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    };
    return await fetchData(
      import.meta.env.VITE_UPLOAD_SERVER + '/upload',
      fetchOptions,
    );
  };
  return {postFile};
};

const useLike = () => {
  const postLike = (media_id, token) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({media_id}),
    };
    return fetchData(import.meta.env.VITE_MEDIA_API + '/likes', fetchOptions);
  };
  const deleteLike = async (like_id, token) => {
    const fetchOptions = {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return await fetchData(
      import.meta.env.VITE_MEDIA_API + '/likes/' + like_id,
      fetchOptions,
    );
  };
  const getUserLike = async (media_id, token) => {
    const fetchOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return await fetchData(
      import.meta.env.VITE_MEDIA_API + '/likes/bymedia/user' + media_id,
      fetchOptions,
    );
  };
  const getLikesCount = async (media_id) => {
    return await fetchData(
      import.meta.env.VITE_MEDIA_API + '/likes/count/' + media_id,
    );
  };
  return {postLike, deleteLike, getUserLike, getLikesCount};
};
export {useMedia, useUser, useAuth, useFile, useLike};
