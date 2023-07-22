import React, { useState } from 'react';
import { Grid, Typography, Button, Paper } from '@mui/material';
import { DataGrid ,GridToolbar} from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { NullString, NotStart, Pending, Completed, Postpone } from "../LabelButton/LabelButton";
import Sidebar from '../SideBarProfile/SideBarProfile';
import TabInProfile from './TabInProfile/TabInProfile';
export default function HistoryList({ events, time, pathnavigate, namePage }) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const navigate = useNavigate();
  const drawerWidth = 200;
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
    status: event.status,
  }));

  return (
    <Grid container justifyContent="center">
      <div>
        <TabInProfile/>
      </div>
      <Grid item xs={12} md={10}> {/* Tăng chiều rộng của khung */}
      
        <Paper elevation={3} sx={{ padding: '20px', marginBottom: '20px', width: '100%' }}>
        <Typography variant="h5" gutterBottom>
            Application List
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
