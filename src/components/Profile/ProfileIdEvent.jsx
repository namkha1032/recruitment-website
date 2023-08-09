import React, { useState } from 'react';
import { Grid, Typography, Button, Paper, Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import TabInProfile from './TabInProfile/TabInProfile';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import {NoRowsOverlay,NoResultsOverlay} from '../DataRick/DataRick';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GigaCard from '../GigaCard/GigaCard';
import GigaCardBody from '../GigaCardBody/GigaCardBody';
export default function EventList({ events}) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [totalPositions, setTotalPositions] = useState(0);
  useEffect(() => {
    setTotalPositions(events.length);
  }, [events]);
  const navigate = useNavigate();

  const handleDetails = (eventId) => {
    navigate(`/event/${eventId}`);
  };

  const handleEventHover = (event) => {
    setSelectedEvent(event.event.eventId);
  };

  const handleEventLeave = () => {
    setSelectedEvent(null);
  };
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));
  const columns = [
    { field: 'name', headerName: 'Event',minWidth:200,flex: 0.4,},
    isSm ? { field: 'time', headerName: 'Time', minWidth:150,flex: 0.3 } : null,
    isSm ? {
      field: 'place', headerName: 'Place', minWidth:150,flex: 0.3 
    } : null,
    {
      field: 'view',
      headerName: 'View',
      minWidth:150,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <>
        {isSm ? (
         <Button
         variant="contained"
         color="primary"
         onClick={() => handleDetails(params.row.id)}
         style={{ textTransform: "none", backgroundColor: "black" }}
       >
         View Detail
       </Button>
        ) : (
          <VisibilityIcon onClick = { () => handleDetails(params.row.id)} style={{ color: "#1565C0" }}/>    
        )}
      </>
      ),
    },
  ].filter(Boolean);

  const rows = events.map((event) => {
   
    return {
      id: event.event.eventId,
      name: event.event.eventName,
      place: event.event.place,
      time: new Date(event.event.datetimeEvent).toLocaleString(),
    };
  });

  return (
    <Box>
    <GigaCard>
      <GigaCardBody>
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
            <Typography variant="h5" gutterBottom sx={{margin:'0'}}>
              Event List
            </Typography>
            
            <Box sx={{ backgroundColor: '#dcdcdc', color: 'black', padding: '5px', borderRadius: '10px', marginLeft: '10px' }}>
              {totalPositions} Events
            </Box>
          </Box>
         
            <DataGrid
              rows={rows === null ? [] : rows }
              columns={columns}
              autoHeight={true}
              rowStyles={(params) => ({
                backgroundColor: selectedEvent === params.id ? '#ffdddd' : 'transparent',
              })}
              onMouseEnter={(params) => handleEventHover(params.row)}
              onMouseLeave={handleEventLeave}
              sx={{
                width: '100%',
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
                  fontSize: 14,
                  border: "none",
                },
                "&.MuiDataGrid-root .MuiDataGrid-columnSeparator": {
                  display: "none",
                },
                "&.MuiDataGrid-root .MuiDataGrid-sortIcon": {
                  color: "white",
                },
              }}
              slots = {{
                noRowsOverlay:NoRowsOverlay,
                noResultsOverlay:NoResultsOverlay,
                
              }}

            />
      
        </Paper>
      </Grid>
     
    </GigaCardBody>
      </GigaCard>
      </Box>
  );
}
