import { useMemo, useState, useEffect } from "react";
import { Chip, Autocomplete, TextField, IconButton } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  NullString,
  NotStart,
  Pending,
  Completed,
  Pass,
  Fail,
} from "../../components/Label/Label";
import Grid from "@mui/material/Grid";
import {
  NoRowsOverlay,
  NoResultsOverlay,
} from "../../components/DataRick/DataRick";
import {
  DoneRounded,
  EventNoteRounded,
  MoreHorizRounded,
  SportsBaseballRounded,
  SportsScoreRounded,
  CloseRounded,
} from "@mui/icons-material";
import cleanStore from "../../utils/cleanStore";
import GigaCard from "../../components/GigaCard/GigaCard";
import GigaCardBody from "../../components/GigaCardBody/GigaCardBody";

// JSON <- InterviewList
// {
//   "InterviewId": 0,
//   "InterviewerName": "",
//   "InterviewerId": 0,
//   "CandidateName": "",
//   "CandidateId": 0,
//   "StartTime": "11/07/2023",
//   "Shift": 0,
//   "Room": "",
//   "Status": [true, false] ~ ["Finished", "Notstart"], ~ Candidate_Status
//   "Priority": ["Pending","Passed","Failed"] ~ Company_Status
// }
// JSON <- Department
// {
//   "departmentId": 0,
//   "departmentName": "",
//   "address": "",
//   "email": "",
//   "phone": "",
//   "website": ""
// }
// JSON <- getPositionList
// {
//   "PositionId": 0, !!!
//   "PositionName": "",
//   "Description": "",
//   "MaxHiringQty": 0,
//   "HiredQty": 0,
//   "StartDate": "11/09/2023",
//   "EndDate": "11/12/2023",
//   "Status": [true, false] ~ ["Active", "Inactive"]
// }


export default function Page_Company_Interview() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: "saga/getAllInterview" });
    dispatch({ type: "saga/getPositionList" });
    dispatch({ type: "saga/getDepartment" });
    return () => {
      cleanStore(dispatch);
    };
  }, []);

  const loading = useSelector((state) => state.loading);
  const rows = useSelector((state) => state.interviewList);
  const department_draft = useSelector((state) => state.department);
  const position_draft = useSelector((state) => state.positionList);

  const departments = department_draft ? department_draft : [];
  const positions = position_draft ? position_draft : [];

  // const [rows, setRows] = useState(datasjson);

  // const [anchorEl, setAnchorEl] = useState(null);

  // const [valueSearch, setValueSearch] = useState("");
  // const [valueChoose, setValueChoose] = useState(null);

  const [departmentChoose, setDepartmentChoose] = useState(null);
  const [positionChoose, setPositionChoose] = useState(null);
  const [statusChoose, setStatusChoose] = useState(null);
  const [priorityChoose, setPriorityChoose] = useState(null);

  // function handleMoreClick(event) {
  //   setAnchorEl(event.currentTarget);
  // }

  // function handleClose() {
  //   setAnchorEl(null);
  // }

  // function handleAddClick() {
  //   navigate("./create");
  // }

  // function handleSearchClick() {
  //   alert("Value search: " + valueSearch);
  // }

  // function handleChooseValue(value) {
  //   setValueChoose(value);
  //   setDepartmentChoose(null);
  //   setStatusChoose(null);
  //   setPositionChoose(null);
  //   setPriorityChoose(null);
  //   if (value === null) {
  //     dispatch({ type: "saga/getAllInterview" });
  //   }
  // }

  function handleChooseDepartment(value) {
    setPositionChoose(null);
    setDepartmentChoose(value);
    dispatch({
      type: "saga/getInterviewWithFilter",
      payload: {
        departmentId: value ? value.departmentId : null,
        // positionId: positionChoose && value !== null
        //   ? positionChoose.PositionId
        //   : null,
        positionId: null,
        status: statusChoose ? statusChoose : null,
        priority: priorityChoose ? priorityChoose : null,
      },
    });
  }

  function handleChoosePosition(value) {
    setPositionChoose(value);
    dispatch({
      type: "saga/getInterviewWithFilter",
      payload: {
        departmentId: departmentChoose ? departmentChoose.departmentId : null,
        positionId: value ? value.PositionId : null,
        status: statusChoose ? statusChoose : null,
        priority: priorityChoose ? priorityChoose : null,
      },
    });
  }

  function handleChooseStatus(value) {
    if (value !== "Finished") {
      setPriorityChoose(null);
    }
    setStatusChoose(value);
    dispatch({
      type: "saga/getInterviewWithFilter",
      payload: {
        departmentId: departmentChoose ? departmentChoose.departmentId : null,
        positionId: positionChoose ? positionChoose.PositionId : null,
        status: value ? value : null,
        priority:
          priorityChoose && value === "Finished" ? priorityChoose : null,
      },
    });
  }

  function handleChooseResult(value) {
    setPriorityChoose(value);
    dispatch({
      type: "saga/getInterviewWithFilter",
      payload: {
        departmentId: departmentChoose ? departmentChoose.departmentId : null,
        positionId: positionChoose ? positionChoose.PositionId : null,
        status: statusChoose ? statusChoose : null,
        priority: value ? value : null,
      },
    });
  }

  function handleDetailClick(value) {
    cleanStore(dispatch);
    dispatch({ type: "position/cleanUpPosition" });
    navigate(`./${value}`);
  }

  function handleProfileDetailClick(value) {
    // dispatch({ type: "interviewList/cleanUpInterviewList" });
    // dispatch({ type: "positionList/cleanUpPositionList" });
    window.open(`../../profile/${value}`);
    // navigate(`../../profile/${value}`);
  }

  const columns = useMemo(() => [
    {
      field: "InterviewId",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 0.2,
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
      minWidth: 180,
      flex: 0.4,
      renderHeader: () => <span>Candidate Name</span>,
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
      minWidth: 180,
      flex: 0.4,
      renderHeader: () => <span>Interviewer Name</span>,
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
      headerAlign: "center",
      align: "center",
      renderHeader: () => <span>Date</span>,
      minWidth: 150,
      flex: 0.4,
      renderCell: (params) => {
        if (params.value === undefined) return NullString();
      },
    },
    {
      field: "Shift",
      type: "number",
      headerAlign: "center",
      align: "center",
      renderHeader: () => <span>Shift</span>,
      width: 80,
      renderCell: (params) => {
        if (params.value === undefined) return NullString();
      },
    },
    {
      field: "Room",
      type: "string",
      headerAlign: "center",
      align: "center",
      renderHeader: () => <span>Room</span>,
      minWidth: 100,
      renderCell: (params) => {
        if (params.value === undefined) return NullString();
      },
    },
    {
      field: "Status",
      minWidth: 140,
      headerAlign: "center",
      align: "center",
      renderHeader: () => <span>Status</span>,
      renderCell: (params) => {
        if (params.value === false) {
          return <NotStart />;
        }
        return <Completed />;
      },
    },
    {
      field: "Priority",
      minWidth: 140,
      headerAlign: "center",
      align: "center",
      renderHeader: () => <span>Result</span>,
      renderCell: (params) => {
        switch (params.value) {
          case "Pending":
            return <Pending />;
          case "Passed":
            return <Pass />;
          case "Failed":
            return <Fail />;
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
        <Tooltip title="Detail" arrow>
          <IconButton onClick={() => handleDetailClick(params.row.InterviewId)}>
            <InfoIcon sx={{ color: "black" }} />
          </IconButton>
        </Tooltip>,
      ],
    },
  ]);

  return (
    <Box>
      <GigaCard>
        <GigaCardBody>
          <Grid
            container
            spacing={3}
            sx={{
              marginBottom: 5,
            }}
          >
            <Grid item xs={12}>
              <Box
                sx={{
                  fontSize: 40,
                  fontWeight: 600,
                  // color: "#1565C0",
                  color: "black",
                }}
              >
                Interview
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

            {/* <Grid
          item
          xs={12}
          md={12}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Autocomplete
            disablePortal
            id="filter-type"
            options={["Department", "Position", "Status", "Result"]}
            sx={{ width: 200, marginRight: 2 }}
            renderInput={(params) => (
              <TextField {...params} label="Filter by..." />
            )}
            value={valueChoose}
            onChange={(event, value) => handleChooseValue(value)}
          />
        </Grid> */}
            <Grid item xs={12} md={12}>
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={3}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Autocomplete
                    disablePortal
                    id="filter-type"
                    options={departments}
                    sx={{ width: "100%" }}
                    renderInput={(params) => (
                      <TextField {...params} label="Department..." />
                    )}
                    getOptionLabel={(option) => option.departmentName || ""}
                    renderOption={(props, option) => (
                      <li {...props} key={option.departmentId}>
                        {option.departmentName}
                      </li>
                    )}
                    isOptionEqualToValue={(option, value) => {
                      return option.departmentId === value.departmentId;
                    }}
                    value={departmentChoose}
                    onChange={(event, value) => handleChooseDepartment(value)}
                  />
                </Grid>
                {departmentChoose !== null && (
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={5}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <Autocomplete
                      disablePortal
                      id="filter-type"
                      options={positions}
                      sx={{ width: "100%" }}
                      renderInput={(params) => (
                        <TextField {...params} label="Position..." />
                      )}
                      getOptionLabel={(option) => option.PositionName || ""}
                      renderOption={(props, option) => (
                        <li {...props} key={option.PositionId}>
                          {option.PositionId + " - " + option.PositionName}
                        </li>
                      )}
                      isOptionEqualToValue={(option, value) => {
                        return option.PositionId === value.PositionId;
                      }}
                      value={positionChoose}
                      onChange={(event, value) => handleChoosePosition(value)}
                    />
                  </Grid>
                )}
                <Grid
                  item
                  xs={6}
                  sm={6}
                  md={2}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Autocomplete
                    disablePortal
                    id="filter-type"
                    options={["Not start", "Finished"]}
                    sx={{ width: { md: 200, sm: "100%", xs: "100%" } }}
                    renderInput={(params) => (
                      <TextField {...params} label="Status..." />
                    )}
                    renderOption={(props, option) => {
                      if (option === "Not start") {
                        return (
                          <Box
                            component="li"
                            {...props}
                            sx={{
                              // color: "#E0E0E0",
                              color: "black.400"
                            }}
                          >
                            <EventNoteRounded
                              sx={{
                                color: "black.400",
                                marginRight: 1,
                              }}
                            />
                            Not start
                          </Box>
                        );
                      } else {
                        return (
                          <Box
                            component="li"
                            {...props}
                            sx={{
                              color: "#1565C0",
                            }}
                          >
                            <SportsScoreRounded
                              sx={{
                                color: "#1565C0",
                                marginRight: 1,
                              }}
                            />
                            Finished
                          </Box>
                        );
                      }
                    }}
                    value={statusChoose}
                    onChange={(event, value) => handleChooseStatus(value)}
                  />
                </Grid>
                {statusChoose === "Finished" && (
                  <Grid
                    item
                    xs={6}
                    sm={6}
                    md={2}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <Autocomplete
                      disablePortal
                      id="filter-type3"
                      options={["Pending", "Passed", "Failed"]}
                      sx={{ width: "100%" }}
                      renderInput={(params) => (
                        <TextField {...params} label="Result..." />
                      )}
                      renderOption={(props, option) => {
                        if (option === "Pending") {
                          return (
                            <Box
                              component="li"
                              {...props}
                              sx={{
                                color: "black.400",
                              }}
                            >
                              <MoreHorizRounded
                                sx={{
                                  color: "black.400",
                                  marginRight: 1,
                                }}
                              />
                              Pending
                            </Box>
                          );
                        } else if (option === "Passed") {
                          return (
                            <Box
                              component="li"
                              {...props}
                              sx={{
                                color: "#008631",
                              }}
                            >
                              <DoneRounded
                                sx={{
                                  color: "#008631",
                                  marginRight: 1,
                                }}
                              />
                              Passed
                            </Box>
                          );
                        } else {
                          return (
                            <Box
                              component="li"
                              {...props}
                              sx={{
                                color: "#cc3300",
                              }}
                            >
                              <CloseRounded
                                sx={{
                                  color: "#cc3300",
                                  marginRight: 1,
                                }}
                              />
                              Failed
                            </Box>
                          );
                        }
                      }}
                      value={priorityChoose}
                      onChange={(event, value) => handleChooseResult(value)}
                    />
                  </Grid>
                )}
              </Grid>
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
              minHeight: 500,
            }}
          >
            <DataGrid
              autoHeight
              columns={columns}
              rows={rows === null ? [] : rows}
              loading={loading}
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
                  // backgroundColor: "#1565C0",
                  backgroundColor: "black",
                  color: "white",
                  fontWeight: 700,
                },
                "&.MuiDataGrid-root .MuiDataGrid-columnSeparator": {
                  display: "none",
                },
                "&.MuiDataGrid-root .MuiDataGrid-sortIcon": {
                  color: "white",
                },
              }}
              slots={{
                toolbar: GridToolbar,
                noRowsOverlay: NoRowsOverlay,
                noResultsOverlay: NoResultsOverlay,
              }}
              slotProps={{
                toolbar: {
                  showQuickFilter: true,
                  quickFilterProps: {
                    debounceMs: 500,
                    placeholder: "Search...",
                    sx: {
                      width: 300,
                      marginBottom: 1,
                    },
                  },
                  csvOptions: { disableToolbarButton: true },
                  printOptions: { disableToolbarButton: true },
                },
              }}
              disableColumnMenu
              disableColumnFilter
              disableColumnSelector
              disableDensitySelector
              disableRowSelectionOnClick
              pagination
              pageSizeOptions={[5, 10, 25, 50, 100]}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 25,
                  },
                },
              }}
              getRowId={(row) => row.InterviewId}
              onCellClick={(params, event) => {
                if (params.field === "InterviewId") {
                  handleDetailClick(params.row.InterviewId);
                }
                if (params.field === "CandidateName") {
                  handleProfileDetailClick(params.row.CandidateId);
                }
                if (params.field === "InterviewerName")
                  handleProfileDetailClick(params.row.InterviewerId);
              }}
            />
          </Box>
        </GigaCardBody>
      </GigaCard>
    </Box>
  );
}
