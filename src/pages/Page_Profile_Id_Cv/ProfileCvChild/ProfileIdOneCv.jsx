import React, { useState } from 'react';
import { Button, Typography, Grid, Paper, IconButton } from '@mui/material';
import { FirstPage, LastPage } from '@mui/icons-material';
import { useNavigate } from 'react-router';
export default function ProfileIdOneCv({ events }) {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate()
  const handleDetails = (eventId) => {
    // Thực hiện hành động khi người dùng nhấn vào nút "Xem chi tiết" của từng event
    // Bạn có thể triển khai hàm này để hiển thị thông tin chi tiết về event, ví dụ: popup, chuyển đến trang mới, ...
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const itemsPerPage = 12;
  const totalPages = Math.ceil(events.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedEvents = events.slice(startIndex, endIndex);

  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid item xs={12} md={12} sx={{ margin: '0 25px' }}>
        <Grid container justifyContent="flex-start" spacing={2} wrap="wrap">
          {displayedEvents.map((event) => (
            <Paper
              key={event.id}
              sx={{
                backgroundImage: `url('https://i.pinimg.com/originals/0b/cf/fb/0bcffbfe90509070f4f00a4817346751.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                p: 2,
                width: '250px',
                height: '300px',
                margin: '10px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                cursor: "pointer"
              }}
              onClick={() => navigate("/profile/1/cv/1")}
            >
              <Grid item sx={{ margin: '0 auto', marginBlockStart: '0' }}>
                <Paper variant="outlined" sx={{ p: 2, height: '100px', width: '200px', marginBottom: '10px', padding: '0' }}>
                  <Grid container direction="column" justifyContent="space-between" height="100%">
                    <Grid item>
                      <Typography variant="h6" component="div">
                        {event.name}
                      </Typography>
                      <Typography variant="body1" component="div">
                        Công việc: {event.jobTitle}
                      </Typography>
                      <Typography variant="body1" component="div">
                        Kinh nghiệm: {event.experience}
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Paper>
          ))}
        </Grid>
        {totalPages > 1 && (
          <Grid container justifyContent="center" marginTop={2}>
            <IconButton onClick={() => handlePageChange(1)} disabled={currentPage === 1}>
              <FirstPage />
            </IconButton>
            <IconButton onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
              Prev
            </IconButton>
            <IconButton onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
              Next
            </IconButton>
            <IconButton onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}>
              <LastPage />
            </IconButton>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}
