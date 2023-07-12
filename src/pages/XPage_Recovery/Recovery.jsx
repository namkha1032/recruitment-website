import React, { useState } from "react";
//import { useNavigate } from "react-router-dom"; 
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

const style = {
  marginTop: "15px",
  marginBottom: "15px",
};


export default function Recovery({ email, onChangeEmail, handleSubmit }) {

  //const navigate = useNavigate()
  //const [email, setEmail] = useState("");

  /* const handleSubmit = (event) => {
    event.preventDefault();

    console.log(email);

    navigate('/check-otp');
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
          
          <Grid item xs={12} sx={{...style, display: 'flex', justifyContent: 'center'}}>
            <Typography variant="h4" align="center">
              Recovery
            </Typography>
          </Grid>

          <Grid item xs={12} sx={{...style, display: 'flex', justifyContent: 'center'}}>
            <Typography variant="h6" align="center">
              Enter your email address
            </Typography>
          </Grid>

          <form onSubmit={handleSubmit}>

            <Grid item xs={12} md={12} sx={{ ...style}}>
              <TextField 
                  fullWidth
                  required 
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => {onChangeEmail(e.target.value)}}
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
                Recovery
              </Button>
            </Grid>
          </form>

          <Grid item xs={12} sx={{...style, display: 'flex', justifyContent: 'center'}}>
            <Typography variant="small" align="center">
              <Link href="/login">Back to login</Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
            
    </Box>
  )
}
