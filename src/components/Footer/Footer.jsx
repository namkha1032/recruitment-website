import { Typography, Box, Link, Container, Grid } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Team 4
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const Footer = () => {
  const eventList = useSelector((state) => state.eventList);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch({ type: "saga/getEventList" });
  }, []);
  const handleNavigateClick = (id) => {
    navigate(`/event/${id}`);
  };
  console.log(eventList)
  return (
    eventList && <>
      <Box sx={{ bgcolor: "#c0c0c0c0", color: "white", p: 6 }}>
        <Container>
          <Grid container spacing={3}>
            <Grid item md={5} xs={12} >
              <Box sx={{ padding: "24px 0px 0px 30px" }}>
                <Typography
                  variant="h4"
                  align="center"
                  color="text.secondary"
                  component="p"
                  sx={{ display: "flex", justifyContent: "flex-start" }}
                >
                  About us
                </Typography>
              </Box>
              <Box sx={{ padding: "0px 0px 0px 30px" }}>
                <Typography variant="h5" component="header">
                  My team
                </Typography>
              </Box>
              <Box sx={{ padding: "15px 0px 0px 30px" }}>
                <Typography
                  variant="body1"
                  color="black"
                  component="p"
                  sx={{ display: "flex", justifyContent: "flex-start" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Facilis, perspiciatis repellat maxime, adipisci non ipsam at
                  itaque rerum vitae, necessitatibus nulla animi expedita cumque
                  provident inventore? Voluptatum in tempora earum deleniti, culpa
                  odit veniam, ea reiciendis sunt ullam temporibus aut!
                </Typography>
              </Box>
            </Grid>
            <Grid item md={3} xs={12} >
              <Box sx={{ padding: "24px 30px 0px 30px" }}>
                <Typography
                  variant="h4"
                  align="center"
                  color="text.secondary"
                  component="p"
                  sx={{ display: "flex", justifyContent: "flex-start" }}
                >
                  Navigation
                </Typography>
                <Typography
                  variant="h6"
                  align="center"
                  color="text.secondary"
                  component="p"
                  sx={{ display: "flex", justifyContent: "flex-start", cursor: 'pointer' }}
                  mt={2}
                  onClick={() => navigate('/home')}
                >
                  Home
                </Typography>
                <Typography
                  variant="h6"
                  align="center"
                  color="text.secondary"
                  component="p"
                  sx={{ display: "flex", justifyContent: "flex-start", cursor: 'pointer' }}
                  mt={2}
                  onClick={() => navigate('/recruitment')}
                >
                  Recruitment
                </Typography>
                <Typography
                  variant="h6"
                  align="center"
                  color="text.secondary"
                  component="p"
                  sx={{ display: "flex", justifyContent: "flex-start", cursor: 'pointer' }}
                  mt={2}
                  onClick={() => navigate('/event')}
                >
                  Event
                </Typography>






              </Box>
            </Grid>
            <Grid item md={4} xs={12} sx={{ cursor: "pointer" }}>
              <Box p='30px 24px 0 24px'>
                {eventList.slice(0, 4).map((item, index) => (
                  <Box
                    key={index}
                    onClick={() => handleNavigateClick(item.eventId)}
                    sx={{
                      padding: "0px 0px 24px 0px",
                      borderRight: "1px solid lightgrey",
                      cursor: "pointer",
                      display: 'flex'
                    }}
                  >
                    <img
                      src="https://cdn.vietnambiz.vn/2020/1/15/photo-1579090002241-15790900035601213027614.jpg"
                      alt=""
                      style={{ width: "100px", height: '100px' }}
                    />
                    <Box sx={{ marginLeft: "16px" }}>

                      <Typography
                        variant="subtitle1"
                        align="center"
                        color="text.secondary"
                        component="p"
                        sx={{
                          display: "flex", justifyContent: "flex-start", overFlow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {item.eventName}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        align="center"
                        color="text.secondary"
                        component="p"
                        sx={{ display: "flex", justifyContent: "flex-start" }}
                      >
                        {" "}• {item.datetimeEvent.slice(0, 10)}
                      </Typography>

                      {item.description}
                    </Box>
                  </Box>
                ))}</Box>
            </Grid>
          </Grid>

        </Container>
      </Box>
      <Box sx={{ bgcolor: "black", color: "white", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Team 4
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="white"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
    </>
  );
};

export default Footer;
