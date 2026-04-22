import {Link} from 'react-router';
import {useUserContext} from '../hooks/contextHooks';
import ProtectedRoute from './ProtectedRoute';

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
        <ul>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <ProtectedRoute>
            <li>
              <Link to="/upload">Upload</Link>
            </li>
          </ProtectedRoute>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      )}
    </ul>
  );
};
export default Navigation;
