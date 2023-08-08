import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSelector } from 'react-redux';

const theme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator:{
          backgroundColor:'black',
        },
        root: {
          backgroundColor: 'rgb(255, 255, 255)', // Set the background color of the tabs
          color: '#d3d3d3', // Set the text color of the tabs
          textTransform: 'none',
          borderBottom: '1px solid #ccc', // Add a border at the bottom
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Add a box shadow
          
        },
        
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: '16px',
          minWidth: 'auto',
          textTransform: 'none',
          color: '#000000',
          '&$selected': {
            color: '#000000',
            fontWeight: 'bold',
            borderBottom: '2px solid black',
          },
          '&:hover': {
            color: '#000000',
          },
         
        },
        textColorInherit: {
          opacity: 1, // Make the text fully opaque for both selected and non-selected tabs
        },
        "&.Mui-selected": {
          "color": "#000000"
        }
      },
    },
  },
});

export default function TabInProfile() {
  const location = useLocation();
  const CandidateId = useSelector(state => state.user.userid);
  return (
    <ThemeProvider theme={theme}>
      <Box mt={2} mb={5}> {/* Add margin (10px) on top and bottom */}
        <Tabs value={location.pathname} textColor='inherit'>
          <Tab
            label="Event"
            value={`/profile/${CandidateId}/event`}
            component={Link}
            to={`/profile/${CandidateId}/event` }
           
          />
          <Tab
            label="Application"
            value={`/profile/${CandidateId}/application`}
            component={Link}
            to={`/profile/${CandidateId}/application`}
          />
          <Tab
            label="Interview"
            value={`/profile/${CandidateId}/interview`}
            component={Link}
            to={`/profile/${CandidateId}/interview`}
          />
        </Tabs>
      </Box>
    </ThemeProvider>
  );
}
