import React from 'react';
import './TextCenter.css';

class TextCenter extends React.Component {
    render() {
        return <p>{this.props.text}</p>
    }
}

export default TextCenter;