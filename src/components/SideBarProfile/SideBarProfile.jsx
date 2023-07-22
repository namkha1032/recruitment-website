import React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import GroupIcon from '@mui/icons-material/Group';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import ForumIcon from '@mui/icons-material/Forum';
import CelebrationIcon from '@mui/icons-material/Celebration';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { useLocation, useNavigate } from 'react-router-dom';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Sidebar = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const theme = createTheme({
    // Các cài đặt theme tạm thời (nếu có)
  });

  const sidebarList = [
    {
      name: "My CVs",
      to: "/profile/:profileid/cv",
      icon: <GroupIcon />,
      active: location.pathname.slice(0, 14) === "/profile/:profileid/cv" ? true : false
    },
    {
      name: "My Application",
      to: "/profile/:profileid/application",
      icon: <ContentPasteSearchIcon />,
      active: location.pathname.slice(0, 27) === "/profile/:profileid/application" ? true : false
    },
    {
      name: "My Interviewer",
      to: "/profile/:profileid/interview",
      icon: <ForumIcon />,
      active: location.pathname.slice(0, 27) === "/profile/:profileid/interview" ? true : false
    },
    {
      name: "My Events",
      to: "/profile/:profileid/event",
      icon: <CelebrationIcon />,
      active: location.pathname.slice(0, 25) === "/profile/:profileid/event" ? true : false
    },
    {
      name: "My Question",
      to: "/profile/:profileid/question",
      icon: <ContactSupportIcon />,
      active: location.pathname.slice(0, 27) === "/profile/:profileid/question" ? true : false
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <Drawer
        sx={{
          width: props.drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: props.drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: "grey.900"
          },
        }}
        variant="persistent"
        anchor="left"
        open={props.showSidebar ? props.open : false}
      >
        <DrawerHeader>
          <IconButton onClick={() => props.setOpen(false)}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <List spacing={2} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {sidebarList.map((sidebarItem, index) => (
            <ListItem key={index} disablePadding onClick={() => { navigate(sidebarItem.to) }}
              sx={{
                backgroundColor: sidebarItem.active ? "grey.600" : "transparent",
                borderRadius: 4,
                width: "80%",
                marginTop: 1,
                marginBottom: 1,
                "&:hover": {
                  backgroundColor: "grey.600"
                }
              }} >
              <ListItemButton>
                <ListItemIcon>
                  {sidebarItem.icon}
                </ListItemIcon>
                <ListItemText primary={sidebarItem.name} sx={{
                  "& .MuiListItemText-primary": {
                    color: "common.white"
                  }
                }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </ThemeProvider>
  );
}

export { DrawerHeader };
export default Sidebar;
