import React from "react";
import actionEjemplo from '../actions/actionsEjemplo';
import {connect} from 'react-redux';



const mapDispatchtoProps=(dispatch)=>{
    return {
        cambiarAlgo:(data)=> dispatch(actionEjemplo(data))
    }
}

class Ejemplo extends React.Component{
constructor(){
    super()
    this.state={

        algo:""
    }
}

onChange = (e) =>{
    this.setState({algo:e.target.value})
}
handleSubmit= () => {
    this.props.cambiarAlgo(this.state.algo)
}

    render(){
        
        return(
            <div>
                <h1>Ejemplo Redux</h1>
                <label htmlFor="">
                    <input type="text" onChange={this.onChange}/>
                </label>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

export default connect(null,mapDispatchtoProps)(Ejemplo)