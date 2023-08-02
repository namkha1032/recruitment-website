import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
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
          fontSize: '16px', // Set the font size of the tabs
          minWidth: 'auto', // Remove the minimum width to allow tabs to shrink
          textTransform: 'none',
          color: '#000000',
        },
        textColorInherit: {
          opacity: 1, // Make the text fully opaque for both selected and non-selected tabs
        },
      },
    },
  },
});

export default function TabInProfile() {
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <Box mt={2} mb={5}> {/* Add margin (10px) on top and bottom */}
        <Tabs value={location.pathname}>
          <Tab
            label="Event"
            value="/profile/1/event"
            component={Link}
            to="/profile/1/event"
           
          />
          <Tab
            label="Application"
            value="/profile/1/application"
            component={Link}
            to="/profile/1/application"
          />
          <Tab
            label="Interview"
            value="/profile/1/interview"
            component={Link}
            to="/profile/1/interview"
          />
        </Tabs>
      </Box>
    </ThemeProvider>
  );
}
