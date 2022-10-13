import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Users from './views/Users';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<Navigate to="/users" />}/>
      </Routes>
    </div>
  );
}

export default App;
