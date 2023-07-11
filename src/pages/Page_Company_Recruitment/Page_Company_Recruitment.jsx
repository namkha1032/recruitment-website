import { useMemo, useState } from "react";
import {
  Chip,
  Button,
  Menu,
  MenuItem,
  Input,
  Autocomplete,
  TextField,
} from "@mui/material";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import DoNotDisturbOnIcon from "@mui/icons-material/DoNotDisturbOn";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import GetAppIcon from "@mui/icons-material/GetApp";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FlagIcon from "@mui/icons-material/Flag";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { DataGrid, GridActionsCellItem, useGridApiContext } from "@mui/x-data-grid";
import { Box } from "@mui/system";
import datasjson from "./Page_Company_Recruitment_Data.json";
import { useNavigate } from "react-router-dom";
import { randomNumberBetween } from "@mui/x-data-grid/utils/utils";
import { localeVN } from "../../locale/locale";
import Grid from "@mui/material/Grid";


function IdNavigate({ id }) {
  function handleClick() {
    alert("Navigate to position with id " + id);
  }

  return (
    <button
      onClick={handleClick}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
      }}
    >
      {id}
    </button>
  );
}

function TitleNavigate({ title, id }) {
  function handleClick() {
    alert("Navigate to position with id " + id);
  }

  return (
    <button
      onClick={handleClick}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
      }}
    >
      {title}
    </button>
  );
}

function NullString() {
  return <Chip icon={<PriorityHighIcon />} label="Trống" />;
}
function NotStart() {
  return (
    <Chip
      label="Chưa bắt đầu"
      variant="outlined"
      style={{
        color: "#E0E0E0",
        backgroundColor: "white",
        borderColor: "#E0E0E0",
      }}
    />
  );
}

function Pending() {
  return (
    <Chip
      label="Đang diễn ra"
      variant="outlined"
      style={{
        color: "#00C853",
        backgroundColor: "white",
        borderColor: "#00C853",
      }}
    />
  );
}

function Completed() {
  return (
    <Chip
      label="Kết thúc"
      variant="outlined"
      style={{
        color: "#D84315",
        backgroundColor: "white",
        borderColor: "#D84315",
      }}
    />
  );
}

export default function Page_Company_Recruitment() {

  const navigate = useNavigate();

  const [rows, setRows] = useState(datasjson);
  const [anchorEl, setAnchorEl] = useState(null);
  const [valueSearch, setValueSearch] = useState("");
  const [valueChoose, setValueChoose] = useState(null);
  const [departmentChoose, setDepartmentChoose] = useState(null);
  const [statusChoose, setStatusChoose] = useState(null);

  function handleMoreClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleRowClick(id) {
    alert("Navigate to position id: " + id);
  }

  function handleAddClick() {
    navigate("./create");
  }

  function handleSearchClick() {
    alert("Value search: " + valueSearch);
  }

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

  const columns = useMemo(() => [
    {
      field: "id",
      type: "number",
      headerAlign: "left",
      align: "left",
      width: 40,
      renderHeader: () => <span>Mã</span>,
      renderCell: (params) => {
        if (params.value === undefined) return NullString();
        return <IdNavigate id={params.value} />;
      },
    },
    {
      field: "Title",
      type: "string",
      headerAlign: "left",
      align: "left",
      minWidth: 200,
      flex: 1,
      renderHeader: () => <span>Tên vị trí</span>,
      renderCell: (params) => {
        if (params.value === undefined) return NullString();
        return <TitleNavigate title={params.value} id={params.row.id} />;
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
      renderCell: (params) => {
        if (params.value === undefined) return NullString();
      },
    },
    {
      field: "MaxHiringQty",
      type: "number",
      headerAlign: "center",
      align: "center",
    //   flex: 0.3,
      renderHeader: () => <span>Tối đa</span>,
      minWidth: 100
    },
    {
      field: "HiredQty",
      type: "number",
      headerAlign: "center",
      align: "center",
      renderHeader: () => <span>Đã đăng ký</span>,
    },
    {
      field: "status",
      minWidth: 180,
      headerAlign: "center",
      align: "center",
      renderHeader: () => <span>Trạng thái</span>,
      renderCell: (params) => {
        const a = randomNumberBetween(params.row.id, 1, 3);
        switch (Math.round(a())) {
          case 1:
            return NotStart();
          case 2:
            return Pending();
          case 3:
            return Completed();
          default:
            return Completed();
        }
      },
    },
    {
      field: "actions",
      type: "actions",
      width: 30,
      headerAlign: "right",
      align: "right",
      getActions: (params) => [
        <GridActionsCellItem
          icon={<InfoIcon variant="outlined" />}
          label="Chi tiết"
          onClick={() => alert("Navigate to position id: " + params.row.id)}
          showInMenu
        />,
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Chỉnh sửa"
          onClick={() => alert("Modal Chỉnh sửa display")}
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
                md:"flex-end",
                xs:"flex-start",
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
          <MoreVertIcon
            onClick={handleMoreClick}
            sx={{
                marginLeft: 2,
              cursor: "pointer",
              "&:hover": { opacity: 0.6 },
            }}
          />
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
          </Menu>
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
            sx={{width: 200, marginRight: 2}}
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
              options={["Phòng ban A", "Phòng ban B", "Phòng ban C"]}
              sx={{ width: 200}}
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

        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            justifyContent: {
                md:"flex-end",
                xs:"flex-start"
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
              placeholder="Nhập mã, tên vị trí tuyển dụng..."
              disableUnderline
              value={valueSearch}
              onChange={(e) => setValueSearch(e.target.value)}
              sx={{
                width: 250, height: 50
              }}
            />
            <IconButton type="button" aria-label="search" onClick={handleSearchClick} >
              <SearchIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
            width: "100%",
          height: 600,
        }}
      >
        <DataGrid
          columns={columns}
          rows={rows}
          sx={{
            "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
              outline: "none",
            },
            "&.MuiDataGrid-root .MuiDataGrid-columnHeader": {
              backgroundColor: "#1565C0",
              color: "white",
              fontWeight: 700,
            },
            "&.MuiDataGrid-root .MuiDataGrid-row": { 
            },
          }}
          localeText={localeVN}
          slotProps={{
            pagination: {
              labelRowsPerPage: "Số lượng hiển thị",
              labelDisplayedRows: ({ from, to, count }) =>
                `${from}–${to} của ${count !== -1 ? count : `hơn ${to}`}`,
            },
          }}
          disableColumnMenu
          pagination
          pageSizeOptions={[5, 10, 25, 50, 100]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 25,
              },
            },
          }}
        />
      </Box>
    </Box>
  );
}
