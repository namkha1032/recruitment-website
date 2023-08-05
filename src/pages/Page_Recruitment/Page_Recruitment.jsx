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
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Pagination from "@mui/material/Pagination";
import GigaCardHeader from "../../components/GigaCardHeader/GigaCardHeader";
import GigaCard from "../../components/GigaCard/GigaCard";
import {
  Close,
  Delete,
  Favorite,
  FavoriteBorder,
  FavoriteOutlined,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import AppPagination from "../../components/AppPagination";
import {
  Chip,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { GridDeleteIcon } from "@mui/x-data-grid";

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
const cards1 = [1, 2, 3, 4, 5, 6];
const cards2 = [1, 2, 3];
const PageSize = 4;
//

const defaultTheme = createTheme();
//

//footer
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
//
const Page_Recruitment = () => {
  const [like, setLike] = useState(true);
  // const [pList,setPList] = React.useState(null)
  const positionList = useSelector((state) => state.positionList);
  const requirement = useSelector((state) => state.requirement);
  const skill = useSelector((state) => state.skill);
  const [pList, setPList] = useState(positionList);
  const [skillSelect, setSkillSelect] = useState(-1);
  const [block, setBlock] = useState('none')
  const dispatch = useDispatch();
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));

  const [positionListSelect, setPositionListSelect] = useState(null);
  useEffect(() => {
    setPositionListSelect(positionList);
  }, [positionList]);
  // React.useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });

  // }, []);
  const navigate = useNavigate();
  const handleNavigateClick1 = (id) => {
    navigate(`/recruitment/${id}`);
  };
  useEffect(() => {
    dispatch({ type: "positionSaga/getPositionList", payload: { token: "haha" } });
    dispatch({ type: "recruitmentSaga/getRequirement", payload: { token: "haha" } });
    dispatch({ type: "skillSaga/getSkill", payload: { token: "haha" } });
  }, []);
  const handleCloseSelect = () => {
    setBlock('none')
    setSkillSelect(-1)
    setPositionListSelect(
      positionList
    )
  }
  console.log(skill)
  const handleChangeSelect = (index) => {
    setSkillSelect(index)
    if (index !== -1) {
      setBlock('block')
      console.log(positionList)
      const positionSkill = requirement.filter(
        (item) => item.skillId === skill[index].skillId
      );
      console.log(positionSkill)
      const positionRequirement = positionList.filter((item) =>
        positionSkill.filter((item1) => item1.positionId === item.PositionId)
          .length === 0
          ? false
          : true
      );
      setPositionListSelect(
        positionRequirement
      )
    } else {
      setBlock('none')
      setPositionListSelect(
        positionList
      )
    }

  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />

      <main id="recruitment">
        {/* Hero unit */}
        <Grid container spacing={3}>
          <Grid item md={12} xs={12} textAlign='center' >
            <Box >
              <Box
                sx={{
                  backgroundImage:
                    "url(https://wallpapersmug.com/download/1366x768/16023c/arrows-abstract-4k.jpg)",
                  height: "300px",
                  borderRadius: "10px",
                  boxShadow: 5,
                  position: 'relative'
                }}

              >
                <Box sx={{ position: 'relative', top: '150px', left: '30px', width: "80%" }}>
                  <Box >

                    <Typography
                      variant="h3"
                      align="left"
                      color="#EEEEEE"
                      fontFamily="Arial"
                      sx={{}}
                    >
                      Recruitment
                    </Typography>

                  </Box>

                  <Box>

                    <Typography
                      variant="h6"
                      align="left"
                      color="#EEEEEE"
                      fontFamily="Arial"
                      sx={{
                        wordWrap: "break-word"
                      }}
                    >
                      Recruitment information is constantly updated

                    </Typography>

                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>



          <Grid item md={9} xs={12}>
            <Box>
              <Paper sx={{ pb: 1 }}>
                {pList && skill && (

                  <Box sx={{ p: 3 }}>
                    {
                      /* End hero unit */
                      <Box pb="16px" display="flex" justifyContent="left">
                        <FormControl sx={{ width: '250px' }} >
                          <InputLabel id="demo-simple-select-label">Skill</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={skillSelect}
                            label="Age"

                            onChange={(e) => handleChangeSelect(e.target.value)}
                          >
                            <MenuItem value={-1}>
                              None
                            </MenuItem>
                            {skill.map((skill, index) => (
                              <MenuItem key={index} value={index}>
                                {skill.skillName}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                        {/* <Button variant="contained" sx={{ display: block, ml: 2, p: 1 }} onClick={handleCloseSelect} ><Close fontSize="medium" sx={{ display: 'flex', ml: '12px' }} /></Button> */}
                        <IconButton aria-label="delete" sx={{ display: block, ml: 2, p: 1 }} onClick={handleCloseSelect}>
                          <GridDeleteIcon />
                        </IconButton>
                      </Box>
                    }

                    <Grid container spacing={2} sx={{ padding: "30px 0px 0px 0px" }}>
                      {pList.map((card, index) => (
                        <Grid item key={index} md={12} xs={12}>
                          <Box
                            sx={{
                              backgroundColor: "#FFFFFF",
                              borderRadius: "10px",
                              boxShadow: 10,
                            }}
                          >
                            <Grid container>
                              <Grid item md={10} xs={12}>
                                <Box sx={{ margin: "15px", display: "flex" }}>
                                  <Box sx={{}}>
                                    <img
                                      width="100px"
                                      height="100px"
                                      style={{
                                        borderRadius: "4px",
                                        backgroundColor: "white",
                                      }}
                                      src="https://us.123rf.com/450wm/theerakit/theerakit1802/theerakit180200369/95220944-code-icon-on-white-background-in-flat-style.jpg?ver=6c"
                                      alt=""
                                    />
                                  </Box>
                                  <Box
                                    sx={{
                                      marginLeft: "15px",
                                      display: "flex",
                                      flexDirection: "column",
                                      justifyContent: "space-between",
                                    }}
                                  >
                                    <Box>
                                      <Typography
                                        variant="h6"
                                        sx={{ fontWeight: "bold", padding: '8px 0px 0px 0px' }}
                                      >
                                        {card.PositionName}{" "}
                                      </Typography>

                                    </Box>

                                    <Box sx={{ display: "flex", flexWrap: "wrap", padding: '0px 0px 19px 0px' }}>
                                      <Box
                                        style={{
                                          marginRight: "10px",
                                          marginTop: "10px",
                                          backgroundColor: "#DDDDDD",
                                          borderRadius: "3px",
                                          padding: "3px",
                                          fontSize: "small",
                                        }}
                                      >
                                        Salary:  {card.Salary}
                                      </Box>
                                      <Box
                                        style={{
                                          marginRight: "10px",
                                          marginTop: "10px",
                                          backgroundColor: "#DDDDDD",
                                          borderRadius: "3px",
                                          padding: "3px",
                                          fontSize: "small",
                                        }}
                                      >
                                        Size {card.MaxHiringQty}
                                      </Box>
                                      <Box
                                        style={{
                                          marginRight: "10px",
                                          marginTop: "10px",
                                          backgroundColor: "#DDDDDD",
                                          borderRadius: "3px",
                                          padding: "3px",
                                          fontSize: "small",
                                        }}
                                      >
                                        {" "}
                                        Date: {card.EndDate.slice(0, 10)}
                                      </Box>
                                    </Box>
                                  </Box>
                                </Box>
                              </Grid>
                              <Grid
                                item
                                md={2} xs={12} sm={12}
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "flex-end",
                                }}
                              >
                                {/* <Box sx={{ margin: "15px" }}>
                                  <Typography align="right"></Typography>
                                </Box> */}
                                <Box
                                  sx={{
                                    // padding: '30px 0px 0px 0px',
                                    marginX: "15px",
                                    // marginY: isMd ? "34px" : "0px",
                                    marginBottom: isMd ? "34px" : "15px",
                                    display: "flex",
                                    justifyContent: "flex-end",
                                  }}
                                >
                                  <Button
                                    onClick={() =>
                                      handleNavigateClick1(card.PositionId)
                                    }
                                    variant="contained"
                                    size="small"
                                  >
                                    View
                                  </Button>
                                </Box>
                              </Grid>
                            </Grid>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>

                )}
                {positionListSelect && (
                  <AppPagination
                    setChangeList={setPList}
                    data={positionListSelect}
                    pageSize={PageSize}
                  />
                )}
              </Paper>
            </Box>
          </Grid >
          <Grid item md={3} xs={12}>
            <Box  >
              {skill && <Paper >
                <Box p={3}>

                  <Stack >
                    <Box display='flex' flexWrap='wrap'  >
                      {skill.map((skill, index) => (
                        <Box key={index} m='8px 8px 0 0'>
                          <Chip label={skill.skillName} onClick={() => handleChangeSelect(index)} />
                        </Box>

                      ))}
                    </Box>
                  </Stack>
                </Box>
              </Paper>}
            </Box>
          </Grid>
        </Grid >
      </main >
      {/* Footer */}

    </ThemeProvider >
  );
};

export default Page_Recruitment;
