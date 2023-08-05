import { useMemo, useState, useEffect, useRef } from "react";
import {
  Button,
  Autocomplete,
  TextField,
  CircularProgress,
  Tooltip,
} from "@mui/material";
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
import { errorAlert } from "../../components/Alert/ErrorAlert";
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
import { useDispatch, useSelector } from "react-redux";
import GigaCard from "../../components/GigaCard/GigaCard";
import GigaCardBody from "../../components/GigaCardBody/GigaCardBody";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

// const listOfSkills = {
//   skill: ["React", "Angular", "Java", "Python", "Figma", ".NET", "C", "C++"],
//   language: ["English", "Vietnamese", "Japanese", "Chinese", "Korian"],
// };

// JSON <- getAllQuestion
// {
//  "QuestionId": "",
//  "QuestionName": "",
//  "CategoryId": "",
//  "CategoryName": ["Technology, "Language", "Soft Skills"]
//  "TypeId": "", null nếu Category là Soft Skills
//  "TypeName": "", null nếu Category là Soft Skills
// }

// skills:
// {
//   "skillId": "00000000-0000-0000-0000-000000000005",
//   "skillName": "Nextjs",
//   "description": "Dùng làm backend cho vui",
//   "isDeleted": false
// }

// language: {
//   "languageId": "a9bcd349-2ea8-466d-8bd5-53999abffa0b",
//   "languageName": "French",
//   "isDeleted": false
// }

export default function Page_Company_Question() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const isSm = useMediaQuery(theme.breakpoints.down("md"));
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch({
      type: "questionSaga/getAllQuestion",
      payload: {
        token: `Bearer ${user.token}`,
      },
    });
    dispatch({
      type: "skillSaga/getSkill",
      payload: {
        token: `Bearer ${user.token}`,
      },
    });
    dispatch({
      type: "languageSaga/getLanguage",
      payload: {
        token: `Bearer ${user.token}`,
      },
    });
  }, []);

  const rows = useSelector((state) => state.questionList);
  const loading = useSelector((state) => state.loading);
  const status = useSelector((state) => state.status);
  const error = useSelector((state) => state.error);

  // useEffect(() => {
  //   let timeoutId = null;
  //   if (error.status === "yes") {
  //     errorAlert(error.message);
  //     timeoutId = setTimeout(() => {
  //       dispatch({
  //         type: "error/setError",
  //         payload: {
  //           status: "idle",
  //           message: "",
  //         },
  //       });
  //     }, 2000);
  //   } else if (error.status === "no") {
  //     dispatch({
  //       type: "error/setError",
  //       payload: {
  //         status: "idle",
  //         message: "",
  //       },
  //     });
  //   }
  //   return () => clearTimeout(timeoutId);
  // }, [error]);

  useEffect(() => {
    if (status.status === "success") {
      successAlert(status.message);
      dispatch({
        type: "status/onReset",
      });
    } else if (status.status === "error") {
      errorAlert(status.message);
      dispatch({
        type: "status/onReset",
      });
    }
  }, [status]);

  // const [rows, setRows] = useState(datasjson);

  const skill_draft = useSelector((state) => state.skill);
  const language_draft = useSelector((state) => state.language);
  const skills = skill_draft ? skill_draft : [];
  const languages = language_draft ? language_draft : [];

  // const [anchorEl, setAnchorEl] = useState(null);
  // const [valueSearch, setValueSearch] = useState("");

  const [valueChoose, setValueChoose] = useState(null);
  const [statusChoose, setStatusChoose] = useState(null);

  const [skillChoose, setSkillChoose] = useState(null);
  const [languageChoose, setLanguageChoose] = useState(null);

  const [addModalStatus, setAddModalStatus] = useState(false);

  const [modalStatus, setModalStatus] = useState(false);
  const [valueUpdate, setValueUpdate] = useState({
    QuestionId: "-1",
    QuestionName: "",
    CategoryId: "",
    CategoryName: "",
    TypeId: "",
    TypeName: "",
  });
  const [typeStatus, setTypeStatus] = useState(false);
  const [keyModal, setKeyModal] = useState(0);

  const [deleteModalStatus, setDeleteModalStatus] = useState(false);
  const [valueDelete, setValueDelete] = useState(0);

  // const [successAlert, setSuccessAlert] = useState(false);

  // function handleMoreClick(event) {
  //   setAnchorEl(event.currentTarget);
  // }

  // function handleClose() {
  //   setAnchorEl(null);
  // }

  // function handleRowClick(id) {
  //   alert("Navigate to position id: " + id);
  // }

  // function handleAddClick() {
  //   navigate("./create");
  // }

  // function handleSearchClick() {
  //   alert("Value search: " + valueSearch);
  // }

  function handleChooseValue(value) {
    setValueChoose(value);
    setLanguageChoose(null);
    setSkillChoose(null);
    if (value === "Soft Skills") {
      dispatch({
        type: "questionSaga/getQuestionListWithFilter",
        payload: {
          categoryName: "Soft Skills",
          skillId: null,
          skillName: null,
          languageId: null,
          languageName: null,
          softskill: true,
          token: `Bearer ${user.token}`,
        },
      });
    } else if (value === "Technology") {
      dispatch({
        type: "questionSaga/getQuestionListWithFilter",
        payload: {
          categoryName: "Technology",
          skillId: null,
          skillName: null,
          languageId: null,
          languageName: null,
          softskill: false,
          token: `Bearer ${user.token}`,
        },
      });
    } else if (value === "Language") {
      dispatch({
        type: "questionSaga/getQuestionListWithFilter",
        payload: {
          categoryName: "Language",
          skillId: null,
          skillName: null,
          languageId: null,
          languageName: null,
          softskill: false,
          token: `Bearer ${user.token}`,
        },
      });
    } else {
      dispatch({
        type: "questionSaga/getQuestionListWithFilter",
        payload: {
          categoryName: null,
          skillId: null,
          skillName: null,
          languageId: null,
          languageName: null,
          softskill: false,
          token: `Bearer ${user.token}`,
        },
      });
    }
  }

  // function handleChooseDepartment(value) {
  //   setDepartmentChoose(value);
  // }

  // function handleChooseStatus(value) {
  //   setStatusChoose(value);
  // }

  function handleChooseSkill(value) {
    setSkillChoose(value);
    dispatch({
      type: "questionSaga/getQuestionListWithFilter",
      payload: {
        categoryName: "Technology",
        skillId: value ? value.skillId : null,
        skillName: value ? value.skillName : null,
        languageId: null,
        languageName: null,
        softskill: false,
        token: `Bearer ${user.token}`,
      },
    });
  }

  function handleChooseLanguage(value) {
    setLanguageChoose(value);
    dispatch({
      type: "questionSaga/getQuestionListWithFilter",
      payload: {
        categoryName: "Language",
        skillId: null,
        skillName: null,
        languageId: value ? value.languageId : null,
        languageName: value ? value.languageName : null,
        softskill: false,
        token: `Bearer ${user.token}`,
      },
    });
  }

  function handleAddModalOpen() {
    setAddModalStatus(true);
  }

  function handleAddModalClose() {
    setAddModalStatus(false);
  }

  // -> QuestionFormModal
  // value: {
  //  question: question,
  //  category: "Technology",
  //  typeId: null, nếu category = "Soft Skill"
  //  typeName: null nếu category = "Soft Skill"
  // }

  function handleSubmitQuestion(value) {
    // successAlert("Create question");
    dispatch({
      type: "questionSaga/postQuestion",
      payload: {
        QuestionName: value.question,
        Category: value.category,
        TypeId: value.typeId,
        TypeName: value.typeName,
        // Filter
        categoryName: valueChoose,
        skillId: skillChoose ? skillChoose.skillId : null,
        skillName: skillChoose ? skillChoose.skillName : null,
        languageId: languageChoose ? languageChoose.languageId : null,
        languageName: languageChoose ? languageChoose.languageName : null,
        softskill: valueChoose === "Soft Skills" ? true : false,
        token: `Bearer ${user.token}`,
      },
    });
  }

  function handleModalOpen(value, type) {
    setKeyModal((k) => k + 1);
    setValueUpdate(value);
    setTypeStatus(type);
    setModalStatus(true);
  }

  function handleModalClose() {
    setKeyModal((k) => k + 1);
    setModalStatus(false);
  }

  // -> QuestionModal
  // value: {
  //   QuestionId: "",
  //   QuestionName: "",
  //   CategoryName: "",
  //   TypeId: null,
  //   TypeName: null nếu category = Soft Skill
  // }

  function handleUpdateQuestion(value) {
    dispatch({
      type: "questionSaga/putQuestion",
      payload: {
        QuestionId: value.QuestionId,
        QuestionName: value.QuestionName,
        Category: value.CategoryName,
        TypeId: value.TypeId,
        TypeName: value.TypeName,
        // Filter
        categoryName: valueChoose,
        skillId: skillChoose ? skillChoose.skillId : null,
        skillName: skillChoose ? skillChoose.skillName : null,
        languageId: languageChoose ? languageChoose.languageId : null,
        languageName: languageChoose ? languageChoose.languageName : null,
        softskill: valueChoose === "Soft Skills" ? true : false,
        token: `Bearer ${user.token}`,
      },
    });
  }

  function handleDeleteModalOpen(value) {
    setValueDelete(value);
    setDeleteModalStatus(true);
  }

  function handleDeleteModalClose() {
    setDeleteModalStatus(false);
  }

  function handleDeleteQuestion(value) {
    dispatch({
      type: "questionSaga/deleteQuestion",
      payload: {
        QuestionId: value.QuestionId,
        CategoryId: value.CategoryId,
        // Filter
        categoryName: valueChoose,
        skillId: skillChoose ? skillChoose.skillId : null,
        skillName: skillChoose ? skillChoose.skillName : null,
        languageId: languageChoose ? languageChoose.languageId : null,
        languageName: languageChoose ? languageChoose.languageName : null,
        softskill: valueChoose === "Soft Skills" ? true : false,
        token: `Bearer ${user.token}`,
      },
    });
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
      minWidth: 70,
      renderHeader: () => <span>ID</span>,
      renderCell: (params) => {
        if (params.value === undefined) return <NullString />;
        return (
          <Tooltip title={params.value} arrow>
            <Box
              sx={{
                "&:hover": {
                  cursor: "pointer",
                  textDecoration: "underline",
                },
              }}
            >
              {params.value.slice(0, 6) + "..."}
            </Box>
          </Tooltip>
        );
      },
    },
    {
      field: "QuestionName",
      type: "string",
      headerAlign: "left",
      align: "left",
      flex: 1,
      minWidth: 200,
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
      field: "CategoryName",
      type: "string",
      headerAlign: "center",
      align: "center",
      flex: 0.4,
      minWidth: 130,
      renderHeader: () => <span>Category</span>,
      renderCell: (params) => {
        if (params.value === undefined) return <NullString />;
        else if (params.value === "Technology") return <Technology />;
        else if (params.value === "Language") return <Language />;
        else if (params.value === "Soft Skills") return <SoftSkill />;
      },
    },
    {
      field: "TypeName",
      type: "string",
      headerAlign: "center",
      align: "center",
      width: 90,
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
      width: 30,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<InfoIcon variant="outlined" sx={{ color: "black" }} />}
          label="Detail"
          sx={{ color: "black" }}
          onClick={() =>
            handleModalOpen(
              {
                QuestionId: params.row.QuestionId,
                QuestionName: params.row.QuestionName,
                CategoryId: params.row.CategoryId,
                CategoryName: params.row.CategoryName,
                TypeId: params.row.TypeId,
                TypeName: params.row.TypeName,
              },
              false
            )
          }
          showInMenu
        />,
        <GridActionsCellItem
          icon={<EditIcon sx={{ color: "black" }} />}
          sx={{ color: "black" }}
          label="Edit question"
          onClick={() =>
            handleModalOpen(
              {
                QuestionId: params.row.QuestionId,
                QuestionName: params.row.QuestionName,
                CategoryId: params.row.CategoryId,
                CategoryName: params.row.CategoryName,
                TypeId: params.row.TypeId,
                TypeName: params.row.TypeName,
              },
              true
            )
          }
          showInMenu
        />,
        <GridActionsCellItem
          icon={<DeleteIcon sx={{ color: "#cc3300" }} />}
          label="Delete question"
          onClick={() =>
            handleDeleteModalOpen({
              QuestionId: params.row.QuestionId,
              CategoryId: params.row.CategoryId,
            })
          }
          showInMenu
          sx={{
            color: "#cc3300",
          }}
        />,
      ],
    },
  ]);

  return (
    <Box
      sx={{
        marginTop: 3,
      }}
    >
      <GigaCard>
        <GigaCardBody>
          <Grid
            container
            spacing={3}
            sx={{
              marginBottom: 5,
            }}
          >
            <Grid item xs={12} sm={6} md={8}>
              <Box
                sx={{
                  fontSize: 40,
                  fontWeight: 600,
                  // color: "#1565C0",
                  color: "black",
                }}
              >
                Question
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              sx={{
                display: "flex",
                justifyContent: {
                  md: "flex-end",
                  sm: "flex-end",
                  xs: "flex-start",
                },
                alignItems: "center",
              }}
            >
              <Button
                // variant="outlined"
                // sx={{
                //   color: "black",
                //   border: "1px solid black",
                //   textTransform: "none",
                //   height: 50,
                //   width: {
                //     xs: "100%",
                //     sm: 250,
                //     md: 250,
                //   },
                //   "&:hover": {
                //     backgroundColor: "black",
                //     color: "white",
                //   },
                // }}
                variant="contained"
                sx={{
                  height: 50,
                  width: {
                    md: 250,
                    sm: 250,
                    xs: "100%",
                  },
                  textTransform: "none",
                  backgroundColor: "black",
                  "&:hover": {
                    backgroundColor: "grey",
                  },
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

            {isMd && (
              <Grid
                item
                xs={12}
                sm={12}
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
                  sx={{
                    width: { md: 200, sm: 200, xs: "100%" },
                    marginRight: 2,
                    "& .MuiAutocomplete-popupIndicator": {
                      color: "black",
                    },
                  }}
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
                    options={skills}
                    sx={{ width: { md: 200, sm: 200, xs: "100%" } }}
                    renderInput={(params) => (
                      <TextField {...params} label="Skill..." />
                    )}
                    getOptionLabel={(option) => option.skillName || ""}
                    renderOption={(props, option) => (
                      <li {...props} key={option.skillId}>
                        {option.skillName}
                      </li>
                    )}
                    isOptionEqualToValue={(option, value) => {
                      return option.skillId === value.skillId;
                    }}
                    value={skillChoose}
                    onChange={(event, value) => handleChooseSkill(value)}
                  />
                )}
                {valueChoose === "Language" && (
                  <Autocomplete
                    disablePortal
                    id="filter-type"
                    options={languages}
                    sx={{ width: { md: 200, sm: "100%", xs: "100%" } }}
                    renderInput={(params) => (
                      <TextField {...params} label="Language..." />
                    )}
                    getOptionLabel={(option) => option.languageName || ""}
                    renderOption={(props, option) => (
                      <li {...props} key={option.languageId}>
                        {option.languageName}
                      </li>
                    )}
                    isOptionEqualToValue={(option, value) => {
                      return option.languageId === value.languageId;
                    }}
                    value={languageChoose}
                    onChange={(event, value) => handleChooseLanguage(value)}
                  />
                )}
              </Grid>
            )}

            {isSm && (
              <>
                {" "}
                <Grid
                  item
                  xs={12}
                  sm={12}
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
                    sx={{
                      width: "100%",
                      "& .MuiAutocomplete-popupIndicator": {
                        color: "black",
                      },
                    }}
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
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  {valueChoose === "Technology" && (
                    <Autocomplete
                      disablePortal
                      id="filter-type"
                      options={skills}
                      sx={{ width: "100%" }}
                      renderInput={(params) => (
                        <TextField {...params} label="Skill..." />
                      )}
                      getOptionLabel={(option) => option.skillName || ""}
                      renderOption={(props, option) => (
                        <li {...props} key={option.skillId}>
                          {option.skillName}
                        </li>
                      )}
                      isOptionEqualToValue={(option, value) => {
                        return option.skillId === value.skillId;
                      }}
                      value={skillChoose}
                      onChange={(event, value) => handleChooseSkill(value)}
                    />
                  )}
                  {valueChoose === "Language" && (
                    <Autocomplete
                      disablePortal
                      id="filter-type"
                      options={languages}
                      sx={{ width: "100%" }}
                      renderInput={(params) => (
                        <TextField {...params} label="Language..." />
                      )}
                      getOptionLabel={(option) => option.languageName || ""}
                      renderOption={(props, option) => (
                        <li {...props} key={option.languageId}>
                          {option.languageName}
                        </li>
                      )}
                      isOptionEqualToValue={(option, value) => {
                        return option.languageId === value.languageId;
                      }}
                      value={languageChoose}
                      onChange={(event, value) => handleChooseLanguage(value)}
                    />
                  )}
                </Grid>{" "}
              </>
            )}

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

          {rows ? (
            <QuestionDataGrid
              columns={columns}
              rows={rows}
              loading={loading}
              handleModalOpen={handleModalOpen}
            />
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 50,
              }}
            >
              <CircularProgress
                sx={{
                  color: "black",
                }}
              />
            </Box>
          )}

          <QuestionFormModal
            key={addModalStatus}
            addModalStatus={addModalStatus}
            handleAddModalClose={handleAddModalClose}
            options={{ skill: skills, language: languages }}
            handleSubmitQuestion={handleSubmitQuestion}
            status={status}
          />

          <QuestionModal
            key={keyModal}
            modalStatus={modalStatus}
            handleModalClose={handleModalClose}
            options={{ skill: skills, language: languages }}
            handleUpdateQuestion={handleUpdateQuestion}
            value={valueUpdate}
            type={typeStatus}
            setType={setTypeStatus}
            status={status}
          />
        </GigaCardBody>
      </GigaCard>

      <DeleteAlertModal
        key={valueDelete}
        deleteModalStatus={deleteModalStatus}
        handleDeleteModalClose={handleDeleteModalClose}
        value={valueDelete}
        handleDeleteQuestion={handleDeleteQuestion}
        status={status}
      />

      <ToastContainer transition={Slide} hideProgressBar={true} />
    </Box>
  );
}
