// Code Keypad Component Here
import React from "react"

class Keypad extends React.Component {

  constructor () {
    super();
    this.state = {
      password: { value: '' }
    }
  }

  onKeyUpHandler = () => {
    console.log('Entering password...')
  }

  render() {
    return(
      <div>
        <input type="password" 
              name="password"  
              onKeyUp={this.onKeyUpHandler} 
        /> 
      </div>
    );
  }
}

export default Keypad;
