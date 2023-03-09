import './FrontPage.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function FrontPage() {
  return (
    <div className="frontpage">
    <Link to="/ShowData">
      <img src="https://img.freepik.com/free-vector/goal-achievement-teamwork-business-concept-career-growth-cooperation-development-project_107791-29.jpg?1&w=826&t=st=1677942669~exp=1677943269~hmac=dbdb357ec576613412432b5c3e823a2c443756615c2a355da709e2bee8b54553" alt="app-icon"></img>
    <p id="frontpage">SPARK</p>
    </Link>
    <Link to='/EmployeeForm'>
    <Button variant="contained" className='btn-getDetails'>REGISTER</Button>
    </Link>
    </div>
  );
}

export default FrontPage;


