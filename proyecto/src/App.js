import React from 'react';
import HeaderMenu from './HeaderMenu/HeaderMenu.js';
import TextCenter from './TextCenter/TextCenter.js';
import StartButton from './StartButton/StartButton.js';
import FooterApp from './FooterApp/FooterApp.js';
import SliderApp from './SliderApp/SliderApp.js';
import {Link} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderMenu></HeaderMenu>
      <Link to="/Ejemplo">Ir a Ejemplo</Link>
      <TextCenter text={"Find your perfect trip, designed by insiders who know and love their cities."}></TextCenter>
      <StartButton texto={"Start Browsing"}></StartButton>
      <SliderApp></SliderApp>
      <FooterApp></FooterApp>
    </div>
  );
}

export default App;