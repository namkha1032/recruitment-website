import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
          backgroundColor: '#f8f8ff', // Set the background color of the tabs
          color: '#d3d3d3', // Set the text color of the tabs
          textTransform: 'none',
          marginLeft: 0,
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
      <Box mt={3} mb={5}> {/* Add margin (10px) on top and bottom */}
        <Tabs value={location.pathname}>
          <Tab
            label="My Event List"
            value="/profile/:profileid/event"
            component={Link}
            to="/profile/:profileid/event"
            
          />
          <Tab
            label="My Application List"
            value="/profile/:profileid/application"
            component={Link}
            to="/profile/:profileid/application"
          />
          <Tab
            label="My Interview List"
            value="/profile/:profileid/interview"
            component={Link}
            to="/profile/:profileid/interview"
          />
        </Tabs>
      </Box>
    </ThemeProvider>
  );
}
