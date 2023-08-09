import { Typography, Box, Link, Container, Grid } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import cleanStore from "../../utils/cleanStore";
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
// jhhahahaha
const Footer = () => {
  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));
  const eventFooter = useSelector((state) => state.eventFooter);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch({ type: "eventSaga/getEventFooter" });
    return () => {
      dispatch({ type: "eventFooter/setEventFooter", payload: null });
    }
  }, []);
  const handleNavigateClick = (id) => {
    navigate(`/event/${id}`);
  };
  return (
    eventFooter && <>
      <Box sx={{ bgcolor: "#222222", color: "white", p: isSm ? 6 : 0 }}>
        <Container>
          <Grid container spacing={3}>
            <Grid item md={5} xs={12} >
              <Box sx={{ padding: "24px 0px 0px 30px" }}>
                <Typography
                  variant="h4"
                  align="center"
                  color="#FFFFFF"
                  component="p"
                  sx={{ display: "flex", justifyContent: "flex-start" }}
                >
                  About us
                </Typography>
              </Box>

              <Box sx={{ padding: "15px 0px 0px 30px" }}>
                <Typography
                  variant="body1"
                  color="#C0C0C0"
                  component="p"
                  sx={{ display: "flex", justifyContent: "flex-start" }}
                >
                  Teamwork is the heart of success in any organization. A team is a group of individuals who come together, united by a common goal, to collaborate.

                </Typography>
              </Box>
              <Box sx={{ padding: "15px 0px 0px 30px" }}>
                <Link color="#FF9933" sx={{ cursor: 'pointer' }}>Read more</Link>
              </Box>
              <Box sx={{ padding: "15px 0px 0px 30px" }}>
                {isSm ?
                  // <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d489.9388456390998!2d106.65759870694123!3d10.772137569304396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec3c161a3fb%3A0xef77cd47a1cc691e!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBCw6FjaCBraG9hIC0gxJDhuqFpIGjhu41jIFF14buRYyBnaWEgVFAuSENN!5e0!3m2!1svi!2s!4v1690777122848!5m2!1svi!2s"
                  //   width="430"
                  //   height="350"
                  //   style={{ border: 0 }}
                  //   // allowfullscreen=""
                  //   loading="lazy"
                  // // referrerpolicy="no-referrer-when-downgrade"
                  // ></iframe>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2263.6149350810506!2d106.79675591495992!3d10.850824773456436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527374c43baad%3A0xb8b244d75d12213e!2zRlBUIFNvZnR3YXJlIEjhu5MgQ2jDrSBNaW5o!5e0!3m2!1sen!2s!4v1691310552331!5m2!1sen!2s"
                    width="430"
                    height="350"
                    style={{
                      border: 0
                    }}
                    // allowfullscreen=""
                    loading="lazy"
                  // referrerpolicy="no-referrer-when-downgrade"
                  ></iframe> : null}
              </Box>
            </Grid>
            <Grid item md={3} xs={12} >
              <Box sx={{ padding: "24px 30px 0px 30px" }}>
                <Typography
                  variant="h4"
                  align="center"
                  color="#FFFFFF"
                  component="p"
                  sx={{ display: "flex", justifyContent: "flex-start" }}
                >
                  Navigation
                </Typography>
                <Typography
                  variant="h6"
                  align="center"
                  color="#FF9933"
                  component="p"
                  sx={{ display: "flex", justifyContent: "flex-start", cursor: 'pointer' }}
                  mt={2}
                  onClick={() => navigate('/home')}
                >
                  • Home
                </Typography>
                <Typography
                  variant="h6"
                  align="center"
                  color="#FF9933"
                  component="p"
                  sx={{ display: "flex", justifyContent: "flex-start", cursor: 'pointer' }}
                  mt={2}
                  onClick={() => navigate('/recruitment')}
                >
                  • Recruitment
                </Typography>
                <Typography
                  variant="h6"
                  align="center"
                  color="#FF9933"
                  component="p"
                  sx={{ display: "flex", justifyContent: "flex-start", cursor: 'pointer' }}
                  mt={2}
                  onClick={() => navigate('/event')}
                >
                  • Event
                </Typography>






              </Box>
            </Grid>
            <Grid item md={4} xs={12} sx={{ cursor: "pointer" }}>
              <Box sx={{ padding: "24px 0px 0px 30px" }}>
                <Typography
                  variant="h4"
                  align="center"
                  color="#FFFFFF"
                  component="p"
                  sx={{ display: "flex", justifyContent: "flex-start" }}
                >
                  Recent Events
                </Typography>
              </Box>
              <Box p='30px 24px 0 24px'>
                {eventFooter.slice(0, 6).map((item, index) => (
                  <Box
                    key={index}
                    onClick={() => handleNavigateClick(item.EventId)}
                    sx={{
                      padding: "0px 0px 24px 0px",

                      cursor: "pointer",
                      display: 'flex'
                    }}
                  >
                    <img
                      src={item.Image}
                      alt=""
                      style={{ width: "50px", height: '50px' }}
                    />
                    <Box sx={{ marginLeft: "16px" }}>

                      <Typography
                        variant="subtitle1"
                        align="left"
                        color="#FFFFFF"
                        component="p"
                        sx={{
                          display: "flex", justifyContent: "flex-start", overFlow: 'hidden',
                          textOverflow: 'ellipsis',
                          // whiteSpace: 'nowrap'
                        }}
                      >
                        {item.EventName}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        align="left"
                        color="#FF9933"
                        component="p"
                        sx={{ display: "flex", justifyContent: "flex-start" }}
                      >
                        {" "} {item.EventDateTime.slice(0, 10)}
                      </Typography>
                      {/* <Typography
                        variant="subtitle1"
                        align="left"
                        color="#FF9933"
                        component="p"
                        sx={{ display: "flex", justifyContent: "flex-start" }}
                      >{item.EventCampus} */}
                      {/* </Typography> */}

                    </Box>
                  </Box>
                ))}</Box>
            </Grid>
          </Grid>

        </Container>
      </Box>
      <Box
        sx={{ bgcolor: "black", color: "white", p: isSm ? 6 : 2 }} component="footer"  >
        <Typography variant="h6" align="center" >
          Team 4
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="white"
          component="p"
        >
          All rights reserved
        </Typography>
        <Copyright />
      </Box>
    </>
  );
};

export default Footer;
