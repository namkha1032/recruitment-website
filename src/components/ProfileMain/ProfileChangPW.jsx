import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  Container,
  InputAdornment,
  IconButton,
  createTheme,
  CircularProgress,
} from "@mui/material";

// import { toast } from "react-toastify";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { Snackbar, Alert } from "@mui/material";

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
//import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

const style = {
  marginTop: "15px",
  marginBottom: "15px",
};

const theme = createTheme({
  palette: {
      secondary: {
          main: '#000000'
      }
  }
});

const ProfileChangePW = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorSnackbar, setErrorSnackbar] = useState(false);
  const [errorPasswordSnackbar, setErrorPasswordSnackbar] = useState(false);
  const [messagePassword, setMessagePassword] = useState("")

  const dispatch = useDispatch();

  const newError = useSelector((state) => state.error);

  useEffect(() => {
    if (newError.status === "no") {
      dispatch({ type: "error/setError", payload: { status: "idle", message: "" } })
      navigate("/profile/:profileid");
    }
    if (newError.status === "yes") {
      setErrorSnackbar(true)
      setUsername("")
      setCurrentPassword("")
      setNewPassword("")
      setConfirmPassword("")
      setTimeout(() => {
          setErrorSnackbar(false)
          dispatch({ type: "error/setError", payload: { status: "idle", message: "" } })
      }, 5000)
    }
  }, [newError]);

  const handleClickShowOldPassword = () => {
    setShowOldPassword(!showOldPassword);
  }

  const handleClickShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  }

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentPassword === newPassword) {
      setMessagePassword("New password cannot be same as old password")
      setErrorPasswordSnackbar(true)
      setNewPassword("");
      setConfirmPassword("");
    } else if (newPassword !== confirmPassword) {
      setMessagePassword("Passwords do not match")
      setErrorPasswordSnackbar(true)
      setNewPassword("");
      setConfirmPassword("");
    } else {
      console.log("bao")
      dispatch({ 
        type: "saga/userChangePassword", 
        payload: { username, currentPassword, newPassword, confirmPassword}
      })
    }
  };

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
      }}
    >
      <Container sx={{ display: "flex", flexWrap:"wrap", justifyContent: "center" }}>
      {/* <Box>
      <Typography 
                variant="h3" 
                align="center" 
                // color='#1976d2' 
                color="black"
                gutterBottom
           
                lineHeight={'28px'}
                fontWeight={'700'}
                padding={"20px"}
                m={0}
              >
                Change password
              </Typography></Box> */}
        <Grid
          container
          sx={{
            paddingTop: "10px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
          }}
        >

          <Grid item md={8} sx={{ display: "flex", justifyContent: "center" }}>
            <Grid
              item
              md={9}
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

              <form onSubmit={handleSubmit}>

              <Grid item xs={12} md={12} sx={{ ...style }}>
                <TextField
                  fullWidth
                  //required
                  variant="standard"
                  label={<Typography color={"black"}>Username</Typography>}
                  type="text"
                  value={username}
                  autoComplete='new-usename'
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
                  }}
                  sx={{
                    width: '100%',
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
                  onChange={e => setUsername(e.target.value)}
                  /* error={!validUsername} */
                />
              </Grid>

                <Grid item xs={12} md={12} sx={{ ...style }}>
                  <TextField
                    fullWidth
                    //required
                    variant="standard"
                    label={<Typography color={"black"}>Current Password</Typography>}
                    type={showOldPassword ? "text" : "password"}
                    value={currentPassword}
                    autoComplete='new-currentpassword'
                    InputProps={{
                      disableUnderline: true,
                      endAdornment: (
                      <InputAdornment position="end">
                          <IconButton
                              onClick={handleClickShowOldPassword}
                              onMouseDown={handleMouseDownPassword}
                          >
                              {showOldPassword 
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
                      width: '100%',
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
                    onChange={(e) => {
                      setCurrentPassword(e.target.value);
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={12} sx={{ ...style }}>
                  <TextField
                    fullWidth
                    //required
                    variant="standard"
                    label={<Typography color={"black"}>New Password</Typography>}
                    type={showNewPassword ? "text" : "password"}
                    value={newPassword}
                    autoComplete='new-newpassword'
                    InputProps={{
                      disableUnderline: true,
                      endAdornment: (
                      <InputAdornment position="end">
                          <IconButton
                              onClick={handleClickShowNewPassword}
                              onMouseDown={handleMouseDownPassword}
                          >
                              {showNewPassword 
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
                      width: '100%',
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
                    onChange={(e) => {
                      setNewPassword(e.target.value);
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={12} sx={{ ...style }}>
                  <TextField
                    fullWidth
                    //required
                    variant="standard"
                    label={<Typography color={"black"}>Confirm Password</Typography>}
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    autoComplete='new-confirmpassword'
                    InputProps={{
                      disableUnderline: true,
                      endAdornment: (
                      <InputAdornment position="end">
                          <IconButton
                              onClick={handleClickShowConfirmPassword}
                              onMouseDown={handleMouseDownPassword}
                          >
                              {showConfirmPassword 
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
                      width: '100%',
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
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  />
                </Grid>

                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", justifyContent: "center", marginBottom: '15px', marginTop: '25px' }}
                >
                  <Button
                    type="submit" 
                    theme={theme}
                    variant="contained" 
                    color="secondary"
                    sx={{
                        height: '40px',
                        color: 'white',
                        borderRadius: '20px',
                        fontSize: '1em',
                        fontWeight: 600,
                        width: '100%',

                        //textTransform: "none"
                    }}
                  >
                    change
                  </Button>
                </Grid>
              </form>

              {/* <ToastContainer /> */}
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
          Username or Password is incorrect
        </Alert>
      </Snackbar>

      <Snackbar
        open={errorPasswordSnackbar}
        autoHideDuration={3000}
        onClose={() => setErrorPasswordSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert 
          severity="error"
          onClose={() => setErrorPasswordSnackbar(false)}
        >
          {messagePassword}
        </Alert>
      </Snackbar>
    </Box> 
  );
};

export default ProfileChangePW;
