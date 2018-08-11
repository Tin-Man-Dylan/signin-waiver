import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import logo from './logoBlueName.png';
//maybe all this stuff needs to be server side



var isEnabled = false;



  function ContentSwitch(props, displayVal){
    

}


 
 

class Insta extends Component {
  


  constructor(props) {
    super(props);
    this.state = {
      display: false
    };
    axios
    .get('/buttons') 
      .then(res=>{this.setState({ users: res.data })});

    this.handleSubmit = this.handleSubmit.bind(this);//These make it so you can use the this.state in the handlers
  }
  

    handleSubmit(event) {
      //event.preventDefault();

      console.log("signin submitted");
      window.location = '/signin/';
    }

     componentDidMount() {
      setTimeout(() => {
  this.setState({ display: true });
}, 3000);
    }


  render() {



    return (
      <div className="App">
      <div className="App-header">
        <h1>Welcome to Maker Cube</h1>
          {/**/}
        </div>    
        
                  
 
    
        <img  src={logo}  alt="logo"  width="400px"/>

        <br/>

      <div>
      {this.state.display ? (
        <div>
            <button className="print-button" onClick={() => this.handleSubmit()}> Proceed To Sign-In</button>
            
        </div>
      ) : (
        <div>
            <h1> Thanks for signing in to Maker Cube </h1>
            <p> Returning to welcome page...</p>
        </div>
      )}
    </div>

      </div>
    );
  }
}

export default Insta;