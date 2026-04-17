import {useUserContext} from '../hooks/contextHooks';

const Profile = () => {
  /*const user = JSON.parse(localStorage.getItem('user'));
  const email = user ? user.email : 'Unknown';
  const password = user ? user.password : 'Unknown';
  const username = user ? user.username : 'Unknown';*/

  const {user} = useUserContext();

  return (
    <div>
      <h3>Profile</h3>
      <p>email: {user?.email || 'Unknown'}</p>
      <p>password: {user?.password || 'Unknown'}</p>
      <p>username: {user?.username || 'Unknown'}</p>
    </div>
  );
};

export default Profile;
