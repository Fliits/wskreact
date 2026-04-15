const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const email = user ? user.email : 'Unknown';
  const password = user ? user.password : 'Unknown';
  const username = user ? user.username : 'Unknown';

  return (
    <div>
      <h3>Profile</h3>
      <p>email: {email}</p>
      <p>password: {password}</p>
      <p>username: {username}</p>
    </div>
  );
};

export default Profile;
