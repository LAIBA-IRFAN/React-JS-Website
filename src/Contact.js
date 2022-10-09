import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import './Menu.css';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

const Contact=()=>{
    const [data,setData] = useState({
        fullname:'',
        mobilenumber:'',
        email:'',
        message:''
    })
    const change=e=>{
        setData((prevVal)=>{
            return {...prevVal,
                [e.target.name]:e.target.value}
        })
    }
    const submit=e=>{
        e.preventDefault();
        alert(`My name is ${data.fullname}. My mobile number is ${data.fullname}. My email is ${data.email}.
        My message is ${data.message}.`)
        setData({
            fullname:'',
            mobilenumber:'',
            email:'',
            message:''
        })

    }

    return(
        <form onSubmit={submit}>
        <br></br>
        <Typography sx={{textAlign:'center'}} variant="h4" >Contact us</Typography>;
        <div className="inputs">
        <TextField value={data.fullname} name="fullname" onChange={change} sx={{marginTop:'20px',width:'36%',left:'33%'}} id="outlined-number" label="Full Name" type="text" InputLabelProps={{shrink: true,}}/>
        <TextField value={data.mobilenumber} name="mobilenumber" onChange={change} sx={{marginTop:'20px',width:'36%',left:'33%'}} id="outlined-number" label="Mobile Number" type="tel" InputLabelProps={{shrink: true,}}/>
        <TextField value={data.email} name="email" onChange={change} sx={{marginTop:'20px',width:'36%',left:'33%'}} id="outlined-number" label="Email address" type="email" InputLabelProps={{shrink: true,}}/>
        <TextField value={data.message} name="message" onChange={change} sx={{marginTop:'20px',width:'36%',left:'33%'}} id="outlined-number" label="Message" type="text" InputLabelProps={{shrink: true,}}/>
        </div>
        <Button type="submit" variant="outlined" sx={{left:'48%'}}>Submit</Button>
        </form>
    )

}

export default Contact;