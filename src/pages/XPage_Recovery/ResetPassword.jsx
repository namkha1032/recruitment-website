import React, { useState, useEffect } from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  Container,
  InputAdornment,
  createTheme,
  IconButton,
  CircularProgress,
  Stack
} from "@mui/material";

import { alpha } from "@mui/material/styles";
import PasswordOutlinedIcon from "@mui/icons-material/PasswordOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import HomeIcon from '@mui/icons-material/Home';

import imageBg1 from "../../assets/img/background1.png";
import imageBg2 from "../../assets/img/background2.png";
import imageBg3 from "../../assets/img/background3.png";
// import imageBg4 from "../../assets/img/background4.png";
// import imageBg5 from "../../assets/img/background5.png";

const images = [imageBg1, imageBg2, imageBg3]

const theme = createTheme({
  palette: {
    secondary: {
      main: "#000000",
    },
  },
});

const ResetPassword = (props) => {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if(currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } 
      else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 15000)
    
    return () => clearInterval(intervalId);
  }, [currentIndex])

  const handleClickShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        transition: 'background-image 0.3s ease-in-out',
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
            onClick={props.handleClickHome}
            sx={{
              color: 'white',
              cursor: 'pointer',
              fontWeight: '300',
            }}
          >
            Back to home
          </Typography>
          <HomeIcon 
            onClick={props.handleClickHome}
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
            className="form-box"
            //border={`2px solid ${alpha('#FFFFFF', 0.5)}`}
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
              boxShadow: "0px 0px 7px 7px rgba(255, 255, 255, 0.25)",
            }}
          >
            <Box
              className="from value"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "5%",
                paddingBottom: "5%",
              }}
            >
              <form onSubmit={props.handleSubmit}>
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
                  Reset
                </Typography>

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
                      type="text"
                      label={props.validOTP ? <Typography color={"black"}>OTP Code</Typography> : <Typography color={"red"}>OTP Code</Typography>}
                      autoComplete="new-otp"
                      value={props.otp}
                      onChange={props.handleChangeOTP}
                      InputProps={{
                        disableUnderline: true,
                        endAdornment: (
                          <InputAdornment position="end">
                            <PasswordOutlinedIcon
                              sx={{
                                position: "absolute",
                                right: "0px",
                                color: props.validOTP ? "black" : "red",
                                fontSize: "1.2em",
                              }}
                            />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        width: "90%",
                        height: "50px",
                        background: "transparent",
                        outline: "none",
                        fontSize: "1em",
                        color: "#000",
                        borderBottom: props.validOTP ? "2px solid black" : "2px solid red",
                        borderBottomWidth: "2px",
                      }}
                    />
                  </Grid>

                  {!props.validOTP && (
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
                          // marginBottom={"3px"}
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
                            OTP must have 6 digits
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
                      type={showNewPassword ? "text" : "password"}
                      label={
                          props.validNewPassword ? <Typography color={"black"}>New Password</Typography> : <Typography color={"red"}>New Password</Typography>
                      }
                      autoComplete="new-password"
                      value={props.newPassword}
                      onChange={props.handleNewPasswordChange}
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
                                    color: props.validNewPassword ? "black" : "red",
                                    fontSize: "0.9em",
                                    //top: '20px',
                                  }}
                                />
                              ) : (
                                <VisibilityOffOutlinedIcon
                                  sx={{
                                    position: "absolute",
                                    right: "0px",
                                    color: props.validNewPassword ? "black" : "red",
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
                        borderBottom: props.validNewPassword ? "2px solid black" : "2px solid red",
                        borderBottomWidth: "2px",
                      }}
                    />
                  </Grid>

                  {!props.validNewPassword && (
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
                          // marginBottom={"3px"}
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
                      marginBottom: '3px',
                      marginTop: '5px',
                    }}
                  >
                    <TextField
                      variant="standard"
                      //required
                      fullWidth
                      type={showConfirmPassword ? "text" : "password"}
                      label={ props.validConfirmPassword ? <Typography color={"black"}>Confirm Password</Typography> : <Typography color={"red"}>Confirm Password</Typography>}
                      autoComplete="new-password"
                      value={props.confirmPassword}
                      onChange={props.handleConfirmPasswordChange}
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
                                    color: props.validConfirmPassword ? "black" : "red",
                                    fontSize: "0.9em",
                                    //top: '20px',
                                  }}
                                />
                              ) : (
                                <VisibilityOffOutlinedIcon
                                  sx={{
                                    position: "absolute",
                                    right: "0px",
                                    color: props.validConfirmPassword ? "black" : "red",
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
                        borderBottom: props.validConfirmPassword ? "2px solid black" : "2px solid red",
                        borderBottomWidth: "2px",
                      }}
                    />
                  </Grid>

                  {!props.validConfirmPassword && (
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
                          // marginBottom={"3px"}
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
                            Confirm password is required
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
                    {props.loading ? <CircularProgress sx={{ color: "black" }} /> :
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
                        }}
                      >
                        Reset
                      </Button>
                    }
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Box>
        </Container>

      </Stack>
    </Box>
  );
};

export default ResetPassword;
