import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import BranchPage from './pages/BranchPage';
import NavBarComponent from './components/NavBarComponent';

function App() {
  return (
    <div>
    <Router>
    <div>
            
            <Routes>
            
            <Route path="/" exact element={<WelcomePage/>}></Route>
            <Route path="/login" exact element={<LoginPage/>}></Route>
            <Route path="/signup" exact element={<SignupPage/>}></Route>
            <Route path="/home" exact element={<><NavBarComponent/><HomePage/></>}></Route>
            <Route path="/branch/:id" exact element={<><NavBarComponent/><BranchPage/></>}></Route>

            </Routes>
    </div>
    </Router>
    </div>
  );
}

export default App;
