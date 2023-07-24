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
  createTheme,
  IconButton,
} from "@mui/material";

import GigaCard from "../../components/GigaCard/GigaCard"
import GigaCardBody from "../../components/GigaCardBody/GigaCardBody"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
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

const fullnameRegex = /^[a-zA-Z-' ]{2,}$/;
const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^.{8,}$/;

const XPage_Register = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [validFullName, setValidFullName] = useState(true);
  const [validUsername, setValidUsername] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);

  const handleFullNameChange = (event) => {
    let value = event.target.value;
    setFullName(value);
    if (!fullnameRegex.test(value)) {
      setValidFullName(false)
    }
    else {
      setValidFullName(true)
    }
  }

  const handleUsernameChange = (event) => {
    let value = event.target.value;
    setUsername(value);
    if (!usernameRegex.test(value)) {
      setValidUsername(false)
    }
    else {
      setValidUsername(true)
    }
  }

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

  const handlePasswordChange = (event) => {
    let value = event.target.value;
    setPassword(value);
    if (!passwordRegex.test(value)) {
      setValidPassword(false)
    }
    else {
      setValidPassword(true)
    }
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }

  const handleRegister = (event) => {
    event.preventDefault();
    if (validFullName && validUsername && validEmail && validPassword) {
      console.log("Register success");
      navigate("/login");
    }
    else {
      if (!validFullName) {
        setValidFullName(false)
        setFullName("")
      }
      if (!validUsername) {
        setValidUsername(false)
        setUsername("")
      }
      if (!validEmail) {
        setValidEmail(false)
        setEmail("")
      }
      if (!validPassword) {
        setValidPassword(false)
        setPassword("")
      }
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: `url(${imageBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
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
            width: "76%",
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
                opacity: "100%",
                left: "20%",
                right: "20%",
              }}
            >
              <GigaCard>
                <GigaCardBody>
                
              <Typography 
                variant="h2" 
                align="center" 
                color='#1976d2' 
                gutterBottom
                fontFamily={'Roboto'}
                fontSize={'28px'}
                lineHeight={'28px'}
                fontWeight={'700'}
                padding={"10px"}
              >
                Register
              </Typography>

              <form
                onSubmit={
                  handleRegister
                } 
              >

                <Grid item xs={12} md={12} sx={{ ...style }}>
                  <TextField
                    fullWidth
                    required
                    label="Full name"
                    type="text"
                    value={fullName}
                    InputProps={{
                      style: { borderRadius: "12px" },
                    }}
                    onChange={handleFullNameChange}
                    error={!validFullName}
                  />
                  {!validFullName && (
                    <Box
                    margin="3px 14px 0px"
                    >
                      {
                        fullName === "" ? (
                          <Typography 
                            color="#f44336"
                            fontSize="12px"
                            lineHeight="20px"
                          >
                            Full name is required
                          </Typography>
                        ) : (
                          <Typography color="#f44336"
                          fontSize="12px"
                            lineHeight="20px"
                          >
                            Full name must be at least 2 characters long and can only contain letters, spaces and hyphens
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
                    label="Username"
                    type="text"
                    value={username}
                    InputProps={{
                      style: { borderRadius: "12px" },
                    }}
                    onChange={handleUsernameChange}
                    error={!validUsername}
                  />
                  {!validUsername && (
                    <Box
                    margin="3px 14px 0px"
                    >
                      {
                        username === "" ? (
                          <Typography 
                            color="#f44336"
                            fontSize="12px"
                            lineHeight="20px"
                          >
                            Username is required
                          </Typography>
                        ) : (
                          <Typography color="#f44336"
                          fontSize="12px"
                            lineHeight="20px"
                          >
                            Username must be 3-20 characters long and can only contain letters, numbers and underscores
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
                    onChange={handlePasswordChange}
                    error={!validPassword}
                  />

                  {!validPassword && (
                    <Box
                      margin="3px 14px 0px"
                    >
                      {
                        password === "" ? (
                          <Typography 
                            color="#f44336"
                            fontSize="12px"
                            lineHeight="20px"
                          >
                          Password is required
                          </Typography>
                        ) : (
                          <Typography color="#f44336"
                          fontSize="12px"
                            lineHeight="20px"
                          >
                          Your password must be at least 8 characters 
                          </Typography>
                        )
                      }
                      
                    </Box>

                  )}
                </Grid>

                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", justifyContent: "center", ...style }}
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
                      marginTop: "15px",
                    }}
                  >
                    Register
                  </Button>
                </Grid>
              </form>

              <Grid
                item
                xs={12}
                sx={{ ...style, display: "flex", justifyContent: "center", marginBottom: '0px' }}
              >
                <Typography variant="subtitle1" sx={{ textDecoration: 'none', color: 'black' }}>
                  Already have account?{" "}
                  <Typography component={Link} to="/login" variant="subtitle1" sx={{ textDecoration: 'none', color: '#1976d2'/* , fontWeight: '500' */ }}>
                    Login here
                  </Typography>
                </Typography>
              </Grid>

              </GigaCardBody>
              </GigaCard>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default XPage_Register;
