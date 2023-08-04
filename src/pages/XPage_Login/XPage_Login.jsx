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
  /* Link, */
  Stack,
} from "@mui/material";

import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

import { alpha } from "@mui/material/styles";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import imageBackground from "../../assets/img/background.jpg";
//import videoBg from "./nightwall.webm";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from '@mui/icons-material/Home';

import CircularProgress from "@mui/material/CircularProgress";

//import ErrorIcon from '@mui/icons-material/Error';

// const style = {
//   marginTop: "15px",
//   marginBottom: "15px",
// };bg

const theme = createTheme({
  palette: {
    secondary: {
      main: "#000000",
    },
  },
});

const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;

const XPage_Login = () => {
  const navigate = useNavigate();
  // const history = useHistory();
  const [username, setUsername] = useState("");
  const [validUsername, setValidUsername] = useState(true);
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [check, setCheck] = useState(false);
  const [errorSnackbar, setErrorSnackbar] = useState(false);
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();

  const newError = useSelector((state) => state.error);

  useEffect(() => {
    if (newError.status === "no") {
      setLoading(false)
      dispatch({
        type: "error/setError",
        payload: { status: "idle", message: "" },
      });
      const previousPage = sessionStorage.getItem("previousPage") || "/home";
      sessionStorage.removeItem("previousPage");
      navigate(previousPage);

      // navigate("/home");
    }
    if (newError.status === "yes") {
      setLoading(false)
      setErrorSnackbar(true);
      //setUsername("");
      //setPassword("");
      setTimeout(() => {
        setErrorSnackbar(false);
        dispatch({
          type: "error/setError",
          payload: { status: "idle", message: "" },
        });
      }, 5000);
    }
  }, [newError]);

  const handleUsernameChange = (event) => {
    let value = event.target.value;
    setUsername(value);
    if (value == "") {
      setValidUsername(false);
    } else {
      setValidUsername(true);
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
    if (event.target.value == "") {
      setValidPassword(false)
    } else {
      setValidPassword(true)
    }
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (validUsername && (username != "") && validPassword && (password != "")) {
      setLoading(true)
      dispatch({
        type: "saga/userLogin",
        payload: { username, password, check },
      });
      //dispatch({ type: "saga/getUserId", payload: null})
    } else {
      if (!validUsername || (username == "")) {
        setValidUsername(false);
      }
      if (!validPassword || (password == "")) {
        setValidPassword(false);
      }
      //setUsername("");
    }
  };

  const handleClickHome = () => {
    dispatch({
      type: "error/setError",
      payload: { status: "idle", message: "" },
    });
    navigate('/home')
  }

  const handleClickForgot = () => {
    dispatch({
      type: "error/setError",
      payload: { status: "idle", message: "" },
    });
    navigate('/recovery')
  }

  const handleClickSignUp = () => {
    dispatch({
      type: "error/setError",
      payload: { status: "idle", message: "" },
    });
    navigate('/register')
  }

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
        width: "100vw",
        height: "100vh",
        display: "flex",
        //flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack>
      <Box 
        sx={{
          //backgroundColor: 'red',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '5%',
        }}
      >
        <Typography 
          // color="white"
          // fontWeight="300"
          onClick={handleClickHome}
          sx={{
            color: 'white',
            cursor: 'pointer',
            fontWeight: '300',
          }}
        >
          Back to home
        </Typography>
        <HomeIcon 
          onClick={handleClickHome}
          sx={{
            //textDecoration: "none",
            color: 'white',
            cursor: 'pointer',
            marginLeft: '3px'
          }}
        />
      </Box>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "95%",
            height: "100%",
            background: "transparent",
            border: "2px solid rgba(255, 255, 255, 0.5)",
            borderRadius: "20px",
            backdropFilter: "blur(5px)",
            backgroundColor: alpha("#FFFFFF", 0.8),
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 0px 10px 10px rgba(255, 255, 255, 0.25)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "5%",
              paddingBottom: "5%",
            }}
          >
            <form onSubmit={handleLogin}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: "3rem",
                  color: "black",
                  textAlign: "center",
                  fontWeight: "450",
                  //marginBottom: "5px",
                }}
              >
                Sign In
              </Typography>

              <Grid
                container
                //spacing={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "3px",
                    //marginTop: '5px',
                  }}
                >
                  <TextField
                    variant="standard"
                    //required
                    fullWidth
                    type="text"
                    label={validUsername ? <Typography color={"black"}>Username</Typography>
                      : <Typography color={"red"}>Username</Typography>
                      }
                    autoComplete="new-text"
                    value={username}
                    onChange={handleUsernameChange}
                    error={!validUsername}
                    InputProps={{
                      disableUnderline: true,
                      endAdornment: (
                        <AccountCircleOutlinedIcon
                          sx={{
                            position: "absolute",
                            right: "8px",
                            color: validUsername ? "black" : "red",
                            fontSize: "1.2em",
                            //top: '20px',
                          }}
                        />
                      ),
                      sx: {
                        color: "#000",
                      },
                    }}
                    sx={{
                      width: "90%",
                      height: "50px",
                      background: "transparent",
                      outline: "none",
                      fontSize: "1em",
                      color: "#000",
                      borderBottom: validUsername ? "2px solid black" : "2px solid red",
                      borderBottomWidth: "2px",
                    }}
                  />
                </Grid>

                {!validUsername && (
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      justifyContent: "left",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      color={"red"}
                      display={"flex"}
                      marginLeft={"16px"}
                      marginRight={"15px"}
                      //marginBottom={"3px"}
                    >
                      <ErrorOutlineOutlinedIcon
                        //color="red"
                        sx={{
                          fontSize: 15,
                          paddingLeft: "2px",
                          marginTop: "2px",
                        }}
                      />

                      <Typography
                        color="red"
                        fontSize="12px"
                        lineHeight="20px"
                        paddingLeft={"5px"}
                      >
                        Username is required
                      </Typography>
                    </Box>
                  </Grid>
                )}

                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "3px",
                    marginTop: '5px',
                  }}
                >
                  <TextField
                    variant="standard"
                    //required
                    fullWidth
                    type={showPassword ? "text" : "password"}
                    label={validPassword ? <Typography color={"black"}>Password</Typography> : <Typography color={"red"}>Password</Typography>}
                    autoComplete="new-password"
                    value={password}
                    onChange={handlePasswordChange}
                    InputProps={{
                      disableUnderline: true,
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? (
                              <VisibilityOutlinedIcon
                                sx={{
                                  position: "absolute",
                                  right: "8px",
                                  color: validPassword ? 'black' : 'red',
                                  fontSize: "0.9em",
                                  //top: '20px',
                                }}
                              />
                            ) : (
                              <VisibilityOffOutlinedIcon
                                sx={{
                                  position: "absolute",
                                  right: "8px",
                                  color: validPassword ? 'black' : 'red',
                                  fontSize: "0.9em",
                                  //top: '20px',
                                }}
                              />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      width: "90%",
                      height: "50px",
                      background: "transparent",
                      outline: "none",
                      fontSize: "1em",
                      color: "#fff",
                      borderBottom: validPassword ? "2px solid black" : "2px solid red",
                      borderBottomWidth: "2px",
                      marginTop: "3px",
                    }}
                  />
                </Grid>

                {!validPassword && (
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      justifyContent: "left",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      color={"red"}
                      display={"flex"}
                      marginLeft={"16px"}
                      marginRight={"15px"}
                    >
                      <ErrorOutlineOutlinedIcon
                        sx={{
                          fontSize: 15,
                          paddingLeft: "2px",
                          marginTop: "2px",
                        }}
                      />

                      <Typography
                        color="red"
                        fontSize="12px"
                        lineHeight="20px"
                        paddingLeft={"5px"}
                      >
                        Password is required
                      </Typography>
                    </Box>
                  </Grid>
                )}

                <Grid
                  item
                  xs={12}
                  sx={{
                    margin: "15px 20px 15px",
                    fontSize: ".9em",
                    color: "#fff",
                    display: "flex",
                    justifyContent: "space-between",
                    alignContent: "center",
                    textAlign: 'center'
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={check}
                        onClick={handleCheck}
                        //size="small"
                        sx={{
                          color: "black",
                          "&.Mui-checked": {
                            color: "black",
                          },
                          '& .MuiSvgIcon-root': { 
                            fontSize: 18
                          },
                          //fontSize: '1em',
                          height: "8px",
                          width: "8px",
                          marginLeft: "9px",
                        }}
                      />
                    }
                    label={
                      <Typography
                        variant="small"
                        sx={{
                          lineHeight: "15px",
                          marginLeft: "3px",
                        }}
                      >
                        Remember me
                      </Typography>
                    }
                    sx={{
                      color: "#000",
                      textDecoration: "none",
                      display: "flex",
                      justifyContent: "space-between",
                      alignContent: "center",
                      textAlign: "center",
                    }}
                  />
                  <Box sx={{
                    alignContent: 'center',
                    textAlign: 'center'
                  }}>
                  <Typography
                    onClick={handleClickForgot}
                    variant="small"
                    sx={{
                      color: "black",
                      lineHeight: "15px",
                      textDecoration: 'underline',
                      cursor: 'pointer'
                    }}
                  >
                    Forgot password?{" "}
                  </Typography>
                  </Box>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {loading ? <CircularProgress sx={{ color: "black" }} /> :
                    <Button
                      type="submit"
                      theme={theme}
                      variant="contained"
                      color="secondary"
                      sx={{
                        height: "40px",
                        color: "white",
                        borderRadius: "17.5px",
                        fontSize: "1em",
                        fontWeight: 600,
                        width: "90%",
                      }}
                    >
                      Sign in
                    </Button>}
                  {/* <CircularProgress /> */}
                </Grid>
              </Grid>

              <Grid container justifyContent="center">
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    lineHeight: "15px",
                    paddingTop: "15px",
                    fontSize: ".9em",
                  }}
                >
                  <Typography variant="small" sx={{ color: "black" }}>
                    Didn't have an account?{" "}
                    <Typography
                      // component={Link}
                      // to="/register"
                      onClick={handleClickSignUp}
                      variant="small"
                      sx={{ cursor: 'pointer' ,textDecoration: 'underline', color: "black" }}
                    >
                      Sign up
                    </Typography>
                  </Typography>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </Container>
      </Stack>
      <Snackbar
        open={errorSnackbar}
        autoHideDuration={5000}
        onClose={() => setErrorSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="error" onClose={() => setErrorSnackbar(false)}>
          {/* {newError.message} */}
          Username or password is incorrect
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default XPage_Login;
