import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Carousel from 'react-bootstrap/Carousel';
import './Page_Home.scss'
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import styles from './bootstrap.module.css';



const cards1 = [1, 2, 3, 4, 5, 6];
const cards2 = [1, 2, 3];
const styleImage = {
  objectFit: ' cover',
  height: '350px'
}
const styleFont={
  fontFamily:"EB garamond",
  fontWeight:"bold"
}

//

const defaultTheme = createTheme();
//

//footer 
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

const Page_Home = () => {
  const navigate = useNavigate()
  const handleNavigateClick = () => {
    navigate('/event')
  }
  const handleNavigateClick1 = () => {
    navigate('/recruitment')
  }
  return (

    <>
    <main>
      <Box sx={{ padding: '24px' }}>
        <Carousel className="Car1">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://bootstrapmade.com/demo/templates/ZenBlog/assets/img/post-landscape-6.jpg"
              alt="First slide"
              style={styleImage}
            />
            <Carousel.Caption>
              
                <h3><a href='#AboutUs' style={{textDecoration:'none',color:'white'}}>About us</a></h3>
              
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item >
            <img
              className="d-block w-100"
              src="https://bootstrapmade.com/demo/templates/ZenBlog/assets/img/post-landscape-5.jpg"
              alt="Second slide"
              style={{ ...styleImage }}
            />

            <Carousel.Caption>
              <h3 onClick={handleNavigateClick1} style={{cursor:'pointer'}}>Recruitment</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://bootstrapmade.com/demo/templates/ZenBlog/assets/img/post-landscape-1.jpg"
              alt="Third slide"
              style={styleImage}
            />

            <Carousel.Caption>
              <h3 onClick={handleNavigateClick} style={{cursor:'pointer'}}>View event</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Box>
      <Box sx={{ padding: '24px', borderTop:'1px solid lightgrey'}}>
        <Grid container spacing={3}>
          <Grid item md={4}  >
            <Box sx={{ padding: '0px 16px 0px 0px', borderRight: '1px solid lightgrey' }}>
              <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                alt=""
                style={{ width: '100%' }}
              />
              <Box sx={{ marginTop: '16px' }}>
                <Box component='h3'>

                  CULTURE 
                  • JUL 5TH '22
                  11 Work From Home Part-Time Jobs You Can Do Now
                </Box>

                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus exercitationem? Nihil tempore odit ab minus eveniet praesentium, similique blanditiis molestiae ut saepe perspiciatis officia nemo, eos quae cumque. Accusamus fugiat architecto rerum animi atque eveniet, quo, praesentium dignissimos
              </Box>
            </Box>
          </Grid>
          <Grid item md={8}>
            <Grid container>
              <Grid item md={4} sx={{padding: '0px 16px 0px 16px',borderRight: '1px solid lightgrey'}}>
                <Box sx={{ ...styleFont  }}>

                  <img src="https://www.freecodecamp.org/news/content/images/2022/04/derick-mckinney-oARTWhz1ACc-unsplash.jpg"
                    alt=""
                    style={{ width: '100%' }}
                  />

                  Let’s Get Back to Work, New York

                </Box>
                <Box sx={{ ...styleFont   }}>
                  <img src="https://media.istockphoto.com/id/1125911085/photo/female-photographer-taking-a-picture.jpg?s=612x612&w=0&k=20&c=3OP9PJU_KgCyv_cNz-1o3NpdbM4k0WEOalAq-6Q2MXs="
                    alt=""
                    style={{ width: '100%' }}
                  />

                  How to Avoid Distraction and Stay Focused During Video Calls?

                </Box>
                <Box sx={{ ...styleFont   }}>
                  <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                    alt=""
                    style={{ width: '100%' }}
                  />

                  Why Craigslist Tampa Is One of The Most Interesting Places On the Web?

                </Box>
                
              </Grid>
              <Grid item md={4} sx={{padding: '0px 16px 0px 16px',borderRight: '1px solid lightgrey'}}>    
                <Box sx={{ ...styleFont  }}>
                  <img src="https://img.freepik.com/premium-photo/man-hand-lens-with-camera_225446-4203.jpg"
                    alt=""
                    style={{ width: '100%' }}
                  />
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </Box>
                <Box sx={{ ...styleFont   }}>
                  <img src="https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"
                    alt=""
                    style={{ width: '100%' }}
                  />
                  How to Avoid Distraction and Stay Focused During Video Calls?
                  

                </Box>
                <Box sx={{ ...styleFont   }}>
                  <img src="https://cutewallpaper.org/21/image/Image-Dimensions-Monterey-Regional-Airport.jpeg"
                    alt=""
                    style={{ width: '100%' }}
                  />
                  How to Avoid Distraction and Stay Focused During Video Calls?
                 

                </Box>
                
              </Grid>
              <Grid item md={4}>
              <Box sx={{ ...styleFont   }}>
                  Performance Marketing Contest
                  CULTURE • JUL 5TH '22

                </Box>
                <Box xs={{ background: "#c0c0c0c0" }}>
                  
                  Game Designer 
                  CULTURE • JUL 5TH '22

                </Box>
                <Box xs={{ background: "#c0c0c0c0" }}>
                 
                  Game Writer Contest
                  CULTURE • JUL 5TH '22

                </Box>
                <Box xs={{ background: "#c0c0c0c0" }}>
                  BackEnd Developer 

                  CULTURE • JUL 5TH '22

                </Box>
              </Grid>
            </Grid>

          </Grid>
        </Grid>
      </Box>
      <Box sx={{padding:'24px', borderTop: '1px solid lightgrey'}} id='AboutUs'>
      <Box>
        <h1 style={{textAlign:'center', fontFamily:'serif'}}>About us</h1>
      </Box>
      </Box>
      


            {/* <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Home Page
              
            </Typography>
            
            { <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" onClick={handleNavigateClick}>
                
              Sự kiện</Button>
              <Button variant="contained" onClick={handleNavigateClick1}>Thông tin tuyển dụng</Button>
            </Stack> }
          </Container> */}
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
               
   
    </main>
    </>

  )
}

export default Page_Home