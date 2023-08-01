import React from "react";
import { Link } from "react-router-dom"
import {
  Grid,
  TextField,
  Button,
  Typography,
  /* Link, */
  Box,
  Container,
  /* InputAdornment, */
  createTheme,
} from "@mui/material";

import imageBackground from "../../assets/img/background.jpg";
import { alpha } from '@mui/material/styles';
import { MailOutline } from '@mui/icons-material';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

// const style = {
//   marginTop: "15px",
//   marginBottom: "15px",
// };

const theme = createTheme({
  palette: {
      secondary: {
          main: '#000000'
      }
  }
});

const Recovery = (props) => {
  return (
    <Box
            sx={{
                backgroundImage: `url(${imageBackground})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: '100vw',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
        <Container 
            component="main" 
            maxWidth="xs" 
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Box 
                className="form-box" 
                //border={`2px solid ${alpha('#FFFFFF', 0.5)}`}
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    background: 'transparent',
                    border: '2px solid rgba(255, 255, 255, 0.5)',
                    borderRadius: '20px',
                    backdropFilter: 'blur(5px)',
                    backgroundColor: alpha('#FFFFFF', 0.8),
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0px 0px 10px 10px rgba(255, 255, 255, 0.25)',
                }}
            >
                <Box className="from value" 
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingTop: '7.5%',
                        paddingBottom: '7.5%',
                    }}
                >
                    <form
                      onSubmit={props.handleSubmit}
                    >
                        <Typography variant="h2"
                            sx={{
                                fontSize: '3rem',
                                color: 'black',
                                textAlign: 'center',
                                fontWeight: '450',
                                marginBottom: '15px',
                            }}
                        >
                            Reset
                        </Typography>

                        <Grid container spacing={2}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingTop: '0px'
                            }}
                        >

                            <Grid item xs={12} 
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginBottom: '0px',
                                    textAlign: 'center',
                                    marginLeft: '10px',
                                    marginRight: '10px',
                                }}
                            >
                                <Typography variant='h5'>
                                    Enter your email address
                                </Typography>
                            </Grid>

                            <Grid item xs={12} 
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginBottom: '20px',
                                    marginTop: '0px',
                                    paddingTop: '0px'
                                }}
                            >
                                <TextField 
                                    variant='standard'
                                    //required
                                    fullWidth
                                    type='email'
                                    label={<Typography color={"black"}>Email</Typography>}
                                    autoComplete='new-text'
                                    value={props.email}
                                    onChange={props.handleEmailChange}
                                    error={!props.validEmail}
                                    InputProps={{
                                        disableUnderline: true,
                                        endAdornment: 
                                        (<MailOutline 
                                            sx={{
                                                position: 'absolute',
                                                right: '8px',
                                                color: '#000',
                                                fontSize: '1.2em',
                                            }}
                                        />),
                                        sx: {
                                            color: '#000',
                                        }
                                    }}
                                    sx={{
                                        width: '90%',
                                        height: '50px',
                                        background: 'transparent',
                                        outline: 'none',
                                        fontSize: '1em',
                                        color: '#000',
                                        borderBottom: '2px solid black',
                                        borderBottomWidth: '2px',
                                    }}

                                    helperText={!props.validEmail &&
                                        <Typography
                                            color={"red"}
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'left',
                                                alignItems: 'center',
                                            }}
                                            variant='small'
                                            
                                        >
                                            <ErrorOutlineOutlinedIcon color='red' 
                                            sx={{ fontSize: 13, paddingRight: '0px' }}/>
                                            <Typography variant='small' paddingLeft='3px'>Must be a valid email</Typography>
                                        </Typography>
                                    }
                                />
                            </Grid>

                            

                            <Grid item xs={12}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Button 
                                    type="submit" 
                                    theme={theme}
                                    variant="contained" 
                                    color="secondary"
                                    sx={{
                                        height: '40px',
                                        color: 'white',
                                        borderRadius: '20px',
                                        fontSize: '1em',
                                        fontWeight: 600,
                                        width: '90%',
                                    }}
                                >
                                    Send
                                </Button>
                            </Grid>

                        </Grid>

                        <Grid container justifyContent="center">
                            <Grid item xs={12}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    lineHeight: '15px',
                                    paddingTop: '15px',
                                    fontSize: '.9em',
                                }}
                            >
                                <Typography variant="small" sx={{color: 'black' }}>
                                    <Typography component={Link} to="/login" variant="small" sx={{color: 'black'}}>
                                        Back to sign in
                                    </Typography>
                                </Typography>
                                
                            </Grid>
                        </Grid>
                        
                    </form>
                </Box>
            </Box>
        </Container>
        </Box>
  );
};

export default Recovery;
