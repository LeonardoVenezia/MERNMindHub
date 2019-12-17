import React from 'react';
import './MenuApp.css';
import { Link } from 'react-router-dom'
import logo from '../img/perfil.png';
import menuHamburguesa from '../img/menuHamburguesa.png';


class MenuApp extends React.Component {
constructor(){
  super();

  this.state = {
    displayMenu: false,
    displayPerfil: false
  };

};

  toggleDropdownMenu() {
    this.setState((state)=> {
      return { displayMenu: !state.displayMenu, displayPerfil: false }
    });
  }

  toggleDropdownPerfil() {
    this.setState((state)=> {
      return { displayPerfil: !state.displayPerfil, displayMenu: false }
    });
  }

  render() {
    return (
    <div>  
      <div  className="dropdown">
        <img src={logo} onClick={this.toggleDropdownPerfil.bind(this)}/>
        <img src={menuHamburguesa} onClick={this.toggleDropdownMenu.bind(this)}/>
      </div>
      <div>
        { this.state.displayPerfil ? (
        <ul>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/CreateAccount">Create Account</Link>
          </li>
        </ul>
        ):null
        }

        { this.state.displayMenu ? (
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/CitiesPage">Cities Page</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/CreateAccount">Create Account</Link>
          </li>
        </ul>
        ):null
        }
      </div>
    </div>
    );
  }
}

export default MenuApp;