import { useEffect, useMemo, useState } from "react";
import {
  Button,
  Autocomplete,
  TextField,
} from "@mui/material";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DoNotDisturbOnRoundedIcon from '@mui/icons-material/DoNotDisturbOnRounded';
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import datasjson from "./Page_Company_Recruitment_Data.json";
import { useNavigate } from "react-router-dom";
import { randomNumberBetween } from "@mui/x-data-grid/utils/utils";
import Grid from "@mui/material/Grid";
import { NullString, NotStart, Pending, Completed, Postpone } from "../../components/Label/Label";
import { useDispatch, useSelector } from "react-redux";
import { delay } from "redux-saga/effects";



export default function Page_Company_Recruitment() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({type: "saga/getRecruitmentList"})
    dispatch({type: "saga/getDepartment"})
  }, [])

  const rows = useSelector(state => state.recruitment)
  const department_draft = useSelector(state => state.department)

  const departments = department_draft ? department_draft.map((department) => department.departmentName) : []
  // const [rows, setRows] = useState(datasjson);

  // const [anchorEl, setAnchorEl] = useState(null);
  // const [valueSearch, setValueSearch] = useState("");
  
  const [valueChoose, setValueChoose] = useState(null);
  const [departmentChoose, setDepartmentChoose] = useState(null);
  const [statusChoose, setStatusChoose] = useState(null);

  const [valueReport, setValueReport] = useState(0);

  // function handleMoreClick(event) {
  //   setAnchorEl(event.currentTarget);
  // }

  // function handleClose() {
  //   setAnchorEl(null);
  // }

  // function handleRowClick(id) {
  //   alert("Navigate to position id: " + id);
  // }

  function handleAddClick() {
    navigate("./create");
  }

  // function handleSearchClick() {
  //   alert("Value search: " + valueSearch);
  // }

  function handleChooseValue(value) {
    setValueChoose(value);
    setDepartmentChoose(null);
    setStatusChoose(null);
  }

  function handleChooseDepartment(value) {
    setDepartmentChoose(value);
  }

  function handleChooseStatus(value) {
    setStatusChoose(value);
  }

  function handleDetailClick(value) {
    navigate(`./${value}`)
  }

  function handleReportClick(value) {
    setValueReport(value)
    navigate(`./${value}/report`, { 
      state: {
        positionId: value,
      }
    })
  }

  function handleContinueClick(value) {
    dispatch({type: "saga/updateRecruitment", payload: {id: value, Status: "Đang diễn ra"}})
  }

  function handlePostponeClick(value) {
    dispatch({type: "saga/updateRecruitment", payload: {id: value, Status: "Tạm ngừng"}})
  }

  // function handleEditClick(value) {
  //   navigate(`./${value}/update`)
  // }

  const columns = useMemo(() => [
    {
      field: "id",
      type: "number",
      headerAlign: "left",
      align: "left",
      minWidth: 40,
      flex: 1,
      renderHeader: () => <span>ID</span>,
      renderCell: (params) => {
        if (params.value === undefined) return NullString();
        return (
          <Box
            sx={{
              "&:hover": {
                cursor: "pointer",
                textDecoration: "underline",
              },
            }}
          >
            {params.value}
          </Box>
        );
      },
    },
    {
      field: "PositionName",
      type: "string",
      headerAlign: "left",
      align: "left",
      minWidth: 200,
      flex: 1,
      renderHeader: () => <span>Tên vị trí</span>,
      renderCell: (params) => {
        if (params.value === undefined) return NullString();
        return (
          <Box
            sx={{
              "&:hover": {
                cursor: "pointer",
                textDecoration: "underline",
              },
            }}
          >
            {params.value}
          </Box>
        );
      },
      editable: true,
    },
    {
      field: "StartDate",
      type: "string",
      headerAlign: "left",
      align: "left",
      renderHeader: () => <span>Ngày bắt đầu</span>,
      minWidth: 180,
      flex: 1,
      renderCell: (params) => {
        if (params.value === undefined) return NullString();
      },
    },
    {
      field: "EndDate",
      type: "string",
      headerAlign: "left",
      align: "left",
      renderHeader: () => <span>Ngày kết thúc</span>,
      minWidth: 180,
      flex: 1,
      renderCell: (params) => {
        if (params.value === undefined) return NullString();
      },
    },
    // {
    //   field: "MaxHiringQty",
    //   type: "number",
    //   headerAlign: "center",
    //   align: "center",
    //   //   flex: 0.3,
    //   renderHeader: () => <span>Tối đa</span>,
    //   minWidth: 100,
    // },
    {
      field: "HiredQty",
      type: "number",
      headerAlign: "center",
      align: "center",
      renderHeader: () => <span>Đã đăng ký</span>,
      minWidth: 100,
      flex: 1,
    },
    {
      field: "Status",
      minWidth: 180,
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderHeader: () => <span>Trạng thái</span>,
      renderCell: (params) => {
        switch (params.value) {
          case "Chưa bắt đầu":
            return <NotStart />;
          case "Đang diễn ra":
            return <Pending />;
          case "Kết thúc":
            return <Completed />;
          default:
            return <Postpone />;
        }
      },
    },
    {
      field: "actions",
      type: "actions",
      width: 30,
      headerAlign: "right",
      align: "right",
      getActions: (params) => {
        if (params.row.Status === "Tạm ngừng") {
          return [
            <GridActionsCellItem
              icon={<InfoRoundedIcon variant="outlined" />}
              label="Chi tiết"
              onClick={() => handleDetailClick(params.row.id)}
              showInMenu
            />,
            <GridActionsCellItem
              icon={<QueryStatsRoundedIcon />}
              label="Báo cáo"
              onClick={() => handleReportClick(params.row.id)}
              showInMenu
            />,
            <GridActionsCellItem
              icon={<PlayCircleOutlineRoundedIcon sx={{ color: "#1565C0" }}/>}
              label="Tiếp tục tuyển dụng"
              onClick={() => handleContinueClick(params.row.id)}
              showInMenu
              sx={{ 
                color: "#1565C0" 
              }}
            />,
          ]
        }
        else if (params.row.Status === "Đang diễn ra") {
          return [
            <GridActionsCellItem
              icon={<InfoRoundedIcon variant="outlined" />}
              label="Chi tiết"
              onClick={() => handleDetailClick(params.row.id)}
              showInMenu
            />,
            <GridActionsCellItem
              icon={<QueryStatsRoundedIcon />}
              label="Báo cáo"
              onClick={() => handleReportClick(params.row.id)}
              showInMenu
            />,
            <GridActionsCellItem
              icon={<DoNotDisturbOnRoundedIcon sx={{ color: "#cc3300" }}/>}
              label="Tạm ngừng tuyển dụng"
              onClick={() => handlePostponeClick(params.row.id)}
              showInMenu
              sx={{ 
                color: "#cc3300" 
              }}
            />,
          ]
        }
        else {
          return [
            <GridActionsCellItem
              icon={<InfoRoundedIcon variant="outlined" />}
              label="Chi tiết"
              onClick={() => handleDetailClick(params.row.id)}
              showInMenu
            />,
            <GridActionsCellItem
              icon={<QueryStatsRoundedIcon />}
              label="Báo cáo"
              onClick={() => handleReportClick(params.row.id)}
              showInMenu
            />,
          ]
        }
      },
    },
  ]);

  return (
    <Box>
      <Grid
        container
        spacing={3}
        sx={{
          marginBottom: 5,
        }}
      >
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              fontSize: 40,
              fontWeight: 600,
              color: "#1565C0",
            }}
          >
            Danh sách vị trí tuyển dụng
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: {
              md: "flex-end",
              xs: "flex-start",
            },
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#1565C0",
              textTransform: "none",
              height: 50,
              width: 250,
            }}
            onClick={handleAddClick}
          >
            <AddCircleOutlineIcon sx={{ marginRight: 1 }} />
            Tạo vị trí tuyển dụng
          </Button>
          {/* <IconButton onClick={handleMoreClick} sx={{
            marginLeft: 1,
          }}>
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="more"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            variant="selectedMenu"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleClose}>
              <QueryStatsIcon sx={{ mr: 1.75 }} /> Xem báo cáo
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <GetAppIcon sx={{ mr: 1.75 }} /> Xuất dữ liệu (định dạng .csv)
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <FlagIcon sx={{ mr: 1.75 }} /> Báo lỗi
            </MenuItem>
          </Menu> */}
        </Grid>

        <Grid
          item
          xs={12}
          md={7}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Autocomplete
            disablePortal
            id="filter-type"
            options={["Phòng ban", "Trạng thái"]}
            sx={{ width: 200, marginRight: 2 }}
            renderInput={(params) => (
              <TextField {...params} label="Lọc theo..." />
            )}
            value={valueChoose}
            onChange={(event, value) => handleChooseValue(value)}
          />
          {valueChoose === "Phòng ban" && (
            <Autocomplete
              disablePortal
              id="filter-type"
              options={departments}
              sx={{ width: 200 }}
              renderInput={(params) => (
                <TextField {...params} label="Phòng ban..." />
              )}
              value={departmentChoose}
              onChange={(event, value) => handleChooseDepartment(value)}
            />
          )}
          {valueChoose === "Trạng thái" && (
            <Autocomplete
              disablePortal
              id="filter-type"
              options={["Chưa bắt đầu", "Đang diễn ra", "Kết thúc", "Tạm hoãn"]}
              sx={{ width: 200 }}
              renderInput={(params) => (
                <TextField {...params} label="Trạng thái..." />
              )}
              value={statusChoose}
              onChange={(event, value) => handleChooseStatus(value)}
            />
          )}
        </Grid>

        {/* <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            justifyContent: {
              md: "flex-end",
              xs: "flex-start",
            },
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              border: "1px solid rgb(210,210,210)",
              borderRadius: 1,
              paddingLeft: 2,
            }}
          >
            <Input
              placeholder="Nhập ID, tên vị trí tuyển dụng..."
              disableUnderline
              value={valueSearch}
              onChange={(e) => setValueSearch(e.target.value)}
              sx={{
                width: 250,
                height: 50,
              }}
            />
            <IconButton
              type="button"
              aria-label="search"
              onClick={handleSearchClick}
            >
              <SearchIcon />
            </IconButton>
          </Box>
        </Grid> */}
      </Grid>
      
      <Grid item xs={12} md={12}>
        <DataGrid
          columns={columns}
          rows={rows === null ? [] : rows}
          loading={rows === null}
          sx={{
            "&.MuiDataGrid-root": {
              borderRadius: 1,
            },
            "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
              outline: "none",
            },
            "&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within": {
              outline: "none",
            },
            "&.MuiDataGrid-root .MuiDataGrid-columnHeader": {
              backgroundColor: "#1565C0",
              color: "white",
              fontWeight: 700,
              fontSize: 14,
              border: "none",
            },
            "&.MuiDataGrid-root .MuiDataGrid-columnSeparator": {
              display: "none",
            },
            '&.MuiDataGrid-root .MuiDataGrid-virtualScroller::-webkit-scrollbar': {
              display: "none",
            },
            // "&.MuiDataGrid-root .MuiDataGrid-virtualScrollerContent--overflowed": {
            //   display: "none",
            // },
            "&.MuiDataGrid-root .MuiDataGrid-sortIcon": {
              color: "white",
            },
          }}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            pagination: {
              labelRowsPerPage: "Số lượng hiển thị",
              labelDisplayedRows: ({ from, to, count }) =>
                `${from}–${to} của ${count !== -1 ? count : `hơn ${to}`}`,
            },
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500, placeholder: "Tìm kiếm...", sx: {
                width: 300,
                marginBottom: 1,
              }},
              csvOptions: { disableToolbarButton: true },
              printOptions: { disableToolbarButton: true }
          },
          }}
          disableColumnMenu
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
          disableSelectionOnClick
          pagination
          pageSizeOptions={[5, 10, 15, 25, 50, 100]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          onCellClick={(params, event) => {
            if (params.field === "id" || params.field === "PositionName") {
              handleDetailClick(params.row.id)
            }
          }}
        />
      </Grid>
    </Box>
  );
}
