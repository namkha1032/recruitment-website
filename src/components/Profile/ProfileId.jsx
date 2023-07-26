import React, { useState, useEffect } from 'react';
import { Grid, Typography, Button, Paper,Box } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { NullString, NotStart, Pending, Completed, Postpone } from "../LabelButton/LabelButton";
import TabInProfile from './TabInProfile/TabInProfile';

export default function HistoryList({ events, time, pathnavigate, NameList, namePage }) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const navigate = useNavigate();

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

  const columns = [
    { field: 'name', headerName: namePage, flex: 2 },
    { field: 'time', headerName: 'Thời gian', flex: 2 },
    {
      field: 'status',
      headerName: 'Trạng thái',
      flex: 2,
      renderCell: (params) => {
        switch (params.value) {
          case "Đang chờ":
            return <NotStart />;
          case "Đã đậu":
            return <Completed/>
          case "Chưa phỏng vấn":
            return <NotStart/>;
          case "Đã phỏng vấn":
            return <Completed/>;
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
                {NameList}
              </Typography>
              <Box sx={{ backgroundColor: '#dcdcdc', color: 'black', padding: '5px', borderRadius: '10px', marginLeft: '10px' }}>
                {'0'} {namePage}
              </Box>
            </Box>
            <DataGrid
              rows={events === null ? [] : events}
              columns={columns}
              rowStyles={(params) => ({
                backgroundColor: selectedEvent === params.id ? '#ffdddd' : 'transparent',
                ...(params.row.isSelected && { backgroundColor: '#64b5f6', color: '#ffffff' }),
              })}
              onMouseEnter={(params) => handleEventHover(params.row)}
              onMouseLeave={handleEventLeave}
              selection={{ backgroundColor: '#1565C0', color: '#ffffff' }}
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
