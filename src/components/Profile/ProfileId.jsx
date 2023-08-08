import React, { useState, useEffect } from 'react';
import { Grid, Typography, Button, Paper, Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TabInProfile from './TabInProfile/TabInProfile';
import { NotStart, Completed } from '../Label/LabelStatus';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import GigaCard from '../GigaCard/GigaCard';
import GigaCardBody from '../GigaCardBody/GigaCardBody';
import { NoRowsOverlay, NoResultsOverlay } from '../DataRick/DataRick';
export default function HistoryList({ events, pathnavigate, NameList, namePage }) {

  const [selectedEvent, setSelectedEvent] = useState(null);
  const navigate = useNavigate();
  const [totalPositions, setTotalPositions] = useState(0);
  useEffect(() => {
    setTotalPositions(events.length);
  }, [events]);
  const handleDetails = (eventId) => {
    navigate(`${pathnavigate}/${eventId}`);

  };

  const handleEventHover = (event) => {
    setSelectedEvent(event.interviewId);
  };

  const handleEventLeave = () => {
    setSelectedEvent(null);
  };

  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));
  const columns = [
    { field: 'name', headerName: namePage, flex: 0.4, minWidth: 200, valueGetter: (params) => params.row.positionName },
    { field: 'time', headerName: 'Time', minWidth: 150, flex: 0.3, valueGetter: (params) => params.row.dateTime },
    {
      field: 'status',
      headerName: 'Status',
      minWidth: 150,
      flex: 0.2,
      headerAlign: "center",
      align: "center",
      valueGetter: (params) => params.row.Status,
      renderCell: (params) => {
        switch (params.value) {
          case "Not start":
            return <NotStart />;
          case "Finished":
            return <Completed />
          default:
            return <NotStart />;
        }
      },
    },
    {
      field: 'view',
      headerName: 'View',
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <>
          {isSm ? (
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleDetails(params.row.interviewId)}
              style={{ textTransform: "none", backgroundColor: "black" }}
            >
              View Detail
            </Button>
          ) : (
            <VisibilityIcon onClick={() => handleDetails(params.row.interviewId)} style={{ color: "#1565C0" }} />
          )}
        </>
      ),
    },
  ].filter(Boolean);


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
          <Grid item xs={12} md={10}>

            <Paper elevation={3} sx={{ padding: '20px', marginBottom: '20px', width: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <Typography variant="h5" gutterBottom sx={{ margin: '0' }}>
                  {NameList}
                </Typography>
                <Box sx={{ backgroundColor: '#dcdcdc', color: 'black', padding: '5px', borderRadius: '10px', marginLeft: '10px' }}>
                  {totalPositions} {namePage}
                </Box>
              </Box>
              <DataGrid
                rows={events === null ? [] : events}
                columns={columns}
                getRowId={(row) => row.interviewId}
                autoHeight={true}
                rowStyles={(params) => ({
                  backgroundColor: selectedEvent === params.interviewId ? '#ffdddd' : 'transparent',
                  ...(params.row.isSelected && { backgroundColor: '#64b5f6', color: '#ffffff' }),
                })}

                onMouseEnter={(params) => handleEventHover(params.row)}
                onMouseLeave={handleEventLeave}
                selection={{ backgroundColor: '#1565C0', color: '#ffffff' }}
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
                  "&.MuiDataGrid-colCellTitle": {
                    whiteSpace: "normal",
                  }
                }}
                slots={{
                  noRowsOverlay: NoRowsOverlay,
                  noResultsOverlay: NoResultsOverlay,

                }}
              />
            </Paper>
          </Grid>
        </GigaCardBody>
      </GigaCard>
    </Box>
  );
}
