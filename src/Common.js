import React from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Menu.css'

const Common=(props)=>{
    const sxStyle1={
        color:'rgb(59, 59, 59)'
        ,marginTop:'10%',
        marginLeft:'10%'
    }
    
    const sxStyle2={
        color:'rgb(54, 111, 233)'
        ,marginLeft:'10%'}
    
        const button={
        borderRadius:'20px'
        ,marginLeft:'15%'
        ,fontSize:'18px'}    
    return(<>
    <div className="main_div">
    <div className="left_div">
    <Typography sx={sxStyle1} variant="h2">Welcome to {props.page} page</Typography>;
    <Typography sx={sxStyle2} variant="h3">Providing you the <br></br> best services</Typography>;
        <br></br>
        <Button sx={button} variant="outlined">{props.button}</Button>
        </div>
        <div className="right_div">
            <img src={props.image} alt="Home image"/>
        </div>
        </div>
    </>)

}

export default Common;