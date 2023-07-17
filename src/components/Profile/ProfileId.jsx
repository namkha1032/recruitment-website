import React, { useState } from 'react';
import { Grid, Typography, Button } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

export default function HistoryList({ events, time, status }) {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleDetails = (eventId) => {
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
    { field: 'name', headerName: 'Tên Event', flex:1 },
    { field: 'time', headerName: 'Thời gian', flex:1 },
    status && { field: 'status', headerName: 'Trạng thái',flex:1 },
    {
      field: 'view',
      headerName: 'View',
      flex:1,
      renderCell: (params) => (
        <Button variant="contained" color="primary" onClick={() => handleDetails(params.row.id)}>
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
      <Grid item xs={12} md={8}>
        <DataGrid
          rows={rows}
          columns={columns}
          rowStyles={(params) => ({
            backgroundColor: selectedEvent === params.id ? '#ffdddd' : 'transparent',
          })}
          onMouseEnter={(params) => handleEventHover(params.row)}
          onMouseLeave={handleEventLeave}
        />
      </Grid>
    </Grid>
  );
}
