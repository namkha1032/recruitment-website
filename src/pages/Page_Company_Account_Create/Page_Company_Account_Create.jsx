import React, {useEffect} from 'react'
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
    useEffect(() => {
        dispatch({type: "saga/getDepartmentAdmin"});
    }, [dispatch]);
    const department = useSelector(state => state.admin.department)
    const [departmentSelected,setDepartment]=React.useState('')
    return (
        <Card
            raised="true"
            sx={{
                // display:'flex',
                // border: "1px solid black",
                // borderRadius: 1,
                padding:5,
                boxShadow:5,
                mt: '5vh'
            }}>
        <Grid
            container
            rowSpacing={2.5}
            alignItems="center"

        >
            <Grid
                    item
                    xs={12}
                    md={1}>
                <AccountCircleIcon sx={isSm ? {fontSize: 80} : {fontSize: 60}}/>
            </Grid>
            <Grid
                    item
                    xs={12}
                    md={11}
                    display="flex">
            <Typography variant={isSm ? "h2" : "h4"}
                        display="flex"
                        alignItems="center"
                        justifyContent="left"
                        >
                    Create Advanced Accounts
            </Typography>
            </Grid>
            <Grid
                item
                xs={12}
                display="flex"
                alignItems="center"
                justifyContent="left"
            >
                <TextField
                    id="accountemail"
                    label="Username"
                    variant="outlined"
                    fullWidth
                />
            </Grid>
            <Grid
                item
                xs={12}
                display="flex"
                alignItems="center"
                justifyContent="left"
            >
                <TextField
                    id="accountemail"
                    label="Email"
                    variant="outlined"
                    fullWidth
                />
            </Grid>
            <Grid
                alignItems="center"
                justifyContent="left"
                item
                xs={12}
                display="flex"
            >
                <TextField
                    id="accountpassword"
                    label="Password"
                    variant="outlined"
                    fullWidth
                />
            </Grid>
            <Grid
                item
                xs={12}
                display="flex">
                <FormControl component="fieldset">
                    <FormLabel component="legend">Choose Role:</FormLabel>
                    <RadioGroup
                        aria-label="role"
                        name="role"
                        display="flex"
                        // alignItems="center"
                        // justifyContent="left"
                    >
                        <FormControlLabel value="recruiter" control={<Radio/>} label="Recruiter"/>
                        <FormControlLabel value="interviewer" control={<Radio/>} label="Interviewer"/>
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid
                display="flex"
                alignItems="center"
                justifyContent="left"
                item
                xs={12}>
                <TextField
                    id="departmentSelect"
                    select
                    label="Department"
                    value={departmentSelected}
                    onChange={e => setDepartment(e.target.value)}
                    helperText=""
                    sx={{
                        minWidth: '150px'
                    }}
                >
                    {department.map((option) => (
                        <MenuItem key={option.departmentId} value={option.departmentId}>
                            {option.departmentName}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid
                display="flex"
                alignItems="center"
                justifyContent="right"
                item
                xs={12}>
                <Button
                    variant="contained"
                    size="medium"
                    color="primary"
                    onClick={() => {
                    }}
                    sx={{
                        boxShadow:5,
                        backgroundColor: grey[900],
                    }}
                >
                    Create
                </Button>
            </Grid>
        </Grid>
        </Card>
        );
}

export default Page_Company_Account_Create