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
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import GigaCardHeader from "../../components/GigaCardHeader/GigaCardHeader"
import GigaCard from "../../components/GigaCard/GigaCard"
import { Favorite, FavoriteBorder, FavoriteOutlined } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import AppPagination from '../../components/AppPagination';
import { TextField } from '@mui/material';


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
    const [like,setLike] = useState(true)
    //const [pList,setPList] = React.useState(null)
    const positionList = useSelector(state => state.positionList)
    const [pList,setPList] =useState(positionList)
    const [search,setSearch] = useState('')
    //
    const dispatch = useDispatch()
    let newList;
    const navigate = useNavigate()  
    const handleNavigateClick1 = (id) => {
      navigate(`/recruitment/${id}`)
    }
    useEffect(()=>{
      console.log('a')
      dispatch({type:'saga/getPositionList'})
    },[])
    return (
        <ThemeProvider theme={defaultTheme}>
      <CssBaseline />

      <main id='recruitment'>
        {/* Hero unit */}
        <Box sx={{ padding: '24px' }}>

          <Box
            sx=
            {{
              backgroundImage: 'url(https://wallpapersmug.com/download/1366x768/16023c/arrows-abstract-4k.jpg)',
              height: '300px',
              borderRadius: '10px',
              boxShadow: 5
            }}>
            <Box sx={{ padding: '150px 880px 0px 122px' }}>
              <Typography variant='h3' align='left' color='white'  sx={{ borderBottom: '3px solid grey' }}>
                Recruitment
              </Typography>

            </Box>

            <Box sx={{ padding: '10px 350px 0px 122px' }}>
              <Typography variant='h6' align='left' color='white' >
                Hãy đăng ký ứng tuyển vào vị trí phù hợp 
              </Typography>
            </Box>

          </Box>
        </Box>
       {pList  &&  <Container sx={{ py: 4 }} maxWidth="md">
          {/* End hero unit */
        
          }
          
          <Grid container spacing={3} sx={{padding:'30px 0px 0px 0px'}}>
            {/* <TextField label='Search' value={search} onChange={(e)=> setSearch(e.target.value)}/> 
            
              {  positionList.filter((temp ) => search.includes(temp.PositionName) )} */}
            
            {pList.map((card) => (
              <Grid item key={card.PositionId} xs={12}>
                  <Box sx={{backgroundColor:'#FFFFFF', borderRadius:'10px', boxShadow:10 } }>
                    <Grid container>
                      <Grid item xs={9}>
                        <Box sx={{margin:'15px',display:'flex'}}>
                          <Box sx={{}}>
                            <img 
                              width='100px'
                              height='100px'
                              style={{borderRadius:'4px',backgroundColor:'white'}}
                              src='https://us.123rf.com/450wm/dxinerz/dxinerz1712/dxinerz171201940/91870601-code-software-programming-icon-vector-image-can-also-be-used-for-data-analytics-suitable-for-web.jpg?ver=6'
                              alt=''
                            /> 
                          </Box>
                          <Box sx={{marginLeft:'15px',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                            <Box>
                            <Typography variant='h6' sx={{fontWeight:'bold'}}>{card.PositionName} </Typography>
                            <Typography> {card.Description}</Typography>
                          </Box>

                          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                            <Box style={{ marginRight: '10px', marginTop: '10px', backgroundColor: '#D3D3D3', borderRadius: '3px', padding: '3px', fontSize: 'small' }}>Đồng Nai</Box>
                            <Box style={{ marginRight: '10px', marginTop: '10px', backgroundColor: '#D3D3D3', borderRadius: '3px', padding: '3px', fontSize: 'small' }}>Còn 24 ngày để ứng tuyển</Box>
                            <Box style={{ marginRight: '10px', marginTop: '10px', backgroundColor: '#D3D3D3', borderRadius: '3px', padding: '3px', fontSize: 'small' }}> Cập nhật 3 phút trước</Box>
                          </Box>

                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <Box sx={{ margin: '15px' }}>
                        <Typography align='right'></Typography>
                      </Box>
                      <Box sx={{ margin: '15px', display: 'flex', justifyContent: 'end' }}>
                        <Button onClick={() => handleNavigateClick1(card.PositionId)} variant='contained' size='small'>View</Button>

                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            ))}
          </Grid>
        
          
          
         
        </Container>}
        {positionList&& <AppPagination setChangeList={setPList} data={positionList} pageSize={5}/>}
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
