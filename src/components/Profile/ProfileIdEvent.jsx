import React, { useState } from 'react';
import { Grid, Typography, Button, Paper, Box } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import TabInProfile from './TabInProfile/TabInProfile';
export default function EventList({ events, totalPositions }) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const navigate = useNavigate();

  const handleDetails = (eventId) => {
    navigate(`/event/${eventId}`);
    // Perform action when the "View Details" button is clicked for an event
    // You can implement this function to display detailed information about the event, e.g., show a popup, navigate to a new page, etc.
  };

  const handleEventHover = (event) => {
    setSelectedEvent(event.eventId);
  };

  const handleEventLeave = () => {
    setSelectedEvent(null);
  };

  const columns = [
    { field: 'name', headerName: 'Event', flex: 2 },
    { field: 'time', headerName: 'Time', flex: 2 },
    {
      field: 'view',
      headerName: 'View',
      flex: 1,
      renderCell: (params) => (
          <Button variant="contained" color="primary" onClick={() => handleDetails(params.row.id)} style={{ textTransform: "none", backgroundColor:"black" }}>
            View Detail
          </Button>
      ),
    },
  ].filter(Boolean);

  const rows = events.map((event) => ({
    id: event.eventId,
    name: event.eventName,
    time:event.datetimeEvent,
  }));

  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="h4" gutterBottom>
          My Story
        </Typography>
      </Grid>
      <Grid item>
        <TabInProfile />
      </Grid>
      <Grid item xs={12} md={8}>
        <Paper elevation={3} sx={{ padding: '20px', marginBottom: '20px', width: '100%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <Typography variant="h5" gutterBottom>
              Event List
            </Typography>
            <Box sx={{ backgroundColor: '#dcdcdc', color: 'black', padding: '5px', borderRadius: '10px', marginLeft: '10px' }}>
              {totalPositions} Events
            </Box>
          </Box>
         
            <DataGrid
              rows={rows}
              columns={columns}
              rowStyles={(params) => ({
                backgroundColor: selectedEvent === params.id ? '#ffdddd' : 'transparent',
              })}
              onMouseEnter={(params) => handleEventHover(params.row)}
              onMouseLeave={handleEventLeave}
              sx={{
                width: '100%',
                "&.MuiDataGrid-root .MuiDataGrid-columnHeader": {
                  backgroundColor: "black",
                  color: "white",
                  fontWeight: 700,
                  fontSize: 14,
                  border: "none",
                },
              }}

            />
      
        </Paper>
      </Grid>
    </Grid>
  );
}
