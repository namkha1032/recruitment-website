import { useMemo, useState, useEffect } from "react";
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
import DeleteIcon from "@mui/icons-material/Delete";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import GetAppIcon from "@mui/icons-material/GetApp";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FlagIcon from "@mui/icons-material/Flag";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CodeIcon from "@mui/icons-material/Code";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { Box } from "@mui/system";
import datasjson from "./Page_Company_Question_Data.json";
import { useNavigate } from "react-router-dom";
import { randomNumberBetween } from "@mui/x-data-grid/utils/utils";
import { localeVN } from "../../locale/locale";
import Grid from "@mui/material/Grid";
import QuestionFormModal from "./QuestionFormModal";
import QuestionModal from "./QuestionModal";
import { successAlert } from "../../components/Alert/SuccessAlert";
import { ToastContainer, Slide, Bounce, Flip, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteAlertModal from "./DeleteModal";

const listOfSkills = {
  skill: ["React", "Angular", "Java", "Python", "Figma", ".NET", "C", "C++"],
  language: ["English", "Vietnamese", "Japanese", "Chinese", "Korian"],
};

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

export default function Page_Company_Question() {
  const navigate = useNavigate();

  const [rows, setRows] = useState(datasjson);
  const [anchorEl, setAnchorEl] = useState(null);
  const [valueSearch, setValueSearch] = useState("");
  const [valueChoose, setValueChoose] = useState(null);
  const [departmentChoose, setDepartmentChoose] = useState(null);
  const [statusChoose, setStatusChoose] = useState(null);

  const [addModalStatus, setAddModalStatus] = useState(false);

  const [modalStatus, setModalStatus] = useState(false);
  const [valueUpdate, setValueUpdate] = useState({
    id: -1,
    QuestionName: "",
    Category: "",
    Skill: "",
  });
  const [typeStatus, setTypeStatus] = useState(false);

  const [deleteModalStatus, setDeleteModalStatus] = useState(false);
  const [valueDelete, setValueDelete] = useState(0);

  // const [successAlert, setSuccessAlert] = useState(false);

  // useEffect(() => {
  //   const id = setTimeout(() => {handleCloseSuccessAlert()}, 1500);
  //   return () => {clearTimeout(id)}
  // })

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

  function handleAddModalOpen() {
    setAddModalStatus(true);
  }

  function handleAddModalClose() {
    setAddModalStatus(false);
  }

  function handleSubmitQuestion(value) {
    successAlert("Tạo câu hỏi");
    setRows([
      ...rows,
      {
        id: rows.length + 1,
        QuestionName: value.question,
        Category: value.category,
        Skill: value.skill,
      },
    ]);
  }

  function handleModalOpen(value, type) {
    setValueUpdate(value);
    setTypeStatus(type);
    setModalStatus(true);
  }

  function handleModalClose() {
    setModalStatus(false);
  }

  function handleUpdateQuestion(value) {
    successAlert("Cập nhật câu hỏi");
    const updateRows = rows.map((row) => {
      if (row.id !== value.id) {
        return row;
      } else {
        return {
          ...row,
          QuestionName: value.question,
          Category: value.category,
          Skill: value.skill,
        };
      }
    });
    setRows(updateRows);
  }

  function handleDeleteModalOpen(value) {
    setValueDelete(value);
    setDeleteModalStatus(true);
  }

  function handleDeleteModalClose() {
    setDeleteModalStatus(false);
  }

  function handleDeleteQuestion(value) {
    successAlert("Xoá câu hỏi");
    const updateRows = rows.filter((row) => row.id !== value);
    setRows(updateRows);
  }

  // function handleOpenSuccessAlert() {
  //   setSuccessAlert(true)
  // }

  // function handleCloseSuccessAlert() {
  //   setSuccessAlert(false)
  // }

  const columns = useMemo(() => [
    {
      field: "id",
      type: "number",
      headerAlign: "left",
      align: "left",
      renderHeader: () => <span>Mã</span>,
      renderCell: (params) => {
        if (params.value === undefined) return NullString();
      },
    },
    {
      field: "QuestionName",
      type: "string",
      headerAlign: "left",
      align: "left",
      flex: 1,
      renderHeader: () => <span>Câu hỏi</span>,
      renderCell: (params) => {
        if (params.value === undefined) return NullString();
      },
    },
    {
      field: "Category",
      type: "string",
      headerAlign: "center",
      align: "center",
      flex: 0.5,
      renderHeader: () => <span>Loại</span>,
      renderCell: (params) => {
        if (params.value === undefined) return NullString();
      },
    },
    {
      field: "Skill",
      type: "string",
      headerAlign: "center",
      align: "center",
      minWidth: 50,
      renderHeader: () => <span>Kỹ năng</span>,
      renderCell: (params) => {
        if (params.value === undefined) return NullString();
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
          onClick={() =>
            handleModalOpen(
              {
                id: params.row.id,
                QuestionName: params.row.QuestionName,
                Category: params.row.Category,
                Skill: params.row.Skill,
              },
              false
            )
          }
          showInMenu
        />,
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Chỉnh sửa"
          onClick={() =>
            handleModalOpen(
              {
                id: params.row.id,
                QuestionName: params.row.QuestionName,
                Category: params.row.Category,
                Skill: params.row.Skill,
              },
              true
            )
          }
          showInMenu
        />,
        <GridActionsCellItem
          icon={<DeleteIcon sx={{ color: "#cc3300" }} />}
          label="Xoá câu hỏi"
          onClick={() => handleDeleteModalOpen(params.row.id)}
          showInMenu
          sx={{
            color: "#cc3300",
          }}
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
            Danh sách câu hỏi
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
            onClick={handleAddModalOpen}
          >
            <AddCircleOutlineIcon sx={{ marginRight: 1 }} />
            Tạo câu hỏi
          </Button>
          <IconButton
            onClick={handleMoreClick}
            sx={{
              marginLeft: 1,
            }}
          >
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
            options={["Loại", "Trạng thái"]}
            sx={{ width: 200, marginRight: 2 }}
            renderInput={(params) => (
              <TextField {...params} label="Lọc theo..." />
            )}
            value={valueChoose}
            onChange={(event, value) => handleChooseValue(value)}
          />
          {valueChoose === "Loại" && (
            <Autocomplete
              disablePortal
              id="filter-type"
              options={listOfSkills}
              sx={{ width: 200 }}
              renderInput={(params) => (
                <TextField {...params} label="Kỹ năng..." />
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
              placeholder="Nhập mã, câu hỏi..."
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
        </Grid>
      </Grid>

      <Box
        sx={{
          height: 600,
          width: "100%",
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
          //   onCellClick={(params, event) => {
          //     if (params.field === "InterviewerName")
          //         console.log(params.row.InterviewerId)
          //   }}
        />
      </Box>

      <QuestionFormModal
        key={addModalStatus}
        addModalStatus={addModalStatus}
        handleAddModalClose={handleAddModalClose}
        options={listOfSkills}
        handleSubmitQuestion={handleSubmitQuestion}
        keepMounted
      />

      <QuestionModal
        key={valueUpdate.id}
        modalStatus={modalStatus}
        handleModalClose={handleModalClose}
        options={listOfSkills}
        handleUpdateQuestion={handleUpdateQuestion}
        value={valueUpdate}
        type={typeStatus}
        setType={setTypeStatus}
        keepMounted
      />

      <DeleteAlertModal
        key={valueDelete}
        deleteModalStatus={deleteModalStatus}
        handleDeleteModalClose={handleDeleteModalClose}
        id={valueDelete}
        handleDeleteQuestion={handleDeleteQuestion}
      />

      <ToastContainer transition={Slide} hideProgressBar={true} />
    </Box>
  );
}
