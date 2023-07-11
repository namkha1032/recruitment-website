
import * as React from 'react';
import {
    Tabs,
    Tab,
    Typography,
    Box,
    Button,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Checkbox
} from '@mui/material';
import Grid from '@mui/material/Grid';

function CustomTabPanel(props) {

    return (
        <Box
            sx={{
                display: props.value == props.index ? "block" : "none",
                padding: 3,
                borderLeft: "1px solid black",
                borderRight: "1px solid black",
                borderBottom: "1px solid black",
                borderRadius: "0 0 20px 20px"
            }}
        >
            {props.children}
        </Box>
    );
}



export default function Page_Company_Interview_Id_Start() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Grid container rowSpacing={4} columnSpacing={0}>
                <Grid item md={5}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={(event, newValue) => {
                            console.log("newValue: ", newValue)
                            setValue(newValue)
                        }}>
                            <Tab label="React" id={0} />
                            <Tab label="Java" id={1} />
                            <Tab label=".NET" id={2} />
                        </Tabs>
                    </Box>
                </Grid>
                <Grid item md={7} />
                <Grid item md={5} sx={{
                    "&.MuiGrid-root": {
                        paddingTop: 2
                    }
                }}>
                    <Box sx={{ width: '100%' }}>
                        <CustomTabPanel value={value} index={0}>
                            <List
                                sx={{
                                    // width: 200,
                                    // height: 230,
                                    bgcolor: 'background.paper',
                                    overflow: 'auto',
                                }}
                                dense
                                component="div"
                                role="list"
                            >
                                <ListItem
                                    role="listitem"
                                    button
                                // onClick={handleToggle(value)}
                                >
                                    <ListItemIcon>
                                        <Checkbox
                                            // checked={checked.indexOf(value) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                        // inputProps={{
                                        //     'aria-labelledby': labelId,
                                        // }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary={`Question 1`} />
                                </ListItem>
                                <ListItem
                                    role="listitem"
                                    button
                                // onClick={handleToggle(value)}
                                >
                                    <ListItemIcon>
                                        <Checkbox
                                            // checked={checked.indexOf(value) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                        // inputProps={{
                                        //     'aria-labelledby': labelId,
                                        // }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary={`Question 2`} />
                                </ListItem>
                                <ListItem
                                    role="listitem"
                                    button
                                // onClick={handleToggle(value)}
                                >
                                    <ListItemIcon>
                                        <Checkbox
                                            // checked={checked.indexOf(value) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                        // inputProps={{
                                        //     'aria-labelledby': labelId,
                                        // }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary={`Question 3`} />
                                </ListItem>
                            </List>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <Typography>
                                Item Two
                            </Typography>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            <Typography>
                                Item Three
                            </Typography>
                        </CustomTabPanel>
                    </Box>
                </Grid>
                <Grid item md={2} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <Button
                        sx={{ my: 0.5 }}
                        variant="outlined"
                        size="small"
                    // onClick={handleCheckedRight}
                    // disabled={leftChecked.length === 0}
                    >
                        &gt;
                    </Button>
                    <Button
                        sx={{ my: 0.5 }}
                        variant="outlined"
                        size="small"
                    // onClick={handleCheckedLeft}
                    // disabled={rightChecked.length === 0}
                    >
                        &lt;
                    </Button>
                </Grid>
                <Grid item md={5} sx={{
                    "&.MuiGrid-root": {
                        paddingTop: 2
                    }
                }}>
                    <Box sx={{ width: '100%' }}>
                        <CustomTabPanel value={value} index={0}>
                            <List
                                sx={{
                                    // width: 200,
                                    // height: 230,
                                    bgcolor: 'background.paper',
                                    overflow: 'auto',
                                }}
                                dense
                                component="div"
                                role="list"
                            >
                                <ListItem
                                    role="listitem"
                                    button
                                // onClick={handleToggle(value)}
                                >
                                    <ListItemIcon>
                                        <Checkbox
                                            // checked={checked.indexOf(value) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                        // inputProps={{
                                        //     'aria-labelledby': labelId,
                                        // }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary={`Question 4`} />
                                </ListItem>
                                <ListItem
                                    role="listitem"
                                    button
                                // onClick={handleToggle(value)}
                                >
                                    <ListItemIcon>
                                        <Checkbox
                                            // checked={checked.indexOf(value) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                        // inputProps={{
                                        //     'aria-labelledby': labelId,
                                        // }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary={`Question 5`} />
                                </ListItem>
                                <ListItem
                                    role="listitem"
                                    button
                                // onClick={handleToggle(value)}
                                >
                                    <ListItemIcon>
                                        <Checkbox
                                            // checked={checked.indexOf(value) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                        // inputProps={{
                                        //     'aria-labelledby': labelId,
                                        // }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary={`Question 6`} />
                                </ListItem>
                            </List>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <Typography>
                                Item Two
                            </Typography>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            <Typography>
                                Item Three
                            </Typography>
                        </CustomTabPanel>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}