import React, { useState, useEffect } from 'react';
import { Grid, Typography, Button, Paper, Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TabInProfile from './TabInProfile/TabInProfile';
import { Pending, Pass } from '../Label/LabelStatus';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { NoRowsOverlay, NoResultsOverlay } from '../DataRick/DataRick';

import GigaCard from '../GigaCard/GigaCard';
import GigaCardBody from '../GigaCardBody/GigaCardBody';
export default function HistoryListApp({ events, NameList, namePage }) {

  const [selectedEvent, setSelectedEvent] = useState(null);
  const navigate = useNavigate();
  const [totalPositions, setTotalPositions] = useState(0);
  useEffect(() => {
    setTotalPositions(events.length);
  }, [events]);
  const handleDetails = (event) => {

    navigate(`/recruitment/${event.positionId}/application/${event.applicationId}`);

  };

  const handleEventHover = (event) => {
    setSelectedEvent(event.applicationId);
  };

  const handleEventLeave = () => {
    setSelectedEvent(null);
  };

  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));

  const columns = [
    { field: 'name', headerName: namePage, minWidth: 200, flex: 0.4, valueGetter: (params) => params.row.positionName },
    {
      field: 'time', headerName: 'Time', minWidth: 150, flex: 0.3, valueGetter: (params) => {
        let newDate = new Date(params.row.dateTime).toLocaleString()
        return newDate
      }
    },
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
          case "Pending":
            return <Pending />;
          case "Passed":
            return <Pass />
          default:
            return <Pending />;
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
              onClick={() => handleDetails(params.row)}
              style={{ textTransform: "none", backgroundColor: "black" }}
            >
              View Detail
            </Button>
          ) : (
            <VisibilityIcon onClick={() => handleDetails(params.row)} style={{ color: "#1565C0" }} />
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
            <Paper elevation={3} sx={{ padding: '20px', marginBottom: '20px', minHeight: 350 }}>
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
                autoHeight
                getRowId={(row) => row.applicationId}
                rowStyles={(params) => ({
                  backgroundColor: selectedEvent === params.applicationId ? '#ffdddd' : 'transparent',
                  ...(params.row.isSelected && { backgroundColor: '#64b5f6', color: '#ffffff' }),
                })}

                onMouseEnter={(params) => handleEventHover(params.row)}
                onMouseLeave={handleEventLeave}
                selection={{ backgroundColor: '#1565C0', color: '#ffffff' }}
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
                    // backgroundColor: "#1565C0",
                    backgroundColor: "black",
                    color: "white",
                    fontWeight: 700,
                  },
                  "&.MuiDataGrid-root .MuiDataGrid-columnSeparator": {
                    display: "none",
                  },
                  "&.MuiDataGrid-root .MuiDataGrid-sortIcon": {
                    color: "white",
                  },
                  "&.MuiDataGrid-root .MuiCircularProgress-root": {
                    color: "black",
                  },
                  "&.MuiDataGrid-root .MuiDataGrid-row": {
                    cursor: "pointer",
                  },

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
