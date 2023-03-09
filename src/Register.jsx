import React, { Component } from 'react';
import { TextField,Button } from '@mui/material';
import axios from 'axios'
import './Login.css'

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
        eid:'',
        fname:'',
        lname:'',
        email: '',
        cno: '',
        city:'',
        pname:'',
        sname:'',
        gender:'',
    };
  }

  handleIdChange = (event) => {
    this.setState({ eid: event.target.value });
  };

  handleFirstNameChange = (event) => {
    this.setState({ fname: event.target.value });
  };

  handleLastNameChange = (event) => {
    this.setState({ lname: event.target.value });
  };

  handleProductNameChange = (event) => {
    this.setState({ pname: event.target.value });
  };

  handleShopNameChange = (event) => {
    this.setState({ sname: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handleContactNumberChange = (event) => {
    this.setState({ cno: event.target.value });
  };

  handleCityChange = (event) => {
    this.setState({ city: event.target.value });
  };

  handleGenderChange = (event) => {
    this.setState({ gender: event.target.value });
  };
  

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
        eid: this.state.eid,
        fname: this.state.fname,
        lname: this.state.lname,
        sname: this.state.sname,
        pname: this.state.pname,
        email: this.state.email,
        gender: this.state.gender,
        cno: this.state.cno,
        city: this.state.city,        
      };
    
      axios.put('http://127.0.0.1:8080/updateDetails', data);
  };

  render() {
    return (
        <div className="register-form">
      <form onSubmit={this.handleSubmit} className="sign-form">
        <div className='left'>
        <TextField label="Id" 
          className="sign-input"
          type="number"
          value={this.state.eid}
          onChange={this.handleIdChange}
        /><br/><br/>

        <TextField label="First Name" 
          className="sign-input"
          type="text"
          value={this.state.fname}
          onChange={this.handleFirstNameChange}
        /><br/><br/>

        <TextField label="Last Name" 
        className="sign-input"
        type="text"
        value={this.state.lname}
        onChange={this.handleLastNameChange}
      /> <br/><br/>
        <TextField label="Gender" 
        className="sign-input"
        type="text"
        value={this.state.gender}
        onChange={this.handleGenderChange}
        /><br/><br/>
        
          <TextField label="City" 
            className="sign-input"
            type="text"
            value={this.state.city}
            onChange={this.handleCityChange}  
          /><br/><br/>

      <TextField label="Email" 
          className="sign-input"
          type="email"
          value={this.state.email}
          onChange={this.handleEmailChange}
        /><br/><br/></div>

        <div className='right'>
        <TextField label="Contact Number" 
          className="sign-input"
          type="number"
          value={this.state.cno}
          onChange={this.handleContactNumberChange}
        /><br/><br/>

        <TextField label="Product Name" 
          className="sign-input"
          type="text"
          value={this.state.pname}
          onChange={this.handleProductNameChange}
        /><br/><br/>

        <TextField label="Shop Name" 
          className="sign-input"
          type="text"
          value={this.state.sname}
          onChange={this.handleShopNameChange}
        /><br/><br/>

        <Button  variant="contained" className="login-button" type="submit" >
          UPDATE
        </Button>
        </div>
      </form>
      </div>
    );
  }
}

export default Register;