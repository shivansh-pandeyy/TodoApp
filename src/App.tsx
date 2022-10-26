import React from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Users from './views/Users/Users';
import CreateUser from './views/Users/CreateUser/CreateUser';
import EditUser from './views/Users/Edit/EditUser';
import Posts from './views/Posts/Posts';
import Todo from './views/Todo/Todo';
import CreatePost from './views/Posts/CreatePost/CreatePost';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/createUser" element={<CreateUser />} />
        <Route path="/user/edit/:id" element={<EditUser />} />
        <Route path="/users/:id/posts" element={<Posts />} />
        <Route path="/users/:id/todos" element={<Todo />} />
        <Route path="/users/:id/createPost" element={<CreatePost />} />
        <Route path="*" element={<Navigate to="/users" />} />
      </Routes>
    </div>
  );
}

export default App;
