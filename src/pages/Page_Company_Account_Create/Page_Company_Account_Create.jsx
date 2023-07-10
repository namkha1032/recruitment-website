import React from 'react'
import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { Button } from '@mui/material';
const Page_Company_Account_Create = () => {
    return (
        <Box m="20px" >
            <Box m="30px" display="grid" gridTemplateColumns="repeat(6, 2fr)" gridAutoRows="60px" gap="20px">
                <TextField
                    id="accountemail"
                    label="Email"
                    variant="outlined"
                    display="flex"
                    alignItems="center"
                    justifyContent="left"
                    gridColumn="span 5"
                    gridRow="1"
                />
                <TextField
                    id="accountpassword"
                    label="Password"
                    variant="outlined"
                    display="flex"
                    alignItems="center"
                    justifyContent="left"
                    gridColumn="span 5"
                    gridRow="2"
                />
                <FormControl component="fieldset" gridColumn="span 5" gridRow="3 / span 2">
                    <FormLabel component="legend">Choose Role:</FormLabel>
                    <RadioGroup
                        aria-label="role"
                        name="role"
                        display="flex"
                        alignItems="center"
                        justifyContent="left"
                        gridColumn="span 5"
                    >
                        <FormControlLabel value="recruiter" control={<Radio />} label="Recruiter" />
                        <FormControlLabel value="interviewer" control={<Radio />} label="Interviewer" />
                    </RadioGroup>
                </FormControl>
                <TextField
                    id="accountdepartment"
                    label="Department"
                    variant="outlined"
                    display="flex"
                    alignItems="center"
                    justifyContent="left"
                    gridColumn="span 5"
                    gridRow="5"
                />
                <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    style={{ marginLeft: 16 }}
                    onClick={() => {}}
                    display="flex"
                    alignItems="center"
                    justifyContent="left"
                    gridColumn="span 1"
                    gridRow="6"
                >
                    Create
                </Button>
            </Box>
        </Box>
    );
}

export default Page_Company_Account_Create