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
import picture2 from '../../assets/img/team.jpg'
import { AttachMoneyRounded } from '@mui/icons-material';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

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




const Page_Home = () => {
  //

  //

  const eventList = useSelector(state => state.eventList)
  const positionList = useSelector((state) => state.positionList);
  const skill = useSelector((state) => state.skill);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleNavigateClick = (id) => {
    navigate(`/event/${id}`)
  }
  const handleNavigateClick1 = (id) => {
    navigate(`/recruitment/${id}`)
  }
  React.useEffect(() => {
    dispatch({
      type: 'eventSaga/getEventList', payload: {
        token: "hehehe"
      }
    })
  }, [])
  React.useEffect(() => {
    dispatch({
      type: 'positionSaga/getPositionList', payload: {
        token: "hehehe"
      }
    })
    dispatch({
      type: "skillSaga/getSkill", payload: {
        token: "hehehe"
      }
    });
  }, [])
  console.log(eventList)
  return (
    eventList && <Box>
      <Box sx={{ paddingY: '24px', paddingX: "0" }}>
        <Carousel />
      </Box>

      {eventList && <Box sx={{ paddingY: '24px', paddingX: "0", borderTop: '1px solid lightgrey' }}>
        <Grid container spacing={3}>
          <Grid item md={4} sx={{ cursor: 'pointer' }}   >


            {eventList.slice(0, 2).map((item, index) => (
              <Box key={index} onClick={() => handleNavigateClick(item.EventId)}
                sx={{ padding: '0px 16px 0px 0px', borderRight: '1px solid lightgrey', cursor: 'pointer' }}>

                <img src={item.Image}
                  alt=""
                  style={{ width: '100%' }}
                />
                <Box sx={{ marginTop: '16px' }}>
                  <Typography
                    fontWeight="bold"
                  >
                    {item.EventName}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                    sx={{ display: 'flex', justifyContent: 'flex-start' }}
                  >
                    {item.EventDateTime.slice(0, 10)}
                  </Typography>
                  {/* {item.EventDescription.slice(0, 30)} */}

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
                    <img src={item.Image}
                      alt=""
                      style={{ width: '100%' }}
                    />
                    <Typography
                      fontWeight="bold"
                    >
                      {item.EventName}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      align="center"
                      color="text.secondary"
                      component="p"
                      sx={{ display: 'flex', justifyContent: 'flex-start' }}
                    >
                      {item.EventDateTime.slice(0, 10)}
                    </Typography>
                    {/* {item.EventDescription.slice(0, 30)} */}

                  </Box>))}



              </Grid>
              <Grid item md={4}
                // onClick={handleNavigateClick}
                sx={{ padding: '0px 16px 0px 16px', cursor: 'pointer' }}

              >
                {eventList.slice(5, 8).map((item, index) => (

                  <Box key={index} onClick={() => handleNavigateClick(item.EventId)}
                    sx={{ cursor: 'pointer' }}>
                    <img src={item.Image}
                      alt=""
                      style={{ width: '100%' }}
                    />
                    <Typography
                      fontWeight="bold"
                    >
                      {item.EventName}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      align="center"
                      color="text.secondary"
                      component="p"
                      sx={{ display: 'flex', justifyContent: 'flex-start' }}
                    >
                      {item.EventDateTime.slice(0, 10)}
                    </Typography>
                    {/* {item.EventDescription.slice(4,30)} */}

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

                    Recruitment News

                  </Box>

                  {positionList && positionList.slice(0, 4).map((card, index) => (



                    <Box key={index} onClick={() => handleNavigateClick1(card.PositionId)}
                      style={{ cursor: 'pointer' }}
                      sx={{

                        borderTop: '1px solid lightgrey',
                        // borderRight: '1px solid lightgrey,',
                        padding: '20px 10px 20px 10px'
                      }}>
                      <Box marginLeft='3px' marginBottom="5px">
                        <Typography
                          variant="h7"
                          align="left"
                          color="#black"
                          fontWeight='bold'
                          component="p"
                        >
                          {card.PositionName}
                        </Typography>
                      </Box>



                      <Box display="flex">
                        <AttachMoneyRounded fontSize='small' />

                        <Typography
                          variant="subtitle2"
                          align="center"
                          color="text.secondary"
                          component="p"
                          sx={{ display: 'flex', justifyContent: 'flex-start' }}

                        >
                          {card.Salary}
                        </Typography>
                      </Box>

                      <Box display="flex" >
                        <AccessTimeOutlinedIcon fontSize='small' />
                        <Box marginLeft="2px">
                          <Typography
                            variant="subtitle2"
                            align="center"
                            color="text.secondary"
                            component="p"
                            sx={{ display: 'flex', justifyContent: 'flex-start' }}

                          >

                            {card.EndDate.slice(0, 10)}

                          </Typography>
                        </Box>
                      </Box>


                    </Box>

                  ))}

                </Box>

              </Grid>
            </Grid>

          </Grid>
        </Grid>
      </Box>}
      <Box sx={{ paddingY: '24px', paddingX: "0", borderTop: '1px solid lightgrey' }} id='AboutUs'>
        <Box sx={{ padding: '0px 0px 30px 0px' }}>
          <Typography align='center' variant='h2' fontFamily="Arial" fontWeight="bold" >About us</Typography>

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
                  Teamwork is the heart of success in any organization. A team is a group of individuals who come together, united by a common goal, to collaborate and achieve objectives that would be difficult or impossible to accomplish alone. Effective teamwork fosters creativity, harnesses diverse perspectives, and maximizes individual strengths.
                </Typography>
              </Box>
              <Box sx={{ padding: '10px 0px 0px 30px' }}>
                <Typography
                  variant='body1'
                  color="black"
                  component="p"
                  sx={{ display: 'flex', justifyContent: 'flex-start' }}
                >
                  Successful teams celebrate achievements together and learn from failures collectively. They value feedback and continuously seek opportunities for growth and improvement. By fostering a positive and inclusive team culture, organizations can harness the true potential of teamwork and achieve remarkable results.
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
                  The importance of direction for Frontend developers. They need a strong foundation in HTML, CSS, and JavaScript, along with knowledge of modern frameworks like React, Angular, or Vue.js. Continuous learning, problem-solving skills, and adaptability are crucial traits.
                </Typography>
              </Box>
              <Box sx={{ padding: '10px 0px 0px 0px' }}>
                <Typography
                  variant='body1'
                  color="black"
                  component="p"
                  sx={{ display: 'flex', justifyContent: 'flex-start' }}
                >
                  Understanding design principles and effective communication with team members are also highlighted as essential for creating seamless user experiences in the constantly evolving field of Frontend development.
                </Typography>
              </Box>
              <Box sx={{ padding: '15px 0px 0px 0px' }}>
                <Typography
                  variant='body1'
                  color="black"
                  component="p"
                  sx={{ display: 'flex', justifyContent: 'flex-start' }}
                >
                  The importance of direction for Frontend developers. They need a strong foundation in HTML, CSS, and JavaScript, along with knowledge of modern frameworks like React, Angular, or Vue.js. Continuous learning, problem-solving skills, and adaptability are crucial traits.
                </Typography>
              </Box>
            </Box>


          </Grid>
          <Grid item md={6.5}>
            <Box sx={{ padding: '24px 0px 0px 20px', display: "flex", justifyContent: "flex-end" }} >
              <img src={picture2}

                alt=""
                style={{ width: '98%' }}

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