// Code Keypad Component Here
import React from "react"

class Keypad extends React.Component {

  constructor () {
    super();
    this.state = {
      password: { value: '' }
    }
  }

  render() {
    return(
      <input type="password" 
             name="password" 
             value={this.state.password.value} 
             onKeyUp={this.} 
      /> 
    );
  }
}

export default Keypad;
