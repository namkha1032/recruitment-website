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
import Pagination from '@mui/material/Pagination';
import { Favorite, FavoriteBorder, FavoriteOutlined } from '@mui/icons-material';


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
//
const Page_Recruitment = () => {
    const [like,setLike] = React.useState(true)

    //
    const navigate = useNavigate()
    const handleNavigateClick1 = () => {
      navigate('/recruitment/id')
    }

    return (
        <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      
    <main id='recruitment'>
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
              Recruitment
              
            </Typography>
        
          </Container>
        </Box>
        <Container sx={{ py: 4 }} maxWidth="md">
          {/* End hero unit */
          <Typography variant='h4' align="left" sx={{marginBottom:'15px'}}> View Recruitment</Typography>
          }
          <Grid container spacing={8}>
            {cards1.map((card) => (
              <Grid item key={card} xs={12}>
                  <Box sx={{backgroundColor:'#99CCFF', borderRadius:'5px', boxShadow:10 } }>
                    <Grid container>
                      <Grid item xs={9}>
                        <Box sx={{margin:'15px',display:'flex'}}>
                          <Box sx={{}}>
                            <img 
                              width='100px'
                              height='100px'
                              style={{borderRadius:'4px',backgroundColor:'white'}}
                              src='https://cdn-new.topcv.vn/unsafe/150x/filters:format(webp)/https://static.topcv.vn/company_logos/Mw3rRovTtwYXKesnU1JP9cTxh68pnf4t_1645496968____e7c3098c0e3469c9701cae38cdcc3951.png'
                              alt=''
                            /> 
                          </Box>
                          <Box sx={{marginLeft:'15px',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                            <Box>
                            <Typography>Lập trình viên FrontEnd </Typography>
                            <Typography>Công Ty TNHH USMART</Typography>
                            </Box>
                            
                            <Box sx={{display:'flex',flexWrap:'wrap'}}>
                              <div style={{marginRight:'10px',marginTop:'10px',backgroundColor:'cornsilk', borderRadius:'3px',padding:'3px',fontSize:'small'}}>Đồng Nai</div>
                              <div style={{marginRight:'10px',marginTop:'10px',backgroundColor:'cornsilk', borderRadius:'3px',padding:'3px',fontSize:'small'}}>Còn 24 ngày để ứng tuyển</div>
                              <div style={{marginRight:'10px',marginTop:'10px',backgroundColor:'cornsilk', borderRadius:'3px',padding:'3px',fontSize:'small'}}> Cập nhật 3 phút trước</div>
                            </Box>

                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={3} sx={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                        <Box sx={{margin:'15px'}}>
                          <Typography align='right'></Typography>
                        </Box>
                        <Box sx={{margin:'15px',display:'flex',justifyContent:'end'}}>
                          <Button onClick={handleNavigateClick1} variant='contained' size='small'>Chi tiết</Button>
                          
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
              </Grid>
            ))}
          </Grid>
        
          <Box sx={{display:'flex', justifyContent:'flex-end', marginTop:3}}> 
          <Pagination count={10} variant="outlined" color="primary"  />
          </Box>
          
         
        </Container>
      </main>
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
    )
}


export default Page_Recruitment