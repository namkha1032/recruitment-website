import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Grid,
  TextField,
  Button,
  Typography,
  /* Link, */
  Box,
  Container,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  createTheme,
  IconButton,
  /* Visibility,
  VisibilityOff, */
} from "@mui/material";

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

/* import EmailIcon from "@mui/icons-material/Email"; */
/* import LockIcon from "@mui/icons-material/Lock"; */
import imageBackground from "../../assets/img/background.jpg";

const style = {
  marginTop: "15px",
  marginBottom: "15px",
};

const theme = createTheme({
  palette: {
    secondary: {
      main: '#1976d2'
    }
  }
});

const XPage_Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); 

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
    /* setShowPassword(!showPassword); */
  }

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(email, password);
    navigate("/home");
  };

  const handleCheck = (event) => {
    console.log(event.target.checked);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: `url(${imageBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        /* backgroundColor: "#EEF2F6", */
        width: "100%",
      }}
    >
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid
          container
          sx={{
            paddingTop: "10%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "80%",
          }}
        >

          <Grid
            item
            xs={7}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Grid
              item
              xs={9}
              sx={{
                borderRadius: "10px",
                padding: "20px",
                paddingTop: "10px",
                paddingBottom: "10px",
                backgroundColor: "white",
                opacity: "100%",
                left: "20%",
                right: "20%",
              }}
            >
              <Typography 
                variant="h2" 
                align="center" 
                color='#1976d2' 
                gutterBottom
                fontFamily={'Roboto'}
                fontSize={'28px'}
                lineHeight={'28px'}
                fontWeight={'700'}
                padding={"20px"}
              >
                Hi, welcome back
              </Typography>

              <form
                onSubmit={
                  handleLogin
                } 
              >
                <Grid item xs={12} md={12} sx={{ ...style }}>
                  <TextField
                    fullWidth
                    required
                    label="Email"
                    type="email"
                    value={email}
                    InputProps={{
                      /* endAdornment: (
                        <InputAdornment position="end">
                          <EmailIcon />
                        </InputAdornment>
                      ), */

                      style: { borderRadius: "10px" },
                    }}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={12} sx={{ ...style }}>
                  <TextField
                    fullWidth
                    required
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}}
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),

                      style: { borderRadius: "10px" },
                    }}
                  />
                  
                </Grid>

                <Grid
                  item
                  xs={12}
                  sx={{ ...style, display: "flex", justifyContent: "center" }}
                >
                  <Grid
                    item
                    xs={6}
                    md={6} 
                    paddingLeft='5px'
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          defaultChecked
                          color="primary"
                          onClick={handleCheck}
                        />
                      }
                      label="Remember me"
                      align="left"
                    />

                  </Grid>

                  <Grid item xs={6} md={6} paddingRight='5px' display='flex' justifyContent='right'>
                    <Typography 
                      component={Link} to="/recovery" 
                      variant="subtitle1" 
                      sx={{ 
                        textDecoration: 'none', 
                        color: '#1976d2',
                        paddingTop: '8px',
                        fontWeight: '500'
                      }}
                    >
                      Forgot password?{" "}
                    </Typography>
                  </Grid>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", justifyContent: "center", ...style, marginTop: '0px' }}
                  
                >
                  <Button
                    theme={theme}
                    variant="contained"
                    type="submit"
                    color="secondary"
                  
                    sx={{
                      height: "40px",
                      width: "100%",
                      borderRadius: "20px",
                      marginTop: "5px",
                    }}
                  >
                    Login
                  </Button>
                </Grid>
              </form>

              <Grid
                item
                xs={12}
                sx={{ ...style, display: "flex", justifyContent: "center" }}
              >
                <Typography component={Link} to="/register" variant="subtitle1" sx={{ textDecoration: 'none', color: 'black' }}>
                  Didn't have an account?{" "}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default XPage_Login;
