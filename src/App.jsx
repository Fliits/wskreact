import Home from './views/Home';
import Navigation from './components/Navigation';
import {BrowserRouter, Routes, Route, Link} from 'react-router';
import About from './views/About';
import Login from './views/Login';
import Single from './views/Single';
import Profile from './views/Profile';
import Upload from './views/Upload';
import './App.css';
const App = (props) => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/single" element={<Single />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
        <h1 className="hero-title">My App</h1>
      </BrowserRouter>
    </>
  );
};
export default App;
