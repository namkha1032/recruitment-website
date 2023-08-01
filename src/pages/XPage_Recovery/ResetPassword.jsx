import React from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  Container,
  InputAdornment,
  createTheme,
  IconButton,
} from "@mui/material";

import { alpha } from '@mui/material/styles';
import PasswordOutlinedIcon from '@mui/icons-material/PasswordOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

import imageBackground from "../../assets/img/background.jpg";

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

const ResetPassword = (props) => {

  const [showNewPassword, setShowNewPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handleClickShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  }

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }

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
                      onSubmit={
                        props.handleSubmit
                      }
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
                                    marginBottom: '5px',
                                    marginTop: '0px',
                                    paddingTop: '0px'
                                }}
                            >
                                <TextField 
                                    variant='standard'
                                    //required
                                    fullWidth
                                    type='text'
                                    label={<Typography color={"black"}>OTP Code</Typography>}
                                    autoComplete='new-otp'
                                    value={props.otp}
                                    onChange={props.handleChangeOTP}
                                    InputProps={{
                                        disableUnderline: true,
                                        endAdornment: 
                                        (<PasswordOutlinedIcon
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

                                    /* helperText={
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
                                            <Typography variant='small' paddingLeft='3px'>Incorrect entry.</Typography>
                                        </Typography>
                                    } */
                                />
                            </Grid>

                            <Grid item xs={12}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginBottom: '5px'
                                }}
                            >
                                <TextField 
                                    variant='standard'
                                    //required
                                    fullWidth
                                    type={showNewPassword ? 'text' : 'password'}
                                    label={<Typography color={"black"}>New Password</Typography>}
                                    autoComplete='new-password'
                                    value={props.newPassword}
                                    onChange={props.handleNewPasswordChange}
                                    InputProps={{
                                        disableUnderline: true,
                                        endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={handleClickShowNewPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {showNewPassword 
                                                    ? <VisibilityOutlinedIcon 
                                                        sx={{
                                                            position: 'absolute',
                                                            right: '8px',
                                                            color: '#000',
                                                            fontSize: '0.9em',
                                                            //top: '20px',
                                                        }}
                                                    /> 
                                                    : <VisibilityOffOutlinedIcon 
                                                        sx={{
                                                            position: 'absolute',
                                                            right: '8px',
                                                            color: '#000',
                                                            fontSize: '0.9em',
                                                            //top: '20px',
                                                        }}
                                                    />
                                                }
                                            </IconButton>
                                        </InputAdornment>
                                        ),
                                        sx: {
                                            color: '#000',
                                        }
                                    }}
                                    sx={{
                                        width: '90%',
                                        height: '50px',
                                        background: 'transparent',
                                        //border: 'none',
                                        outline: 'none',
                                        fontSize: '1em',
                                        //padding: '0 5px 0 5px',
                                        color: '#fff',
                                        borderBottom: '2px solid black',
                                        borderBottomWidth: '2px',
                                    }}

                                    helperText={!props.validNewPassword &&
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
                                          <Typography variant='small' paddingLeft='3px'>Password must be at least 8 characters long</Typography>
                                      </Typography>
                                    }
                                />
                            </Grid>

                            <Grid item xs={12}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginBottom: '20px'
                                }}
                            >
                                <TextField 
                                    variant='standard'
                                    //required
                                    fullWidth
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    label={<Typography color={"black"}>Confirm Password</Typography>}
                                    autoComplete='new-password'
                                    value={props.confirmPassword}
                                    onChange={props.handleConfirmPasswordChange}
                                    InputProps={{
                                        disableUnderline: true,
                                        endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={handleClickShowConfirmPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {showConfirmPassword 
                                                    ? <VisibilityOutlinedIcon 
                                                        sx={{
                                                            position: 'absolute',
                                                            right: '8px',
                                                            color: '#000',
                                                            fontSize: '0.9em',
                                                            //top: '20px',
                                                        }}
                                                    /> 
                                                    : <VisibilityOffOutlinedIcon 
                                                        sx={{
                                                            position: 'absolute',
                                                            right: '8px',
                                                            color: '#000',
                                                            fontSize: '0.9em',
                                                            //top: '20px',
                                                        }}
                                                    />
                                                }
                                            </IconButton>
                                        </InputAdornment>
                                        ),
                                        sx: {
                                            color: '#000',
                                        }
                                    }}
                                    sx={{
                                        width: '90%',
                                        height: '50px',
                                        background: 'transparent',
                                        //border: 'none',
                                        outline: 'none',
                                        fontSize: '1em',
                                        //padding: '0 5px 0 5px',
                                        color: '#fff',
                                        borderBottom: '2px solid black',
                                        borderBottomWidth: '2px',
                                    }}

                                    // helperText={
                                    //   <Typography
                                    //       color={"red"}
                                    //       sx={{
                                    //           display: 'flex',
                                    //           justifyContent: 'left',
                                    //           alignItems: 'center',
                                    //       }}
                                    //       variant='small'
                                          
                                    //   >
                                    //       <ErrorOutlineOutlinedIcon color='red' 
                                    //       sx={{ fontSize: 13, paddingRight: '0px' }}/>
                                    //       <Typography variant='small' paddingLeft='3px'>Incorrect entry.</Typography>
                                    //   </Typography>
                                    // }
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
                                    Reset
                                </Button>
                            </Grid>

                        </Grid>

                        {/* <Grid container justifyContent="center">
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
                                    <Typography component={Link} to="/test" variant="small" sx={{ color: 'black'}}>
                                        Back to sign in
                                    </Typography>
                                </Typography>
                                
                            </Grid>
                        </Grid> */}
                        
                    </form>
                </Box>
            </Box>
        </Container>
        </Box>
  );
};

export default ResetPassword;
