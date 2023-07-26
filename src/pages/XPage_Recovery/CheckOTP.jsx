import React, { useState, useEffect } from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  Container,
  createTheme,
} from "@mui/material";

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

const CheckOTP = (props) => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(10);

  const handleResend = () => {
    setMinutes(0);
    setSeconds(11);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((seconds) => seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes((minutes) => minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds, minutes]);

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: `url(${imageBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
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
            //paddingTop: "10%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "75%",
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

              <Typography 
                variant="h2" 
                align="center" 
                color='#1976d2' 
                gutterBottom
                fontFamily={'Roboto'}
                fontSize={'30px'}
                lineHeight={'28px'}
                fontWeight={'700'}
                padding={"20px"}
              >
                OTP Verification
              </Typography>

              <form
                onSubmit={
                  props.handleSubmit
                } 
              >

                <Grid item xs={12} md={12} sx={{ ...style }}>
                  <TextField
                    fullWidth
                    required
                    label="OTP"
                    type="text"
                    value={props.otp}
                    variant="outlined"
                    InputProps={{

                      style: { borderRadius: "12px" },
                    }}
                    onChange={(e) => {
                      props.onChangeOTP(e.target.value);
                    }}
                  />
                </Grid>

                <Grid
                  item
                  xs={12}
                  sx={{ ...style, display: "flex", justifyContent: "center" }}
                >
                  <Grid
                    item
                    xs={6}
                    md={6} 
                    paddingLeft='5px'
                    align='left'
                    display='flex'
                    justifyContent='left'
                    alignItems='center'
                  >
                    {
                      seconds > 0 || minutes > 0 ? 
                      <Typography variant='p'>
                        Time Remaining: {minutes > 10 ? `0${minutes}` : minutes}:
                        {seconds < 10 ? `0${seconds}` : seconds}
                      </Typography>
                      :
                      <Typography variant='p'>
                        Didn't receive OTP?
                      </Typography>
                    }
                  </Grid>

                  <Grid item 
                    xs={6} 
                    md={6} 
                    paddingRight='5px' 
                    align='right'
                    
                  >
                    <Button
                      variant="text"
                      disabled={seconds >0 || minutes > 0}
                      height='5px'
                      onClick={handleResend}
                      theme={theme}
                      color="secondary"
                    >
                      Resend OTP
                    </Button>
                  </Grid>
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
                      marginTop: "5px",
                    }}
                  >
                    Send
                  </Button>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CheckOTP;
