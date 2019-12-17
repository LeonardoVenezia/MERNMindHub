import React from 'react';
import logo from '../img/MYtineraryLogo.png';
import './HeaderMenu.css';
import MenuApp from '../MenuApp/MenuApp.js';

class HeaderMenu extends React.Component {
    render() {
        return (
            <header>
                <MenuApp></MenuApp>
                <img className="logo" src={logo}></img>
            </header>
        )
    }
}

export default HeaderMenu;