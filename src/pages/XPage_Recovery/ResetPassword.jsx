import React from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  Container,
  InputAdornment,
} from "@mui/material";

import LockIcon from '@mui/icons-material/Lock';
import image from './change_password.png'
import imageBackground from './background.jpg'

const style = {
  marginTop: "15px",
  marginBottom: "15px",
};

const ResetPassword = ({ 
  newPassword, 
  confirmPassword, 
  onChangeNewPassword, 
  onChangeConfirmPassword, 
  handleSubmit 
}) => {

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
          <Grid
            item 
            md={7}
            padding="20px"
          >
            <Grid item xs={12} display="flex" justifyContent="center">
              <img
                src={image}
                alt="login"
                width="25%"
                height="25%"
                loading="eager"
              />
            </Grid>
          </Grid>

          <Grid
            item
            md={7}
            sx={{ display: "flex", justifyContent: "center" }}
          >
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

              <Grid item xs={12} sx={{ ...style, display: 'flex', justifyContent: 'center'}}>
                <Typography variant="h5" align="center">
                  Enter your new password
                </Typography>
              </Grid>

              <form
                onSubmit={
                  handleSubmit
                } 
              >

                <Grid item xs={12} md={12} sx={{ ...style }}>
                  <TextField
                    fullWidth
                    required
                    label="New Password"
                    type="password"
                    value={newPassword}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <LockIcon />
                        </InputAdornment>
                      ),

                      style: { borderRadius: "25px" },
                    }}
                    onChange={(e) => {
                      onChangeNewPassword(e.target.value);
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={12} sx={{ ...style }}>
                  <TextField
                    fullWidth
                    required
                    label="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <LockIcon />
                        </InputAdornment>
                      ),

                      style: { borderRadius: "25px" },
                    }}
                    onChange={(e) => {
                      onChangeConfirmPassword(e.target.value);
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
                    Reset
                  </Button>
                </Grid>
              </form>

            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ResetPassword;

