import React from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Users from './views/Users/Users';
import CreateUser from './views/Users/CreateUser/CreateUser';
import EditUser from './views/Users/Edit/EditUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/createUser" element={<CreateUser />} />
        <Route path="/user/edit/:id" element={<EditUser />} />
        <Route path="*" element={<Navigate to="/users" />} />
      </Routes>
    </div>
  );
}

export default App;
