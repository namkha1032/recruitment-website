import React, {useEffect, useState} from 'react'
import {
    Button,
    FormControl,
    FormControlLabel,
    FormLabel, IconButton, InputAdornment, InputLabel,
    MenuItem, OutlinedInput,
    Radio,
    RadioGroup,
    TextField,
    Typography
} from '@mui/material';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import {grey} from "@mui/material/colors";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useDispatch, useSelector} from 'react-redux';
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import {Visibility, VisibilityOff} from "@mui/icons-material";


const Page_Company_Account_Create = () => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));
    const dispatch = useDispatch()

    const [errorSnackbar, setErrorSnackbar] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Recruiter');
    const [departmentSelected, setDepartment] = useState('');
    const [alertType, setAlertType] = useState("success");
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };


    const department = useSelector(state => state.admin.department)
    const newError = useSelector((state) => state.error);
    const handleCreateClick = () => {
        const payload = {
            fullname: fullname,
            username: username,
            email: email,
            password: password,
            role: role,
            departmentId: departmentSelected,
        };
        dispatch({ type: "saga/addAdvancedAccount", payload });
    };

    useEffect(() => {
        // console.log("error toast start", newError)
        if (newError.status=="no"){
            setErrorMessage("Account created successfully. Check your account list for updates")
            setErrorSnackbar(true);
            setTimeout(() => {
                setErrorSnackbar(false);
                dispatch({type: "error/setError",payload: {
                        status: "idle",
                        message: ""
                    }})
            },3000)
        }
        if (newError.status=="yes"){
            setErrorMessage("One of your inputs are wrong. Make sure you have at least 1 special, 1 capital and 1 alphanumerical character in your password")
            setAlertType("error")
            setErrorSnackbar(true);
            setTimeout(() => {
                setAlertType("success")
                setErrorSnackbar(false);
                dispatch({type: "error/setError",payload: {
                        status: "idle",
                        message: ""
                    }})
            },3000)
        }
    }, [newError]);

    useEffect(() => {
        dispatch({type: "saga/getDepartmentAdmin"});
    }, [dispatch]);

    return (
        <Card raised={true} sx={{padding: 5, boxShadow: 5, mt: '5vh'}}>
            <Grid container rowSpacing={2.5} alignItems="center">
                <Grid item xs={12} md={1}>
                    <AccountCircleIcon sx={isSm ? {fontSize: 80} : {fontSize: 60}}/>
                </Grid>
                <Grid item xs={12} md={11} display="flex">
                    <Typography variant={isSm ? "h2" : "h4"} display="flex" alignItems="center" justifyContent="left"
                                fontWeight="bold">
                        Create Advanced Accounts
                    </Typography>
                </Grid>
                <Grid item xs={12} display="flex" alignItems="center" justifyContent="left">
                    <TextField id="fullname" label="Fullname" variant="outlined" fullWidth value={fullname}
                               onChange={e => setFullname(e.target.value)}/>
                </Grid>
                <Grid item xs={12} display="flex" alignItems="center" justifyContent="left">
                    <TextField id="username" label="Username" variant="outlined" fullWidth value={username}
                               onChange={e => setUsername(e.target.value)}/>
                </Grid>
                <Grid item xs={12} display="flex" alignItems="center" justifyContent="left">
                    <TextField id="email" label="Email" variant="outlined" fullWidth value={email}
                               onChange={e => setEmail(e.target.value)}/>
                </Grid>
                <Grid item xs={12} alignItems="center" justifyContent="left" display="flex">
                    {/*<TextField id="password" label="Password" variant="outlined" fullWidth value={password}*/}
                    {/*           onChange={e => setPassword(e.target.value)}/>*/}
                    <FormControl fullWidth>
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12} display="flex">
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Choose Role:</FormLabel>
                        <RadioGroup aria-label="role" name="role" display="flex" value={role}
                                    onChange={e => setRole(e.target.value)}>
                            <FormControlLabel value="Recruiter" control={<Radio/>} label="Recruiter"/>
                            <FormControlLabel value="Interviewer" control={<Radio/>} label="Interviewer"/>
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} display="flex" alignItems="center" justifyContent="left">
                    <TextField
                        id="departmentSelect"
                        select
                        label="Department"
                        value={departmentSelected}
                        onChange={e => setDepartment(e.target.value)}
                        helperText=""
                        sx={{minWidth: '150px'}}
                    >
                        {department.map((option) => (
                            <MenuItem key={option.departmentId} value={option.departmentId}>
                                {option.departmentName}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} display="flex" alignItems="center" justifyContent="right">
                    <Button
                        variant="contained"
                        size="medium"
                        color="primary"
                        onClick={handleCreateClick}
                        sx={{
                            boxShadow: 3,
                            backgroundColor: grey[900],
                            '&:hover': {
                                color: grey[900],
                                backgroundColor: grey[300], // set the hover color to light grey
                            },
                        }}
                    >
                        Create
                    </Button>
                </Grid>
            </Grid>
            <Snackbar
                open={errorSnackbar}
                autoHideDuration={5000}
                onClose={() => setErrorSnackbar(false)}
                anchorOrigin={{vertical: "top", horizontal: "center"}}
            >
                <Alert severity={alertType} onClose={() => setErrorSnackbar(false)}>
                    {/* {newError.message} */}
                    {errorMessage}
                </Alert>
            </Snackbar>
        </Card>

    )
}
export default Page_Company_Account_Create