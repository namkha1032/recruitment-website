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

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const XPage_Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); 
  const [validEmail, setValidEmail] = useState(true);

  const handleEmailChange = (event) => {
    let value = event.target.value;
    setEmail(value);
    if (!emailRegex.test(value)) {
      setValidEmail(false)
    }
    else {
      setValidEmail(true)
    }
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
    /* setShowPassword(!showPassword); */
  }

  const handleLogin = (event) => {
    event.preventDefault();
    if (validEmail) {
      navigate("/home");
    }
    else {
      setValidEmail(false);
      setEmail("");
    }
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
        flexWrap: "wrap",
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
            width: "75%",
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
                      style: { borderRadius: "12px" },
                    }}
                    onChange={handleEmailChange}
                    error={!validEmail}
                  />

                  {!validEmail && (
                    <Box
                      margin="3px 14px 0px"
                    >
                      {
                        email === "" ? (
                          <Typography 
                            color="#f44336"
                            fontSize="12px"
                            lineHeight="20px"
                          >
                          Email is required
                          </Typography>
                        ) : (
                          <Typography color="#f44336"
                          fontSize="12px"
                            lineHeight="20px"
                          >
                          Must be a valid email
                          </Typography>
                        )
                      }
                      
                    </Box>

                  )}
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

                      style: { borderRadius: "12px" },
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
                          theme={theme}
                          color="secondary"
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
                        /* fontWeight: '500' */
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
                      borderRadius: "5px",
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
                <Typography variant="subtitle1" sx={{ textDecoration: 'none', color: 'black' }}>
                  Didn't have an account?{" "}
                  <Typography component={Link} to="/register" variant="subtitle1" sx={{ textDecoration: 'none', color: '#1976d2'}}>
                    Register now
                  </Typography>
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
