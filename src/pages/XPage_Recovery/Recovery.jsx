import React from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Link,
  Box,
  Container,
  InputAdornment,
} from "@mui/material";

import imageBackground from "../../assets/img/background.jpg";
import EmailIcon from "@mui/icons-material/Email";

const style = {
  marginTop: "15px",
  marginBottom: "15px",
};

const Recovery = ({ email, onChangeEmail, handleSubmit }) => {
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
                  Enter your email address
                </Typography>
              </Grid>

              <form onSubmit={handleSubmit}>
                <Grid item xs={12} md={12} sx={{ ...style }}>
                  <TextField
                    fullWidth
                    required
                    label="Email"
                    type="email"
                    value={email}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <EmailIcon />
                        </InputAdornment>
                      ),

                      style: { borderRadius: "25px" },
                    }}
                    onChange={(e) => {
                      onChangeEmail(e.target.value);
                    }}
                  />
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
                    Recovery
                  </Button>
                </Grid>
              </form>

              <Grid
                item
                xs={12}
                sx={{ ...style, display: "flex", justifyContent: "center" }}
              >
                <Typography variant="small" align="center">
                  <Link href="/login">Back to login</Link>
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
