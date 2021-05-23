// Code EyesOnMe Component Here
import React from "react"

class EyesOnMe extends React.Component {


  onFocusHandler = () => {
    console.log('Good!')
  }

  onBlurHandler = () => {
    console.log('Hey! Eyes on me!')
  }


  render(){
    return(
      <div>
        <button 
          onFocus={this.onFocusHandler} 
          onBlur={this.onBlurHandler}
        >

        </button>
      </div>
    );
  }
}

export default EyesOnMe;