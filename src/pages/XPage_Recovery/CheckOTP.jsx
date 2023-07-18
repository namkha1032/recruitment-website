import React, { useState, useEffect } from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  Container,
} from "@mui/material";

import imageBackground from "../../assets/img/background.jpg";

const style = {
  marginTop: "15px",
  marginBottom: "15px",
};

const CheckOTP = ({ otp, onChangeOTP, handleSubmit }) => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(10);

  const Resend = () => {
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
      }}
    >
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid
          container
          sx={{
            paddingTop: "60px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "80%",
          }}
        >
          <Grid item md={7} padding="20px">
            <Grid item xs={12} display="flex" justifyContent="center">
              <Typography variant="h1" color='white'>
                Recovery
              </Typography>
            </Grid>
          </Grid>

          <Grid item md={7} sx={{ display: "flex", justifyContent: "center" }}>
            <Grid
              item
              md={9}
              sx={{
                borderRadius: "20px",
                padding: "20px",
                paddingTop: "10px",
                paddingBottom: "10px",
                backgroundColor: "white",
                opacity: "100%",
                left: "20%",
                right: "20%",
              }}
            >
              <Grid
                item
                xs={12}
                sx={{ ...style, display: "flex", justifyContent: "center" }}
              >
                <Typography variant="h5" align="center">
                  OTP Verification
                </Typography>
              </Grid>

              <form onSubmit={handleSubmit}>
                <Grid item xs={12} md={12} sx={{ ...style }}>
                  <TextField
                    fullWidth
                    required
                    label="OTP"
                    type="text"
                    value={otp}
                    variant="outlined"
                    InputProps={{
                      style: { borderRadius: "25px" },
                    }}
                    onChange={(e) => {
                      onChangeOTP(e.target.value);
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
                    paddingLeft="5px"
                    align="left"
                    display="flex"
                    justifyContent="left"
                    alignItems="center"
                  >
                    {seconds > 0 || minutes > 0 ? (
                      <Typography variant="p">
                        Time Remaining: {minutes > 10 ? `0${minutes}` : minutes}
                        :{seconds < 10 ? `0${seconds}` : seconds}
                      </Typography>
                    ) : (
                      <Typography variant="p">Didn't receive OTP?</Typography>
                    )}
                  </Grid>

                  <Grid item xs={6} md={6} paddingRight="5px" align="right">
                    <Button
                      variant="text"
                      disabled={seconds > 0 || minutes > 0}
                      height="5px"
                      onClick={Resend}
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
                    variant="contained"
                    type="submit"
                    sx={{
                      height: "40px",
                      width: "100%",
                      borderRadius: "20px",
                      marginTop: "15px",
                    }}
                  >
                    Login
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
