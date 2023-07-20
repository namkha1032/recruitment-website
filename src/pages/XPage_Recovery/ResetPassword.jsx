import React from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  Container,
  InputAdornment,
  createTheme,
} from "@mui/material";

import LockIcon from "@mui/icons-material/Lock";
import imageBackground from "../../assets/img/background.jpg";

const style = {
  marginTop: "15px",
  marginBottom: "15px",
};

const theme = createTheme({
  palette: {
    secondary: {
      main: '#673AB7'
    }
  }
});

const ResetPassword = (props) => {
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
            width: "80%",
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
                color='#673AB7' 
                gutterBottom
                fontFamily={'Roboto'}
                fontSize={'28px'}
                lineHeight={'28px'}
                fontWeight={'700'}
                padding={"20px"}
              >
                Reset password
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
                    label="New Password"
                    type="password"
                    value={props.newPassword}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <LockIcon />
                        </InputAdornment>
                      ),

                      style: { borderRadius: "10px" },
                    }}
                    onChange={(e) => {
                      props.onChangeNewPassword(e.target.value);
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={12} sx={{ ...style }}>
                  <TextField
                    fullWidth
                    required
                    label="Confirm Password"
                    type="password"
                    value={props.confirmPassword}
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <LockIcon />
                        </InputAdornment>
                      ),

                      style: { borderRadius: "10px" },
                    }}
                    onChange={(e) => {
                      props.onChangeConfirmPassword(e.target.value);
                    }}
                  />
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
                      borderRadius: "20px",
                      marginTop: "5px",
                    }}
                  >
                    Reset
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

export default ResetPassword;
