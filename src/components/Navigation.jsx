import {Link} from 'react-router';
import {useUserContext} from '../hooks/contextHooks';

const Navigation = () => {
  const {user} = useUserContext();
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      {!user && (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
      {user && (
        <li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/upload">Upload</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </li>
      )}
    </ul>
  );
};
export default Navigation;
