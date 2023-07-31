import React, {useState, useEffect} from 'react'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
    Typography
} from "@mui/material"
import {DataGrid, GridAddIcon, GridToolbar, GridToolbarQuickFilter} from "@mui/x-data-grid";
import {useNavigate} from "react-router-dom";
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
import ViewListIcon from '@mui/icons-material/ViewList';
import {getCandidate} from "../../redux/reducer/adminReducer";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useMediaQuery from "@mui/material/useMediaQuery";
import candidateNames from './candidateNames.json';
import inerviewerNames from './inerviewerNames.json';
import recruiterNames from './recruiterNames.json';
import FindInPageIcon from "@mui/icons-material/FindInPage";




CandidateTable.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
InterviewerTable.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
RecruiterTable.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};


function CandidateTable(props) {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));
    const RenderAddToBlacklist = ({params}) => {
        const [open, setOpen] = React.useState(false);
        const [reason, setReason] = React.useState('');
        const handleAddClick = () => {
            dispatch({type: "saga/addToBlacklist", payload: {reason: reason, candidateId: params.row.candidateId}});
            console.log(reason,params.row.candidateId);
            setOpen(false);
        };
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
                        sx={{
                            '& .MuiButton-text': {
                                color: 'black', // set the button text color to black
                            },

                        }}
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Account info "}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Candidate ID: {params.row.candidateId}<br/>
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="reason"
                            label="Reason for Blacklist"
                            fullWidth
                            variant="standard"
                            value={reason}
                            onChange={(event) => setReason(event.target.value)}
                            sx={{
                                color: '#000', // set the default text color to black
                                '& .Mui-focused': {
                                    color: '#000', // set the text color to black when the input is clicked
                                    borderColor: '#000', // set the border color to black when the input is clicked
                                },
                            }}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => {
                            setOpen(false)
                        }}>Go to Account</Button>
                        <Button onClick={handleAddClick}>Add</Button>
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
    function getUser(candidateId) {
        return candidateNames.find(user => user.candidateId === candidateId);
    }
    const columns = [
                {field: "candidateId", headerName: isSm ? "Candidate ID" : "cID", flex: 0.5},
                {field: "userId", headerName: "User ID", flex: 0.5},
                { field: 'name', headerName: 'Username', flex: 0.3, valueGetter: params => getUser(params.row.candidateId)?.name },

                {
                    field: "addtoBlacklist",
                    headerName: isSm ? "Add to Blacklist" : "Add",
                    flex: 0.2,
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
                    // width="77vw"
                    item
                    // m="0px 0px 0px 0px"
                    xs={12}
                    display="flex"
                    sx={{
                        "& .MuiDataGrid-root": {
                            border: "none",
                            backgroundColor: "#ffffff",

                        },
                        "& .MuiDataGrid-cell": {
                            borderBottom: "none",
                            backgroundColor: "#ffffff",

                        },
                        "& .name-column--cell": {
                            color: grey[900]
                        },
                        "& .MuiDataGrid-columnHeaders": {
                            // backgroundColor: grey[100],
                            // color: "#ffffff",
                            borderBottom: "5"
                        },
                        "& .MuiDataGrid-virtualScroller": {
                            backgroundColor: grey[100]
                        },
                        "& .MuiDataGrid-footerContainer": {
                            borderTop: "5",
                            // backgroundColor: grey[100]
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
                        rows={candidate}
                        getRowId={(row) => row.candidateId}
                        columns={columns}
                        slots={{toolbar: QuickSearchToolbar}}
                        // display="flex"
                    />
                </Grid>
            </Grid>
        </div>
    );
}
function InterviewerTable(props) {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isXs = useMediaQuery(theme.breakpoints.up('xs'));
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));

    const RenderCheckInfo = ({params}) => {
        const [open, setOpen] = React.useState(false);
        return (
            <strong>
                <IconButton color="black" aria-label="Add to Blacklist" size="large"
                            onClick={() => {
                                setOpen(true)
                            }}>
                    <FindInPageIcon></FindInPageIcon>
                </IconButton>
                <Dialog open={open}
                        onClose={() => {
                            setOpen(false)
                        }}
                        aria-labelledby="accountinfo"
                        aria-describedby="accountdetails"
                        sx={{
                            '& .MuiButton-text': {
                                color: 'black', // set the button text color to black
                            },
                        }}
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Account info "}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Interviewer ID: {params.row.interviewerId}<br/>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={() => {
                            setOpen(false)
                        }}
                            >
                            Go to Account</Button>
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
    const {children, value, index, ...other} = props;
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({type: "saga/getInterviewer"});
    }, [dispatch]);
    const interviewer = useSelector(state => state.admin.interviewer)

    function QuickSearchToolbar() {
        return (
            <Grid container margin={1}
            >
                <GridToolbarQuickFilter/>
                <GridToolbar></GridToolbar>
            </Grid>
        );
    }
    function getUser(interviewerId) {
        return inerviewerNames.find(user => user.interviewerId === interviewerId);
    }
    const columns = [
        {field: "interviewerId", headerName: "Interviewer ID", flex: 0.5},
        { field: 'name', headerName: 'Username', flex: 0.3, valueGetter: params => getUser(params.row.interviewerId)?.name },
        {
            field: "departmentId",
            headerName: "Department",
            flex: 0.5,
            cellClassName: "name-column--cell",
        },
        {
            field: "checkInfo",
            headerName: isSm ? "Check Info" : "More",
            flex: 0.2,
            renderCell: (params) => {
                return (<RenderCheckInfo params={params}/>)
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
                    // width="77vw"
                    item
                    // m="0px 0px 0px 0px"
                    xs={12}
                    display="flex"
                    sx={{
                        "& .MuiDataGrid-root": {
                            border: "none",
                            backgroundColor: "#ffffff",

                        },
                        "& .MuiDataGrid-cell": {
                            borderBottom: "none",
                            backgroundColor: "#ffffff",

                        },
                        "& .name-column--cell": {
                            color: grey[900]
                        },
                        "& .MuiDataGrid-columnHeaders": {
                            // backgroundColor: grey[100],
                            // color: "#ffffff",
                            borderBottom: "5"
                        },
                        "& .MuiDataGrid-virtualScroller": {
                            backgroundColor: grey[100]
                        },
                        "& .MuiDataGrid-footerContainer": {
                            borderTop: "5",
                            // backgroundColor: grey[100]
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
                        rows={interviewer}
                        getRowId={(row) => row.interviewerId}
                        columns={columns}
                        slots={{toolbar: QuickSearchToolbar}}
                        display="flex"
                    />
                </Grid>
            </Grid>
        </div>
    );
}
function RecruiterTable(props) {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isXs = useMediaQuery(theme.breakpoints.up('xs'));
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));
    const RenderCheckInfo = ({params}) => {
        const [open, setOpen] = React.useState(false);
        return (
            <strong>
                <IconButton color="black" aria-label="Add to Blacklist" size="large"
                            onClick={() => {
                                setOpen(true)
                            }}>
                    <FindInPageIcon></FindInPageIcon>
                </IconButton>
                <Dialog open={open}
                        onClose={() => {
                            setOpen(false)
                        }}
                        aria-labelledby="accountinfo"
                        aria-describedby="accountdetails"
                        sx={{
                            '& .MuiButton-text': {
                                color: 'black', // set the button text color to black
                            },
                        }}
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Account info "}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Recruiter ID: {params.row.recruiterId}<br/>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => {
                            setOpen(false)
                        }}>Go to Account</Button>
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
    const {children, value, index, ...other} = props;
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({type: "saga/getRecruiter"});
    }, [dispatch]);
    const recruiter = useSelector(state => state.admin.recruiter)
    function getUser(recruiterId) {
        return recruiterNames.find(user => user.recruiterId === recruiterId);
    }
    function QuickSearchToolbar() {
        return (
            <Grid container margin={1}
            >
                <GridToolbarQuickFilter/>
                <GridToolbar></GridToolbar>
            </Grid>
        );
    }
    const columns = [
        {field: "recruiterId", headerName: "Recruiter ID", flex: 0.5},
        { field: 'name', headerName: 'Username', flex: 0.3, valueGetter: params => getUser(params.row.recruiterId)?.name },
        {
            field: "departmentId",
            headerName: "Department ID",
            flex: 0.5,
            cellClassName: "name-column--cell",
        },
        {
            field: "checkInfo",
            headerName: isSm ? "Check Info" : "More",
            flex: 0.2,
            renderCell: (params) => {
                return (<RenderCheckInfo params={params}/>)
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
                    // width="77vw"
                    item
                    // m="0px 0px 0px 0px"
                    xs={12}
                    display="flex"
                    sx={{
                        "& .MuiDataGrid-root": {
                            border: "none",
                            backgroundColor: "#ffffff",

                        },
                        "& .MuiDataGrid-cell": {
                            borderBottom: "none",
                            backgroundColor: "#ffffff",

                        },
                        "& .name-column--cell": {
                            color: grey[900]
                        },
                        "& .MuiDataGrid-columnHeaders": {
                            // backgroundColor: grey[100],
                            // color: "#ffffff",
                            borderBottom: "5"
                        },
                        "& .MuiDataGrid-virtualScroller": {
                            backgroundColor: grey[100]
                        },
                        "& .MuiDataGrid-footerContainer": {
                            borderTop: "5",
                            // backgroundColor: grey[100]
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
                        rows={recruiter}
                        getRowId={(row) => row.recruiterId}
                        columns={columns}
                        slots={{toolbar: QuickSearchToolbar}}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

function FullWidthTabs() {
    const [value, setValue] = React.useState(0);
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));

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
                // display: 'flex',
                // border: "1px solid black",
                // borderRadius: 1,
                padding:4,
                mt: 4
            }}>
            <Grid container>
                <AppBar position="static"
                        sx={{
                            backgroundColor: '#ffffff',
                        }}>
                    <Tabs
                        display="flex"
                        value={value}
                        onChange={handleChange}
                        variant="fullWidth"
                        aria-label="selectTableRoles"
                        TabIndicatorProps={{
                            style: {
                                backgroundColor: "#000000",
                            }
                        }}
                        sx={{
                            backgroundColor: '#ffffff',
                            color: '#000000',
                            // "&.Mui-selected": {
                            //     color: '#000000'
                            // },
                            // "&. Mui-indicator": {
                            //     color: '#000000'
                            // }
                        }}
                    >
                        <Tab label={isSm ? "Candidate" : "Cndt."} {...a11yProps(0)}
                            sx={{
                                "&.Mui-selected": {
                                    color: '#000000'
                                },
                            }}/>
                        <Tab label={isSm ? "Interviewer" : "Intvwr."} {...a11yProps(1)}
                             sx={{
                                 "&.Mui-selected": {
                                     color: '#000000'
                                 },
                             }}/>
                        <Tab label={isSm ? "Recruiter" : "Rctr."} {...a11yProps(2)}
                             sx={{
                                 "&.Mui-selected": {
                                     color: '#000000'
                                 },
                             }}/>
                    </Tabs>
                    <CandidateTable value={value} index={0}>
                    </CandidateTable>
                    <InterviewerTable value={value} index={1}>
                    </InterviewerTable>
                    <RecruiterTable value={value} index={2}>
                    </RecruiterTable>
                </AppBar>
            </Grid>
        </Card>
    );
}

const Page_Company_Account = () => {
    const navigate = useNavigate()
    const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));
    const isXs = useMediaQuery(theme.breakpoints.up('xs'));

    // if (useGetRole()=="admin") {
        return (
            <Grid container>
            <Grid item xs={12}>
                <Card
                    raised="true"
                    sx={{
                        // display:'flex',
                        // border: "1px solid black",
                        // borderRadius: 1,
                        padding: 4,
                        mt: '5vh'
                    }}>
                    <Grid container columnSpacing={{xs: 0.5}}  alignItems="center">
                        <Grid item xs={7} sm={12}>
                        <Grid container display="flex">
                        <Grid item md={0.8} xs={12} display="flex">
                            <ViewListIcon sx={isMd ? { fontSize: 60 }: {fontSize: 40}}/>
                        </Grid>
                        <Grid item md={11} xs={12}
                              display="flex"
                              justifyContent="left">
                            <Typography
                                m="0px 10px 20px 0px"
                                variant={isMd ? "h3" : "h4"}
                                // justifyContent="left"
                            >
                                Account List
                            </Typography>
                        </Grid>
                        </Grid>
                        </Grid>
                        <Grid item xs={5} sm={12} >
                            <Grid container spacing={{xs: 0, sm: 3}} rowSpacing={{xs: 1, sm: 0}} display="flex">
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
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
                                            '&:hover': {
                                                color: grey[900],
                                                backgroundColor: grey[300], // set the hover color to light grey
                                            },
                                        }}
                                        startIcon={<AccountCircleIcon />}
                                    >
                                        Add Advanced Account
                                    </Button>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
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
                                            '&:hover': {
                                                color: grey[900],
                                                backgroundColor: grey[300], // set the hover color to light grey
                                            },
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
            </Grid>
                <Grid item xs={12} mb="10vh">
                <FullWidthTabs/>
                </Grid>
            </Grid>

        );
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