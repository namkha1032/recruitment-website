import { useMemo, useState } from "react";
import {
  Chip,
  Autocomplete,
  TextField,
} from "@mui/material";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import datasjson from "./Page_Company_Interview_Data.json";
import { useNavigate } from "react-router-dom";
import { NullString, NotStart, Pending, Completed } from "../../components/Label/Label";
import Grid from "@mui/material/Grid";

export default function Page_Company_Interview() {
  const navigate = useNavigate();

  const [rows, setRows] = useState(datasjson);
  
  // const [anchorEl, setAnchorEl] = useState(null);
  
  // const [valueSearch, setValueSearch] = useState("");
  
  const [valueChoose, setValueChoose] = useState(null);
  const [departmentChoose, setDepartmentChoose] = useState(null);
  const [statusChoose, setStatusChoose] = useState(null);

  // function handleMoreClick(event) {
  //   setAnchorEl(event.currentTarget);
  // }

  // function handleClose() {
  //   setAnchorEl(null);
  // }

  function handleRowClick(id) {
    alert("Navigate to position id: " + id);
  }

  // function handleAddClick() {
  //   navigate("./create");
  // }

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

  function handleProfileDetailClick(value) {
    navigate(`../../profile/${value}`)
  }

  function handleEditClick(value) {
    navigate(`./${value}/update`)
  }

  const columns = useMemo(() => [
    {
      field: "id",
      type: "number",
      headerAlign: "left",
      align: "left",
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
      field: "CandidateName",
      type: "string",
      headerAlign: "left",
      align: "left",
      flex: 1,
      renderHeader: () => <span>Ứng viên</span>,
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
      field: "InterviewerName",
      type: "string",
      headerAlign: "left",
      align: "left",
      flex: 1,
      renderHeader: () => <span>Người phỏng vấn</span>,
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
      field: "StartTime",
      type: "string",
      headerAlign: "left",
      align: "left",
      renderHeader: () => <span>Ngày bắt đầu</span>,
      minWidth: 180,
      renderCell: (params) => {
        if (params.value === undefined) return NullString();
      },
    },
    {
      field: "EndTime",
      type: "string",
      headerAlign: "left",
      align: "left",
      renderHeader: () => <span>Ngày kết thúc</span>,
      minWidth: 180,
      renderCell: (params) => {
        if (params.value === undefined) return NullString();
      },
    },
    {
      field: "Status",
      minWidth: 180,
      headerAlign: "center",
      align: "center",
      renderHeader: () => <span>Trạng thái</span>,
      renderCell: (params) => {
        if (params.value === true) {
          return Completed();
        }
        return Pending();
      },
    },
    {
      field: "actions",
      type: "actions",
      width: 60,
      headerAlign: "right",
      align: "right",
      getActions: (params) => [
        <GridActionsCellItem
          icon={<InfoIcon variant="outlined" />}
          label="Chi tiết"
          onClick={() => handleDetailClick(params.row.id)}
          showInMenu
        />,
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Chỉnh sửa"
          onClick={() => handleEditClick(params.row.id)}
          showInMenu
        />,
      ],
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
            Danh sách buổi phỏng vấn
          </Box>
        </Grid>

        {/* <Grid
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
            Tạo buổi phỏng vấn
          </Button>

          <IconButton onClick={handleMoreClick} sx={{
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
              <QueryStatsIcon sx={{ mr: 1.75 }} /> Xem thống kê
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <GetAppIcon sx={{ mr: 1.75 }} /> Xuất dữ liệu (định dạng .csv)
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <FlagIcon sx={{ mr: 1.75 }} /> Báo lỗi
            </MenuItem>
          </Menu>
        </Grid> */}

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
            options={["Trạng thái"]}
            sx={{ width: 200, marginRight: 2 }}
            renderInput={(params) => (
              <TextField {...params} label="Lọc theo..." />
            )}
            value={valueChoose}
            onChange={(event, value) => handleChooseValue(value)}
          />
          {valueChoose === "Trạng thái" && (
            <Autocomplete
              disablePortal
              id="filter-type"
              options={["Chưa bắt đầu", "Đang diễn ra", "Kết thúc"]}
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
              placeholder="Nhập ID, tên ứng viên..."
              disableUnderline
              value={valueSearch}
              onChange={(e) => setValueSearch(e.target.value)}
              sx={{
                width: 250,
                height: 50,
              }}
            />
            <IconButton type="button" aria-label="search" onClick={handleSearchClick}>
              <SearchIcon />
            </IconButton>
          </Box>
        </Grid> */}
      </Grid>

      <Box
        sx={{
          width: "100%",
        }}
      >
        <DataGrid
          columns={columns}
          rows={rows}
          sx={{
            "&.MuiDataGrid-root": {
              borderRadius: 1,
            },
            "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
              outline: "none",
            },
            "&.MuiDataGrid-root .MuiDataGrid-columnHeader": {
              backgroundColor: "#1565C0",
              color: "white",
              fontWeight: 700,
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
          pagination
          pageSizeOptions={[5, 10, 25, 50, 100]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 25,
              },
            },
          }}
          onCellClick={(params, event) => {
            if (params.field === "id") {
              handleDetailClick(params.row.id)
            }
            if (params.field === "CandidateName") {
              handleProfileDetailClick(params.row.CandidateId)
            }
            if (params.field === "InterviewerName")
              handleProfileDetailClick(params.row.InterviewerId)
          }}
        />
      </Box>
    </Box>
  );
}
