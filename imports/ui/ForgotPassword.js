import React, { Component } from 'react';

export default class ForgotPassword extends Component {

  onSubmitHandler = (event)=>{
    alert('Details'+ event);
  }

  render(){
    return(
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <input type="text" placeholder="enter E-mail"/>
          <input type="password" placeholder="Phone Number"/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
