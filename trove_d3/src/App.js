import './App.css';
import Login from './Components/Login';
import SignUp from './Components/Signup';
import Home from './Components/Home';
import Welcome from './Components/Welcome';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Welcome/>}/>
            <Route path='/Signup' element={<SignUp/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Welcome' element={<Welcome/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
