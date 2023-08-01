import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Divider,
  InputAdornment,
  Menu,
  MenuItem,
  Paper,
  TextField,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Pagination from "@mui/material/Pagination";
import { useDispatch, useSelector } from "react-redux";
import AppPagination from "../../components/AppPagination/index";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { AccountCircle, Search } from "@mui/icons-material";

//
const cards1 = [1, 2, 3, 4, 5, 6];
const pageSize = 6;
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Team 4
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Page_Event = () => {
  //
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //
  const list = useSelector((state) => state.eventList);

  useEffect(() => {
    dispatch({ type: "saga/getEventList" });
  }, []);
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
  }, []);
  //
  const handleNavigateClick1 = (id) => {
    navigate(`/event/${id}`);
  };
  //

  const [eventList, setEventList] = useState(null);
  const [eventListSearch, setEventListSearch] = useState(null);
  useEffect(() => {
    setEventListSearch(list);
  }, [list]);

  const handleSearch = (value) => {
    setEventListSearch(
      value !== ""
        ? list.filter((item) => item.EventName.includes(value))
        : list
    );
  };

  return (
    eventListSearch && (
      <>
        <Box sx={{ padding: "24px" }}>
          <Box
            sx={{
              backgroundImage:
                "url(https://wallpapersmug.com/download/1366x768/2a8ac7/huawei-abstract-stock-orange-silver-metallic-shine.jpg)",
              height: "300px",
              borderRadius: "10px",
              boxShadow: 5,
            }}
          >
            <Box sx={{position:'relative',top:'150px', left:'30px'}}>
            <Box>
              <Typography
                variant="h3"
                align="left"
                color="#FFFFFF"
                fontFamily="Arial"
                sx={{ }}
              >
                Event
              </Typography>
            </Box>

            <Box >
              <Typography
                variant="h6"
                align="left"
                color="#EEEEEE"
                fontFamily="Arial"
              >
                Các sự kiện sôi động sẽ cập nhật liên tục
              </Typography>
            </Box>
            </Box>
          </Box>
        </Box>
        {eventList && (
          <Box p="24px">
            <Paper p="16px">
              <Box sx={{ p: "24px 48px 24px 48px" }}>
                {
                  /* End hero unit */
                  <Box pb="16px" display="flex" justifyContent="right">
                    <TextField
                      label="Search"
                      onChange={(e) => handleSearch(e.target.value)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Search />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>
                }
                <Divider />
                <Grid container spacing={4} mt="auto">
                  {eventList.map((card,index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                      <Card
                        sx={{
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <CardMedia
                          component="div"
                          sx={{
                            // 16:9
                            pt: "58.25%",
                          }}
                          image="https://greenwich.edu.vn/wp-content/uploads/2023/07/CF23web-940x400.png"
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Typography gutterBottom variant="h5" component="h2">
                            {card.EventName}
                          </Typography>
                          <Box>
                            <Box sx={{ padding: "0px 0px 5px 0px" }}>
                              <Typography
                                variant="subtitle2"
                                align="center"
                                color="text.secondary"
                                component="p"
                                sx={{
                                  display: "flex",
                                  justifyContent: "flex-start",
                                  padding: "0px 0px 5px 0px",
                                }}
                              >
                                <PermIdentityIcon></PermIdentityIcon>
                                {card.NumOfJoined} • July 5th 23
                              </Typography>
                              <Typography
                                variant="subtitle1"
                                align="center"
                                color="#A0522D"
                                sx={{
                                  display: "flex",
                                  justifyContent: "flex-start",
                                  padding: "0px 0px 5px 0px",
                                }}
                              >
                                {card.EventCampus}
                              </Typography>
                            </Box>

                            <Typography>{card.EventDescription}</Typography>
                          </Box>
                        </CardContent>
                        <CardActions
                          sx={{ display: "flex", justifyContent: "right" }}
                        >
                          <Button
                            disabled={false}
                            size="small"
                            variant="filled"
                            onClick={() => handleNavigateClick1(card.EventId)}
                          >
                            View
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Paper>
          </Box>
        )}

        {list && (
          <AppPagination
            data={eventListSearch}
            pageSize={pageSize}
            setChangeList={setEventList}
          />
        )}
        {/* Footer */}
        {/* <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
          <Typography variant="h6" align="center" gutterBottom>
            Team 4
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
            Something here to give the footer a purpose!
          </Typography>
          <Copyright />
        </Box> */}
        {/* End footer */}
      </>
    )
  );
};

export default Page_Event;
