import { useEffect, useMemo, useState } from "react";
import {
  Button,
  Autocomplete,
  TextField,
  LinearProgress,
  CircularProgress,
} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DoNotDisturbOnRoundedIcon from "@mui/icons-material/DoNotDisturbOnRounded";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import PauseCircleOutlineRoundedIcon from "@mui/icons-material/PauseCircleOutlineRounded";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import {
  NullString,
  NotStart,
  Pending,
  Completed,
  Postpone,
  Active,
  Inactive,
} from "../../components/Label/Label";
import { useDispatch, useSelector } from "react-redux";
import {
  EventNoteRounded,
  RocketLaunchRounded,
  SportsScoreRounded,
} from "@mui/icons-material";
import {
  NoRowsOverlay,
  NoResultsOverlay,
} from "../../components/DataRick/DataRick";
import cleanStore from "../../utils/cleanStore";
import GigaCard from "../../components/GigaCard/GigaCard";
import GigaCardBody from "../../components/GigaCardBody/GigaCardBody";

// Test trial
export default function Page_Company_Recruitment() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: "saga/getPositionList" });
    dispatch({ type: "saga/getDepartment" });
    // dispatch({ type: "saga/getLanguage" });
    return () => {
      cleanStore(dispatch);
    };
  }, []);

  const loading = useSelector((state) => state.loading);
  const rows = useSelector((state) => state.positionList);
  const department_draft = useSelector((state) => state.department);
  // const language_draft = useSelector((state) => state.language);

  const departments = department_draft ? department_draft : [];
  // const languages = language_draft ? language_draft : [];

  // const [rows, setRows] = useState(datasjson);

  // const [anchorEl, setAnchorEl] = useState(null);
  // const [valueSearch, setValueSearch] = useState("");

  // const [valueChoose, setValueChoose] = useState(null);

  const [departmentChoose, setDepartmentChoose] = useState(null);
  const [statusChoose, setStatusChoose] = useState(null);
  // const [languageChoose, setLanguageChoose] = useState(null);

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

  // Reset state when change filter option
  // function handleChooseValue(value) {
  //   setValueChoose(value);
  //   setDepartmentChoose(null);
  //   setStatusChoose(null);
  //   // setLanguageChoose(null);
  //   if (value === null) {
  //     dispatch({ type: "saga/getPositionList" });
  //   }
  // }

  function handleChooseDepartment(value) {
    setDepartmentChoose(value);
    dispatch({
      type: "saga/getPositionListWithFilter",
      payload: {
        departmentId: value ? value.departmentId : null,
        status: statusChoose,
      },
    });
  }

  // function handleChooseLanguage(value) {
  //   setLanguageChoose(value);
  //   if (value) {
  //     dispatch({
  //       type: "saga/getPositionListWithLanguage",
  //       payload: { id: value.languageId },
  //     });
  //   } else if (value === null) {
  //     dispatch({ type: "saga/getPositionList" });
  //   }
  // }

  function handleChooseStatus(value) {
    setStatusChoose(value);
    dispatch({
      type: "saga/getPositionListWithFilter",
      payload: {
        departmentId: departmentChoose ? departmentChoose.departmentId : null,
        status: value ? value : null,
      },
    });
  }

  function handleDetailClick(value) {
    console.log(value);
    navigate(`./${value}`);
  }

  function handleReportClick(value) {
    setValueReport(value);
    navigate(`./${value}/report`, {
      state: {
        positionId: value,
      },
    });
  }

  function handleActiveClick(value) {
    dispatch({
      type: "saga/updatePositionList",
      payload: { id: value, Status: true },
    });
  }

  function handleInactiveClick(value) {
    dispatch({
      type: "saga/updatePositionList",
      payload: { id: value, Status: false },
    });
  }

  // function handleEditClick(value) {
  //   navigate(`./${value}/update`)
  // }

  const columns = useMemo(() => [
    {
      field: "PositionId",
      type: "number",
      headerAlign: "left",
      align: "left",
      minWidth: 40,
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
      field: "PositionName",
      type: "string",
      headerAlign: "left",
      align: "left",
      minWidth: 200,
      flex: 0.6,
      renderHeader: () => <span>Name</span>,
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
      renderHeader: () => <span>Start Date</span>,
      minWidth: 180,
      flex: 0.4,
      renderCell: (params) => {
        if (params.value === undefined) return NullString();
      },
    },
    {
      field: "EndDate",
      type: "string",
      headerAlign: "left",
      align: "left",
      renderHeader: () => <span>End Date</span>,
      minWidth: 180,
      flex: 0.4,
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
      renderHeader: () => <span>Applied</span>,
      minWidth: 100,
      flex: 0.2,
    },
    {
      field: "Status",
      minWidth: 180,
      flex: 0.3,
      headerAlign: "center",
      align: "center",
      renderHeader: () => <span>Status</span>,
      renderCell: (params) => {
        if (params.value) {
          return <Active />;
        }
        return <Inactive />;
      },
    },
    {
      field: "actions",
      type: "actions",
      width: 30,
      headerAlign: "right",
      align: "right",
      getActions: (params) => {
        if (params.row.Status === false) {
          return [
            <GridActionsCellItem
              icon={<InfoRoundedIcon variant="outlined" sx={{
                color: "black"
              }}/>}
              label="Detail"
              sx={{
                color: "black"
              }}
              onClick={() => handleDetailClick(params.row.PositionId)}
              showInMenu
            />,
            <GridActionsCellItem
              icon={<QueryStatsRoundedIcon sx={{
                color: "black"
              }}/>}
              label="Report"
              sx={{
                color: "black"
              }}
              onClick={() => handleReportClick(params.row.PositionId)}
              showInMenu
            />,
            <GridActionsCellItem
              icon={<PlayCircleOutlineRoundedIcon sx={{ color: "#1565C0" }} />}
              label="Active position"
              onClick={() => handleActiveClick(params.row.PositionId)}
              showInMenu
              sx={{
                color: "#1565C0",
              }}
            />,
          ];
        } else {
          return [
            <GridActionsCellItem
              icon={<InfoRoundedIcon variant="outlined" sx={{
                color: "black"
              }}/>}
              label="Detail"
              sx={{
                color: "black"
              }}
              onClick={() => handleDetailClick(params.row.PositionId)}
              showInMenu
            />,
            <GridActionsCellItem
              icon={<QueryStatsRoundedIcon sx={{
                color: "black"
              }}/>}
              label="Report"
              sx={{
                color: "black"
              }}
              onClick={() => handleReportClick(params.row.PositionId)}
              showInMenu
            />,
            <GridActionsCellItem
              icon={<PauseCircleOutlineRoundedIcon sx={{ color: "#cc3300" }} />}
              label="Inactive position"
              onClick={() => handleInactiveClick(params.row.PositionId)}
              showInMenu
              sx={{
                color: "#cc3300",
              }}
            />,
          ];
        }
      },
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
            <Grid item xs={12} sm={6} md={6}>
              <Box
                sx={{
                  fontSize: 40,
                  fontWeight: 600,
                  // color: "#1565C0",
                  color: "black",
                }}
              >
                Position
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              md={6}
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
                // variant="contained"
                variant="outlined"
                sx={{
                  // backgroundColor: "#1565C0",
                  color: "black",
                  border: "1px solid black",
                  textTransform: "none",
                  height: 50,
                  width: {
                    md: 250,
                    sm: 250,
                    xs: "100%",
                  },
                  "&:hover": {
                    backgroundColor: "black",
                    color: "white"
                  }
                }}
                onClick={handleAddClick}
              >
                <AddCircleOutlineIcon sx={{ marginRight: 1 }} />
                Create position
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
              sm={12}
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
                options={departments}
                sx={{ width: 200, marginRight: { md: 2, sm: 2, xs: 2 } }}
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

              <Autocomplete
                disablePortal
                id="filter-type"
                options={["Active", "Inactive"]}
                sx={{ width: 200 }}
                renderInput={(params) => (
                  <TextField {...params} label="Status..." />
                )}
                renderOption={(props, option) => {
                  if (option === "Active")
                    return (
                      <Box
                        component="li"
                        {...props}
                        sx={{
                          color: "#1565C0",
                        }}
                      >
                        <RocketLaunchRoundedIcon
                          sx={{
                            color: "#1565C0",
                            marginRight: 1,
                          }}
                        />
                        Active
                      </Box>
                    );
                  else if (option === "Inactive")
                    return (
                      <Box
                        component="li"
                        {...props}
                        sx={{
                          // color: "#E0E0E0",
                          color: "black",
                        }}
                      >
                        <DoNotDisturbOnRoundedIcon
                          sx={{
                            // color: "#E0E0E0",
                            color: "black",
                            marginRight: 1,
                          }}
                        />
                        Inactive
                      </Box>
                    );
                }}
                value={statusChoose}
                onChange={(event, value) => handleChooseStatus(value)}
              />

              {/* {valueChoose === "Language" && (
            <Autocomplete
              disablePortal
              id="filter-type"
              options={languages}
              sx={{ width: 200 }}
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
          )} */}
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

          <Box>
            <DataGrid
              autoHeight
              columns={columns}
              rows={rows === null ? [] : rows}
              // loading={rows === null}
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
                  fontSize: 14,
                  border: "none",
                },
                "&.MuiDataGrid-root .MuiDataGrid-columnSeparator": {
                  display: "none",
                },
                // "&.MuiDataGrid-root .MuiDataGrid-virtualScroller::-webkit-scrollbar":
                //   {
                //     display: "none",
                //   },
                // "&.MuiDataGrid-root .MuiDataGrid-virtualScrollerContent--overflowed": {
                //   display: "none",
                // },
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
              pageSizeOptions={[5, 10, 15, 25, 50, 100]}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 10,
                  },
                },
              }}
              getRowId={(row) => row.PositionId}
              onCellClick={(params, event) => {
                if (
                  params.field === "PositionId" ||
                  params.field === "PositionName"
                ) {
                  handleDetailClick(params.row.PositionId);
                }
              }}
            />
          </Box>
        </GigaCardBody>
      </GigaCard>
    </Box>
  );
}
