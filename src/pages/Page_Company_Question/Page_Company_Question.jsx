import { useMemo, useState, useEffect } from "react";
import { Button, Autocomplete, TextField } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import datasjson from "./Page_Company_Question_Data.json";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import QuestionFormModal from "./QuestionFormModal";
import QuestionModal from "./QuestionModal";
import { successAlert } from "../../components/Alert/SuccessAlert";
import { ToastContainer, Slide, Bounce, Flip, Zoom } from "react-toastify";
import {
  NullString,
  NotStart,
  Pending,
  Completed,
  Technology,
  SoftSkill,
  Language,
} from "../../components/Label/Label";
import "react-toastify/dist/ReactToastify.css";
import DeleteAlertModal from "./DeleteModal";
import QuestionDataGrid from "./QuestionDataGrid";
import {
  LanguageRounded,
  PsychologyRounded,
  SchoolRounded,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";

const listOfSkills = {
  skill: ["React", "Angular", "Java", "Python", "Figma", ".NET", "C", "C++"],
  language: ["English", "Vietnamese", "Japanese", "Chinese", "Korian"],
};

export default function Page_Company_Question() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: "saga/getAllQuestion"})
  },[])

  const [rows, setRows] = useState(datasjson);
  // const [anchorEl, setAnchorEl] = useState(null);
  // const [valueSearch, setValueSearch] = useState("");

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

  // function handleMoreClick(event) {
  //   setAnchorEl(event.currentTarget);
  // }

  // function handleClose() {
  //   setAnchorEl(null);
  // }

  function handleRowClick(id) {
    alert("Navigate to position id: " + id);
  }

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
      field: "QuestionId",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 0.2,
      minWidth: 30,
      renderHeader: () => <span>ID</span>,
      renderCell: (params) => {
        if (params.value === undefined) return <NullString />;
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
      field: "QuestionName",
      type: "string",
      headerAlign: "left",
      align: "left",
      flex: 1,
      minWidth: 250,
      renderHeader: () => <span>Question</span>,
      renderCell: (params) => {
        if (params.value === undefined) return <NullString />;
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
      field: "Category",
      type: "string",
      headerAlign: "center",
      align: "center",
      flex: 0.4,
      minWidth: 80,
      renderHeader: () => <span>Category</span>,
      renderCell: (params) => {
        if (params.value === undefined) return <NullString />;
        else if (params.value === "Chuyên môn") return <Technology />;
        else if (params.value === "Ngôn ngữ") return <Language />;
        else if (params.value === "Kỹ năng mềm") return <SoftSkill />;
      },
    },
    {
      field: "Skill",
      type: "string",
      headerAlign: "center",
      align: "center",
      minWidth: 50,
      renderHeader: () => <span>Type</span>,
      renderCell: (params) => {
        if (params.value === undefined) return <NullString />;
      },
    },
    {
      field: "actions",
      type: "actions",
      headerAlign: "right",
      align: "right",
      getActions: (params) => [
        <GridActionsCellItem
          icon={<InfoIcon variant="outlined" />}
          label="Detail"
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
          label="Edit question"
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
          label="Delete question"
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
            Question
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
            Create Question
          </Button>
          {/* <IconButton
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
            options={["Technology", "Language", "Soft Skills"]}
            sx={{ width: 200, marginRight: 2 }}
            renderInput={(params) => (
              <TextField {...params} label="Category..." />
            )}
            renderOption={(props, option) => {
              if (option === "Technology") {
                return (
                  <Box
                    component="li"
                    {...props}
                    sx={{
                      color: "#1565C0",
                    }}
                  >
                    <SchoolRounded
                      sx={{
                        color: "#1565C0",
                        marginRight: 1,
                      }}
                    />
                    {option}
                  </Box>
                );
              } else if (option === "Language") {
                return (
                  <Box
                    component="li"
                    {...props}
                    sx={{
                      color: "#008631",
                    }}
                  >
                    <LanguageRounded
                      sx={{
                        color: "#008631",
                        marginRight: 1,
                      }}
                    />
                    {option}
                  </Box>
                );
              } else if (option === "Soft Skills") {
                return (
                  <Box
                    component="li"
                    {...props}
                    sx={{
                      color: "#AA336A",
                    }}
                  >
                    <PsychologyRounded
                      sx={{
                        color: "#AA336A",
                        marginRight: 1,
                      }}
                    />
                    {option}
                  </Box>
                );
              }
            }}
            value={valueChoose}
            onChange={(event, value) => handleChooseValue(value)}
          />
          {valueChoose === "Technology" && (
            <Autocomplete
              disablePortal
              id="filter-type"
              options={listOfSkills.skill}
              sx={{ width: 200 }}
              renderInput={(params) => (
                <TextField {...params} label="Skill..." />
              )}
              value={statusChoose}
              onChange={(event, value) => handleChooseStatus(value)}
            />
          )}
          {valueChoose === "Language" && (
            <Autocomplete
              disablePortal
              id="filter-type"
              options={listOfSkills.language}
              sx={{ width: 200 }}
              renderInput={(params) => (
                <TextField {...params} label="Language..." />
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
              placeholder="Nhập ID, câu hỏi..."
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

      <QuestionDataGrid
        columns={columns}
        rows={rows}
        handleModalOpen={handleModalOpen}
      />

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
