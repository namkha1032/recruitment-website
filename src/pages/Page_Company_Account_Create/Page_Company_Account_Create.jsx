import React, {useEffect, useState} from 'react'
import {
    Button,
    FormControl,
    FormControlLabel,
    FormLabel, MenuItem,
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
import {Box} from "@mui/system";
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Page_Company_Account_Create = () => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));
    const dispatch = useDispatch()

    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('recruiter');
    const [departmentSelected, setDepartment] = useState('');

    const department = useSelector(state => state.admin.department)

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
        dispatch({type: "saga/getDepartmentAdmin"});
    }, [dispatch]);

    return (
        <Card raised="true" sx={{ padding:5, boxShadow:5, mt: '5vh' }}>
            <Grid container rowSpacing={2.5} alignItems="center">
                <Grid item xs={12} md={1}>
                    <AccountCircleIcon sx={isSm ? {fontSize: 80} : {fontSize: 60}} />
                </Grid>
                <Grid item xs={12} md={11} display="flex">
                    <Typography variant={isSm ? "h2" : "h4"} display="flex" alignItems="center" justifyContent="left">
                        Create Advanced Accounts
                    </Typography>
                </Grid>
                <Grid item xs={12} display="flex" alignItems="center" justifyContent="left">
                    <TextField id="fullname" label="Fullname" variant="outlined" fullWidth value={fullname} onChange={e => setFullname(e.target.value)} />
                </Grid>
                <Grid item xs={12} display="flex" alignItems="center" justifyContent="left">
                    <TextField id="username" label="Username" variant="outlined" fullWidth value={username} onChange={e => setUsername(e.target.value)} />
                </Grid>
                <Grid item xs={12} display="flex" alignItems="center" justifyContent="left">
                    <TextField id="email" label="Email" variant="outlined" fullWidth value={email} onChange={e => setEmail(e.target.value)} />
                </Grid>
                <Grid item xs={12} alignItems="center" justifyContent="left" display="flex">
                    <TextField id="password" label="Password" variant="outlined" fullWidth value={password} onChange={e => setPassword(e.target.value)} />
                </Grid>
                <Grid item xs={12} display="flex">
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Choose Role:</FormLabel>
                        <RadioGroup aria-label="role" name="role" display="flex" value={role} onChange={e => setRole(e.target.value)}>
                            <FormControlLabel value="recruiter" control={<Radio />} label="Recruiter" />
                            <FormControlLabel value="interviewer" control={<Radio />} label="Interviewer" />
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
                        sx={{ minWidth: '150px' }}
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
                            boxShadow:5,
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
        </Card>
    )
}
export default Page_Company_Account_Create