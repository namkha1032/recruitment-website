import React, {useEffect} from 'react'
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography} from "@mui/material"
import {DataGrid, GridToolbar, GridToolbarQuickFilter} from "@mui/x-data-grid";
import {useNavigate} from "react-router-dom";
import {grey, red} from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import {ArrowBackIosNewRounded} from "@mui/icons-material";
import Card from "@mui/material/Card";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import {useDispatch, useSelector} from "react-redux";
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const RenderCheckAccount = ({ params }) => {
    const [open, setOpen] = React.useState(false);

    const handleGoToAccount = () => {
        const userId = params.row.userId;
        window.location.href = `/profile/${userId}`;
        setOpen(false);
    };

    return (
        <strong>
            <IconButton
                color="#000000"
                aria-label="Show Status"
                size="large"
                onClick={() => {
                    setOpen(true);
                }}
            >
                <FindInPageIcon />
            </IconButton>
            <Dialog
                open={open}
                onClose={() => {
                    setOpen(false);
                }}
                aria-labelledby="accountinfo"
                aria-describedby="accountdetails"
                sx={{
                    '& .MuiButton-text': {
                        color: 'black', // set the button text color to black
                    },
                }}
            >
                <DialogTitle id="alert-dialog-title">Account info</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Blacklist ID: {params.row.blackListId}
                        <br />
                        Candidate ID: {params.row.candidateId}
                        <br />
                        User ID: {params.row.userId || 'No ID'}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleGoToAccount}>Go To Account</Button>
                    <Button
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </strong>
    );
};const Page_Company_Account_Blacklist = () => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));
    const navigate = useNavigate()
    // const [account, setAccount] = useState('');
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({type: "saga/getBlacklist"});
    }, [dispatch]);
    useEffect(() => {
        dispatch({type: "saga/getCandidateAdmin"});
    }, [dispatch]);
    const candidates = useSelector(state => state.admin.candidate)
    const blacklist = useSelector(state => state.admin.blacklist)

    function QuickSearchToolbar() {
        return (
            <Grid container margin={1}
            >
                <GridToolbarQuickFilter/>
                <GridToolbar></GridToolbar>
            </Grid>
        );
    }

    // function getUser(candidateId) {
    //     return candidateNames.find(user => user.candidateId === candidateId);
    // }

    const columns = [
        // { field: "blackListId", headerName: "Blacklist ID", flex: 0.5, headerClassName: "blacklistId-header-column", cellClassName: "blacklistId-cell-column"},
        // { field: "candidateId", headerName: "Candidate ID", flex: 0.5},
        {
            field: 'fullName',
            headerName: 'Full Name',
            flex: 0.3,
            valueGetter: (params) => params.row.candidate?.user?.fullName || "John Doe"
        },
        {
            field: 'userName',
            headerName: 'User Name',
            flex: 0.3,
            valueGetter: (params) => params.row.candidate?.user?.userName || "johnvtuber"
        },
        {
            field: "reason",
            headerName: "Reason",
            flex: 0.4,
            cellClassName: "name-column--cell",
        },
        {field: "dateTime", headerName: "Blacklist Date", flex: 0.3},
        {
            field: "info",
            headerName: "Check Info",
            flex: 0.2,
            renderCell: (params) => {
                return (<RenderCheckAccount params={params}/>)
            },
        },
    ];
    const blacklistWithNames = blacklist.map((item) => {
        const candidate = candidates.find((c) => c.candidateId === item.candidateId);
        const userId = candidate ? candidate.userId : ""; // Check if candidate exists before extracting the userId field
        return { ...item, candidate, userId };
    });

    return (
        <Grid item xs={12} mb="10vh">
            <Card
                raised={true}
                sx={{
                    // display:'flex',
                    // border: "1px solid black",
                    // borderRadius: 1,
                    mt: '5vh',
                    padding: 4
                }}>
                <Grid container>
                    <Grid item xs={10} display="flex">
                        <Grid container>
                            <Grid item xs={12} md={1}
                                  display="flex"
                                  alignItems="center"
                                  justifyContent="left">
                                <DoDisturbIcon sx={isMd ? {fontSize: 60} : {fontSize: 40}}></DoDisturbIcon>
                            </Grid>
                            <Grid item md={11} xs={12}
                                  display="flex"
                                  alignItems="center"
                                  justifyContent="left">
                                <Typography variant={isMd ? "h3" : "h4"}
                                            display="flex"
                                            alignItems="center"
                                            fontWeight="bold"
                                            justifyContent="left">
                                    Blacklist
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={2} display="flex">
                        <Grid container spacing={{xs: 0, sm: 3}} rowSpacing={{xs: 1, sm: 0}} display="flex">
                            <Grid
                                item
                                m="10px 0 10px 0"
                                xs={12}
                                display="flex"
                                justifyContent="right">
                                <Button
                                    variant="contained"
                                    size="medium"
                                    fullWidth
                                    onClick={() => {
                                        navigate("/company/account")
                                    }}
                                    sx={{
                                        boxShadow: 3,
                                        backgroundColor: grey[900],
                                        '&:hover': {
                                            color: grey[900],
                                            backgroundColor: grey[300], // set the hover color to light grey
                                        },
                                    }}
                                    style={{minWidth: '100px'}}
                                    startIcon={<ArrowBackIosNewRounded/>}
                                >
                                    Back to Account List
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
            <Card
                raised={true}
                sx={{
                    // width:'77vw',
                    display: 'flex',
                    // border: "1px solid black",
                    // borderRadius: 1,
                    padding: 4,
                    mt: 4
                }}>
                <Grid container>
                    <Grid
                        // width="78vw"
                        item
                        // m="0px 10px 0px 10px"
                        xs={12}
                        display="flex"
                        sx={{
                            "& .MuiDataGrid-root": {
                                border: "none",
                            },
                            "& .MuiDataGrid-cell": {
                                borderBottom: "none",
                                backgroundColor: "#ffffff",
                            },
                            "& .name-column--cell": {
                                color: grey[900],
                            },
                            "& .blacklistId-header-column": {
                                color: red[800],
                            },
                            "& .blacklistId-cell-column": {
                                color: red[800],
                            },
                            "& .MuiDataGrid-columnHeaders": {
                                // backgroundColor: grey[100],
                                borderBottom: "5",
                            },
                            "& .MuiDataGrid-virtualScroller": {
                                backgroundColor: grey[100],
                            },
                            "& .MuiDataGrid-footerContainer": {
                                borderTop: "5",
                                // backgroundColor:grey[100],
                            },
                            "& .MuiCheckbox-root": {
                                color: `${"green"} !important`,
                            },
                            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                                color: `${grey[700]} !important`,
                            },
                        }}
                    >
                        <DataGrid
                            rows={blacklistWithNames}
                            getRowId={(row) => row.blackListId}
                            columns={columns}
                            slots={{toolbar: QuickSearchToolbar}}
                        />
                    </Grid>
                </Grid>
            </Card>
        </Grid>

    );
}
export default Page_Company_Account_Blacklist