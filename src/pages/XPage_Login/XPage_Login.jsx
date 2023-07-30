import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
// import useHistory from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
  Paper,
  rgbToHex,
  /* Visibility,
  VisibilityOff, */
} from "@mui/material";

import GigaCard from "../../components/GigaCard/GigaCard"
import GigaCardBody from "../../components/GigaCardBody/GigaCardBody"
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import imageBackground from "../../assets/img/background.jpg";
import shadows from "@mui/material/styles/shadows";

//import ErrorIcon from '@mui/icons-material/Error';

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

const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;

const XPage_Login = () => {
  const navigate = useNavigate();
  // const history = useHistory();
  const [username, setUsername] = useState("");
  const [validUsername, setValidUsername] = useState(true);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); 
  const [check, setCheck] = useState(false);
  const [errorSnackbar, setErrorSnackbar] = useState(false);

  const dispatch = useDispatch();

  const newError = useSelector((state) => state.error);

  useEffect(() => {
    if (newError.status === "no") {
      dispatch({ type: "error/setError", payload: { status: "idle", message: "" } })
      const previousPage = sessionStorage.getItem('previousPage') || '/home';
      sessionStorage.removeItem('previousPage');
      navigate(previousPage);

      // navigate("/home");
    }
    if (newError.status === "yes") {
      setErrorSnackbar(true)
      setUsername("");
      setPassword("");
      setTimeout(() => {
          setErrorSnackbar(false)
          dispatch({ type: "error/setError", payload: { status: "idle", message: "" } })
      }, 5000)
    }
  }, [newError]);

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

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }

  const handleLogin = (event) => {
    event.preventDefault();

    if (validUsername) {
      dispatch({ type: "saga/userLogin", payload: { username, password } })
      //dispatch({ type: "saga/getUserId", payload: null})
    }
    else {
      setValidUsername(false);
      setUsername("");
    }
  };

  const handleCheck = (event) => {
    event.preventDefault();
    setCheck(!check);
  };

  return (
    <Box
      sx={{
        height: "100%",
        backgroundImage: `url(${imageBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        flexWrap: "wrap",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}

    >
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid
          container
          sx={{
            /* paddingTop: "0%", */
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "76%",
            //maxHeight: "50%"
            //minWidth: "350px",
          }}
        >

          <Grid
            item
            md={7}
            sx={{ display: "flex", justifyContent: "center"}}
          >
            <Grid
              item
              md={9}
              sx={{
                opacity: "100%",
                left: "10%",
                right: "10%",
                
                //padding: '10px'
              }}
            >
              <Paper
                sx={{
                  borderRadius: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  borderShadow: "0px 6px 6px -3px #fff, 0px 12px 14px 1px #fff, -2px -4px 16px 15px #fff"
                }}

                style={{
                  backgroundColor: rgbToHex("rgb(255, 255, 255, 0.8)"),
                }}
              >
                
              <Box 
                sx={{
                  backgroundColor: "white", 
                  opacity: "100%",
                  padding: 4, 
                  height: "100%", 
                  borderRadius: 3
                }}
              >

              <Typography 
                variant="h2" 
                align="center" 
                // color='#1976d2' 
                color="black"
                gutterBottom
                fontFamily={'Roboto'}
                fontSize={'30px'}
                lineHeight={'28px'}
                fontWeight={'700'}
                padding={"10px"}
              >
                Hi, welcome back
              </Typography>

              <form
                onSubmit={
                  handleLogin
                } 
                autoComplete="off"
              >
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
                      display="flex"
                      alignItems="center"
                    >
                      {/* <ErrorIcon fontSize="small" style={{ color: 'red', marginRight: '2px' }}/> */}
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
                  md={12}
                  sx={{ marginBottom: '5px', marginTop: '5px', display: "flex", justifyContent: "center" }}
                >
                  <Grid
                    item
                    xs={6}
                    md={6} 
                    paddingLeft='5px'
                    //paddingRight={'5px'}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={check}
                          theme={theme}
                          color="secondary"
                          onClick={handleCheck}
                        />
                      }
                      label={
                        <Typography variant="small" sx={{ textDecoration: 'none', color: 'black', fontSize: '16px' }}>
                          Remember me
                        </Typography>
                      }
                      align="left"
                    />

                  </Grid>

                  <Grid item 
                    xs={6} 
                    md={6}
                    paddingRight='5px'
                    //paddingLeft={'5px'}
                    display='flex' 
                    justifyContent='right'
                  >
                    <Typography 
                      component={Link} to="/recovery" 
                      variant="subtitle1" 
                      sx={{ 
                        textDecoration: 'none', 
                        color: '#1976d2',
                        paddingTop: '8px',
                        /* fontWeight: '500' */
                        fontSize: '16px'
                      }}
                    >
                      Forgot password?{" "}
                    </Typography>
                  </Grid>
                </Grid>

                <Grid
                  item
                  md={12}
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
                      borderRadius: "8px",
                      marginTop: "5px",
                    }}
                  >
                    Login
                  </Button>
                </Grid>
              </form>

              <Grid
                item
                md={12}
                sx={{ ...style, display: "flex", justifyContent: "center", marginBottom: '0px' }}
              >
                <Typography variant="subtitle1" sx={{ textDecoration: 'none', color: 'black' }}>
                  Didn't have an account?{" "}
                  <Typography component={Link} to="/register" variant="subtitle1" sx={{ textDecoration: 'none', color: '#1976d2'}}>
                    Register now
                  </Typography>
                </Typography>
              </Grid>
              
              </Box>
              </Paper>
              
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Snackbar
        open={errorSnackbar}
        autoHideDuration={3000}
        onClose={() => setErrorSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert 
          severity="error"
          onClose={() => setErrorSnackbar(false)}
        >
          {/* {newError.message} */}
          Username of password is incorrect
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default XPage_Login;
