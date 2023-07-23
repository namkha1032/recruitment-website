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

//
// import Swiper core and required modules


const cards1 = [1, 2, 3, 4, 5, 6];
const cards2 = [1, 2, 3];
const styleImage = {
  objectFit: ' cover',
  height: '350px'
}
const styleFont = {
  fontFamily: "EB garamond",
  fontWeight: "bold"
}
const styleFontContent = {
  fontFamily: "serif",
  fontWeight: "bold"
}

//

//

const defaultTheme = createTheme();
//

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
  //

  //
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

          <Carousel />
          {/* <Carousel className="Car1">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://bootstrapmade.com/demo/templates/ZenBlog/assets/img/post-landscape-6.jpg"
                alt="First slide"
                style={styleImage}
              />
              <Carousel.Caption>

                <h3><a href='#AboutUs' style={{ textDecoration: 'none', color: 'white' }}>About us</a></h3>

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
                <h3 onClick={handleNavigateClick1} style={{ cursor: 'pointer' }}>Thông tin tuyển dụng</h3>
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
                <h3 onClick={handleNavigateClick} style={{ cursor: 'pointer' }}>Sự kiện</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel> */}
        </Box>

        <Box sx={{ padding: '24px', borderTop: '1px solid lightgrey' }}>
          <Grid container spacing={3}>
            <Grid item md={4}   >


              <Box sx={{ padding: '0px 16px 0px 0px', borderRight: '1px solid lightgrey' }}>
                {/* //<Box component='h3' sx={{ ...styleFont }}> Các sự kiện nổi bật</Box> */}
                <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  alt=""
                  style={{ width: '100%' }}
                />
                <Box sx={{ marginTop: '16px', ...styleFont }}>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                    sx={{ display: 'flex', justifyContent: 'flex-start' }}
                  >
                    CULTURE • JUL 5TH '23
                  </Typography>

                  "Nơi lạnh nhất trên Trái Đất không phải là Bắc Cực, mà là nơi thiếu đi tình thương con người"
                </Box>



              </Box>

              <Box sx={{ padding: '0px 16px 0px 0px', borderRight: '1px solid lightgrey' }}>
                {/* //<Box component='h3' sx={{ ...styleFont }}> Các sự kiện nổi bật</Box> */}
                <img src="https://cdn.vietnambiz.vn/2020/1/15/photo-1579090002241-15790900035601213027614.jpg"
                  alt=""
                  style={{ width: '100%' }}
                />
                <Box sx={{ marginTop: '16px', ...styleFont }}>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                    sx={{ display: 'flex', justifyContent: 'flex-start' }}
                  >
                    CULTURE • JUL 5TH '22
                  </Typography>

                  "Hãy kết nối với nhau để cùng tạo ra cái gì đó to lớn hơn"
                </Box>
              </Box>
            </Grid>

            <Grid item md={8}>
              <Grid container>
                <Grid item md={4} sx={{ padding: '0px 16px 0px 16px', borderRight: '1px solid lightgrey' }}>

                  <Box sx={{ ...styleFont }}>
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
                      Sport • July 5th 23
                    </Typography>
                    Hãy bùng nổ với các trận cầu kinh điển

                  </Box>
                  <Box sx={{ ...styleFont }}>
                    <img src="https://media.istockphoto.com/id/1125911085/photo/female-photographer-taking-a-picture.jpg?s=612x612&w=0&k=20&c=3OP9PJU_KgCyv_cNz-1o3NpdbM4k0WEOalAq-6Q2MXs="
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
                      Soft Skills • July 5th 23
                    </Typography>
                    Tham gia vào câu lạc bộ ngay nào!

                  </Box>
                  <Box sx={{ ...styleFont }}>
                    <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
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
                      Spirit • July 5th 23
                    </Typography>
                    Nơi này sẽ làm mới tâm hồn bạn

                  </Box>

                </Grid>
                <Grid item md={4} sx={{ padding: '0px 16px 0px 16px' }}>
                  <Box sx={{ ...styleFont }}>
                    <img src="https://img.freepik.com/premium-photo/man-hand-lens-with-camera_225446-4203.jpg"
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
                      Code War • July 5th 23
                    </Typography>
                    So trình với các cao thủ VJP nào
                  </Box>
                  <Box sx={{ ...styleFont }}>
                    <img src="https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"
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
                      Singing • July 5th 23
                    </Typography>



                  </Box>
                  <Box sx={{ ...styleFont }}>
                    <img src="https://cutewallpaper.org/21/image/Image-Dimensions-Monterey-Regional-Airport.jpeg"
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
                      Business • July 5th 23
                    </Typography>
                    How to Avoid Distraction and Stay Focused During Video Calls?


                  </Box>

                </Grid>
                <Grid item md={4} >
                  <Box sx={{
                    border: "1px solid lightgrey"
                  }}>
                    <Box
                      component='h3'
                      sx={{
                        ...styleFont,
                        // border: '1px solid lightgrey',
                        padding: '20px 10px 20px 10px',
                      }}

                      onClick={handleNavigateClick1} style={{ cursor: 'pointer' }}

                    >

                      Thông tin tuyển dụng

                    </Box>
                    <Box sx={{
                      ...styleFontContent,
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
                    <Box sx={{ ...styleFontContent, borderTop: '1px solid lightgrey', padding: '20px 10px 20px 10px', margin: 0, }}>

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
                    <Box sx={{ ...styleFontContent, borderTop: '1px solid lightgrey', padding: '20px 10px 20px 10px', }}>
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
                    <Box sx={{ ...styleFontContent, borderTop: '1px solid lightgrey', padding: '20px 10px 20px 10px', }}>
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
                    <Box sx={{ ...styleFontContent, borderTop: '1px solid lightgrey', padding: '20px 10px 20px 10px', }}>
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
                    <Box sx={{ ...styleFontContent, borderTop: '1px solid lightgrey', padding: '20px 10px 20px 10px', }}>
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
                    <Box sx={{ ...styleFontContent, borderTop: '1px solid lightgrey', padding: '20px 10px 20px 10px', }}>
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
        </Box>
        <Box sx={{ padding: '24px', borderTop: '1px solid lightgrey' }} id='AboutUs'>
          <Box sx={{padding:'0px 0px 30px 0px'}}>
            <Typography sx={{ ...styleFont }} align='center' variant='h3'>About us</Typography>

          </Box>
          <Grid container spacing={1} >
            <Grid item md={6}>
              <Box sx={{ padding: '24px 0px 0px 0px' }}>
                <img src="https://ftmm.com.pk/wp-content/uploads/2022/06/our-mission.webp"
                  alt=""
                  style={{ width: '100%' }}

                />
              </Box>
            </Grid>
            <Grid item md={6}>
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