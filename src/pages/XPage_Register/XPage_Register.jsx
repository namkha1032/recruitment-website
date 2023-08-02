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

import imageBackground from "../../assets/img/background.jpg";

// const style = {
//   marginTop: "15px",
//   marginBottom: "15px",
// };

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
      dispatch({
        type: "error/setError",
        payload: { status: "idle", message: "" },
      });
      navigate("/login");
    }
    if (newError.status === "yes") {
      setErrorSnackbar(true);
      setUsername("");
      setEmail("");
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
            width: "100%",
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
          <Stack>
            <Box /* backgroundColor="red" */
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "5px",
              }}
            >
              <ArrowBackIcon />
              <Typography
                // component={Link}
                // to="/home"
                onClick={handleClickHome}
                color="black"
                paddingLeft="2px"
                sx={{
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                Back to home page
              </Typography>
            </Box>
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
                    marginBottom: "10px",
                  }}
                >
                  Sign Up
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
                      marginBottom: "5px",
                    }}
                  >
                    <TextField
                      variant="standard"
                      //required
                      fullWidth
                      type="text"
                      label={<Typography color={"black"}>Fullname</Typography>}
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
                              color: "#000",
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
                        borderBottom: "2px solid black",
                        borderBottomWidth: "2px",
                      }}
                      // helperText={
                      //   !validFullName && (
                      //     <Typography
                      //       color={"red"}
                      //       sx={{
                      //         display: "flex",
                      //         justifyContent: "left",
                      //         alignItems: "center",
                      //       }}
                      //       variant="small"
                      //     >
                      //       <ErrorOutlineOutlinedIcon
                      //         color="red"
                      //         sx={{ fontSize: 13, paddingRight: "0px" }}
                      //       />
                      //       <Typography variant="small" paddingLeft="3px">
                      //         Full name must be at least 2 characters long
                      //       </Typography>
                      //     </Typography>
                      //   )
                      // }
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
                        marginBottom={"3px"}
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
                      marginBottom: "5px",
                    }}
                  >
                    <TextField
                      variant="standard"
                      //required
                      fullWidth
                      type="text"
                      label={<Typography color={"black"}>Username</Typography>}
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
                              color: "#000",
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
                        borderBottom: "2px solid black",
                        borderBottomWidth: "2px",
                      }}
                      // helperText={
                      //   !validUsername && (
                      //     <Typography
                      //       color={"red"}
                      //       sx={{
                      //         display: "flex",
                      //         justifyContent: "left",
                      //         alignItems: "center",
                      //       }}
                      //       variant="small"
                      //     >
                      //       <ErrorOutlineOutlinedIcon
                      //         color="red"
                      //         sx={{ fontSize: 13, paddingRight: "0px" }}
                      //       />
                      //       <Typography variant="small" paddingLeft="3px">
                      //         Username must be 3-20 characters long
                      //       </Typography>
                      //     </Typography>
                      //   )
                      // }
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
                        marginBottom={"3px"}
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
                      marginBottom: "5px",
                    }}
                  >
                    <TextField
                      variant="standard"
                      //required
                      fullWidth
                      type="email"
                      label={<Typography color={"black"}>Email</Typography>}
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
                              color: "#000",
                              fontSize: "1.2em",
                              //top: '20px',
                            }}
                          />
                        ),
                        sx: {
                          color: "#000",
                        },
                        //style: { borderRadius: "12px" },
                      }}
                      sx={{
                        width: "90%",
                        height: "50px",
                        background: "transparent",
                        //border: 'none',
                        outline: "none",
                        fontSize: "1em",
                        //padding: '0 5px 0 5px',
                        color: "#000",
                        borderBottom: "2px solid black",
                        borderBottomWidth: "2px",
                      }}
                      // helperText={
                      //   !validEmail && (
                      //     <Typography
                      //       color={"red"}
                      //       sx={{
                      //         display: "flex",
                      //         justifyContent: "left",
                      //         alignItems: "center",
                      //       }}
                      //       variant="small"
                      //     >
                      //       <ErrorOutlineOutlinedIcon
                      //         //color="black"
                      //         sx={{ fontSize: 13, paddingRight: "0px" }}
                      //       />
                      //       <Typography variant="small" paddingLeft="3px">
                      //         Must be a valid email
                      //       </Typography>
                      //     </Typography>
                      //   )
                      // }
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
                        marginBottom={"3px"}
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
                    }}
                  >
                    <TextField
                      variant="standard"
                      //required
                      fullWidth
                      type={showPassword ? "text" : "password"}
                      label={<Typography color={"black"}>Password</Typography>}
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
                                    color: "#000",
                                    fontSize: "0.9em",
                                    //top: '20px',
                                  }}
                                />
                              ) : (
                                <VisibilityOffOutlinedIcon
                                  sx={{
                                    position: "absolute",
                                    right: "8px",
                                    color: "#000",
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
                        //border: 'none',
                        outline: "none",
                        fontSize: "1em",
                        //padding: '0 5px 0 5px',
                        color: "#fff",
                        borderBottom: "2px solid black",
                        borderBottomWidth: "2px",
                      }}
                      // helperText={
                      //   !validPassword && (
                      //     <Typography
                      //       color={"red"}
                      //       sx={{
                      //         display: "flex",
                      //         justifyContent: "left",
                      //         alignItems: "center",
                      //         //marginBottom: '30px'
                      //       }}
                      //       variant="small"
                      //     >
                      //       <ErrorOutlineOutlinedIcon
                      //         color="red"
                      //         sx={{ fontSize: 13, paddingRight: "0px" }}
                      //       />
                      //       <Typography variant="small" paddingLeft="3px">
                      //         Passwords must be at least 6 characters have at least one uppercase letter, lowercase, digit and special character
                      //       </Typography>
                      //     </Typography>
                      //   )
                      // }
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
                    }}
                  >
                    <Button
                      type="submit"
                      theme={theme}
                      variant="contained"
                      color="secondary"
                      sx={{
                        height: "40px",
                        color: "white",
                        borderRadius: "20px",
                        fontSize: "1em",
                        fontWeight: 600,
                        width: "90%",
                        marginTop: "15px",
                      }}
                    >
                      Sign Up
                    </Button>
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
                        Sign in
                      </Typography>
                    </Typography>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Stack>
        </Box>
      </Container>

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
