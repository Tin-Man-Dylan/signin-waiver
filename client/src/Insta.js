import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import logo from './logo.svg';
//maybe all this stuff needs to be server side


var isEnabled = false;


  function NewLine(idVal){
    
    if(idVal % 3 ===0){
      return <br/>
    }
  }

 
 

class Insta extends Component {
  


  constructor(props) {
    super(props);
    this.state = {
      users: [],
      firstInput: '',
      lastInput: '',
      emailInput: '',
      phoneInput: '',
    };
    axios
    .get('/buttons') 
      .then(res=>{this.setState({ users: res.data })});

    this.handleSubmit = this.handleSubmit.bind(this);//These make it so you can use the this.state in the handlers
  }
  

    handleSubmit(event) {
      //event.preventDefault();

      console.log("signin submitted");
      window.location = '/';
    }


  render() {
    return (
      <div className="App">
      <div className="App-header">
        <h1>Maker Cube Photos</h1>
          {/*<img className="logo" src={logo}  alt="logo"  width="400px"/>*/}
        </div>     
                  <p>An Instagram Slideshow</p>
        <button className=" btn btn-default button save" onClick={() => this.handleSubmit()}> Proceed To Sign-In</button>
        

      </div>
    );
  }
}

export default Insta;