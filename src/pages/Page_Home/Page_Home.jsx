import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Carousel from '../../components/Carousel/Carousel'
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import picture from '../../assets/img/aboutUS.jpg'

//
// import Swiper core and required modules


const cards1 = [1, 2, 3, 4, 5, 6];
const cards2 = [1, 2, 3];
const styleImage = {
  objectFit: ' cover',
  height: '350px'
}


//

//

const defaultTheme = createTheme();
//

//


//footer 
// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Team 4
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const Page_Home = () => {
  //

  //

  const eventList = useSelector(state => state.eventList)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleNavigateClick = (id) => {
    navigate(`/event/${id}`)
  }
  const handleNavigateClick1 = () => {
    navigate('/recruitment')
  }
  React.useEffect(() => {
    dispatch({ type: 'saga/getEventList' })
  }, [])
  console.log(eventList)
  return (
    eventList && <Box>
      <Box sx={{ padding: '24px' }}>
        <Carousel />
      </Box>

      {eventList && <Box sx={{ padding: '24px', borderTop: '1px solid lightgrey' }}>
        <Grid container spacing={3}>
          <Grid item md={4} sx={{ cursor: 'pointer' }}   >


            {eventList.slice(0, 2).map((item, index) => (
              <Box key={index} onClick={() => handleNavigateClick(item.EventId)}
                sx={{ padding: '0px 16px 0px 0px', borderRight: '1px solid lightgrey', cursor: 'pointer' }}>

                <img src="https://cdn.vietnambiz.vn/2020/1/15/photo-1579090002241-15790900035601213027614.jpg"
                  alt=""
                  style={{ width: '100%' }}
                />
                <Box sx={{ marginTop: '16px' }}>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                    sx={{ display: 'flex', justifyContent: 'flex-start' }}
                  >
                    {item.EventName} • {item.EventDateTime.slice(0, 10)}
                  </Typography>
                  {item.EventDescription.slice(0, 30)}

                </Box>
              </Box>
            ))}


          </Grid>

          <Grid item md={8} >
            <Grid container >
              <Grid item md={4}

                sx={{ padding: '0px 16px 0px 0px', borderRight: '1px solid lightgrey' }}

              >
                {eventList.slice(2, 5).map((item, index) => (
                  <Box key={index} onClick={() => handleNavigateClick(item.EventId)}
                    sx={{ cursor: 'pointer' }}>
                    <img src="https://www.freecodecamp.org/news/content/images/2022/04/derick-mckinney-oARTWhz1ACc-unsplash.jpg"
                      alt=""
                      style={{ width: '100%' }}
                    />
                    <Typography
                      variant="subtitle2"
                      align="center"
                      color="text.secondary"
                      component="p"
                      sx={{ display: 'flex', justifyContent: 'flex-start' }}
                    >
                      {item.EventName} • {item.EventDateTime.slice(0, 10)}
                    </Typography>
                    {item.EventDescription.slice(0, 30)}

                  </Box>))}



              </Grid>
              <Grid item md={4}
                // onClick={handleNavigateClick}
                sx={{ padding: '0px 16px 0px 16px', cursor: 'pointer' }}

              >
                {eventList.slice(5, 8).map((item, index) => (
                  <Box key={index} onClick={() => handleNavigateClick(item.EventId)}
                    sx={{ cursor: 'pointer' }}>
                    <img src="https://www.freecodecamp.org/news/content/images/2022/04/derick-mckinney-oARTWhz1ACc-unsplash.jpg"
                      alt=""
                      style={{ width: '100%' }}
                    />
                    <Typography
                      variant="subtitle2"
                      align="center"
                      color="text.secondary"
                      component="p"
                      sx={{ display: 'flex', justifyContent: 'flex-start' }}
                    >
                      {item.EventName} • {item.EventDateTime.slice(0, 10)}
                    </Typography>
                    {item.EventDescription.slice(4,30)}

                  </Box>))}



              </Grid>
              <Grid item md={4} xs={12} >
                <Box sx={{
                  border: "1px solid lightgrey"
                }}>
                  <Box
                    component='h3'
                    sx={{

                      // border: '1px solid lightgrey',
                      padding: '20px 10px 20px 10px',
                    }}

                    onClick={handleNavigateClick1} style={{ cursor: 'pointer' }}

                  >

                    Thông tin tuyển dụng

                  </Box>
                  <Box sx={{

                    borderTop: '1px solid lightgrey',
                    // borderRight: '1px solid lightgrey,',
                    padding: '20px 10px 20px 10px'
                  }}>

                    Game Designer
                    <Typography
                      variant="subtitle2"
                      align="center"
                      color="text.secondary"
                      component="p"
                      sx={{ display: 'flex', justifyContent: 'flex-start' }}
                    >
                      C# • Python • Java
                    </Typography>

                  </Box>
                  <Box sx={{ borderTop: '1px solid lightgrey', padding: '20px 10px 20px 10px', margin: 0, }}>

                    Game Writer Contest
                    <Typography
                      variant="subtitle2"
                      align="center"
                      color="text.secondary"
                      component="p"
                      sx={{ display: 'flex', justifyContent: 'flex-start' }}
                    >
                      C# • Latex
                    </Typography>


                  </Box>
                  <Box sx={{ borderTop: '1px solid lightgrey', padding: '20px 10px 20px 10px', }}>
                    BackEnd Developer
                    <Typography
                      variant="subtitle2"
                      align="center"
                      color="text.secondary"
                      component="p"
                      sx={{ display: 'flex', justifyContent: 'flex-start' }}
                    >
                      ReacJS • NodeJS
                    </Typography>


                  </Box>
                  <Box sx={{ borderTop: '1px solid lightgrey', padding: '20px 10px 20px 10px', }}>
                    BackEnd Developer

                    <Typography
                      variant="subtitle2"
                      align="center"
                      color="text.secondary"
                      component="p"
                      sx={{ display: 'flex', justifyContent: 'flex-start' }}
                    >
                      ReacJS • NodeJS
                    </Typography>

                  </Box>
                  <Box sx={{ borderTop: '1px solid lightgrey', padding: '20px 10px 20px 10px', }}>
                    FrontEnd Developer

                    <Typography
                      variant="subtitle2"
                      align="center"
                      color="text.secondary"
                      component="p"
                      sx={{ display: 'flex', justifyContent: 'flex-start' }}
                    >
                      ReacJS • NodeJS
                    </Typography>

                  </Box>
                  <Box sx={{ borderTop: '1px solid lightgrey', padding: '20px 10px 20px 10px', }}>
                    BackEnd Developer

                    <Typography
                      variant="subtitle2"
                      align="center"
                      color="text.secondary"
                      component="p"
                      sx={{ display: 'flex', justifyContent: 'flex-start' }}
                    >
                      ReacJS • NodeJS
                    </Typography>

                  </Box>
                  <Box sx={{ borderTop: '1px solid lightgrey', padding: '20px 10px 20px 10px', }}>
                    BackEnd Developer
                    <Typography
                      variant="subtitle2"
                      align="center"
                      color="text.secondary"
                      component="p"
                      sx={{ display: 'flex', justifyContent: 'flex-start' }}
                    >
                      ReacJS • NodeJS
                    </Typography>


                  </Box>
                </Box>

              </Grid>
            </Grid>

          </Grid>
        </Grid>
      </Box>}
      <Box sx={{ padding: '24px', borderTop: '1px solid lightgrey' }} id='AboutUs'>
        <Box sx={{ padding: '0px 0px 30px 0px' }}>
          <Typography align='center' variant='h3'>About us</Typography>

        </Box>
        <Grid container spacing={1} >
          <Grid item md={6}>
            <Box sx={{ padding: '24px 0px 0px 0px' }}>
              <img src={picture}
                alt=""
                style={{ width: '100%' }}

              />
            </Box>
          </Grid>
          <Grid item md={6} id='about'>
            <Box sx={{ padding: '24px 0px 0px 30px' }}>
              <Box sx={{ padding: '0px 0px 0px 30px' }}>
                <Typography
                  variant="subtitle2"
                  align="center"
                  color="text.secondary"
                  component="p"
                  sx={{ display: 'flex', justifyContent: 'flex-start' }}
                >
                  About us
                </Typography>
              </Box>
              <Box sx={{ padding: '0px 0px 0px 30px' }}>
                <Typography
                  variant='h3'
                  component='header'

                >
                  My team
                </Typography>
              </Box>
              <Box sx={{ padding: '15px 0px 0px 30px' }}>
                <Typography
                  variant='body1'
                  color="black"
                  component="p"
                  sx={{ display: 'flex', justifyContent: 'flex-start' }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perspiciatis repellat maxime, adipisci non ipsam at itaque rerum vitae, necessitatibus nulla animi expedita cumque provident inventore? Voluptatum in tempora earum deleniti, culpa odit veniam, ea reiciendis sunt ullam temporibus aut!
                </Typography>
              </Box>
              <Box sx={{ padding: '10px 0px 0px 30px' }}>
                <Typography
                  variant='body1'
                  color="black"
                  component="p"
                  sx={{ display: 'flex', justifyContent: 'flex-start' }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perspiciatis repellat maxime, adipisci non ipsam at itaque rerum vitae, necessitatibus nulla animi expedita cumque provident inventore? Voluptatum in tempora earum deleniti, culpa odit veniam, ea reiciendis sunt ullam temporibus aut!
                </Typography>
              </Box>
            </Box>


          </Grid>
        </Grid>



        <Grid container spacing={1} sx={{ padding: '24px 0px 0px 0px' }}>

          <Grid item md={5.5}>
            <Box sx={{ padding: '24px 0px 0px 0px' }}>
              <Box sx={{ padding: '0px 0px 0px 0px' }}>
                <Typography
                  variant="subtitle2"
                  align="center"
                  color="text.secondary"
                  component="p"
                  sx={{ display: 'flex', justifyContent: 'flex-start' }}
                >
                  Mission & Vision
                </Typography>
              </Box>
              <Box sx={{ padding: '0px 0px 0px 0px' }}>
                <Typography
                  variant='h3'
                  component='header'

                >
                  Mission & Vision
                </Typography>
              </Box>
              <Box sx={{ padding: '15px 0px 0px 0px' }}>
                <Typography
                  variant='body1'
                  color="black"
                  component="p"
                  sx={{ display: 'flex', justifyContent: 'flex-start' }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perspiciatis repellat maxime, adipisci non ipsam at itaque rerum vitae, necessitatibus nulla animi expedita cumque provident inventore? Voluptatum in tempora earum deleniti, culpa odit veniam, ea reiciendis sunt ullam temporibus aut!
                </Typography>
              </Box>
              <Box sx={{ padding: '10px 0px 0px 0px' }}>
                <Typography
                  variant='body1'
                  color="black"
                  component="p"
                  sx={{ display: 'flex', justifyContent: 'flex-start' }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perspiciatis repellat maxime, adipisci non ipsam at itaque rerum vitae, necessitatibus nulla animi expedita cumque provident inventore? Voluptatum in tempora earum deleniti, culpa odit veniam, ea reiciendis sunt ullam temporibus aut!
                </Typography>
              </Box>
            </Box>


          </Grid>
          <Grid item md={6.5}>
            <Box sx={{ padding: '24px 0px 0px 20px' }}>
              <img src="https://cutewallpaper.org/21/image/Image-Dimensions-Monterey-Regional-Airport.jpeg"
                alt=""
                style={{ width: '100%' }}

              />
            </Box>
          </Grid>
        </Grid>

      </Box>
      {/* End footer */}
    </Box>



  )
}

export default Page_Home