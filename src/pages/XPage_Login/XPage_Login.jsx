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
} from "@mui/material";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

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

  return (
    <Box sx={{ backgroundColor: "cornflowerblue", height: "100vh" }}>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid
          container
          sx={{
            paddingTop: "100px",
            display: "flex",
            justifyContent: "center",
            width: "80%",
          }}
        >
          <Grid
            item
            md={5}
            sx={{
              border: "1px solid #000",
              borderRadius: "10px",
              padding: "25px",
              backgroundColor: "white",
            }}
          >
            <Grid item xs={12} display="flex" justifyContent="center">
              <AccountCircleIcon sx={{ fontSize: 60, color: "blue" }} />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h4" align="center">
                Login
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
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Grid>

              <Grid item xs={12} sx={style}>
                <Link href="/recovery">
                  <Typography align="center">Forgot password ?</Typography>
                </Link>
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
                    borderRadius: "5px",
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
      </Container>
    </Box>
  );
};

export default XPage_Login;
