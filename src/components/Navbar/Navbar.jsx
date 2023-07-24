import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import VideoChatIcon from '@mui/icons-material/VideoChat';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LogoutIcon from '@mui/icons-material/Logout';
import Grid from '@mui/material/Grid';
import BusinessIcon from '@mui/icons-material/Business';
import Container from '@mui/material/Container';
import { Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate, useLocation } from 'react-router-dom';
let innerDrawerWidth;


const NavbarContent = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const navigate = useNavigate()
    const location = useLocation()
    const navbarNavigate = [
        {
            name: "Home",
            to: "/home",
            active: location.pathname.slice(0, 5) == "/home" ? true : false
        },
        {
            name: "Recruitment",
            to: "/recruitment",
            active: location.pathname.slice(0, 12) == "/recruitment" ? true : false
        },
        {
            name: "Event",
            to: "/event",
            active: location.pathname.slice(0, 6) == "/event" ? true : false
        }
    ]
    const dropdownNavigate = [
        {
            name: "Profile",
            to: "/profile/1",
            active: location.pathname.includes("/profile") && location.pathname.split("/").length - 1 == 2,
            icon: <AccountCircleIcon />
        },
        {
            name: "My CVs",
            to: "/profile/1/cv",
            active: location.pathname.includes("/profile") && location.pathname.includes("/cv"),
            icon: <NewspaperIcon />
        },
        {
            name: "My Applications",
            to: "/profile/1/application",
            active: location.pathname.includes("/profile") && location.pathname.includes("/application"),
            icon: <PictureAsPdfIcon />
        },
        {
            name: "My Interviews",
            to: "/profile/1/interview",
            active: location.pathname.includes("/profile") && location.pathname.includes("/interview"),
            icon: <VideoChatIcon />
        },
        {
            name: "My Events",
            to: "/profile/1/event",
            active: location.pathname.includes("/profile") && location.pathname.includes("/event"),
            icon: <EmojiEventsIcon />
        },
        {
            name: "Logout",
            to: "/home",
            icon: <LogoutIcon />
        }
    ]
    return (
        <>
            {/* Navbar content responsive */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={(event) => { setAnchorElNav(event.currentTarget) }}
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={() => { setAnchorElNav(null) }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                >
                    {navbarNavigate.map((navbarItem, index) => (
                        <MenuItem key={index} onClick={() => { navigate(navbarItem.to) }}>
                            <Typography textAlign="center">{navbarItem.name}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
            {/* Icon responsive */}
            <FavoriteIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                TEAM4
            </Typography>
            <Container sx={{ display: { md: "flex", xs: "none" }, alignItems: "center" }}>
                {/* Logo */}
                <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={() => { navigate("/home") }}>
                    <FavoriteIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        TEAM4
                    </Typography>
                </Box>
                {/* Navbar content */}
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {navbarNavigate.map((navbarItem, index) => (
                        <Button
                            key={index}
                            onClick={() => { navigate(navbarItem.to) }}
                            sx={{
                                my: 2, color: 'white', display: 'block',
                                backgroundColor: navbarItem.active ? "primary.light" : "transparent",
                                borderRadius: 3,
                                marginLeft: 1,
                                marginRight: 1,
                                "&:hover": { backgroundColor: "primary.light" }
                            }}
                        >
                            {navbarItem.name}
                        </Button>
                    ))}
                </Box>
                {/* Dropdown */}
                <Box sx={{ flexGrow: 0, display: { xs: "none", md: "block" } }}>
                    <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={(event) => { setAnchorElUser(event.currentTarget) }}>
                        <Typography variant="subtitle1" sx={{ marginRight: 2 }}>Giga Chad</Typography>
                        <Tooltip title="Open settings">
                            <IconButton sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="https://i.kym-cdn.com/entries/icons/original/000/026/152/gigachadd.jpg" />
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Menu
                        sx={{
                            mt: '45px'
                        }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={() => { setAnchorElUser(null) }}
                    >
                        {dropdownNavigate.map((dropdown, index) => (
                            <Box key={index}>
                                {index == 1 || index == dropdownNavigate.length - 1 ? <Divider /> : null}
                                <MenuItem onClick={() => { navigate(dropdown.to) }}
                                    sx={{
                                        backgroundColor: dropdown.active ? "grey.400" : "transparent",
                                        "&:hover": {
                                            backgroundColor: "grey.400"
                                        }
                                    }}>
                                    <Grid container columns={{ md: 12 }}>
                                        <Grid item md={3}>
                                            {dropdown.icon}
                                        </Grid>
                                        <Grid item md={9} sx={{ paddingRight: 3 }}>
                                            <Typography>{dropdown.name}</Typography>
                                            {/* <Typography>hehe hehehheheheheh ehehehehehehehehehehehe</Typography> */}
                                        </Grid>
                                    </Grid>
                                </MenuItem>
                            </Box>
                        ))}
                    </Menu>
                </Box>
            </Container>
            {/* Dropdown responsive */}
            <Box sx={{ flexGrow: 0, display: { xs: "block", md: "none" } }}>
                <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={(event) => { setAnchorElUser(event.currentTarget) }}>
                    <Typography variant="subtitle1" sx={{ marginRight: 2 }}>Giga Chad</Typography>
                    <Tooltip title="Open settings">
                        <IconButton sx={{ p: 0 }}>
                            <Avatar alt="Remy Sharp" src="https://i.kym-cdn.com/entries/icons/original/000/026/152/gigachadd.jpg" />
                        </IconButton>
                    </Tooltip>
                </Box>
                <Menu
                    sx={{
                        mt: '45px'
                    }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={() => { setAnchorElUser(null) }}
                >
                    {dropdownNavigate.map((dropdown, index) => (
                        <Box key={index}>
                            {index == 1 || index == dropdownNavigate.length - 1 ? <Divider /> : null}
                            <MenuItem onClick={() => { navigate(dropdown.to) }}
                                sx={{
                                    backgroundColor: dropdown.active ? "grey.400" : "transparent",
                                    "&:hover": {
                                        backgroundColor: "grey.400"
                                    }
                                }}>
                                <Grid container columns={{ md: 12 }}>
                                    <Grid item md={3}>
                                        {dropdown.icon}
                                    </Grid>
                                    <Grid item md={9} sx={{ paddingRight: 3 }}>
                                        <Typography>{dropdown.name}</Typography>
                                        {/* <Typography>hehe hehehheheheheh ehehehehehehehehehehehe</Typography> */}
                                    </Grid>
                                </Grid>
                            </MenuItem>
                        </Box>
                    ))}
                </Menu>
            </Box>
        </>
    );
}
const CustomAppBar = styled(AppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${innerDrawerWidth}px)`,
        marginLeft: `${innerDrawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
    // backgroundColor: theme.palette.grey[600],
    // color: "black"
}));
const Navbar = (props) => {
    innerDrawerWidth = props.drawerWidth
    return (
        <CustomAppBar position="fixed" open={props.open} >
            <Toolbar>
                {props.showSidebar ? <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => props.setOpen(true)}
                    edge="start"
                    sx={{
                        mr: 1,
                        position: { xs: "block", lg: "absolute" },
                        // zIndex: 2,
                        ...(props.open && { display: 'none' })
                    }}
                >
                    <BusinessIcon />
                </IconButton> : null}
                <NavbarContent />
            </Toolbar>
        </CustomAppBar>
    )
}
export default Navbar;