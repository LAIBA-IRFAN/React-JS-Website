import React from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Menu.css'
import Common from './Common'

const Home=()=>{
    const img = "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?w=740&t=st=1665255320~exp=1665255920~hmac=549f6cae48a9d84ff469fe5fb81ac9939b7fcf4fdbe0f8f620b0f07616889cb1"
    return(
        <>
            <Common image={img} page="my" button="Get started"/>
        </>
    )
}

export default Home;