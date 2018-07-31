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

 
 

class Signin extends Component {
  


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
   
    this.handleButton = this.handleButton.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);//These make it so you can use the this.state in the handlers

  
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

    handleChange(event) { //used to set update the state for each of the inputs, it takes the name from the input (which is the same as the state name) and updates it
    //this.setState({value: event.target.value});
    const target = event.target;
    //const value = target.type === 'checkbox' ? target.checked : target.value;
    const value = target.value;
    const name = target.name;

    //console.log(value);

    this.setState({
      [name]: value
    });
    }

    handleSubmit(event) {
      event.preventDefault();
      //this.state.firstInput,this.state.lastInput,this.state.emailInput,this.state.phoneInput these values need to be sent to the spreadsheet in here
      //Need to have a check to see that required fields are filled in (basic checking done)
      //There will then be a redirect to the waiver page
       axios.post('/send_signin', {
          signin_first: this.state.firstInput,
          signin_last: this.state.lastInput,
          signin_email: this.state.emailInput,
          signin_phone: this.state.phoneInput
          })
        .then(function (response) {
          console.log(response);
    })
      console.log("signin submitted");
      window.location = '/waiver/' // Redirects to waiver page
    }


  render() {
    return (
      <div className="App">
      <div className="App-header">
        <h1>Maker Cube Sign-In Form</h1>
          {/*<img className="logo" src={logo}  alt="logo"  width="400px"/>*/}
        </div>     
                  <p>hello to everyones</p>

                  <form onSubmit={this.handleSubmit} method="post" encType="multipart/form-data" > {/*Use the handleSubmit function above to submit the data(text) from the fields below*/}
            <label>
              <h3>Please sign in:</h3>
                
                    First Name:<input name="firstInput" type="text" value={this.state.firstInput} onChange={this.handleChange} className="form-control"/><br/> {/*for each of the inputs it should update its state value on every change, as this is what is submitted*/}
                    Last Name:<input name="lastInput" type="text" value={this.state.lastInput} onChange={this.handleChange} className="form-control"/><br/>
                    Email:<input name="emailInput" type="text" value={this.state.emailInput} onChange={this.handleChange} className="form-control"/><br/>
                    Phone Number:<input name="phoneInput" type="text" value={this.state.phoneInput} onChange={this.handleChange} className="form-control"/><br/>


            </label><br/>
            {isEnabled =
              this.state.firstInput.length > 0 
              && this.state.lastInput.length > 0
              && this.state.emailInput.length > 0
              && this.state.phoneInput.length > 0}
            <input disabled={!isEnabled} type="submit" value="Submit" className="btn btn-primary button"/>
          </form>

          

 
        {/*this.state.users.map(user =>
          <div className="Inline-butts" key={user.cell_id}><button className="Network-button" onClick={() => this.handleButton(user.command)} key={user.cell_id} value={user.command}>{user.button}</button>
             {NewLine(user.cell_id)}
          </div>
        )*/}

      </div>
    );
  }
}

export default Signin;
