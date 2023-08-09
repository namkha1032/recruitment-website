import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
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
  CircularProgress,
  Stack
} from "@mui/material";

import { alpha } from "@mui/material/styles";
import { MailOutline } from "@mui/icons-material";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import HomeIcon from '@mui/icons-material/Home';

import imageBg1 from "../../assets/img/background1.png";
import imageBg2 from "../../assets/img/background2.png";
import imageBg3 from "../../assets/img/background3.png";
// import imageBg4 from "../../assets/img/background4.png";
// import imageBg5 from "../../assets/img/background5.png";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#000000",
    },
  },
});

const images = [imageBg1, imageBg2, imageBg3]

const Recovery = (props) => {
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
                      marginBottom: "5px",
                      textAlign: "center",
                      marginLeft: "10px",
                      marginRight: "10px",
                    }}
                  >
                    <Typography variant="h5">Enter your email address</Typography>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: "5px",
                      marginTop: "0px",
                      paddingTop: "0px",
                    }}
                  >
                    <TextField
                      variant="standard"
                      //required
                      fullWidth
                      type="email"
                      label={props.validEmail ? <Typography color={"black"}>Email</Typography> : <Typography color={"red"}>Email</Typography>}
                      autoComplete="new-text"
                      value={props.email}
                      onChange={props.handleEmailChange}
                      error={!props.validEmail}
                      InputProps={{
                        disableUnderline: true,
                        endAdornment: (
                          <InputAdornment position="end">
                            <MailOutline
                              sx={{
                                position: "absolute",
                                right: "0px",
                                color: props.validEmail ? "#000" : "red",
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
                        borderBottom: props.validEmail ? "2px solid black" : "2px solid red",
                        borderBottomWidth: "2px",
                      }}
                    />
                  </Grid>

                  {!props.validEmail && (
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
                      marginTop: '15px'
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
                        Send
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
                      paddingTop: "15px",
                      fontSize: ".9em",
                    }}
                  >
                    <Typography variant="small" sx={{ color: "black" }}>
                      <Typography
                        // component={Link}
                        // to="/login"
                        onClick={props.handleClickLogin}
                        variant="small"
                        sx={{ 
                          color: "black",
                          cursor: 'pointer',
                          textDecoration: "underline", 
                        }}
                      >
                        Back to sign in
                      </Typography>
                    </Typography>
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

export default Recovery;
