import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import sagrada from '../img/sagrada-familia.jpeg';

class SliderApp extends React.Component {
  render(){
    return (
      <AwesomeSlider>
        <div data-src={sagrada}/>
        <div data-src={sagrada}/>
        <div data-src={sagrada}/>
        <div data-src={sagrada}/>
      </AwesomeSlider>
    );
  }
}

export default SliderApp;