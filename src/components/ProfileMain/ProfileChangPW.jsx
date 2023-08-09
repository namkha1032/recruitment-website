import React, { useState, useEffect } from "react";
import { useNavigate/* , useParams */ } from "react-router-dom";
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

import { Snackbar, Alert } from "@mui/material";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

const theme = createTheme({
  palette: {
    secondary: {
      main: "#000000",
    },
  },
});

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{6,}$/;

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
  const [successSnackbar, setSuccessSnackbar] = useState(false);
  const [messagePassword, setMessagePassword] = useState("");

  const [validUsername, setValidUsername] = useState(true);
  const [validCurrentPassword, setValidCurrentPassword] = useState(true);
  const [validNewPassword, setValidNewPassword] = useState(true);
  const [validConfirmPassword, setValidConfirmPassword] = useState(true);

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const newError = useSelector((state) => state.error);
  const profileId = useSelector((state) => state.user.userid);

  useEffect(() => {
    if (newError.status === "no") {
      setLoading(false);
      setSuccessSnackbar(true);
      setTimeout(() => {
        dispatch({
          type: "error/setError",
          payload: { status: "idle", message: "" },
        });
        navigate(`/profile/${profileId}`);
      }, 1000);
    }
    if (newError.status === "yes") {
      setLoading(false);
      setErrorSnackbar(true);
      setTimeout(() => {
        setErrorSnackbar(false);
        dispatch({
          type: "error/setError",
          payload: { status: "idle", message: "" },
        });
      }, 5000);
    }
  }, [newError, profileId]);

  const handleUsernameChange = (event) => {
    let value = event.target.value;
    setUsername(value);
    if (!value) {
      setValidUsername(false);
    } else {
      setValidUsername(true);
    }
  };

  const handleCurrentPasswordChange = (event) => {
    let value = event.target.value;
    setCurrentPassword(value);
    if (!value) {
      setValidCurrentPassword(false);
    } else {
      setValidCurrentPassword(true);
    }
  };

  const handleNewPasswordChange = (event) => {
    let value = event.target.value;
    setNewPassword(value);
    if (!passwordRegex.test(value)) {
      setValidNewPassword(false);
    } else {
      setValidNewPassword(true);
    }
  };

  const handleConfirmPasswordChange = (event) => {
    let value = event.target.value;
    setConfirmPassword(value);
    if (!value) {
      setValidConfirmPassword(false);
    } else {
      setValidConfirmPassword(true);
    }
  };

  const handleClickShowOldPassword = () => {
    setShowOldPassword(!showOldPassword);
  };

  const handleClickShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      validUsername &&
      username !== "" &&
      validCurrentPassword &&
      currentPassword !== "" &&
      validNewPassword &&
      newPassword !== "" &&
      validConfirmPassword &&
      confirmPassword !== ""
    ) {
      if (confirmPassword !== newPassword) {
        setMessagePassword("Confirm password don't match with new password");
        setErrorPasswordSnackbar(true);
        setConfirmPassword("");
      } else {
        setLoading(true);
        dispatch({
          type: "saga/userChangePassword",
          payload: { username, currentPassword, newPassword, confirmPassword },
        });
      }
    } else {
      if (!validUsername || username === "") {
        setValidUsername(false)
      }
      if (!validCurrentPassword || currentPassword === "") {
        setValidCurrentPassword(false)
      }
      if (!validNewPassword || newPassword === "") {
        setValidNewPassword(false)
      }
      if (!validConfirmPassword || confirmPassword === "") {
        setValidConfirmPassword(false)
      }
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
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
            <form onSubmit={handleSubmit}>

              <Grid
                container
                //spacing={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: "0px",
                }}
              >

                <Grid item
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
                    fullWidth
                    variant="standard"
                    label={
                      validUsername ? (
                        <Typography color={"black"}>Username</Typography>
                      ) : (
                        <Typography color={"red"}>Username</Typography>
                      )
                    }
                    type="text"
                    value={username}
                    autoComplete="new-usename"
                    InputProps={{
                      disableUnderline: true,
                      endAdornment: (
                        <InputAdornment position="end">
                          <AccountCircleOutlinedIcon
                            sx={{
                              position: "absolute",
                              right: "0px",
                              color: validUsername ? "black" : "red",
                              fontSize: "1.2em",
                              //top: '20px',
                            }}
                          />
                        </InputAdornment>
                      ),
                      sx: {
                        color: "#000",
                      },
                    }}
                    sx={{
                      width: "100%",
                      height: "50px",
                      background: "transparent",
                      //border: 'none',
                      outline: "none",
                      fontSize: "1em",
                      //padding: '0 5px 0 5px',
                      color: "#000",
                      borderBottom: validUsername
                        ? "2px solid black"
                        : "2px solid red",
                      borderBottomWidth: "2px",
                    }}
                    onChange={handleUsernameChange}
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
                      //marginLeft={"16px"}
                      //marginRight={"15px"}
                      //marginBottom={"3px"}
                    >
                      <ErrorOutlineOutlinedIcon
                        //color="red"
                        sx={{
                          fontSize: 14,
                          //paddingLeft: "2px",
                          marginTop: "2px",
                        }}
                      />

                      <Typography
                        color="red"
                        fontSize="12px"
                        lineHeight="20px"
                        paddingLeft={"5px"}
                      >
                        Username cannot be empty
                      </Typography>
                    </Box>
                  </Grid>
                )}

                <Grid item
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
                    fullWidth
                    //required
                    variant="standard"
                    label={
                      validCurrentPassword ? (
                        <Typography color={"black"}>
                          Current Password
                        </Typography>
                      ) : (
                        <Typography color={"red"}>Current Password</Typography>
                      )
                    }
                    type={showOldPassword ? "text" : "password"}
                    value={currentPassword}
                    autoComplete="new-currentpassword"
                    InputProps={{
                      disableUnderline: true,
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowOldPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showOldPassword ? (
                              <VisibilityOutlinedIcon
                                sx={{
                                  position: "absolute",
                                  right: "0px",
                                  color: validCurrentPassword ? "black" : "red",
                                  fontSize: "0.9em",
                                  //top: '20px',
                                }}
                              />
                            ) : (
                              <VisibilityOffOutlinedIcon
                                sx={{
                                  position: "absolute",
                                  right: "0px",
                                  color: validCurrentPassword ? "black" : "red",
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
                      width: "100%",
                      height: "50px",
                      background: "transparent",
                      //border: 'none',
                      outline: "none",
                      fontSize: "1em",
                      //padding: '0 5px 0 5px',
                      color: "#fff",
                      borderBottom: validCurrentPassword
                        ? "2px solid black"
                        : "2px solid red",
                      borderBottomWidth: "2px",
                    }}
                    onChange={handleCurrentPasswordChange}
                  />
                </Grid>

                {!validCurrentPassword && (
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
                      // marginLeft={"16px"}
                      // marginRight={"15px"}
                      // marginBottom={"3px"}
                    >
                      <ErrorOutlineOutlinedIcon
                        //color="red"
                        sx={{
                          fontSize: 14,
                          //paddingLeft: "2px",
                          marginTop: "2px",
                        }}
                      />

                      <Typography
                        color="red"
                        fontSize="12px"
                        lineHeight="20px"
                        paddingLeft={"5px"}
                      >
                        Current password cannot be empty
                      </Typography>
                    </Box>
                  </Grid>
                )}

                <Grid item
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
                    fullWidth
                    //required
                    variant="standard"
                    label={
                      validNewPassword ? (
                        <Typography color={"black"}>New Password</Typography>
                      ) : (
                        <Typography color={"red"}>New Password</Typography>
                      )
                    }
                    type={showNewPassword ? "text" : "password"}
                    value={newPassword}
                    autoComplete="new-newpassword"
                    InputProps={{
                      disableUnderline: true,
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowNewPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showNewPassword ? (
                              <VisibilityOutlinedIcon
                                sx={{
                                  position: "absolute",
                                  right: "0px",
                                  color: validNewPassword ? "black" : "red",
                                  fontSize: "0.9em",
                                  //top: '20px',
                                }}
                              />
                            ) : (
                              <VisibilityOffOutlinedIcon
                                sx={{
                                  position: "absolute",
                                  right: "0px",
                                  color: validNewPassword ? "black" : "red",
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
                      width: "100%",
                      height: "50px",
                      background: "transparent",
                      //border: 'none',
                      outline: "none",
                      fontSize: "1em",
                      //padding: '0 5px 0 5px',
                      color: "#fff",
                      borderBottom: validNewPassword
                        ? "2px solid black"
                        : "2px solid red",
                      borderBottomWidth: "2px",
                    }}
                    onChange={handleNewPasswordChange}
                  />
                </Grid>

                {!validNewPassword && (
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
                      // marginLeft={"16px"}
                      // marginRight={"15px"}
                      // marginBottom={"3px"}
                    >
                      <ErrorOutlineOutlinedIcon
                        //color="red"
                        sx={{
                          fontSize: 14,
                          //paddingLeft: "2px",
                          marginTop: "2px",
                        }}
                      />

                      <Typography
                        color="red"
                        fontSize="12px"
                        lineHeight="20px"
                        paddingLeft={"5px"}
                      >
                        New passwords must be at least 6 characters have at
                        least one uppercase letter, lowercase, digit and special
                        character
                      </Typography>
                    </Box>
                  </Grid>
                )}

                <Grid item
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
                    fullWidth
                    //required
                    variant="standard"
                    label={
                      validConfirmPassword ? (
                        <Typography color={"black"}>
                          Confirm Password
                        </Typography>
                      ) : (
                        <Typography color={"red"}>Confirm Password</Typography>
                      )
                    }
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    autoComplete="new-confirmpassword"
                    InputProps={{
                      disableUnderline: true,
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowConfirmPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showConfirmPassword ? (
                              <VisibilityOutlinedIcon
                                sx={{
                                  position: "absolute",
                                  right: "0px",
                                  color: validConfirmPassword ? "black" : "red",
                                  fontSize: "0.9em",
                                  //top: '20px',
                                }}
                              />
                            ) : (
                              <VisibilityOffOutlinedIcon
                                sx={{
                                  position: "absolute",
                                  right: "0px",
                                  color: validConfirmPassword ? "black" : "red",
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
                      width: "100%",
                      height: "50px",
                      background: "transparent",
                      //border: 'none',
                      outline: "none",
                      fontSize: "1em",
                      //padding: '0 5px 0 5px',
                      color: "#fff",
                      borderBottom: validConfirmPassword
                        ? "2px solid black"
                        : "2px solid red",
                      borderBottomWidth: "2px",
                    }}
                    onChange={handleConfirmPasswordChange}
                  />
                </Grid>

                {!validConfirmPassword && (
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
                      // marginLeft={"16px"}
                      // marginRight={"15px"}
                      // marginBottom={"3px"}
                    >
                      <ErrorOutlineOutlinedIcon
                        //color="red"
                        sx={{
                          fontSize: 14,
                          //paddingLeft: "2px",
                          marginTop: "2px",
                        }}
                      />

                      <Typography
                        color="red"
                        fontSize="12px"
                        lineHeight="20px"
                        paddingLeft={"5px"}
                      >
                        Confirm password cannot be empty
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
                    marginTop: '20px'
                  }}
                >
                  {loading ? (
                    <CircularProgress sx={{ color: "black" }} />
                  ) : (
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
                        width: "100%",

                        //textTransform: "none"
                      }}
                    >
                      change
                    </Button>
                  )}
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
        <Alert severity="error" onClose={() => setErrorSnackbar(false)}>
          {/* {newError.message} */}
          Username or Password is incorrect
        </Alert>
      </Snackbar>

      <Snackbar
        open={errorPasswordSnackbar}
        autoHideDuration={5000}
        onClose={() => setErrorPasswordSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="error" onClose={() => setErrorPasswordSnackbar(false)}>
          {messagePassword}
        </Alert>
      </Snackbar>

      <Snackbar
        open={successSnackbar}
        autoHideDuration={1000}
        onClose={() => setSuccessSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="success" onClose={() => setSuccessSnackbar(false)}>
          Password changed successfully
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ProfileChangePW;
