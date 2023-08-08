import React, { useState } from 'react';
import { Button, Typography, Grid, Paper, IconButton ,Box} from '@mui/material';
import { FirstPage, LastPage } from '@mui/icons-material';
import { useNavigate } from 'react-router';
import AddIcon from '@mui/icons-material/Add';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import {  useSelector } from "react-redux";
import GigaCard from '../../../components/GigaCard/GigaCard';
import GigaCardBody from '../../../components/GigaCardBody/GigaCardBody';
export default function ProfileIdOneCv({ events ,img}) {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const viewCV = useNavigate();
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));
  const candidateId = useSelector(state => state.user.candidateId)
  const handleDetails = (eventId) => {
    // Perform action when the "Xem chi tiết" button is clicked for an event
    // You can implement this function to display detailed information about the event, e.g., show a popup, navigate to a new page, etc.
    viewCV(`/profile/${candidateId}/cv/${eventId}`);
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

    <Box>
      <GigaCard>
        <GigaCardBody>
      
        <Grid item sx = {{margin:'20px 0'}}>
          <Typography variant="h4" gutterBottom>
            My CVs
          </Typography>
        </Grid>
        
      <Paper elevation={3} sx={{ padding: '20px', marginBottom: '20px', width: '100%',marginTop:'20px'}}>
      <Grid container justifyContent="space-between" alignItems="center" sx={{marginBottom:'20px',padding:'10px 10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'}}>
        <Grid item>
          <Typography variant="h5" gutterBottom sx={{margin:'0'}}>
            CVs List
          </Typography>
        </Grid>
        <Grid item>
        <Button
          variant="contained"
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.87)',
            color: '#ffffff', // Đặt màu chữ cho nút
            '&:hover': {
              backgroundColor: '#808080', // Màu xám khi hover
            },
          }}
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
        <Grid container  wrap="wrap" sx={{justifyContent: isSm ? "flex-start": 'center', columnGap:'115px'}}>
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
                alignItems:'center',
                flexBasis: '250px',
                cursor: 'pointer',
              
                '&:hover': {
                  backgroundColor: 'black', // Màu xám khi hover
                },
              }}
              onClick={() => handleDetails(event.cvid)}
            >
              <Grid item sx={{ margin: '0 auto', marginBlockStart: '0' }}>
  <Paper variant="outlined" sx={{ p: 2, minHeight: '60px', width: '200px', padding: '0', whiteSpace: 'nowrap', overflow: 'hidden',backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
    <Grid container direction="column" height="100%">
      <Grid item>
        <Typography variant="body1" fontWeight="bold" sx={{color:'black'}}>
          {event.cvName}
        </Typography>

        <Typography variant="body1" component="div" sx={{ textOverflow: 'ellipsis', color:'black' }}>
          Skill: {event && event.skills && event.skills.length > 0 ? event.skills.map((skill) => skill.skillName).join(', ') : ''}
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
            {
              isSm ? (
                <IconButton onClick={() => handlePageChange(null, currentPage - 1)} disabled={currentPage === 1}>
              Prev
            </IconButton>
              ) : null
            }
          </Grid>
          <Grid item >
            {visiblePages.map((page) => (
              <Button
              sx={{backgroundColor:"white", 
              color:'black',
              '&:hover': {
                backgroundColor: '#808080', // Màu xám khi hover
              },}}
                key={page}
                variant={currentPage === page ? 'contained' : 'outlined'}
                color="primary"
                onClick={(event) => handlePageChange(event, page)}
                style={{ margin: '5px' }}
              >
                {page}
              </Button>
            ))}
          </Grid>
          <Grid item>
            {isSm ? (
              <IconButton onClick={() => handlePageChange(null, currentPage + 1)} disabled={currentPage === totalPages}>
                Next
              </IconButton>
            ) : null}  
            <IconButton onClick={() => handlePageChange(null, totalPages)} disabled={currentPage === totalPages} color="primary">
              <LastPage />
            </IconButton>
          </Grid>
          
        </Grid>
      </Grid>
      </Paper>
      </GigaCardBody>
      </GigaCard>
      </Box>
  );
}
