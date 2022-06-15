import React from 'react';
import Home from './components/home/home';
import SignUp from './components/signUp/signUp';
import Login from './components/login/login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (

      <Router>
        <Routes>
          <Route index element={<Home/>}/>
          <Route exact path='/signUp' element={<SignUp/>}/>
          <Route exact path='/login' element={<Login/>}/>
        </Routes>
      </Router>

  );
}

export default App;
