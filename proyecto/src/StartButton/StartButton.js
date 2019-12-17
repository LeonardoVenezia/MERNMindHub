import React from 'react';
import './StartButton.css';
import imagen from '../img/circled-right-2.png';

class StartButton extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="contenedor">
                <p>{this.props.texto}</p>
                <img className="imagen" src={imagen}></img>
            </div>
        )
    }
}

export default StartButton;