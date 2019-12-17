import React from 'react'

import {connect} from 'react-redux';

const mapStatetoProps=(state)=>{
  console.log(state);
  
  return {
      algo:state.algo
  }
}
class CreateAccount extends React.Component {
  onSubmit = () => {
    this.props.history.push('/')
  }
  render() {
    return (
      <div>
        <h1>{this.props.algo}</h1>
      <form>
        <input placeholder="name" type="name" />
        <input placeholder="email" type="email" />
        <button onClick={this.onSubmit}>Submit</button>
      </form>
      </div>
    )
  }
}
export default connect(mapStatetoProps,null)(CreateAccount)