import React from 'react'
import {
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    TextField,
    Typography
} from '@mui/material';
import Grid from "@mui/material/Grid";

const Page_Company_Account_Create = () => {
    return (
        <Grid
            container
            rowSpacing={3}
        >
            <Grid
                    item
                    xs={12}
                    display="flex">
            <Typography variant="h2"
                        display="flex"
                        alignItems="center"
                        justifyContent="left"
                        m="20px 0 20px 0">
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
                    id="accountdepartment"
                    label="Department"
                    variant="outlined"
                    fullWidth
                />
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
                >
                    Create
                </Button>
            </Grid>
        </Grid>
    );
}

export default Page_Company_Account_Create