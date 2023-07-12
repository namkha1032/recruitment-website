import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate is a hook that allows us to navigate to a different page
import {
  Grid,
  TextField,
  Button,
  Typography,
  Link,
  Box,
  Container,
} from "@mui/material";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const style = {
  marginTop: "15px",
  marginBottom: "15px",
};


const XPage_Register = () => {

  const navigate = useNavigate()
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Role = 'candidate';

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(firstName, lastName, email, password, Role);

    navigate('/login');
  }

  return (

    <Box sx={{backgroundColor: 'cornflowerblue', height: '100vh'}}>

    <Container sx={{display: "flex", justifyContent: "center"}}>
      <Grid
        container
        sx={{ paddingTop: "100px", display: "flex", justifyContent: "center", width: "80%"}}
      >
        <Grid
          item
          md={5}
          sx={{
            border: "1px solid #000",
            borderRadius: "10px",
            padding: "25px",
            backgroundColor: "white",

          }}
        >
          <Grid item xs={12} display='flex' justifyContent='center'>
            <AccountCircleIcon sx={{ fontSize: 60, color: 'blue' }} />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h4" align="center">Register</Typography>{" "}
          </Grid>

          <form onSubmit={handleSubmit}>

            <Grid item xs={12} md={12} sx={{ ...style, display: 'flex', justifyContent: 'center'}}>
              <Grid item xs={6} md={6} sx={{marginRight: '5px'}}>
                <TextField 
                    required
                    label="First Name"
                    type='text'
                    value={firstName}
                    onChange={(e) => {setFirstName(e.target.value)}}
                />
              </Grid>
              
              <Grid item xs={6} md={6} sx={{marginLeft: '5px'}}>
                <TextField 
                    required
                    label="Last Name"
                    type='text'
                    value={lastName}
                    onChange={(e) => {setLastName(e.target.value)}}
                />
              </Grid>
            </Grid>

            <Grid item xs={12} md={12} sx={{ ...style}}>
              <TextField 
                  fullWidth
                  required 
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => {setEmail(e.target.value)}}
              />
            </Grid>

            <Grid item xs={12} md={12} sx={{...style}}>
              <TextField 
                  fullWidth 
                  required
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => {setPassword(e.target.value)}}
              />
            </Grid>
            
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center", ...style }}
            >
              <Button 
                variant="contained" 
                type="submit"
                sx={{
                  height: "40px",
                  width: "100%",
                  borderRadius: "5px",
                  marginTop: "15px",
                }}
              >
                Register
              </Button>
            </Grid>
          </form>

          <Grid item xs={12} sx={{...style, display: 'flex', justifyContent: 'center'}}>
            <Typography variant="small" align="center">
              Already have account? <Link href="/login">Click here to login</Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
            
    </Box>
  )
}

export default XPage_Register

