import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
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
  createTheme,
  IconButton,
  Stack,
} from "@mui/material";

import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

import { alpha } from "@mui/material/styles";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { MailOutline } from "@mui/icons-material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from '@mui/icons-material/Home';

import CircularProgress from "@mui/material/CircularProgress";

import imageBackground from "../../assets/img/background.jpg";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#000000",
    },
  },
});

const fullnameRegex = /^[a-zA-Z-' ]{2,}$/;
const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{6,}$/;

const XPage_Register = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false)

  const [validFullName, setValidFullName] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [validUsername, setValidUsername] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);

  const [errorSnackbar, setErrorSnackbar] = useState(false);

  const dispatch = useDispatch();

  const newError = useSelector((state) => state.error);

  useEffect(() => {
    if (newError.status === "no") {
      setLoading(false)
      dispatch({
        type: "error/setError",
        payload: { status: "idle", message: "" },
      });
      navigate("/login");
    }
    if (newError.status === "yes") {
      setLoading(false)
      setErrorSnackbar(true);
      //setUsername("");
      //setEmail("");
      setTimeout(() => {
        setErrorSnackbar(false);
        dispatch({
          type: "error/setError",
          payload: { status: "idle", message: "" },
        });
      }, 5000);
    }
  }, [newError]);

  const handleFullNameChange = (event) => {
    let value = event.target.value;
    setFullName(value);
    if (!fullnameRegex.test(value)) {
      setValidFullName(false);
    } else {
      setValidFullName(true);
    }
  };

  const handleUsernameChange = (event) => {
    let value = event.target.value;
    setUsername(value);
    if (!usernameRegex.test(value)) {
      setValidUsername(false);
    } else {
      setValidUsername(true);
    }
  };

  const handleEmailChange = (event) => {
    let value = event.target.value;
    setEmail(value);
    if (!emailRegex.test(value)) {
      setValidEmail(false);
    } else {
      setValidEmail(true);
    }
  };

  const handlePasswordChange = (event) => {
    let value = event.target.value;
    setPassword(value);
    if (!passwordRegex.test(value)) {
      setValidPassword(false);
    } else {
      setValidPassword(true);
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickHome = () => {
    dispatch({
      type: "error/setError",
      payload: { status: "idle", message: "" },
    });
    navigate("/home");
  };

  const handleClickSignIn = () => {
    dispatch({
      type: "error/setError",
      payload: { status: "idle", message: "" },
    });
    navigate("/login");
  };

  const handleRegister = (event) => {
    event.preventDefault();
    if (
      validFullName &&
      fullName != "" &&
      validUsername &&
      username != "" &&
      validEmail &&
      email != "" &&
      validPassword &&
      password != ""
    ) {
      setLoading(true)
      dispatch({
        type: "saga/userRegister",
        payload: {
          fullNam: fullName,
          username: username,
          email: email,
          password: password,
        },
      });
    } else {
      if (!validFullName || fullName == "") {
        setValidFullName(false);
        setFullName("");
      }
      if (!validUsername || username == "") {
        setValidUsername(false);
        setUsername("");
      }
      if (!validEmail || email == "") {
        setValidEmail(false);
        setEmail("");
      }
      if (!validPassword || password == "") {
        setValidPassword(false);
        setPassword("");
      }
    }
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
            <form onSubmit={handleRegister}>
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
                Register
              </Typography>

              <Grid
                container
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
                    fullWidth
                    type="text"
                    label={validFullName ? <Typography color={"black"}>Fullname</Typography> : <Typography color={"red"}>Fullname</Typography>}
                    autoComplete="new-text"
                    value={fullName}
                    onChange={handleFullNameChange}
                    error={!validFullName}
                    InputProps={{
                      disableUnderline: true,
                      endAdornment: (
                        <AccountCircleOutlinedIcon
                          sx={{
                            position: "absolute",
                            right: "8px",
                            color: validFullName ? "black" : "red",
                            fontSize: "1.2em",
                          }}
                        />
                      ),
                    }}
                    sx={{
                      width: "90%",
                      height: "50px",
                      background: "transparent",
                      outline: "none",
                      fontSize: "1em",
                      color: "#000",
                      borderBottom: validFullName ? "2px solid black" : "2px solid red",
                      borderBottomWidth: "2px",
                    }}
                  />
                </Grid>

                {!validFullName && (
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
                        Full name must be at least 2 characters long
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
                    fullWidth
                    type="text"
                    label={validUsername ? <Typography color={"black"}>Username</Typography> : <Typography color={"red"}>Username</Typography>}
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
                        Username must be 3-20 characters long
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
                    type="email"
                    label={validEmail ? <Typography color={"black"}>Email</Typography> : <Typography color={"red"}>Email</Typography>}
                    autoComplete="new-email"
                    value={email}
                    onChange={handleEmailChange}
                    error={!validEmail}
                    InputProps={{
                      disableUnderline: true,
                      endAdornment: (
                        <MailOutline
                          sx={{
                            position: "absolute",
                            right: "8px",
                            color: validEmail ? "black" : "red",
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
                      borderBottom: validEmail ? "2px solid black" : "2px solid red",
                      borderBottomWidth: "2px",
                    }}
                  />
                </Grid>

                {!validEmail && (
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
                        Must be a valid email
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
                    marginBottom: '3px',
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
                    error={!validPassword}
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
                                  color: validPassword ? "black" : "red",
                                  fontSize: "0.9em",
                                  //top: '20px',
                                }}
                              />
                            ) : (
                              <VisibilityOffOutlinedIcon
                                sx={{
                                  position: "absolute",
                                  right: "8px",
                                  color: validPassword ? "black" : "red",
                                  fontSize: "0.9em",
                                  //top: '20px',
                                }}
                              />
                            )}
                          </IconButton>
                        </InputAdornment>
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
                      color: "#fff",
                      borderBottom: validPassword ? "2px solid black" : "2px solid red",
                      borderBottomWidth: "2px",
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
                        Passwords must be at least 6 characters have at least
                        one uppercase letter, lowercase, digit and special
                        character
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
                    marginTop: '5px'
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
                        borderRadius: "10px",
                        fontSize: "1em",
                        fontWeight: 600,
                        width: "90%",
                        marginTop: "15px",
                      }}
                    >
                      Register
                    </Button>
                  }
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
                    paddingTop: "10px",
                    fontSize: ".9em",
                  }}
                >
                  <Typography variant="small" sx={{ color: "black" }}>
                    Already have account?{" "}
                    <Typography
                      // component={Link}
                      // to="/login"
                      onClick={handleClickSignIn}
                      variant="small"
                      sx={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        color: "black",
                      }}
                    >
                      Log in
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
          Username or email already exists
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default XPage_Register;
