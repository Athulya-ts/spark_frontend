import React from 'react'
import { TextField } from '@mui/material'

export default function Input(props) {

    const{name,label,value,error=null,onChange} = props
  return (
    <TextField variant="outlined"name={name}label={label} value={value} onChange={onChange} style={{width:400}} {...(error && {error:true,helperText:error})}/>
  )
}
