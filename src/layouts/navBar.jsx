import React from 'react'
import {Link} from 'react-router-dom';
import SignUp from '../components/signUp/signUp';
import Login from '../components/login/login';
import './navBar.css';

const NavBar = () => {
  return (
    <div className='navBar-container'>
      <Link to='/signUp'>
        <button>
            Registro
        </button>
      </Link>
      <Link to='/login'>
        <button>
            Inicio de sesión
        </button>
      </Link>
    </div>
  )
}

export default NavBar;