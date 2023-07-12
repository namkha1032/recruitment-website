import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import {
  Grid,
  TextField,
  Button,
  Typography,
  Link,
  Box,
  Container,
} from "@mui/material";

//import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';

const style = {
  marginTop: "15px",
  marginBottom: "15px",
};


export default function CheckOTP({ otp, onChangeOTP, handleSubmit }) {
  /* const navigate = useNavigate()
  const [otp, setOTP] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(otp);

    navigate('/reset-password');
  } */

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
            <LockIcon sx={{ fontSize: 60, color: 'blue' }} />
          </Grid>

          <Grid item xs={12} sx={{...style, display: 'flex', justifyContent: 'center'}}>
            <Typography variant="h4" align="center">
              Verify OTP
            </Typography>
          </Grid>

          <form onSubmit={handleSubmit}>

            <Grid item xs={12} md={12} sx={{ ...style}}>
              <TextField 
                  fullWidth
                  required 
                  label="OTP"
                  type="text"
                  value={otp}
                  onChange={(e) => {onChangeOTP(e.target.value)}}
              />
            </Grid>

            <Grid item xs={12} sx={{...style, display: 'flex'}}>
              <Grid item xs={6} align='left'>
              <Typography variant="small">
                Time left: 01:00
              </Typography>
              </Grid>
              <Grid item xs={6} align='right'>
              <Typography variant="small">
                <Link href="">Resend OTP</Link>
              </Typography>
              </Grid>
              
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
                Submit
              </Button>
            </Grid>
          </form>

        </Grid>
      </Grid>
    </Container>
            
    </Box>
  )
}
