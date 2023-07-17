import { useState } from "react"
import { Button, Grid, Box, paginationItemClasses, ButtonGroup } from "@mui/material"
import { Typography } from "@mui/material"
import Info_view from "../../components/View_recruitment/Info_view"
import { DataGrid, GridToolbarQuickFilter } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import "./Page_Company_Recruitment_Id.css"
//// update final
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

const styleofbox = {
    borderRadius: "8px",
    border: "1px solid black",
    marginTop: "10px",
    backgroundColor: "#6cbcc4"
}


const Page_Company_Recruitment_Id = () => {
    const navigate = useNavigate();

    let [currentTable, setCurrentTable] = useState(0)
    // const [pending_table, setPending_table] = useState(true);
    // function handle_open_pending_table() {
    //     setPending_table(true);
    //     setReject_table(false);
    //     setPass_table(false);

    // }
    // const [reject_table, setReject_table] = useState(false);
    // function handle_open_reject_table() {
    //     setReject_table(true);
    //     setPending_table(false);
    //     setPass_table(false);

    // }
    // const [pass_table, setPass_table] = useState(false);
    // function handle_open_pass_table() {
    //     setPass_table(true);
    //     setPending_table(false);
    //     setReject_table(false);

    // }

    const datas = require('../../data/Application_list/list.json');
    const pending = datas.filter(data => {
        return data.status === false
    });
    const pass = datas.filter(data => {
        return data.status === true
    });
    const reject = datas.filter(data => {
        return data.priority === false
    });
    const handleEditClick = (params) => {
        navigate(`/company/recruitment/:recruitmentid/application/${params.id}`);
    }
    const handleEdit = () => {
        navigate('/company/recruitment/:recruitmentid/update');
    }
    const columns = [
        {
            field: "id",
            headerName: "ID",
            headerAlign: 'center',
            width: 200
        },

        {
            field: "fullname",
            headerName: "Candidate Name",
            headerAlign: 'center',
            width: 200
        },
        {
            field: "Detail",
            type: "action",
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
            width: 200
        }
    ];
    return (
        <div className="page_company_recruitment_id">
            <Grid container spacing={2}>
                <Grid item xs={3}>
                </Grid>
                <Grid item xs={6}>
                    <Box sx={styleofbox}>
                        <Info_view />
                    </Box>
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                    <Button sx={{ bgcolor: 'secondary.main', color: 'black', border: '2px solid black' }} variant='outlined' onClick={handleEdit}>
                        Chỉnh sửa
                    </Button>

                </Grid>
            </Grid>
            <Box
                display="flex"
                minHeight="130vh"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                sx={{ height: 200, width: '45%', margin: "auto" }}>
                <Box minHeight="125vh">
                    <Grid container spacing={2} >
                        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Typography variant='h4' sx={{ fontStyle: "Times New Roman" }} >
                                <p className="thick"> Tất cả hồ sơ</p>
                            </Typography>
                        </Grid>
                        <Box width="100%" />
                        <Grid item xs={12} >
                            <ButtonGroup sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Button sx={{ textDecoration: currentTable == 0 ? 'underline' : 'none' }} variant={currentTable == 0 ? 'contained' : 'outlined'} onClick={() => { setCurrentTable(0) }} >
                                    Đang chờ
                                </Button>

                                <Button sx={{ textDecoration: currentTable == 1 ? 'underline' : 'none' }} variant={currentTable == 1 ? 'contained' : 'outlined'} onClick={() => { setCurrentTable(1) }} >
                                    Đã từ chối
                                </Button>

                                <Button sx={{ textDecoration: currentTable == 2 ? 'underline' : 'none' }} variant={currentTable == 2 ? 'contained' : 'outlined'} onClick={() => { setCurrentTable(2) }} >
                                    Đã duyệt
                                </Button>
                            </ButtonGroup>
                            <Grid item xs={12}></Grid>
                        </Grid>
                    </Grid>

                    {currentTable == 0 ? (
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
                                // display: "flex",
                                // justifyContent: "center",
                                // alignItems: "center"
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
                    ) : null}
                    {currentTable == 1 ? (
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
                                // justifyContent: "center",
                                // alignItems: "center",
                                // margin: "auto"
                            }}
                            slots={{ toolbar: QuickSearchToolbar }}
                            rowHeight={72}
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

                    ) : null}
                    {currentTable == 2 ? (
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
                                // justifyContent: "center",
                                // alignItems: "center",
                                // margin: "auto"
                            }}
                            slots={{ toolbar: QuickSearchToolbar }}
                            rowHeight={72}
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
                    ) : null}
                </Box>
            </Box>

        </div>
    )
}

export default Page_Company_Recruitment_Id