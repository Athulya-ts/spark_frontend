import axios from "axios";
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import "./Mainpage.css"
import "./ShowData.css"

class ShowData extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8080/showDetails')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}

  render() {   
    return (
    <>
    <div className="header">
      <br/>
    <Link to='/Register'>
    <Button variant="contained" className='btn-login'>EDIT DETAILS</Button>
  </Link>
  </div>
  <br/>  <br/>
  <center>
      <table border={1}>
      <thead>
        <tr>
          <th>Id</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Gender</th>
          <th>City</th>
          <th>Email</th>
          <th>ContactNumber</th>
          <th>ProductName</th>
          <th>ShopName</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.eid} className="row">
            <td>{user.eid}</td>
            <td>{user.fname}</td>
            <td>{user.lname}</td>
            <td>{user.gender}</td>
            <td>{user.city}</td>
            <td>{user.email}</td>
            <td>{user.cno}</td>
            <td>{user.pname}</td>
            <td>{user.sname}</td>
            <td><Link to="/Delete"><center><i class="fa fa-trash-o"></i></center></Link></td>
          </tr>
        ))}
      </tbody>
    </table>
    </center>
    </>
    );
  }}
  
export default ShowData;


