import React, { useState } from 'react';
import { Button, Typography, Grid, Paper, IconButton } from '@mui/material';
import { FirstPage, LastPage } from '@mui/icons-material';
import { useNavigate } from 'react-router';
import AddIcon from '@mui/icons-material/Add';

export default function ProfileIdOneCv({ events ,img}) {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const viewCV = useNavigate();

  const handleDetails = (eventId) => {
    // Perform action when the "Xem chi tiết" button is clicked for an event
    // You can implement this function to display detailed information about the event, e.g., show a popup, navigate to a new page, etc.
    viewCV(`/profile/1/cv/${eventId}`);
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
    <Grid container justifyContent="center" spacing={2} >
      <Paper elevation={3} sx={{ padding: '20px', marginBottom: '20px', width: '100%',marginTop:'20px'}}>
      <Grid container justifyContent="space-between" alignItems="center" sx={{marginBottom:'20px'}}>
        <Grid item>
          <Typography variant="h5" gutterBottom sx={{margin:'0'}}>
            CVs List
          </Typography>
        </Grid>
        <Grid item>
        <Button
          variant="contained"
          color="primary"
          onClick={handleCreateCV}
          style={{ textTransform: "none" }}
          startIcon={<AddIcon />}
        >
          Create CV
        </Button>
      </Grid>
    </Grid>
      <Grid item xs={12} md={12} sx={{ margin: '0 0px',width:'100%'}}>
        <Grid container  wrap="wrap" sx={{justifyContent:'space-between'}}>
          {displayedEvents.map((event) => (
            <Paper
              key={event.cvid}
              sx={{
                backgroundImage: `url('${img}')`,
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
              onClick={() => handleDetails(event.cvid)}
            >
              <Grid item sx={{ margin: '0 auto', marginBlockStart: '0' }}>
                <Paper variant="outlined" sx={{ p: 2, height: '100px', width: '200px', marginBottom: '10px', padding: '0' }}>
                  <Grid container direction="column" justifyContent="space-between" height="100%">
                    <Grid item>
                      <Typography variant="body1" fontWeight="bold">
                        {event.cvName}
                      </Typography>
                      
                      <Typography style={{ fontStyle: 'italic', color: '#999999' }}>
                        By {' '} 
                        <span style={{ color: '#b0c4de', fontStyle: 'normal' }}>
                          Huy
                        </span>
                      </Typography>

                      <Typography variant="body1" component="div">
                        Skill: {event.skills[0]}
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
          
        </Grid>
      </Grid>
      </Paper>
    </Grid>
  );
}
