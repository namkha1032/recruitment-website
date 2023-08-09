import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GroupIcon from '@mui/icons-material/Group';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import ForumIcon from '@mui/icons-material/Forum';
import CelebrationIcon from '@mui/icons-material/Celebration';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { useLocation, useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import useGetRole from '../../hooks/useGetRole';
import { useDispatch } from 'react-redux';
import cleanStore from '../../utils/cleanStore';
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));
const Sidebar = (props) => {
    const navigate = useNavigate()
    const location = useLocation()
    const url = location.pathname
    const dispatch = useDispatch()
    const role = useGetRole()
    const sidebarList = [
        {
            name: "Account",
            to: "/company/account",
            icon: <GroupIcon sx={{ color: "common.white" }} />,
            active: location.pathname.slice(0, 16) == "/company/account" ? true : false
        },
        {
            name: "Recruitment",
            to: "/company/recruitment",
            icon: <ContentPasteSearchIcon sx={{ color: "common.white" }} />,
            active: location.pathname.slice(0, 20) == "/company/recruitment" ? true : false
        },
        {
            name: "Interview",
            to: "/company/interview",
            icon: <ForumIcon sx={{ color: "common.white" }} />,
            active: location.pathname.slice(0, 18) == "/company/interview" ? true : false
        },
        {
            name: "Event",
            to: "/company/event",
            icon: <CelebrationIcon sx={{ color: "common.white" }} />,
            active: location.pathname.slice(0, 14) == "/company/event" ? true : false
        },
        {
            name: "Question",
            to: "/company/question",
            icon: <ContactSupportIcon sx={{ color: "common.white" }} />,
            active: location.pathname.slice(0, 17) == "/company/question" ? true : false
        }

    ];
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    // ///////////////////////////////////////
    // ///////////////////////////////////////
    return (
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
            variant={isMd ? "persistent" : "temporary"}
            // variant={"persistent"}
            // variant={"temporary"}
            anchor="left"
            open={props.showSidebar ? props.open : false}
            onClose={() => props.setOpen(false)}
        >
            <DrawerHeader>
                <IconButton onClick={() => props.setOpen(false)}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon sx={{ color: "common.white" }} /> : <ChevronRightIcon sx={{ color: "common.white" }} />}
                </IconButton>
            </DrawerHeader>
            <List spacing={2} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                {sidebarList.map((sidebarItem, index) => {
                    if (role != "admin" && index == 0) {
                        return <Box key={index} />
                    }
                    else if ((role != "admin" && role != "recruiter") && (index == 1 || index == 3)) {
                        return < Box key={index} />
                    }
                    else if (role != "admin" && role != "recruiter" && role != "interviewer") {
                        return < Box key={index} />
                    }
                    else if (role != "admin" && role != "interviewer" && ( index == 4)) {
                        return < Box key={index} />
                    }
                    else {
                        return (
                            <ListItem key={index} disablePadding onClick={() => {
                                if (url != sidebarItem.to) {
                                    cleanStore(dispatch)
                                }
                                navigate(sidebarItem.to)
                            }}
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
                        )
                    }
                })}
            </List>
            {/* <Divider /> */}
        </Drawer >
    )
}

export { DrawerHeader }
export default Sidebar