import { useState, useMemo } from "react";
import {
  Box,
  Grid,
  Tabs,
  Tab,
  Divider,
  Table,
  Chip,
  IconButton,
} from "@mui/material";
import {
  NoRowsOverlay,
  NoResultsOverlay,
} from "../../components/DataRick/DataRick";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import TableViewIcon from "@mui/icons-material/TableView";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import datasjson from "./Page_Company_Recruitment_Id_Report_Data.json";
import {
  NullString,
  NotStart,
  Pending,
  Completed,
  Postpone,
} from "../../components/Label/Label";
import { useNavigate } from "react-router-dom";

export default function ReportDataGrid(props) {
  return (
    <Box>
      <DataGrid
        autoHeight
        columns={props.columns}
        rows={props.rows ? props.rows : []}
        loading={props.loading || props.rows === null}
        sx={{
          "&.MuiDataGrid-root": {
            borderRadius: 1,
            borderColor: "gray.100",
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
          "&.MuiDataGrid-root .MuiDataGrid-sortIcon": {
            color: "white",
          },
          // "& .MuiDataGrid-virtualScroller::-webkit-scrollbar": {
          //   display: 'none',
          // },
          "&.MuiDataGrid-root .MuiDataGrid-row": {
            cursor: "pointer",
          },
          "&.MuiDataGrid-root .MuiCircularProgress-root": {
            color: "black",
          },
        }}
        slots={{
          toolbar: GridToolbar,
          noRowsOverlay: NoRowsOverlay,
          noResultsOverlay: NoResultsOverlay,
        }}
        slotProps={{
          // pagination: {
          //   labelRowsPerPage: "Số lượng hiển thị",
          //   labelDisplayedRows: ({ from, to, count }) =>
          //     `${from}–${to} của ${count !== -1 ? count : `hơn ${to}`}`,
          // },
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
          if (params.field === "InterviewerName") {
            props.handleInterviewerClick(params.row.InterviewerUserId);
          } else if (params.field === "CandidateName") {
            props.handleCandidateClick(params.row.CandidateUserId);
          } else {
            props.handleDetailClick(params.row.InterviewId);
          }
        }}
      />
    </Box>
  );
}
