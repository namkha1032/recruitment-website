import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import "react-toastify/dist/ReactToastify.css";

export default function QuestionDataGrid(props) {
  return (
    <Box
      sx={{
        height: 600,
        width: "100%",
      }}
    >
      <DataGrid
        columns={props.columns}
        rows={props.rows}
        sx={{
          "&.MuiDataGrid-root": {
            borderRadius: 1,
          },
          "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
            outline: "none",
          },
          "&.MuiDataGrid-root .MuiDataGrid-columnHeader": {
            backgroundColor: "#1565C0",
            color: "white",
            fontWeight: 700,
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          pagination: {
            labelRowsPerPage: "Số lượng hiển thị",
            labelDisplayedRows: ({ from, to, count }) =>
              `${from}–${to} của ${count !== -1 ? count : `hơn ${to}`}`,
          },
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: {
              debounceMs: 500,
              placeholder: "Tìm kiếm...",
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
        onCellClick={(params, event) => {
          if (params.field === "id" || params.field === "QuestionName") {
            props.handleModalOpen(
              {
                id: params.row.id,
                QuestionName: params.row.QuestionName,
                Category: params.row.Category,
                Skill: params.row.Skill,
              },
              false
            );
          }
        }}
      />
    </Box>
  );
}
