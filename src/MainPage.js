import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import "./Mainpage.css"

function MainPage() {
  return (
    <>
    <div className="header">
      <br/>
    <Link to='/EditDetails'>
    <Button variant="contained" className='btn-editDetails'>EDIT DETAILS</Button>
  </Link>
  <Link to='/Login'>
    <Button variant="contained" className='btn-login'>LOGIN</Button>
  </Link>
  </div>
  </>
  );
}
export default MainPage;