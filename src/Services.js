import React from "react";
import Cards from './Cards';
import Typography from '@mui/material/Typography';
import CardData from "./CardData";
import Grid from '@mui/material/Unstable_Grid2';

const Services=()=>{
    return(
        <>
        <br></br>
        <Typography sx={{textAlign:'center'}} gutterBottom variant="h5" component="div">Our Services</Typography><br></br> 
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {CardData.map((value,index)=>
            <Grid  xs={2} sm={4} md={4}><Cards image={value.img} domain={value.domain}/></Grid>
        )}
        </Grid>
        </>
    )
}



export default Services;