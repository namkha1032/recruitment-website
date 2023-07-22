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
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Menu, MenuItem } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Pagination from '@mui/material/Pagination';

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
  const navigate = useNavigate()
  //

  //
  const handleNavigateClick1 = () => {
    navigate('/event/:eventid')
  }
  return (
    <>
      <Box sx={{ padding: '24px' }}>

        <Box
          sx=
          {{
            backgroundImage: 'url(https://png.pngtree.com/background/20210710/original/pngtree-blue-geometric-flattened-texture-banner-background-picture-image_1012881.jpg)',
            height: '300px',
            borderRadius: '10px',
            boxShadow: 5
          }}>
          <Box sx={{ padding: '150px 880px 0px 110px' }}>
            <Typography variant='h3' align='left' color='black' fontFamily='serif' sx={{ borderBottom: '3px solid #0099FF' }}>
              Event
            </Typography>

          </Box>

          <Box sx={{ padding: '10px 350px 0px 110px' }}>
            <Typography variant='h6' align='left' color='#808080' fontFamily='serif' >
              Các sự kiện sôi động sẽ cập nhật liên tục, hãy theo dõi tin tức sự kiện để có thể đăng kí tham gia.
            </Typography>
          </Box>

        </Box>
      </Box>





      <Container sx={{ py: 8 }} maxWidth="md">
        {/* End hero unit */
          <Box sx={{ padding: '10px 0px 10px 0px', borderTop: '1px solid lightgrey' }}>
            <Typography variant='h4' align="left" fontFamily='serif'>View Event</Typography>
          </Box>
        }
        <Grid container spacing={4} >
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
                  image="https://greenwich.edu.vn/wp-content/uploads/2023/07/CF23web-940x400.png"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Event
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
                      Sport • July 5th 23
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      align="center"
                      color="#A0522D"


                      sx={{ display: 'flex', justifyContent: 'flex-start', padding: '0px 0px 5px 0px' }}
                    >
                      HCM Campus
                    </Typography>
                    </Box>
                   

                    <Typography>

                      [HCM] WorkShop: Motivation at Work
                    </Typography>
                  </Box>

                </CardContent>
                <CardActions >
                  <Button onClick={handleNavigateClick1} size="small">View</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 3 }}>
          <Pagination count={10} variant="outlined" color="primary" />
        </Box>
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

    </>



  )
}

export default Page_Event;