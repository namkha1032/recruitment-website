import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import {
  Grid,
  TextField,
  Button,
  Typography,
  /* Link, */
  Box,
  Container,
} from "@mui/material";

//import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockResetIcon from '@mui/icons-material/LockReset';

const style = {
  marginTop: "15px",
  marginBottom: "15px",
};

export default function ResetPassword({ newPassword, confirmPassword, onChangeNewPassword, onChangeConfirmPassword, handleSubmit }) {

  /* const navigate = useNavigate()
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(newPassword, confirmPassword);
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      setNewPassword("");
      setConfirmPassword("");
    }
    else {
      alert("Password reset successful");
      navigate('/login-form');
    }
    
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
            <LockResetIcon sx={{ fontSize: 60, color: 'blue' }} />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h4" align="center">Reset Password</Typography>{" "}
          </Grid>

          <form onSubmit={handleSubmit}>
            <Grid item xs={12} md={12} sx={{ ...style}}>
              <TextField 
                  fullWidth
                  required 
                  label="New Password"
                  type="password"
                  value={newPassword}
                  onChange={(e) => {onChangeNewPassword(e.target.value)}}
              />
            </Grid>

            <Grid item xs={12} md={12} sx={{...style}}>
              <TextField 
                  fullWidth 
                  required
                  label="Confirm Password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => {onChangeConfirmPassword(e.target.value)}}
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
                Reset
              </Button>
            </Grid>
          </form>

        </Grid>
      </Grid>
    </Container>
            
    </Box>
  )
}

