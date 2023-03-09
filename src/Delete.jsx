import React from 'react'
import axios from "axios";
import react ,{useState}from "react";
import './Delete.css'
import { TextField } from '@mui/material';
function Delete() {
    const [search,setSearch]=useState("");
    const [data,setData]=useState([]);
    const searchEntrepreneur=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.delete('http://127.0.0.1:8080/delete/'+search)
            .then( document.getElementById("dels").innerHTML = "deleted")
            .catch(err=>console.log(err))
        }
    }
  return (
    <div><>
    <div className="im">

        </div>
        <div className="header">
            <div className="row1">
           
            </div>
            <div className="row2">
                <p id="dels"><p>Are you sure to delete this record?</p><p>Enter Id and press Enter</p></p>
                <div className="search" >
                    <TextField variant="outlined" className='text' type="text" label="eid.."  value={search} onChange={e=>setSearch(e.target.value)} onKeyPress={searchEntrepreneur}/>
                    
                </div>
                
                 
            </div>
        </div>
      
        </></div>
  )
}

export default Delete


