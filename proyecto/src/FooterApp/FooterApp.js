import React from 'react';
import home from '../img/homeIcon.png';
import './FooterApp.css';

class FooterApp extends React.Component {
    render(){
        return (
            <footer className="footer">
                <p>Want you build your own MYtinerary?</p>
                <ul className="lista">
                    <li><a href="">Log in</a></li>
                    <li><a href="">Create Account</a></li>
                </ul>
                <a href="#" className="homeLink"><img className="home" src={home} alt="home"/></a>
            </footer>
        )
    } 
}

export default FooterApp