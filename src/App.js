import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Welcome from './components/Welcome';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import Health from './components/Health';
import Logout from './components/Logout';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
      <Link className='nav-link' to='/Registration'>Registration</Link>
      <Link className='nav-link' to='/Login'>Login</Link>
      <Link className='nav-link' to='/Logout'>Logout</Link>
      <Link className='nav-link' to='/Health'>Health</Link>
      <Link className='nav-link' to='/Welcome'>Welcome</Link>
      <br></br>
        <p>
          Simple React front-end to demo Spring Security and JWTs.
        </p>
      </header>
      <Routes>
        <Route path="/Login" element={<LoginForm />}/>
        <Route path="/Registration" element={<RegistrationForm />}/>
        <Route path="/Logout" element={<Logout />}/>
        <Route path="/Health" element={<Health />}/>
        <Route path="/Welcome" element={<Welcome />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
