import React, { useState } from 'react';
import { Grid, Typography, Button } from '@mui/material';
import { DataGrid} from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
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
    { field: 'name', headerName: 'Tên Event',flex:1 },
    { field: 'time', headerName: 'Thời gian', flex:1 },
    status && { field: 'status', headerName: 'Trạng thái', flex:1 },
    {
      field: 'view',
      headerName: 'View',
      flex:1,
      renderCell: (params) => (
        <Button variant="contained" color="primary"  onClick={() => handleDetails(params.row.id)}>
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
      <Grid item xs={12} md={6}>
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
