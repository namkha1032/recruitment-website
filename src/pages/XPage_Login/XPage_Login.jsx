import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  Container,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  createTheme,
  IconButton,
  Paper,
  rgbToHex,
} from "@mui/material";

import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

import { alpha } from '@mui/material/styles';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import imageBackground from "../../assets/img/background.jpg";

//import ErrorIcon from '@mui/icons-material/Error';

// const style = {
//   marginTop: "15px",
//   marginBottom: "15px",
// };

const theme = createTheme({
  palette: {
      secondary: {
          main: '#000000'
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
      dispatch({ type: "saga/userLogin", payload: { username, password, check } })
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
                backgroundImage: `url(${imageBackground})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: '100vw',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
        <Container 
            component="main" 
            maxWidth="xs" 
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Box 
                
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    background: 'transparent',
                    border: '2px solid rgba(255, 255, 255, 0.5)',
                    borderRadius: '20px',
                    backdropFilter: 'blur(5px)',
                    backgroundColor: alpha('#FFFFFF', 0.8),
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0px 0px 10px 10px rgba(255, 255, 255, 0.25)',
                }}
            >
                <Box 
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingTop: '7.5%',
                        paddingBottom: '7.5%',
                    }}
                >
                    <form
                      onSubmit={handleLogin}
                    >
                        <Typography variant="h2"
                            sx={{
                                fontSize: '3rem',
                                color: 'black',
                                textAlign: 'center',
                                fontWeight: '450',
                                marginBottom: '15px',
                            }}
                        >
                            Sign In
                        </Typography>

                        <Grid container spacing={2}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Grid item xs={12} 
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginBottom: '5px',
                                }}
                            >
                                <TextField 
                                    variant='standard'
                                    //required
                                    fullWidth
                                    type='text'
                                    label={<Typography color={"black"}>Username</Typography>}
                                    autoComplete='new-text'
                                    value={username}
                                    onChange={handleUsernameChange}
                                    error={!validUsername}
                                    InputProps={{
                                        disableUnderline: true,
                                        endAdornment: 
                                        (<AccountCircleOutlinedIcon
                                            sx={{
                                                position: 'absolute',
                                                right: '8px',
                                                color: '#000',
                                                fontSize: '1.2em',
                                                //top: '20px',
                                            }}
                                        />),
                                        sx: {
                                            color: '#000',
                                        }
                                        //style: { borderRadius: "12px" },
                                    }}
                                    sx={{
                                        width: '90%',
                                        height: '50px',
                                        background: 'transparent',
                                        //border: 'none',
                                        outline: 'none',
                                        fontSize: '1em',
                                        //padding: '0 5px 0 5px',
                                        color: '#000',
                                        borderBottom: '2px solid black',
                                        borderBottomWidth: '2px',
                                    }}

                                    helperText={!validUsername && 
                                        <Typography
                                            color={"red"}
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'left',
                                                alignItems: 'center',
                                            }}
                                            variant='small'
                                            
                                        >
                                            <ErrorOutlineOutlinedIcon color='red' 
                                            sx={{ fontSize: 13, paddingRight: '0px' }}/>
                                            <Typography variant='small' paddingLeft='3px'>Incorrect entry.</Typography>
                                        </Typography>
                                    }
                                />
                            </Grid>

                            <Grid item xs={12}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <TextField 
                                    variant='standard'
                                    //required
                                    fullWidth
                                    type={showPassword ? 'text' : 'password'}
                                    label={<Typography color={"black"}>Password</Typography>}
                                    autoComplete='new-password'
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    InputProps={{
                                        disableUnderline: true,
                                        endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={handleShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {showPassword 
                                                    ? <VisibilityOutlinedIcon 
                                                        sx={{
                                                            position: 'absolute',
                                                            right: '8px',
                                                            color: '#000',
                                                            fontSize: '0.9em',
                                                            //top: '20px',
                                                        }}
                                                    /> 
                                                    : <VisibilityOffOutlinedIcon 
                                                        sx={{
                                                            position: 'absolute',
                                                            right: '8px',
                                                            color: '#000',
                                                            fontSize: '0.9em',
                                                            //top: '20px',
                                                        }}
                                                    />
                                                }
                                            </IconButton>
                                        </InputAdornment>
                                        ),
                                        sx: {
                                            color: '#000',
                                        }
                                    }}
                                    sx={{
                                        width: '90%',
                                        height: '50px',
                                        background: 'transparent',
                                        //border: 'none',
                                        outline: 'none',
                                        fontSize: '1em',
                                        //padding: '0 5px 0 5px',
                                        color: '#fff',
                                        borderBottom: '2px solid black',
                                        borderBottomWidth: '2px',
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12}
                                sx={{
                                    margin: '10px 40px 10px',
                                    fontSize: '.9em',
                                    color: '#fff',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignContent: 'center',
                                }}
                            >
                                <FormControlLabel 
                                    control={
                                        <Checkbox
                                            checked={check}
                                            onClick={handleCheck}
                                            size='small'
                                            sx={{
                                                color: 'black',
                                                '&.Mui-checked': {
                                                    color: 'black',
                                                },
                                                height: '10px',
                                                width: '10px',
                                                //paddingBottom: '2px',
                                            }}
                                        />
                                    } 
                                    label={
                                        <Typography 
                                            variant='small'
                                            sx={{
                                                lineHeight: '15px',
                                                paddingTop: '1px',
                                                marginLeft: '5px',
                                            }}
                                        >
                                            Remember me
                                        </Typography>
                                    } 
                                    sx={{
                                        color: '#000',
                                        textDecoration: 'none',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignContent: 'center',
                                    }}
                                />
                                <Typography 
                                    component={Link} to="/recovery" 
                                    variant="small" 
                                    sx={{ 
                                        // textDecoration: 'none', 
                                        // color: '#1976d2',
                                        // paddingTop: '8px',
                                        /* fontWeight: '500' */
                                        color: 'black',
                                        lineHeight: '15px',
                                        //paddingTop: '1px'
                                    }}
                                >
                                    Forgot password?{" "}
                                </Typography>
                                
                            </Grid>
                            

                            <Grid item xs={12}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Button 
                                    type="submit" 
                                    theme={theme}
                                    variant="contained" 
                                    color="secondary"
                                    sx={{
                                        height: '40px',
                                        color: 'white',
                                        borderRadius: '40px',
                                        fontSize: '1em',
                                        fontWeight: 600,
                                        width: '90%',
                                    }}
                                >
                                    Sign in
                                </Button>
                            </Grid>

                        </Grid>

                        <Grid container justifyContent="center">
                            <Grid item xs={12}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    lineHeight: '15px',
                                    paddingTop: '15px',
                                    fontSize: '.9em',
                                }}
                            >
                                <Typography variant="small" sx={{color: 'black' }}>
                                    Didn't have an account?{" "}
                                    <Typography component={Link} to="/register" variant="small" sx={{ /* textDecoration: 'none',  */color: 'black'}}>
                                        Sign up
                                    </Typography>
                                </Typography>
                                
                            </Grid>
                        </Grid>
                        
                    </form>
                </Box>
            </Box>
        </Container>
        <Snackbar
          open={errorSnackbar}
          autoHideDuration={5000}
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
