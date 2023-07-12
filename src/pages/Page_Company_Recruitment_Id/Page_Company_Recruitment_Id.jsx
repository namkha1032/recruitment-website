import { useState } from "react"
import { Button, Grid, Box, paginationItemClasses } from "@mui/material"
import { Typography } from "@mui/material"
import Info_view from "../../components/View_recruitment/Info_view"
import { DataGrid, GridToolbarQuickFilter } from '@mui/x-data-grid';
import { Navigate, useNavigate } from 'react-router-dom';



function QuickSearchToolbar() {
    return (
        <Box

            sx={{
                p: 0.5,
                pb: 0,
                marginLeft: 50,

            }}
        >
            <GridToolbarQuickFilter />
        </Box>
    );
}

const other = {
    autoHeight: true,
    showCellVerticalBorder: true,
    showColumnVerticalBorder: true,
};



const Page_Company_Recruitment_Id = () => {
    const navigate = useNavigate();
    const [pending_table, setPending_table] = useState(false);
    function handle_open_pending_table() {
        setPending_table(true);
        setReject_table(false);
        setPass_table(false);
    }
    const [reject_table, setReject_table] = useState(false);
    function handle_open_reject_table() {
        setReject_table(true);
        setPending_table(false);
        setPass_table(false);
    }
    const [pass_table, setPass_table] = useState(false);
    function handle_open_pass_table() {
        setPass_table(true);
        setPending_table(false);
        setPass_table(false);
    }

    const pending = require('../../data/Application_list/pending.json');
    const reject = require('../../data/Application_list/reject.json');
    const pass = require('../../data/Application_list/pass.json');

    const handleEditClick = (params) => {
        // window.location.href = "/company/recruitment/:recruitmentid/application/"+ params.id;
        navigate(`/company/recruitment/:recruitmentid/application/${params.id}`);
    }
    const columns = [
        {
            field: "id",
            headerName: "ID",
            headerAlign: 'center',
            width: 100
        },

        {
            field: "candidatename",
            headerName: "Candidate Name",
            headerAlign: 'center',
            width: 200
        },
        {
            field: "Detail",
            renderCell: (cellValues) => {
                return (
                    <Button
                        onClick={() => handleEditClick(cellValues)}
                        variant="contained"
                        color="primary"
                    >
                        Detail
                    </Button>
                );
            },
            headerAlign: 'center',
            width: 350
        }
    ];

    return (
        <div className="page_company_recruitment_id">
            <Grid container spacing={2}>
                <Grid item xs={3}></Grid>
                {/* <Grid item xs={5}></Grid> */}
                <Grid item xs={6}>
                    <Info_view />
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
            <Box
                display="flex"
                minHeight="150vh"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                sx={{ height: 200, width: '55%', margin: "auto" }}>
                <Box minHeight="125vh">
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography variant='h4' sx={{justifyContent: "center", alignItems: "center"}} >
                                <p class="thick"> Tất cả hồ sơ</p>
                            </Typography>
                        </Grid>
                        <Box width="100%" />
                        <Grid item xs={3}>
                            <Button variant='outlined' onClick={handle_open_pending_table}>
                                Đang chờ
                            </Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant='outlined' onClick={handle_open_reject_table}>
                                Đã từ chối
                            </Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant='outlined' onClick={handle_open_pass_table}>
                                Đã duyệt
                            </Button>
                        </Grid>
                        <Grid item xs={12}></Grid>
                    </Grid>

                    {pending_table && (
                        <DataGrid
                            sx={{
                                "& .MuiDataGrid-columnHeaders": {
                                    backgroundColor: "#329da8",
                                    color: "#111212",
                                    fontSize: 16
                                },
                                "& .MuiDataGrid-cell": {
                                    border: 1,
                                    borderRight: 1,
                                    borderTop: 1,
                                    borderBottom: 1

                                },
                                justifyContent: "center",
                                alignItems: "center",
                                margin: "auto"
                            }}
                            slots={{ toolbar: QuickSearchToolbar }}

                            rowHeight={72}
                            rows={pending}
                            {...other}
                            columns={columns}
                            initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: 5,
                                    },
                                },
                            }}
                            pageSizeOptions={[5]}
                        />
                    )}
                    {reject_table && (

                        <DataGrid
                            sx={{
                                "& .MuiDataGrid-columnHeaders": {
                                    backgroundColor: "#329da8",
                                    color: "#111212",
                                    fontSize: 16
                                },
                                "& .MuiDataGrid-cell": {
                                    border: 1,
                                    borderRight: 1,
                                    borderTop: 1,
                                    borderBottom: 1

                                },
                                justifyContent: "center",
                                alignItems: "center",
                                margin: "auto"
                            }}
                            rowHeight={80}
                            rows={reject}
                            {...other}
                            columns={columns}
                            initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: 5,
                                    },
                                },
                            }}
                            pageSizeOptions={[5]}
                        />

                    )}
                    {pass_table && (
                        <DataGrid
                            sx={{
                                "& .MuiDataGrid-columnHeaders": {
                                    backgroundColor: "#329da8",
                                    color: "#111212",
                                    fontSize: 16
                                },
                                "& .MuiDataGrid-cell": {
                                    border: 1,
                                    borderRight: 1,
                                    borderTop: 1,
                                    borderBottom: 1

                                },
                                justifyContent: "center",
                                alignItems: "center",
                                margin: "auto"
                            }}
                            rowHeight={80}
                            rows={pass}
                            {...other}
                            columns={columns}
                            initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: 5,
                                    },
                                },
                            }}
                            pageSizeOptions={[5]}
                        />
                    )}
                </Box>
            </Box>

        </div>

    )
}

export default Page_Company_Recruitment_Id