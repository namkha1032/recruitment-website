import {
  Box,
  Button,
  ButtonBase,
  Container,
  FormControl,
  Grid,
  InputLabel,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography
} from "@mui/material";

import React, { useState } from "react";
import ProfileHeader from "./ProfileHeader";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Key, Person, Send } from "@mui/icons-material";
import CV from "../CV/CV";
import ProfileChangePW from "./ProfileChangPW";
import ProfileInfo from "./ProfileInfo";
import GigaCard from "../GigaCard/GigaCard";
import './ProfileMain.css'
import useGetRole from "../../hooks/useGetRole";


const ProfileMain = ({ page }) => {
  const navigate = useNavigate();
  const role = useGetRole();
  // const location = useLocation();
  // const dispatch = useDispatch();
  
  const user = useSelector((state) => state.user);
   
  const handleClickChangePW = () =>{
    if (page !== 'ChangePW') navigate('/profile/1/changepassword')
  }
  const handleClickProfile = () =>{
    if (page !== 'Profile') navigate('/profile/1')
  }
  function getScrollValues(){
    console.log(document.documentElement.scrollTop)
  }
  window.addEventListener("scroll", getScrollValues);
  return (
    user && (
      <Container >
        <Box sx={{ paddingTop: "40px", paddingBottom: "20px" }}>
            
            <ProfileHeader id={user.cvselected} userName={user.name} />
        
          
        </Box>
        <Grid container spacing={3}  >
          <Grid item md={3} xs={12} >
            <Box sx={{ position:'sticky', top:'5px' }}>
                <Box sx={{width:'100%'}}>  
                <GigaCard >
              
                <List
                  sx={{
                    m:'16px',
                    // display:'flex',
                    maxWidth: '100%',
                    bgcolor: "background.paper",
                    // position: fixed
                  }}
                  
                >   
                  <ListItemButton selected={page==='Profile'} onClick={handleClickProfile}>
                    <ListItemIcon>
                      <Person />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                  </ListItemButton>
                  <ListItemButton selected={page==='ChangePW'} onClick={handleClickChangePW}>
                    <ListItemIcon >
                      <Key/>
                    </ListItemIcon>
                    <ListItemText primary="Change Password" />
                  </ListItemButton>
                </List>
              
            </GigaCard>
            </Box> </Box>
          </Grid>
            <Grid item md={9} xs={12}>     
            {page === 'Profile' && <>
                <ProfileInfo cvid={user.cvselected} user={user} /> 

                
                { role ==='candidate' && <Box sx={{ mb: "24px" }} ><GigaCard>
                <Box sx={{ padding: "24px" }}>
                
                    <CV cvid={user.cvselected} user={user} /> 
                    
                </Box></GigaCard>
                </Box> }
            </> }
            {page === 'ChangePW' && 
            <Box sx={{ mb: "24px" }} ><GigaCard>
                <Box sx={{ padding: "24px" }}>
                
                <ProfileChangePW/>
                    
                </Box></GigaCard>
                </Box> 
            
            
            
            }
            </Grid>
        </Grid>
      </Container>
    )
  );
};

export default ProfileMain;
