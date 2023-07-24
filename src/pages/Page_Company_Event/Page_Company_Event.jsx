import { useEffect, useMemo, useState } from "react";
import {
  Chip,
  Button,
  Autocomplete,
  TextField,
  IconButton,
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
import datasjson from "./Page_Company_Event_Data.json";
import { useNavigate, useSearchParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import cleanStore from "../../utils/cleanStore";
export default function Page_Company_Event() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: "saga/getEventList" });
    return () => {
      cleanStore(dispatch);
    };
  }, []);

  const rows = useSelector((state) => state.eventList);

  // const [anchorEl, setAnchorEl] = useState(null);
  // const [valueSearch, setValueSearch] = useState("");

  const loading = useSelector((state) => state.loading);
  // const [valueChoose, setValueChoose] = useState(null);
  // const [departmentChoose, setDepartmentChoose] = useState(null);
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
      type: "saga/getEventListWithFilter",
      payload: {
        status: value ? value : null,
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
      minWidth: 50,
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
    {
      field: "CreatedByName",
      type: "string",
      headerAlign: "center",
      align: "center",
      flex: 0.5,
      minWidth: 180,
      renderHeader: () => <span>Created by</span>,
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
        if (params.value) {
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
        <IconButton onClick={() => handleDetailClick(params.row.InterviewId)}>
          <InfoIcon sx={{ color: "#1565C0" }} />
        </IconButton>,
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
        <Grid item xs={12} sm={6} md={8}>
          <Box
            sx={{
              fontSize: 40,
              fontWeight: 600,
              color: "#1565C0",
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
            variant="contained"
            sx={{
              backgroundColor: "#1565C0",
              textTransform: "none",
              height: 50,
              width: {
                md: 250,
                sm: 250,
                xs: "100%"
              },
            }}
            onClick={handleAddClick}
          >
            <AddCircleOutlineIcon sx={{ marginRight: 1 }} />
            Create event
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
            sx={{ width: {md: 200, sm: 200, xs: "100%"} }}
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
                      color: "#E0E0E0",
                    }}
                  >
                    <EventNoteRounded
                      sx={{
                        color: "#E0E0E0",
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

      <Box>
        <DataGrid
          autoHeight
          loading={loading}
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
              backgroundColor: "#1565C0",
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
          onCellClick={(params, event) => {
            if (params.field === "EventId" || params.field === "EventName") {
              handleDetailClick(params.row.EventId);
            }
            if (params.field === "CreatedByName") {
              handleAccountDetailClick(params.row.CreatedById);
            }
          }}
        />
      </Box>
    </Box>
  );
}
