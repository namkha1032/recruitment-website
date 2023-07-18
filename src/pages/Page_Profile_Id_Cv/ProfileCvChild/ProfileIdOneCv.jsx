import React, { useState } from 'react';
import { Button, Typography, Grid, Paper, IconButton } from '@mui/material';
import { FirstPage, LastPage } from '@mui/icons-material';
import { useNavigate } from 'react-router';

export default function ProfileIdOneCv({ events }) {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const viewCV = useNavigate();

  const handleDetails = (eventId) => {
    // Perform action when the "Xem chi tiết" button is clicked for an event
    // You can implement this function to display detailed information about the event, e.g., show a popup, navigate to a new page, etc.
    viewCV('/profile/1/cv/1');
  };

  const handleCreateCV = () => {
    navigate('/profile/cv-create');
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const itemsPerPage = 12;
  const totalPages = Math.ceil(events.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedEvents = events.slice(startIndex, endIndex);

  const visiblePages = [];
  let startPage = Math.max(currentPage - 1, 1);
  let endPage = Math.min(startPage + 2, totalPages);

  if (endPage - startPage < 2) {
    if (endPage === totalPages) {
      startPage = Math.max(endPage - 2, 1);
    } else {
      endPage = Math.min(startPage + 2, totalPages);
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    visiblePages.push(i);
  }

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
                cursor: 'pointer',
              }}
              onClick={() => handleDetails(event.id)}
            >
              <Grid item sx={{ margin: '0 auto', marginBlockStart: '0' }}>
                <Paper variant="outlined" sx={{ p: 2, height: '100px', width: '200px', marginBottom: '10px', padding: '0' }}>
                  <Grid container direction="column" justifyContent="space-between" height="100%">
                    <Grid item>
                      <Typography variant="body1" fontWeight="bold">
                        {event.name}
                      </Typography>
                      
                      <Typography style={{ fontStyle: 'italic', color: '#999999' }}>
                        By {' '} 
                        <span style={{ color: '#b0c4de', fontStyle: 'normal' }}>
                          Huy
                        </span>
                      </Typography>

                      <Typography variant="body1" component="div">
                        Skill: {event.jobTitle}
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
        <Grid container justifyContent="center" alignItems="center" marginTop={2}>
          <Grid item>
            <IconButton onClick={() => handlePageChange(null, 1)} disabled={currentPage === 1} color="primary">
              <FirstPage />
            </IconButton>
            <IconButton onClick={() => handlePageChange(null, currentPage - 1)} disabled={currentPage === 1}>
              Prev
            </IconButton>
            {visiblePages.map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? 'contained' : 'outlined'}
                color="primary"
                onClick={(event) => handlePageChange(event, page)}
                style={{ margin: '5px' }}
              >
                {page}
              </Button>
            ))}
            <IconButton onClick={() => handlePageChange(null, currentPage + 1)} disabled={currentPage === totalPages}>
              Next
            </IconButton>
            <IconButton onClick={() => handlePageChange(null, totalPages)} disabled={currentPage === totalPages} color="primary">
              <LastPage />
            </IconButton>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={handleCreateCV}>
              Tạo CV
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
