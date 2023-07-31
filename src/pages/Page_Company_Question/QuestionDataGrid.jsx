import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import {
  NoRowsOverlay,
  NoResultsOverlay,
} from "../../components/DataRick/DataRick";
import "react-toastify/dist/ReactToastify.css";

export default function QuestionDataGrid(props) {
  return (
    <Box sx={{
      minHeight: 350,
    }}>
      <DataGrid
        autoHeight
        columns={props.columns}
        rows={props.rows ? props.rows : []}
        loading={props.loading || props.rows === null}
        sx={{
          "&.MuiDataGrid-root": {
            borderRadius: 1,
          },
          "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
            outline: "none",
          },
          "&.MuiDataGrid-root .MuiDataGrid-columnHeader": {
            backgroundColor: "black",
            color: "white",
            fontWeight: 700,
          },
          "&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within": {
            outline: "none",
          },
          "&.MuiDataGrid-root .MuiDataGrid-columnSeparator": {
            display: "none",
          },
          "&.MuiDataGrid-root .MuiDataGrid-sortIcon": {
            color: "white",
          },
          "&.MuiDataGrid-root .MuiDataGrid-row": {
            cursor: "pointer",
          },
          "&.MuiDataGrid-root .MuiCircularProgress-root": {
            color: "black"
          }
        }}
        slots={{ toolbar: GridToolbar, noRowsOverlay: NoRowsOverlay,
          noResultsOverlay: NoResultsOverlay, }}
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
        getRowId={(row) => row.QuestionId}
        onRowClick={(params, event) => {
          props.handleModalOpen(
            {
              QuestionId: params.row.QuestionId,
              QuestionName: params.row.QuestionName,
              CategoryId: params.row.CategoryId,
              CategoryName: params.row.CategoryName,
              TypeId: params.row.TypeId,
              TypeName: params.row.TypeName,
            },
            false
          );
        }}
        onCellClick={(params, event) => {
          if (params.field === "QuestionId" || params.field === "QuestionName") {
            props.handleModalOpen(
              {
                QuestionId: params.row.QuestionId,
                QuestionName: params.row.QuestionName,
                CategoryId: params.row.CategoryId,
                CategoryName: params.row.CategoryName,
                TypeId: params.row.TypeId,
                TypeName: params.row.TypeName,
              },
              false
            );
          }
        }}
      />
    </Box>
  );
}
