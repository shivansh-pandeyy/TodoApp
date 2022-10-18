import React from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Users from './views/Users';
import CreateUser from './views/Users/CreateUser/CreateUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/createUser" element={<CreateUser />} />
        <Route path="*" element={<Navigate to="/users" />}/>
      </Routes>
    </div>
  );
}

export default App;
