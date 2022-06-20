import React from 'react'
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './navBar.css';

const NavBar = (props) => {
  // eslint-disable-next-line no-lone-blocks
  {if(props.home){
    return (
      <div className='navBar-container'>
        <Link to='/signUp'>
          <Button
          style={{
            marginLeft: "5px",
            marginRight: "5px",
            borderRadius: "30px",
            fontSize: "11px",
            fontWeight: "bold",
            fontFamily: "Fredoka",
            letterSpacing: "1px",
            border: "1px solid #ef0b51",
            backgroundColor: "#ef0b51",
            height: "50px",
            width: "150px",
            boxShadow: "0px 3px 5px 0px #989898b2",
          }}
          >
              Registrarse
          </Button>
        </Link>
        <Link to='/login'>
          <Button
          style={{
            marginLeft: "5px",
            marginRight: "5px",
            borderRadius: "30px",
            fontSize: "11px",
            fontWeight: "bold",
            fontFamily: "Fredoka",
            letterSpacing: "1px",
            border: "1px solid #ef0b51",
            backgroundColor: "#ef0b51",
            height: "50px",
            width: "150px",
            boxShadow: "0px 3px 5px 0px #989898b2",
          }}
          >
              Ingresar
          </Button>
        </Link>
      </div>
    )

  }else if(props.signUp || props.login){
    return (
      <div className='navBar-container'>
        <Link to='/signUp'>
          <Button
          style={{
            marginLeft: "5px",
            marginRight: "5px",
            borderRadius: "30px",
            fontSize: "11px",
            fontWeight: "bold",
            fontFamily: "Fredoka",
            letterSpacing: "1px",
            border: "1px solid #ef0b51",
            backgroundColor: "#ef0b51",
            height: "50px",
            width: "150px",
            boxShadow: "0px 3px 5px 0px #989898b2",
          }}
          >
              Registrarse
          </Button>
        </Link>
        <Link to='/login'>
          <Button
          style={{
            marginLeft: "5px",
            marginRight: "5px",
            borderRadius: "30px",
            fontSize: "11px",
            fontWeight: "bold",
            fontFamily: "Fredoka",
            letterSpacing: "1px",
            border: "1px solid #ef0b51",
            backgroundColor: "#ef0b51",
            height: "50px",
            width: "150px",
            boxShadow: "0px 3px 5px 0px #989898b2",
          }}
          >
              Ingresar
          </Button>
        </Link>
        <Link to='/'>
          <Button
          style={{
            marginLeft: "5px",
            marginRight: "5px",
            borderRadius: "50px",
            fontSize: "11px",
            fontWeight: "bold",
            fontFamily: "Fredoka",
            letterSpacing: "1px",
            border: "1px solid #ef0b51",
            backgroundColor: "#ef0b51",
            height: "50px",
            width: "55px",
            boxShadow: "0px 3px 5px 0px #989898b2",
          }}
          >
            Atrás
          </Button>
        </Link>
      </div>
    )
  }
}
}

export default NavBar;