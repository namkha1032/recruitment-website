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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Menu, MenuItem } from '@mui/material';
import Avatar from '@mui/material/Avatar';

const Page_Event = () => {
    return (
        <>
        <div style={{width:'100%'}}> 
       
        <Box 
        sx=
        {{
            backgroundImage:'url(https://fo4.garena.vn/wp-content/uploads/2020/11/bg-news.png)', 
            height:'250px', 

        }}>
        
       <Typography variant='h4' align='center'>
        Sự kiện
        </Typography>
      </Box>
        
     
      </div>
        </>
       

    )
}

export default Page_Event;