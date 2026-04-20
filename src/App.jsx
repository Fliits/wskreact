import Home from './views/Home';
import {BrowserRouter, Routes, Route, Link} from 'react-router';
import About from './views/About';
import Login from './views/Login';
import Logout from './views/Logout';
import Profile from './views/Profile';
import Upload from './views/Upload';
import Layout from './components/Layout';
import './App.css';
import {UserProvider} from './context/UserContext';
import ProtectedRoute from './components/ProtectedRoute';

const App = (props) => {
  return (
    <>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <UserProvider>
          <Layout />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="/upload" element={<Upload />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
};
export default App;
