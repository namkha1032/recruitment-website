import React from 'react'
import {Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField} from '@mui/material';

const Page_Company_Account_Create = () => {
    return (
        <Box
            display="grid"
            gridTemplateColumns="repeat(5, 1fr)"
            gridAutoRows="50px"
            gap="20px"
            m="50px 0px 0 0px"
        >
            <Box
                display="flex"
                gridColumn="span 5"
                alignItems="center"
                justifyContent="left"
            >
                <TextField
                    id="accountemail"
                    label="Email"
                    variant="outlined"
                    fullWidth
                />
            </Box>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="left"
                gridColumn="span 5"
            >
                <TextField
                    id="accountpassword"
                    label="Password"
                    variant="outlined"
                    fullWidth
                />
            </Box>
            <Box gridColumn="span 5" gridRow="span 2">
                <FormControl component="fieldset">
                    <FormLabel component="legend">Choose Role:</FormLabel>
                    <RadioGroup
                        aria-label="role"
                        name="role"
                        display="flex"
                        alignItems="center"
                        justifyContent="left"
                    >
                        <FormControlLabel value="recruiter" control={<Radio/>} label="Recruiter"/>
                        <FormControlLabel value="interviewer" control={<Radio/>} label="Interviewer"/>
                    </RadioGroup>
                </FormControl>
            </Box>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="left"
                gridColumn="span 5"
            >
                <TextField
                    id="accountdepartment"
                    label="Department"
                    variant="outlined"
                    fullWidth
                />
            </Box>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="right"
                gridColumn="span 5"
                gridRow="6"
            >
                <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    onClick={() => {
                    }}
                >
                    Create
                </Button>
            </Box>
        </Box>
    );
}

export default Page_Company_Account_Create