import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import logo from './logo.svg';
var SignaturePad = require('react-signature-pad');


  function NewLine(idVal){
    
    if(idVal % 3 ===0){
      return <br/>
    }
  }

class App extends Component {
  


  constructor(props) {
    super(props);
    this.state = {
      users: [],
      trimmedDataURL: null,
    };
    axios
    .get('/buttons') 
      .then(res=>{this.setState({ users: res.data })});
   
    this.handleButton = this.handleButton.bind(this);
  
}

   handleButton(button) {
    //event.preventDefault();
    console.log('Button is: ' + button);
    axios.post('/send_keypress', {
    button_press: button
    })
    .then(function (response) {
    console.log(response);
    })}
handleSubmit() {
    //event.preventDefault();
    var signature = this.refs.mySignature;
    if(!signature.isEmpty()){
    this.setState({trimmedDataURL: signature.toDataURL()});
    console.log("submitted")}
  }

  render() {
    return (
      <div className="App">
      <div className="App-header">
          <img className="logo" src={logo}  alt="logo"  width="400px"/>
        </div>     
                  <p>hello</p>

                  <SignaturePad clearButton="true"  ref="mySignature" />
                  <button className="button" onClick={() => this.handleSubmit()}> Submit</button>
                  <br/>
                   {this.state.trimmedDataURL ? <img className="sigImage" src={this.state.trimmedDataURL} /> : null}
                   <br/>

 
        {/*this.state.users.map(user =>
          <div className="Inline-butts" key={user.cell_id}><button className="Network-button" onClick={() => this.handleButton(user.command)} key={user.cell_id} value={user.command}>{user.button}</button>
             {NewLine(user.cell_id)}
          </div>
        )*/}

      </div>
    );
  }
}

//xport default App;
