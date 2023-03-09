import React from 'react'
import { Grid} from '@mui/material';
import './EmployeeForm.css';
import {useForm,Form} from './useForm';
import Controls from './Controls';
import { Link } from 'react-router-dom';
import axios from 'axios'

const genderItems=[
    {id:'male',title:'Male'},
    {id:'female',title:'Female'},
    {id:'other',title:'Other'},
]

const initialFValues={
    fname:'',
    lname:'',
    email:' ',
    cno:'',
    city:'',
    pname:'',
    sname:'',
    eid:0,
    gender:'male',
}
    
export default function EmployeeForm() {
    const validate=(fieldValues=values) => {
        let temp={...errors}
        if('cno' in fieldValues)
        temp.cno=fieldValues.cno.length>9?"":"Minimum 10 numbers required"
        if('eid' in fieldValues)
        temp.eid=fieldValues.eid?"":"*required"
        if('email' in fieldValues)
        temp.email=(/$^|.+@.+..+/).test(fieldValues.email)?"":"Enter a valid email"
        if('fname' in fieldValues)
        temp.fname=fieldValues.fname?"":"*required"
        if('lname' in fieldValues)
        temp.lname=fieldValues.lname?"":"*required"
        if('city' in fieldValues)
        temp.city=fieldValues.city?"":"*required"
        if('pname' in fieldValues)
        temp.pname=fieldValues.pname?"":"*required"
        if('sname' in fieldValues)
        temp.sname=fieldValues.sname?"":"*required"
        setErrors({
            ...temp
        })
        if(fieldValues === values)
        return Object.values(temp).every(x=>x==="")
    }

    const{values,setValues,errors,setErrors,handleInputChange} = useForm(initialFValues,true,validate);
    const handleSubmit = e =>{
        e.preventDefault()
        const data={
            eid:values.eid,
            fname:values.fname,
            lname:values.lname,
            email:values.email,
            cno:values.cno,
            city:values.city,
            pname:values.pname,
            sname:values.sname,
            gender:values.gender,
        };
        axios.post('http://127.0.0.1:8080/addDetails', data)
        if(validate()){
            window.alert('Registering...')
        }
    }

  return (
    <>
        <div className="form-align">
        <Form onSubmit={handleSubmit}>
        <Grid container>
            <Grid item xs={6}>
                <div className='left'>
            <Controls.Input name="eid"label="Id" value={values.eid} onChange={handleInputChange} error={errors.eid}/><br/><br/>
            <Controls.Input name="fname"label="First Name" value={values.fname} onChange={handleInputChange} error={errors.fname}/><br/><br/>
            <Controls.Input label="Last Name" name="lname" value={values.lname} onChange={handleInputChange}  error={errors.lname}/><br/><br/>
            <Controls.Input label="Email" name="email" value={values.email} onChange={handleInputChange}  error={errors.email}/><br/><br/>
            <Controls.Input label="Contact number" name="cno" value={values.cno} onChange={handleInputChange}  error={errors.cno}/><br/><br/>
            <Controls.Input label="City" name="city" value={values.city} onChange={handleInputChange}  error={errors.city}/></div>
            <div className='right'>
            <Controls.Input label="Product name" name="pname" value={values.pname} onChange={handleInputChange}  error={errors.pname}/><br/><br/>
            <Controls.Input label="Shop name" name="sname" value={values.sname} onChange={handleInputChange} error={errors.sname}/><br/><br/></div>
            </Grid>
            <Grid item xs={6}>
                <div className='radio'>
                <Controls.RadioGroup label="Gender" name="gender" value={values.gender} onChange={handleInputChange} items={genderItems}/><br/><br/>
                <Controls.Button type="submit"text="REGISTER"/></div>
            </Grid>
        </Grid>
            <Link to='/ShowData'>
                <div className="icon">
            <i class="fa fa-home"></i>
            </div>
            </Link>
        </Form>
        </div>
    </>
  )
}