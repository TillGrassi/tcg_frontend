import React from 'react';
import './App.css';
import './Navbar.css';
import './Login.css';
import './Card.css';
import './Booster.css';
import { Routes, Route } from "react-router-dom";
import Booster from './components/Booster';
import Dashboard, {FullProps} from './components/Dashboard';
import Login  from "./components/Login"
import { useSelector } from 'react-redux';


function App() {

  const userReducer: FullProps["userReducer"] = useSelector((state: FullProps) => state.userReducer);
  
  return (
    <div className="App">
      { userReducer.authedUser === null ?
      <Login /> : 
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/booster' element={<Booster />} />
      </Routes>}
    </div>
  );
}


export default App;
