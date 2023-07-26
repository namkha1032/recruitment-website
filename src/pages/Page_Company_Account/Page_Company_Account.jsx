import React, {useState, useEffect} from 'react'
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography} from "@mui/material"
import {DataGrid, GridAddIcon, GridToolbar, GridToolbarQuickFilter} from "@mui/x-data-grid";
import {useNavigate} from "react-router-dom";
import {mockDataContacts} from "./mockData";
import {grey, lightBlue, teal} from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import {AddCard, FileOpen} from "@mui/icons-material";
import Card from "@mui/material/Card";
import PropTypes from "prop-types";
import {useTheme} from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {useDispatch, useSelector} from 'react-redux';
import useGetRole from '../../hooks/useGetRole.js';
import {getCandidate} from "../../redux/reducer/adminReducer";


const RenderAddToBlacklist = ({params}) => {
    const [open, setOpen] = React.useState(false);
    return (
        <strong>
            <IconButton color="black" aria-label="Add to Blacklist" size="large"
                        onClick={() => {
                            setOpen(true)
                        }}>
                <GridAddIcon></GridAddIcon>
            </IconButton>
            <Dialog open={open}
                    onClose={() => {
                        setOpen(false)
                    }}
                    aria-labelledby="accountinfo"
                    aria-describedby="accountdetails"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Account info "}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Account ID: {params.row.id}<br/>
                        Account Name: {params.row.accountName}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {
                        setOpen(false)
                    }}>Go to Account</Button>
                    <Button onClick={() => {
                        setOpen(false)
                    }}>
                        Add
                    </Button>
                    <Button onClick={() => {
                        setOpen(false)
                    }}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </strong>
    )
}


function TabPanel(props) {
    const {children, value, index, ...other} = props;
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({type: "saga/getCandidate"});
    }, [dispatch]);
    const candidate = useSelector(state => state.admin.candidate)

    function QuickSearchToolbar() {
        return (
            <Grid container margin={1}
            >
                <GridToolbarQuickFilter/>
                <GridToolbar></GridToolbar>
            </Grid>
        );
    }

    // function setColumns(props.value) {
    //     var columns
    //     if (value===0) {
    //         columns = [
    //             {field: "candidateId", headerName: "Candidate ID", flex: 0.5},
    //             {field: "userId", headerName: "User ID", flex: 0.5},
    //             {
    //                 field: "experience",
    //                 headerName: "Experience",
    //                 flex: 0.5,
    //                 cellClassName: "name-column--cell",
    //             },
    //             {
    //                 field: "addtoBlacklist",
    //                 headerName: "Add to Blacklist",
    //                 flex: 0.3,
    //                 renderCell: (params) => {
    //                     return (<RenderAddToBlacklist params={params}/>)
    //                 },
    //             },
    //         ];
    //     }
    //     if (value===1) {
    //         columns = [
    //             {field: "candidateId", headerName: "Candidate ID", flex: 0.5},
    //             {field: "userId", headerName: "User ID", flex: 0.5},
    //             {
    //                 field: "experience",
    //                 headerName: "Experience",
    //                 flex: 0.5,
    //                 cellClassName: "name-column--cell",
    //             },
    //             {
    //                 field: "addtoBlacklist",
    //                 headerName: "Add to Blacklist",
    //                 flex: 0.3,
    //                 renderCell: (params) => {
    //                     return (<RenderAddToBlacklist params={params}/>)
    //                 },
    //             },
    //         ];
    //     }
    //     if (value===2) {
    //         columns = [
    //             {field: "candidateId", headerName: "Candidate ID", flex: 0.5},
    //             {field: "userId", headerName: "User ID", flex: 0.5},
    //             {
    //                 field: "experience",
    //                 headerName: "Experience",
    //                 flex: 0.5,
    //                 cellClassName: "name-column--cell",
    //             },
    //             {
    //                 field: "addtoBlacklist",
    //                 headerName: "Add to Blacklist",
    //                 flex: 0.3,
    //                 renderCell: (params) => {
    //                     return (<RenderAddToBlacklist params={params}/>)
    //                 },
    //             },
    //         ];
    //     }
    //     return columns;
    // }

    const columns = [
        {field: "candidateId", headerName: "Candidate ID", flex: 0.5},
        {field: "userId", headerName: "User ID", flex: 0.5},
        {
            field: "experience",
            headerName: "Experience",
            flex: 0.5,
            cellClassName: "name-column--cell",
        },
        {
            field: "addtoBlacklist",
            headerName: "Add to Blacklist",
            flex: 0.3,
            renderCell: (params) => {
                return (<RenderAddToBlacklist params={params}/>)
            },
        },
    ];

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}>
            <Grid container>
                <Grid
                    border={0}
                    width="80vw"
                    item
                    m="0px 0px 0px 0px"
                    xs={12}
                    display="flex"
                    sx={{
                        "& .MuiDataGrid-root": {
                            border: "none",
                            backgroundColor: "#ffffff",
                        },
                        "& .MuiDataGrid-cell": {
                            borderBottom: "none"
                        },
                        "& .name-column--cell": {
                            color: grey[900]
                        },
                        "& .MuiDataGrid-columnHeaders": {
                            backgroundColor: grey[100],
                            // color: "#ffffff",
                            borderBottom: "5"
                        },
                        "& .MuiDataGrid-virtualScroller": {
                            backgroundColor: grey[100]
                        },
                        "& .MuiDataGrid-footerContainer": {
                            borderTop: "5",
                            backgroundColor: grey[100]
                            // color: "#ffffff"
                        },
                        "& .MuiCheckbox-root": {
                            color: `${teal[300]} !important`
                        },
                        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                            color: `${grey[700]} !important`
                        }
                    }}
                >
                    <DataGrid
                        rows={candidate==null ? []: candidate}
                        getRowId={(row) => row.candidateId}
                        columns={columns}
                        slots={{toolbar: QuickSearchToolbar}}
                        display="flex"
                    />
                </Grid>
            </Grid>
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

function FullWidthTabs() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };


    return (

        <Card
            raised="true"
            sx={{
                // width:'77vw',
                display: 'flex',
                // border: "1px solid black",
                // borderRadius: 1,
                // padding:4,
                mt: 4
            }}>
            <Grid container>
                <AppBar position="static">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                        sx={{
                            backgroundColor: '#ffffff',
                            color: "#000000"
                        }}
                    >
                        <Tab label="Candidate" {...a11yProps(0)} />
                        <Tab label="Interviewer" {...a11yProps(1)} />
                        <Tab label="Recruiter" {...a11yProps(2)} />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                    </TabPanel>
                </AppBar>
            </Grid>
        </Card>
    );
}

const Page_Company_Account = () => {
    const navigate = useNavigate()


    if (useGetRole()=="admin") {
        return (
            <Grid item xs={12}>
                <Card
                    raised="true"
                    sx={{
                        // display:'flex',
                        // border: "1px solid black",
                        // borderRadius: 1,
                        padding: 4
                    }}>
                    <Grid container columnSpacing={{xs: 1}}>
                        <Grid item md={12} xs={7}
                              display="flex"
                              alignItems="center"
                              justifyContent="left">
                            <Typography
                                m="0px 10px 20px 3px"
                                variant="h3"
                                alignItems="center"
                                // justifyContent="left"
                            >
                                Account List
                            </Typography>
                        </Grid>
                        <Grid item xs={5} sm={12} >
                            <Grid container spacing={{xs: 0, sm: 3}} rowSpacing={{xs: 1, sm: 0}} display="flex">
                                <Grid
                                    item
                                    xs={12}
                                    sm={3}
                                    lg={3}
                                    display="flex"
                                    justifyContent="right">
                                    <Button
                                        variant="contained"
                                        size="medium"
                                        fullWidth
                                        onClick={() => {
                                            navigate("/company/account/create")
                                        }}
                                        sx={{
                                            boxShadow: 7,
                                            minWidth: '120px',
                                            backgroundColor: grey[900],
                                        }}
                                        startIcon={<AddCard/>}
                                    >
                                        Add Advanced Account
                                    </Button>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    sm={3}
                                    lg={3}
                                    display="flex"
                                    justifyContent="right">
                                    <Button
                                        variant="contained"
                                        size="medium"
                                        fullWidth
                                        onClick={() => {
                                            navigate("/company/account/blacklist")
                                        }}
                                        sx={{
                                            boxShadow: 7,
                                            minWidth: '120px',
                                            backgroundColor: grey[900],
                                        }}
                                        startIcon={<FileOpen/>}
                                    >
                                        Access Blacklist
                                    </Button>
                                </Grid>
                                {/*<Grid*/}
                                {/*    item*/}
                                {/*    xs={12}*/}
                                {/*    sm={3}*/}
                                {/*    lg={3}*/}
                                {/*    display="flex"*/}
                                {/*    justifyContent="left">*/}
                                {/*    <FormControl*/}
                                {/*        display="flex"*/}
                                {/*        sx={{*/}
                                {/*            width: '250px',*/}
                                {/*            minWidth:'50px',*/}
                                {/*            maxHeight:'55px',*/}
                                {/*            boxShadow:7*/}
                                {/*        }}*/}
                                {/*    >*/}
                                {/*        <InputLabel id="accountSelect">Select Account</InputLabel>*/}
                                {/*        <Select*/}
                                {/*            display="flex"*/}
                                {/*            labelId="selectaccount"*/}
                                {/*            id="selectaccount"*/}
                                {/*            label="Select Account"*/}
                                {/*            value={account}*/}
                                {/*            onChange={e => setAccount(e.target.value)}*/}
                                {/*            displayEmpty={true}*/}
                                {/*            variant="outlined"*/}
                                {/*        >*/}
                                {/*            <MenuItem value={"candidate"}>Candidate</MenuItem>*/}
                                {/*            <MenuItem value={"interviewer"}>Interviewer</MenuItem>*/}
                                {/*            <MenuItem value={"recruiter"}>Recruiter</MenuItem>*/}
                                {/*        </Select>*/}
                                {/*    </FormControl>*/}
                                {/*</Grid>*/}
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
                <FullWidthTabs/>
            </Grid>

        );
    }
    // else {
    //     return(
    //       <Typography
    //             variant="h3"
    //             alignItems="center"
    //             onLoad={navigate("/home")}>
    //       </Typography>
    //     );
    // }
}

export default Page_Company_Account