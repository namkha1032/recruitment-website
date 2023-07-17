
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
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Menu, MenuItem } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Carousel from 'react-bootstrap/Carousel';
import './Page_Home.scss'
import '../../assets/vendor/swiper/swiper-bundle.min.css'



const cards1 = [1, 2, 3, 4, 5, 6];
const cards2 = [1, 2, 3];

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
  const handleNavigateClick = ()=>{
   navigate('/event')
  }
  const handleNavigateClick1 = ()=>{
    navigate('/recruitment')
   }
    return (
      
      <>
      <Carousel className="Car1">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://bootstrapmade.com/demo/templates/ZenBlog/assets/img/post-landscape-6.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <a>
          <h3>About us</h3>
          </a>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://bootstrapmade.com/demo/templates/ZenBlog/assets/img/post-landscape-5.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 onClick={handleNavigateClick1}>Recruitment</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://bootstrapmade.com/demo/templates/ZenBlog/assets/img/post-landscape-1.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 onClick={handleNavigateClick}>View event</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Grid container spacing={1}>
      
    </Grid>
      
<main>    
        <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      
    
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
           
 
          <Container maxWidth="sm">
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
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */
          <Typography variant='h4' align="left"> View Event</Typography>
          }
          <Grid container spacing={4}>
            {cards1.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '58.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Event
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Typography variant='h4' align="left"> View Recruitment</Typography>
          
          <Grid container spacing={4}>
            {cards2.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '58.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Event
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        
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
    </ThemeProvider>
    </main>
  </>

    )
}

export default Page_Home