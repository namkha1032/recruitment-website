import React, { useState } from 'react';
import { Grid, Typography, Button, Paper } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import TabInProfile from './TabInProfile/TabInProfile';
export default function EventList({ events, time, status }) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const navigate = useNavigate();

  const handleDetails = (eventId) => {
    navigate(`/event/1`);
    // Perform action when the "View Details" button is clicked for an event
    // You can implement this function to display detailed information about the event, e.g., show a popup, navigate to a new page, etc.
  };

  const handleEventHover = (event) => {
    setSelectedEvent(event.id);
  };

  const handleEventLeave = () => {
    setSelectedEvent(null);
  };

  const columns = [
    { field: 'name', headerName: 'Tên Event', flex: 1 },
    { field: 'time', headerName: 'Thời gian', flex: 1 },
    status && { field: 'status', headerName: 'Trạng thái', flex: 1 },
    {
      field: 'view',
      headerName: 'View',
      flex: 1,
      renderCell: (params) => (
        <Button variant="contained" color="primary" onClick={() => handleDetails(params.row.id)} style={{textTransform:"none"}}>
          Xem chi tiết
        </Button>
      ),
    },
  ].filter(Boolean);

  const rows = events.map((event) => ({
    id: event.id,
    name: event.name,
    time,
    status,
  }));

  return (
    <Grid container justifyContent="center">
      <div>
        <TabInProfile/>
      </div>
      <Grid item xs={12} md={8}>
        <Paper elevation={3} sx={{ padding: '20px', marginBottom: '20px', width: '100%' }}>
          <Typography variant="h5" gutterBottom>
            Event List
          </Typography>
          <DataGrid
            rows={rows}
            columns={columns}
            rowStyles={(params) => ({
              backgroundColor: selectedEvent === params.id ? '#ffdddd' : 'transparent',
            })}
            onMouseEnter={(params) => handleEventHover(params.row)}
            onMouseLeave={handleEventLeave}
            sx={{ width: '100%' ,
            "&.MuiDataGrid-root .MuiDataGrid-columnHeader": {
              backgroundColor: "#1565C0",
              color: "white",
              fontWeight: 700,
              fontSize: 14,
              border: "none",
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
              quickFilterProps: { debounceMs: 500, placeholder: "Tìm kiếm...", sx: {
                width: 300,
                marginBottom: 1,
              }},
              csvOptions: { disableToolbarButton: true },
              printOptions: { disableToolbarButton: true }
          }
        }} 
        disableColumnMenu
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
          />
        </Paper>
      </Grid>
    </Grid>
  );
}
