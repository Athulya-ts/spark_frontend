import React from 'react';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import FrontPage from './FrontPage';
import ShowData from './ShowData';
import Register from './Register';
import Delete from './Delete';
import EmployeeForm from './FormComponents/EmployeeForm'

function RouterPage() {
  return (
    <BrowserRouter >
        <Routes>
        <Route path='/' element={<FrontPage/>}/>
        <Route path='/ShowData' element={<ShowData/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/EmployeeForm' element={<EmployeeForm/>}/>
        <Route path='/Delete' element={<Delete/>}/>
        </Routes>
    </BrowserRouter>
  );
}
export default RouterPage;