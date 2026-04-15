import {useEffect, useState} from 'react';
import {useUser} from '../hooks/apiHooks';

const Profile = () => {
  const [user, setUser] = useState(null);

  const {getUserByToken} = useUser();

  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem('token');
      const userResponse = await getUserByToken(token);
      setUser(userResponse.user);
    };
    getUser();
  }, [getUserByToken]);

  return (
    <>
      {user && (
        <>
          <h3>Profile</h3>
          <p>email: {user?.email}</p>
          <p>password: {user?.password}</p>
          <p>username: {user?.username}</p>
        </>
      )}
    </>
  );
};

export default Profile;
