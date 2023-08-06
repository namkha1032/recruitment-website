import { useEffect, useMemo, useState } from "react";
import {
  Chip,
  Button,
  Autocomplete,
  TextField,
  IconButton,
  Tooltip,
  CircularProgress,
} from "@mui/material";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import {
  NullString,
  NotStart,
  Pending,
  Completed,
  Upcoming,
} from "../../components/Label/Label";
import {
  NoRowsOverlay,
  NoResultsOverlay,
} from "../../components/DataRick/DataRick";
import Box from "@mui/material/Box";
import EventNoteRounded from "@mui/icons-material/EventNoteRounded";
import SportsScoreRounded from "@mui/icons-material/SportsScoreRounded";
import { useNavigate, useSearchParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import cleanStore from "../../utils/cleanStore";
import GigaCard from "../../components/GigaCard/GigaCard";
import GigaCardBody from "../../components/GigaCardBody/GigaCardBody";
import { errorAlert } from "../../components/Alert/ErrorAlert";
import { ToastContainer, Slide, Bounce, Flip, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { formatDatetime } from "../../utils/formatDate";

// JSON <- Event
// {
//   "EventId": 0,
//   "EventCampus": "",
//   "EventName": "",
//   "CreatedById": 0,
//   "CreatedByName": "",
//   "NumOfJoined": 0,
//   "Status": [true, false] ~ ["Upcoming", "Finished"]
// }

export default function Page_Company_Event() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const isSm = useMediaQuery(theme.breakpoints.down("md"));

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch({
      type: "eventSaga/getEventList",
      payload: {
        token: `Bearer ${user.token}`,
      },
    });
    return () => {
      cleanStore(dispatch);
    };
  }, []);

  const rows = useSelector((state) => state.eventList);

  // const [anchorEl, setAnchorEl] = useState(null);
  // const [valueSearch, setValueSearch] = useState("");
  // const [valueChoose, setValueChoose] = useState(null);
  // const [departmentChoose, setDepartmentChoose] = useState(null);

  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  // useEffect(() => {
  //   let timeoutId = null
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

  const [statusChoose, setStatusChoose] = useState(null);

  // function handleMoreClick(event) {
  //   setAnchorEl(event.currentTarget);
  // }

  // function handleClose() {
  //   setAnchorEl(null);
  // }

  function handleAddClick() {
    cleanStore(dispatch);
    navigate("./create");
  }

  // function handleSearchClick() {
  //   alert("Value search: " + valueSearch);
  // }

  // function handleChooseValue(value) {
  //   setValueChoose(value);
  //   setStatusChoose(null);
  // }

  function handleChooseStatus(value) {
    setStatusChoose(value);
    dispatch({
      type: "eventSaga/getEventListWithFilter",
      payload: {
        status: value ? value : null,
        token: `Bearer ${user.token}`,
      },
    });
  }

  function handleDetailClick(value) {
    cleanStore(dispatch);
    navigate(`./${value}`);
  }

  function handleAccountDetailClick(value) {
    window.open(`../../profile/${value}`);
  }

  const columns = useMemo(() => [
    {
      field: "EventId",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 0.2,
      minWidth: 70,
      renderHeader: () => <span>ID</span>,
      renderCell: (params) => {
        if (params.value === undefined) return NullString();
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
      field: "EventName",
      type: "string",
      headerAlign: "left",
      align: "left",
      flex: 1,
      minWidth: 200,
      renderHeader: () => <span>Event Name</span>,
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
    // {
    //   field: "CreatedByName",
    //   type: "string",
    //   headerAlign: "center",
    //   align: "center",
    //   flex: 0.5,
    //   minWidth: 180,
    //   renderHeader: () => <span>Created by</span>,
    //   renderCell: (params) => {
    //     if (params.value === undefined) return NullString();
    //     return (
    //       <Box
    //         sx={{
    //           "&:hover": {
    //             cursor: "pointer",
    //             textDecoration: "underline",
    //           },
    //         }}
    //       >
    //         {params.value}
    //       </Box>
    //     );
    //   },
    // },
    {
      field: "EventDateTime",
      type: "string",
      headerAlign: "center",
      align: "center",
      flex: 0.5,
      minWidth: 180,
      renderHeader: () => <span>Date</span>,
      renderCell: (params) => {
        if (params.value === undefined) return NullString();
        return formatDatetime(params.value);
      },
    },
    {
      field: "NumOfJoined",
      type: "number",
      headerAlign: "center",
      align: "center",
      flex: 0.3,
      minWidth: 150,
      renderHeader: () => <span>Participated</span>,
      renderCell: (params) => {
        if (params.value === undefined) return NullString();
      },
    },
    {
      field: "Status",
      type: "string",
      headerAlign: "center",
      align: "center",
      minWidth: 180,
      flex: 0.3,
      renderHeader: () => <span>Status</span>,
      renderCell: (params) => {
        if (params.value === false) {
          return <Upcoming />;
        }
        return <Completed />;
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
          <IconButton onClick={() => handleDetailClick(params.row.EventId)}>
            <InfoIcon sx={{ color: "black" }} />
          </IconButton>
        </Tooltip>,
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
                Event
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
                //     md: 250,
                //     sm: 250,
                //     xs: "100%",
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
                onClick={handleAddClick}
              >
                <AddCircleOutlineIcon sx={{ marginRight: 1 }} />
                Create Event
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

            {/* --- Filter --- */}
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
                options={["Upcoming", "Finished"]}
                sx={{ width: { md: 200, sm: "100%", xs: "100%" } }}
                renderInput={(params) => (
                  <TextField {...params} label="Status..." />
                )}
                renderOption={(props, option) => {
                  if (option === "Upcoming") {
                    return (
                      <Box
                        component="li"
                        {...props}
                        sx={{
                          // color: "#E0E0E0",
                          color: "black.400",
                        }}
                      >
                        <EventNoteRounded
                          sx={{
                            color: "black.400",
                            marginRight: 1,
                          }}
                        />
                        Upcoming
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
              placeholder="Nhập ID, tên sự kiện..."
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

          {rows ? (
            <Box
              sx={{
                minHeight: 350,
              }}
            >
              <DataGrid
                autoHeight
                loading={loading || rows === null}
                columns={columns}
                rows={rows === null ? [] : rows}
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
                  "&.MuiDataGrid-root .MuiCircularProgress-root": {
                    color: "black",
                  },
                  "&.MuiDataGrid-root .MuiDataGrid-row": {
                    cursor: "pointer",
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
                getRowId={(row) => row.EventId}
                onRowClick={(params, event) => {
                  handleDetailClick(params.row.EventId);
                }}
                // onCellClick={(params, event) => {
                //   if (
                //     params.field === "EventId" ||
                //     params.field === "EventName"
                //   ) {
                //     handleDetailClick(params.row.EventId);
                //   }
                //   // if (params.field === "CreatedByName") {
                //   //   handleAccountDetailClick(params.row.CreatedById);
                //   // }
                // }}
              />
            </Box>
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
        </GigaCardBody>
      </GigaCard>

      <ToastContainer transition={Slide} hideProgressBar={true} />
    </Box>
  );
}
