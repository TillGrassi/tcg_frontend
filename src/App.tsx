import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Booster from './components/Booster';
import Dashboard from './components/Dashboard';
import Login  from "./components/Login"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/booster' element={<Booster />} />
      </Routes>
    </div>
  );
}

export default App;
