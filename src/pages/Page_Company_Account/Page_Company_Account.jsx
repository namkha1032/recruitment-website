import React, {useEffect, useState} from 'react'
import {
    Alert,
    Box,
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, Snackbar,
    TextField,
    Typography
} from "@mui/material"
import {DataGrid, GridAddIcon, GridToolbar, GridToolbarQuickFilter} from "@mui/x-data-grid";
import {useNavigate} from "react-router-dom";
import {grey, teal} from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import {FileOpen} from "@mui/icons-material";
import Card from "@mui/material/Card";
import PropTypes from "prop-types";
import {useTheme} from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {useDispatch, useSelector} from 'react-redux';
import ViewListIcon from '@mui/icons-material/ViewList';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useMediaQuery from "@mui/material/useMediaQuery";
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
        // const newError = useSelector((state) => state.error);
        // const [errorSnackbar, setErrorSnackbar] = useState(false);
        // const [errorMessage, setErrorMessage] = useState("");
        // const [alertType, setAlertType] = useState("success");
        // useEffect(() => {
        //     console.log("error toast start", newError)
        //     if (newError.status=="no"){
        //         setErrorMessage("Account OK!")
        //         setErrorSnackbar(true);
        //         setTimeout(() => {
        //             setErrorSnackbar(false);
        //             dispatch({type: "error/setError",payload: {
        //                     status: "idle",
        //                     message: ""
        //                 }})
        //         },3000)
        //     }
        //     if (newError.status=="yes"){
        //         setErrorMessage(newError.message)
        //         setErrorSnackbar(true);
        //         setTimeout(() => {
        //             setErrorSnackbar(false);
        //             dispatch({type: "error/setError",payload: {
        //                     status: "idle",
        //                     message: ""
        //                 }})
        //         },3000)
        //     }
        // }, [newError]);
        const handleGoToAccount = () => {
            const userId = params.row.userId;
            window.location.href = `/profile/${userId}`;
            // console.log(userId)
            setOpen(false);
        };
        const handleAddClick = () => {
            dispatch({type: "saga/addToBlacklist", payload: {reason: reason, candidateId: params.row.candidateId}});
            // console.log(reason, params.row.candidateId);
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
                            User ID: {params.row.userId}
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
                        <Button onClick={handleGoToAccount}>Go To Account</Button>
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
        // console.log("start dispatch")
        dispatch({type: "saga/getCandidateAdmin"});
        // console.log("end dispatch")
    }, [dispatch]);
    const candidate = useSelector(state => state.admin.candidate)
    // console.log("state: ", candidate)

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
        // {field: "candidateId", headerName: isSm ? "Candidate ID" : "cID", flex: isSm ? 0.5 : 0.3},
        {
            field: "userName",
            headerName: "Username",
            flex: 0.3,
            valueGetter: (params) => params.row.user.userName,
        },
        {
            field: "fullName",
            headerName: "Full Name",
            flex: 0.3,
            valueGetter: (params) => params.row.user.fullName,
            hide: true,
        },
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
                            // borderBottom: "5"
                        },
                        "& .MuiDataGrid-virtualScroller": {
                            backgroundColor: grey[100]
                        },
                        "& .MuiDataGrid-footerContainer": {
                            // borderTop: "5",
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
                        disableColumnMenu={true}/>
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
        const handleGoToAccount = () => {
            const userId = params.row.userId;
            window.location.href = `/profile/${userId}`;
            // console.log(userId)
            setOpen(false);
        };
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
                            User ID: {params.row.userId}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleGoToAccount}>Go To Account</Button>
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
        dispatch({type: "saga/getInterviewerAdmin"});
    }, [dispatch]);
    useEffect(() => {
        dispatch({type: "saga/getDepartmentAdmin"});
    }, [dispatch]);
    const departments = useSelector(state => state.admin.department)
    const interviewer = useSelector(state => state.admin.interviewer)
    const interviewersWithDepartmentNames = interviewer.map((interviewer) => {
        const department = departments.find((department) => department.departmentId === interviewer.departmentId);
        const departmentName = department ? department.departmentName : "";
        return {...interviewer, departmentName};
    });

    function QuickSearchToolbar() {
        return (
            <Grid container margin={1}
            >
                <GridToolbarQuickFilter/>
                <GridToolbar></GridToolbar>
            </Grid>
        );
    }

    // function getUser(interviewerId) {
    //     return inerviewerNames.find(user => user.interviewerId === interviewerId);
    // }

    const columns = [
        // {field: "interviewerId", headerName: "Interviewer ID", flex: 0.4},
        {
            field: "userName",
            headerName: "Username",
            flex: 0.2,
            valueGetter: (params) => params.row.user.userName,
        },
        {
            field: "fullName",
            headerName: "Full Name",
            flex: 0.3,
            valueGetter: (params) => params.row.user.fullName,
            cellClassName: "name-column--cell",
        },
        {
            field: "departmentName",
            headerName: "Department",
            flex: 0.2,
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
                            // borderBottom: "5"
                        },
                        "& .MuiDataGrid-virtualScroller": {
                            backgroundColor: grey[100]
                        },
                        "& .MuiDataGrid-footerContainer": {
                            // borderTop: "5",
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
                        rows={interviewersWithDepartmentNames}
                        getRowId={(row) => row.interviewerId}
                        columns={columns}
                        slots={{toolbar: QuickSearchToolbar}}
                        // display="flex"
                        disableColumnMenu={true}/>
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
        const handleGoToAccount = () => {
            const userId = params.row.userId;
            window.location.href = `/profile/${userId}`;
            // console.log(userId)
            setOpen(false);
        };
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
                            User ID: {params.row.userId}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleGoToAccount}>Go To Account</Button>
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
        dispatch({type: "saga/getRecruiterAdmin"});
    }, [dispatch]);
    useEffect(() => {
        dispatch({type: "saga/getDepartmentAdmin"});
    }, [dispatch]);
    const departments = useSelector(state => state.admin.department)
    const recruiter = useSelector(state => state.admin.recruiter)
    const recruitersWithDepartmentNames = recruiter.map((recruiter) => {
        const department = departments.find((department) => department.departmentId === recruiter.departmentId);
        const departmentName = department ? department.departmentName : "";
        return {...recruiter, departmentName};
    });
    // function getUser(recruiterId) {
    //     return recruiterNames.find(user => user.recruiterId === recruiterId);
    // }
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
        // {field: "recruiterId", headerName: "Recruiter ID", flex: 0.4},
        {
            field: "userName",
            headerName: "Username",
            flex: 0.2,
            valueGetter: (params) => params.row.user.userName,
        },
        {
            field: "fullName",
            headerName: "Full Name",
            flex: 0.3,
            valueGetter: (params) => params.row.user.fullName,
            cellClassName: "name-column--cell",
        },
        {field: 'departmentName', headerName: 'Department', flex: 0.2},
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
                            // borderBottom: "5"
                        },
                        "& .MuiDataGrid-virtualScroller": {
                            backgroundColor: grey[100]
                        },
                        "& .MuiDataGrid-footerContainer": {
                            // borderTop: "5",
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
                        rows={recruitersWithDepartmentNames}
                        getRowId={(row) => row.recruiterId}
                        columns={columns}
                        slots={{toolbar: QuickSearchToolbar}}
                        disableColumnMenu={true}/>
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
    const [isLoading, setIsLoading] = React.useState(true);

    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    // Simulate loading data
    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <Card
            raised={true}
            sx={{
                padding: 4,
                mt: 4
            }}
        >
            <Grid container >
                <AppBar position="static" sx={{backgroundColor: '#ffffff'}}>
                    <Tabs
                        display="flex"
                        value={value}
                        onChange={handleChange}
                        variant="fullWidth"
                        // width="70vw"
                        aria-label="selectTableRoles"
                        TabIndicatorProps={{
                            style: {
                                backgroundColor: "#000000",
                            }
                        }}
                        sx={{
                            backgroundColor: '#ffffff',
                            color: '#000000',
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

                    {isLoading ? (
                        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: 200}}>
                            <CircularProgress sx={{color: '#000'}}/>
                        </Box>
                    ) : (
                        <React.Fragment>
                            <CandidateTable value={value} index={0}/>
                            <InterviewerTable value={value} index={1}/>
                            <RecruiterTable value={value} index={2}/>
                        </React.Fragment>
                    )}
                </AppBar>
            </Grid>
        </Card>
    );
}

const Page_Company_Account = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));
    const isXs = useMediaQuery(theme.breakpoints.up('xs'));
    const newError = useSelector((state) => state.error);
    const [errorSnackbar, setErrorSnackbar] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [alertType, setAlertType] = useState("success");
    useEffect(() => {
        // console.log("error toast start", newError)
        if (newError.status=="no"){
            setErrorMessage("Account Added!")
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
            setErrorMessage(newError.message)
            setErrorSnackbar(true);
            setTimeout(() => {
                setErrorSnackbar(false);
                dispatch({type: "error/setError",payload: {
                        status: "idle",
                        message: ""
                    }})
            },3000)
        }
    }, [newError]);

    // if (useGetRole()=="admin") {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Card
                    raised={true}
                    sx={{
                        // display:'flex',
                        // border: "1px solid black",
                        // borderRadius: 1,
                        padding: 4,
                        mt: '5vh'
                    }}>
                    <Grid container columnSpacing={{xs: 0.5}} alignItems="center">
                        <Grid item xs={7} sm={12}>
                            <Grid container display="flex">
                                <Grid item md={0.8} xs={12} display="flex">
                                    <ViewListIcon  sx={isMd ? {fontSize: 60} : {fontSize: 40}}/>
                                </Grid>
                                <Grid item md={11} xs={12}
                                      display="flex"
                                      justifyContent="left">
                                    <Typography
                                        m="0px 10px 20px 0px"
                                        variant={isMd ? "h3" : "h4"}
                                        // justifyContent="left"
                                        fontWeight="bold"
                                    >
                                        Account List
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={5} sm={12}>
                            <Grid container columnSpacing={{xs: 0, sm: 3}} rowSpacing={{xs: 1, sm: 0}} display="flex">
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
                                            boxShadow: 3,
                                            minWidth: '120px',
                                            backgroundColor: grey[900],
                                            '&:hover': {
                                                color: grey[900],
                                                backgroundColor: grey[300], // set the hover color to light grey
                                            },
                                        }}
                                        startIcon={<AccountCircleIcon/>}
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
                                            boxShadow: 3,
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
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
            <Grid item xs={12} mb="10vh">
                <FullWidthTabs/>
            </Grid>
            <Snackbar
                open={errorSnackbar}
                autoHideDuration={5000}
                onClose={() => setErrorSnackbar(false)}
                anchorOrigin={{vertical: "bottom", horizontal: "center"}}
            >
                <Alert severity={alertType} onClose={() => setErrorSnackbar(false)}>
                    {/* {newError.message} */}
                    {errorMessage}
                </Alert>
            </Snackbar>
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