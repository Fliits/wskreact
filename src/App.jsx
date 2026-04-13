import Home from './views/Home';
import {BrowserRouter, Routes, Route, Link} from 'react-router';
import About from './views/About';
import Login from './views/Login';
import Single from './views/Single';
import Profile from './views/Profile';
import Upload from './views/Upload';
import Layout from './components/Layout';
import './App.css';
const App = (props) => {
  return (
    <>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
