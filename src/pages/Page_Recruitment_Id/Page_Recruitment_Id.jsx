import React from 'react';
import { useState, useEffect } from 'react';
import { Grid, Button, Modal, Box, Divider } from '@mui/material';
import './Page_Recruitment_Id.css';
import Info_view from '../../components/View_recruitment/Info_view';
import 'react-toastify/dist/ReactToastify.css';


const Page_Recruitment_Id = () => {
    const tabs = 1
    return (  
            <>
                <Grid container spacing={2} >
                    <Grid item xs={12} md={12} sm={12}>
                        <Info_view tabs={tabs} />
                    </Grid>
                </Grid >
            </>
           
    )
}

export default Page_Recruitment_Id