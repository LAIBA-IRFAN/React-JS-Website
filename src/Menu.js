import React from "react";
import {NavLink} from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import { IconButton, Toolbar , MenuItem, Typography} from '@mui/material';
import EngineeringIcon from '@mui/icons-material/Engineering';
import '@fontsource/roboto/700.css';
import './Menu.css'

const Menu=()=>{
    return(<>
    <AppBar color="primary" position="static">
    <Toolbar>
    <IconButton color="inherit"><EngineeringIcon  sx={{ fontSize: 30 }}/></IconButton>
    <Typography variant="h5" component="h4">Laiba Irfan</Typography>
    <div className="nav_div">
    <NavLink to='/' className='navlink' end>Home</NavLink>
    <NavLink to='/services' className='navlink'>Service</NavLink>
    <NavLink to='/about' className='navlink'>About</NavLink>
    <NavLink to='/contact' className='navlink'>Contact</NavLink>
    </div>
    </Toolbar>

    </AppBar>
    

    </>)
    


}

export default Menu;