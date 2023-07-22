import React from "react";
import { Link } from "react-router-dom"
import {
  Grid,
  TextField,
  Button,
  Typography,
  /* Link, */
  Box,
  Container,
  /* InputAdornment, */
  createTheme,
} from "@mui/material";

import imageBackground from "../../assets/img/background.jpg";
/* import EmailIcon from "@mui/icons-material/Email"; */

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

const Recovery = (props) => {
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
            paddingTop: "10%",
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
                fontSize={'28px'}
                lineHeight={'28px'}
                fontWeight={'700'}
                padding={"20px"}
              >
                Recovery
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
                    label="Email"
                    type="email"
                    value={props.email}
                    InputProps={{

                      style: { borderRadius: "12px" },
                    }}
                    onChange={props.handleEmailChange}
                    error={!props.validEmail}
                  />
                  {!props.validEmail && (
                    <Box
                    margin="3px 14px 0px"
                  >
                    {
                      props.email === "" ? (
                        <Typography 
                          color="#f44336"
                          fontSize="12px"
                          lineHeight="20px"
                        >
                        Email is required
                        </Typography>
                      ) : (
                        <Typography color="#f44336"
                        fontSize="12px"
                          lineHeight="20px"
                        >
                        Must be a valid email
                        </Typography>
                      )
                    }
                    
                  </Box>
                  )}
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
                      marginTop: "15px",
                    }}
                  >
                    Recovery
                  </Button>
                </Grid>
              </form>

              <Grid
                item
                xs={12}
                sx={{ ...style, display: "flex", justifyContent: "center" }}
              >
                <Typography component={Link} to="/login" variant="subtitle1" sx={{ textDecoration: 'none', color: '#1976d2' }}>
                  Back to login{" "}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Recovery;
