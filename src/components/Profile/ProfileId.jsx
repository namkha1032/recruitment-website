import React, { useState, useEffect } from 'react';
import { Grid, Typography, Button, Paper,Box } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { NullString, NotStart, Pending, Completed, Postpone } from "../LabelButton/LabelButton";
import TabInProfile from './TabInProfile/TabInProfile';

export default function HistoryList({ events, time, pathnavigate, namePage }) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const navigate = useNavigate();
  const drawerWidth = 200;
  const [totalPositions, setTotalPositions] = useState(0);

  useEffect(() => {
    // Calculate the total number of positions
    const total = events.reduce((sum, event) => {
      if (event.id && Array.isArray(event.id)) {
        return sum + event.id.length;
      }
      return sum;
    }, 0);
    setTotalPositions(total);
  }, [events]);

  const handleDetails = (eventId) => {
    navigate(pathnavigate);
    // Thực hiện hành động khi người dùng nhấn vào nút "Xem chi tiết" cho từng event
    // Bạn có thể triển khai hàm này để hiển thị thông tin chi tiết về event, ví dụ: hiển thị popup, chuyển đến trang mới, ...
  };

  const handleEventHover = (event) => {
    setSelectedEvent(event.id);
  };

  const handleEventLeave = () => {
    setSelectedEvent(null);
  };

  const renderStatusButton = (status) => {
    if (status === 'Kết thúc') {
      return (
        <Button variant="contained" color="secondary">
          Kết thúc
        </Button>
      );
    } else if (status === 'Sắp diễn ra') {
      return (
        <Button variant="contained" color="primary">
          Sắp diễn ra
        </Button>
      );
    } else {
      return null;
    }
  };

  const columns = [
    { field: 'name', headerName: namePage, flex: 1 },
    { field: 'time', headerName: 'Thời gian', flex: 1 },
    {
      field: 'status',
      headerName: 'Trạng thái',
      flex: 1,
      renderCell: (params) => {
        switch (params.value) {
          case "Chưa bắt đầu":
            return <NotStart />;
          case "Đang diễn ra":
            return <Pending />;
          case "Kết thúc":
            return <Completed />;
          default:
            return <Postpone />;
        }
      },
    },
    {
      field: 'view',
      headerName: 'View',
      flex: 1,
      renderCell: (params) => (
        <Button variant="contained" color="primary" onClick={() => handleDetails(params.row.id)} style={{ textTransform: "none" }}>
          Xem chi tiết
        </Button>
      ),
    },
  ].filter(Boolean);

  const rows = events.map((event) => ({
    id: event.id,
    name: event.name,
    time,
    status: event.status,
  }));

  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <Typography variant="h4" gutterBottom>
            My Story
          </Typography>
        </Grid>
        <Grid item>
          <TabInProfile />
        </Grid>
        <Grid item xs={12} md={10}>
          {/* Tăng chiều rộng của khung */}
          <Paper elevation={3} sx={{ padding: '20px', marginBottom: '20px', width: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <Typography variant="h5" gutterBottom>
                Application List
              </Typography>
              <Box sx={{ backgroundColor: '#dcdcdc', color: 'black', padding: '5px', borderRadius: '10px', marginLeft: '10px' }}>
                {totalPositions} Application
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
                  backgroundColor: "#1565C0",
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
    </>
  );
}
