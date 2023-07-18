import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Link,
  Box,
  Container,
  InputAdornment,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import imageBackground from "../../assets/img/background.jpg";

const style = {
  marginTop: "15px",
  marginBottom: "15px",
};
const XPage_Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
    navigate("/");
  };

  const handleCheck = (event) => {
    console.log(event.target.checked);
  };

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
                Login
              </Typography>
            </Grid>
          </Grid>

          <Grid item md={7} sx={{ display: "flex", justifyContent: "center", alignItems: 'center'}}>
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
                      setEmail(e.target.value);
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={12} sx={{ ...style }}>
                  <TextField
                    fullWidth
                    required
                    label="Password"
                    type="password"
                    value={password}
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
                      setPassword(e.target.value);
                    }}
                  />
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={12}
                  sx={{ ...style, display: "flex", justifyContent: "center" }}
                >
                  <Grid item xs={6} md={6} paddingLeft="5px">
                    <FormControlLabel
                      control={
                        <Checkbox
                          defaultChecked
                          color="primary"
                          onClick={handleCheck}
                        />
                      }
                      label="Remember me"
                      align="left"
                    />
                  </Grid>

                  <Grid item xs={6} md={6} paddingRight="5px">
                    <Link href="/recovery">
                      <Typography paddingTop="8px" align="right">
                        Forgot password ?
                      </Typography>
                    </Link>
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

              <Grid
                item
                xs={12}
                sx={{ ...style, display: "flex", justifyContent: "center" }}
              >
                <Typography variant="small" align="center">
                  Didn't have account?{" "}
                  <Link href="/register">Click here to register</Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default XPage_Login;
