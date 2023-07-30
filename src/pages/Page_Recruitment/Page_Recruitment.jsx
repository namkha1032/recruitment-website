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
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
} from "@mui/material";

const cards1 = [1, 2, 3, 4, 5, 6];
const cards2 = [1, 2, 3];
const PageSize = 1;
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
  const [block,setBlock] = useState('none')
  const dispatch = useDispatch();

  const [positionListSelect, setPositionListSelect] = useState(null);
  useEffect(() => {
    setPositionListSelect(positionList);
  }, [positionList]);
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
  }, []);
  const navigate = useNavigate();
  const handleNavigateClick1 = (id) => {
    navigate(`/recruitment/${id}`);
  };
  useEffect(() => {
    dispatch({ type: "saga/getPositionList" });
    // dispatch({ type: "saga/getRequirement" });
    dispatch({ type: "saga/getSkill" });
  }, []);
  const handleCloseSelect = () => {
    setBlock('none')
    setSkillSelect(-1)
    setPositionListSelect(
      positionList
    )
  }
  console.log(positionList)
  const handleChangeSelect = (index) => {
    setSkillSelect(index)
    if(index!==-1){
      setBlock('block')
    const positionSkill = requirement.filter(
      (item) => item.skillId === skill[index].skillId
    );
    const positionRequirement = positionList.filter((item) =>
      positionSkill.filter((item1) => item1.positionId === item.positionId)
        .length === 0
        ? false
        : true
    );
      setPositionListSelect(
      positionRequirement
    )
  }else{
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
        <Grid container spacing={3} p={3}>
        <Grid item md={12} xs={12} textAlign='center' >
        <Box >
          <Box
            sx={{
              backgroundImage:
                "url(https://haycafe.vn/wp-content/uploads/2022/05/Nen-xanh-duong-pastel.jpg)",
              height: "300px",
              borderRadius: "10px",
              boxShadow: 5,
              
            }}
            display='flex' alignItems='center' justifyContent='space-around' 
          >
          <Box>
            <Box >
              
                Recruitment
     
            </Box>

            <Box>
              
                Các sự kiện sôi động sẽ cập nhật liên tục, hãy theo dõi tin tức
                sự kiện để có thể đăng kí tham gia.
      
            </Box>
          </Box>
          </Box>
        </Box>
        </Grid>
        {/* <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            
            <Typography
              component="h1"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Thông tin tuyển dụng
              
            </Typography>
            
        
          </Container>

          
        </Box> */}
        
       
        <Grid item md={9}  xs={12}>
        <Box>
        <Paper sx={{pb:1}}>
        {pList && skill && (
          
          <Box sx={{ p: 3 }}>
            {
              /* End hero unit */
              <Box pb="16px" display="flex" justifyContent="left">
                <FormControl sx={{width:'250px'}} >
                  <InputLabel id="demo-simple-select-label">Skill</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={skillSelect}
                    label="Age"
           
                    onChange={(e) => handleChangeSelect(e.target.value)}
                  >
                    <MenuItem  value={-1}>
                        None
                      </MenuItem>
                    {skill.map((skill, index) => (
                      <MenuItem key={index} value={index}>
                        {skill.skillName}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Button variant="contained" sx={{display:block,ml:1,p:0}} onClick={handleCloseSelect} ><Close fontSize="large" sx={{display:'flex',ml:'12px'}}/></Button>
              </Box>
            }

            <Grid container spacing={2} sx={{ padding: "30px 0px 0px 0px" }}>
              {pList.map((card,index) => (
                <Grid item key={index} md={12} xs={12}>
                  <Box
                    sx={{
                      backgroundColor: "#FFFFFF",
                      borderRadius: "10px",
                      boxShadow: 10,
                    }}
                  >
                    <Grid container>
                      <Grid item md={9} xs={9}>
                        <Box sx={{ margin: "15px", display: "flex" }}>
                          <Box sx={{}}>
                            <img
                              width="100px"
                              height="100px"
                              style={{
                                borderRadius: "4px",
                                backgroundColor: "white",
                              }}
                              src="https://cdn-new.topcv.vn/unsafe/150x/filters:format(webp)/https://static.topcv.vn/company_logos/Mw3rRovTtwYXKesnU1JP9cTxh68pnf4t_1645496968____e7c3098c0e3469c9701cae38cdcc3951.png"
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
                                sx={{ fontWeight: "bold" }}
                              >
                                {card.positionName}{" "}
                              </Typography>
                              
                            </Box>

                            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                              <Box
                                style={{
                                  marginRight: "10px",
                                  marginTop: "10px",
                                  backgroundColor: "cornsilk",
                                  borderRadius: "3px",
                                  padding: "3px",
                                  fontSize: "small",
                                }}
                              >
                               Salary:  {card.salary}
                              </Box>
                              <Box
                                style={{
                                  marginRight: "10px",
                                  marginTop: "10px",
                                  backgroundColor: "cornsilk",
                                  borderRadius: "3px",
                                  padding: "3px",
                                  fontSize: "small",
                                }}
                              >
                               Size {card.maxHiringQty}
                              </Box>
                              <Box
                                style={{
                                  marginRight: "10px",
                                  marginTop: "10px",
                                  backgroundColor: "cornsilk",
                                  borderRadius: "3px",
                                  padding: "3px",
                                  fontSize: "small",
                                }}
                              >
                                {" "}
                                Date: {card.endDate.slice(0,10)}
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid
                        item
                        md={3} xs={3}
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box sx={{ margin: "15px" }}>
                          <Typography align="right"></Typography>
                        </Box>
                        <Box
                          sx={{
                            margin: "15px",
                            display: "flex",
                            justifyContent: "end",
                          }}
                        >
                          <Button
                            onClick={() =>
                              handleNavigateClick1(card.positionId)
                            }
                            variant="contained"
                            size="small"
                          >
                            Chi tiết
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
        </Grid>
        <Grid item md={3} xs={12}>
          <Box  >
          { skill &&  <Paper >
            <Box p={3}>
            
            <Stack >
            <Box display='flex'flexWrap='wrap'  >
              {skill.map((skill,index) => (
                <Box key={index}  m='8px 8px 0 0'>
                  <Chip label={skill.skillName} onClick={() => handleChangeSelect(index)}/>
                </Box>
               
              ))}
              </Box>
            </Stack>
            </Box>
            </Paper>}
          </Box>
        </Grid>
        </Grid>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
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
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
};

export default Page_Recruitment;
