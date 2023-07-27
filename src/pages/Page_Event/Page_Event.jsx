import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Menu, MenuItem } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Pagination from '@mui/material/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import AppPagination from '../../components/AppPagination/index';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

//
const cards1 = [1, 2, 3, 4, 5, 6];
//
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Team 4
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const Page_Event = () => {
  //
  const dispatch = useDispatch();
  const navigate = useNavigate()
  //
  const list = useSelector(state => state.eventList)

  useEffect(()=>{
    console.log('a')
    dispatch({type:'saga/getEventList'})
  },[])
  //
  const handleNavigateClick1 = (id) => {
    navigate(`/event/${id}`)
  }
  //
  const [eventList,setEventList] = useState(null)
  console.log()

  return (
    <>
      <Box sx={{ padding: '24px' }}>

        <Box
          sx=
          {{
            backgroundImage: 'url(https://wallpapersmug.com/download/1366x768/559360/3d-cubes-dark-4k.jpg)',
            height: '300px',
            borderRadius: '10px',
            boxShadow: 5
          }}>
          <Box sx={{ padding: '150px 880px 0px 122px' }}>
            <Typography variant='h3' align='left' color='white'  sx={{ borderBottom: '3px solid grey' }}>
              Event
            </Typography>

          </Box>

          <Box sx={{ padding: '10px 350px 0px 122px' }}>
            <Typography variant='h6' align='left' color='white'  >
              Các sự kiện sôi động sẽ cập nhật liên tục
            </Typography>
          </Box>

        </Box>
      </Box>





      {eventList&& <Container sx={{ py: 8 }} maxWidth="md">
        {/* End hero unit */
         
        }
        <Grid container spacing={4} >
          {eventList.map((card) => (
            <Grid item key={card.EventId} xs={12} sm={6} md={4}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow:10 }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    
                    pt: '58.25%',
                    
                    
                  }}
                  image="https://greenwich.edu.vn/wp-content/uploads/2022/08/Artboard-16-596x400.png"
                />
              
                <CardContent sx={{ flexGrow: 1, boxShadow:5, borderRadius:2 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                  {card.EventName}
                  </Typography>
                  <Box >
                    <Box sx={{padding:'0px 0px 5px 0px'}}>
                    <Typography
                      variant="subtitle2"
                      align="center"
                      color="text.secondary"
                      component="p"
                      sx={{ display: 'flex', justifyContent: 'flex-start', padding: '0px 0px 5px 0px' }}
                    >
                      <PermIdentityIcon></PermIdentityIcon>
                      {card.NumOfJoined}  • July 5th 23
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      align="center"
                      color="#A0522D"


                      sx={{ display: 'flex', justifyContent: 'flex-start', padding: '0px 0px 5px 0px' }}
                    >
                      {card.EventCampus}
                    </Typography>
                    </Box>
                   

                    <Typography>

                      {card.EventDescription}
                    </Typography>
                  </Box>
                  <CardActions sx={{display:'flex',justifyContent:'right'}}>
                  <Button
                  
                  disabled={false}
                  size="small"
                  variant="conatained"
                  onClick={() => handleNavigateClick1(card.EventId)} 
                    
                  >View</Button>
                </CardActions>

                </CardContent>
               
              </Card>
            </Grid>
          ))}
        </Grid>

     
        
      </Container>}

        {list &&<AppPagination data={list} pageSize={6} setChangeList={setEventList}/> } 
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
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

    </>



  )
}

export default Page_Event;