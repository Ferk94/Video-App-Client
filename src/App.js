import React from 'react';
import Home from './components/home/home';
import SignUp from './components/signUp/signUp';
import Login from './components/login/login';
import UserRouter from './router/userRouter';
import AdminRouter from './router/adminRouter'
import AuthUser from './components/authUser/authUser';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (

      <Router>
        <Routes>
          <Route index element={<Home/>}/>
          <Route exact path='/signUp' element={<SignUp/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='user' element={<UserRouter/>}/>
          <Route exact path='/admin' element={<AdminRouter/>}/>
          <Route exact path='/auth' element={<AuthUser userRole='user' adminRole='admin'/>}/>
            
        </Routes>
      </Router>

  );
}

export default App;
