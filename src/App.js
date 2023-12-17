import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navbar from "./components/Navbar"
import SignUp from "./components/SignUp"
import Login from "./components/Login"
import Customer_dashboard from './components/Customer_dashboard';
import Manager_dashboard from "./components/Manager_dashboard"
function App() {
  return (
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path='/signUp' element={<SignUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/customer' element={<Customer_dashboard/>}></Route>
        <Route path='/manager' element={<Manager_dashboard/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
