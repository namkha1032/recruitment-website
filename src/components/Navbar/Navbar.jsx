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
import FavoriteIcon from '@mui/icons-material/Favorite';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import VideoChatIcon from '@mui/icons-material/VideoChat';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';
import BusinessIcon from '@mui/icons-material/Business';
import Container from '@mui/material/Container';
import { Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import cleanStore from '../../utils/cleanStore';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import CelebrationIcon from '@mui/icons-material/Celebration';
let innerDrawerWidth;
let backcolor = "white"
let fontcolor = "black"
// let backcolor = "black"
// let fontcolor = "white"

const NavbarContent = (props) => {
    const role = props.role
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const open = Boolean(anchorElUser);
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const theme = useTheme()
    let url = useLocation()
    url = url.pathname
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));
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
    return (
        <>
            <Container sx={{ display: "flex", alignItems: "center" }}>
                {/* Logo */}
                <Box sx={{ display: { xs: 'none', md: 'flex' }, height: "69px", alignItems: "center", cursor: "pointer", borderTop: `4px solid ${backcolor}`, borderBottom: `4px solid ${backcolor}` }} onClick={() => { navigate("/home") }}>
                    <FavoriteIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: fontcolor }} />
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
                            color: fontcolor,
                            textDecoration: 'none',
                        }}
                    >
                        TEAM4
                    </Typography>
                </Box>
                {/* Navbar content responsive */}
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={(event) => { setAnchorElNav(event.currentTarget) }}
                        sx={{ color: `${fontcolor}` }}
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
                        <MenuItem onClick={() => {
                            setAnchorElNav(null)
                            if (url != "/home") {
                                cleanStore(dispatch)
                            }
                            navigate(`/home`)
                        }}>
                            <ListItemIcon>
                                <HomeIcon fontSize="small" sx={{ color: "black" }} />
                            </ListItemIcon>
                            Home
                        </MenuItem>
                        <MenuItem onClick={() => {
                            setAnchorElNav(null)
                            if (url != "/recruitment") {
                                cleanStore(dispatch)
                            }
                            navigate(`/recruitment`)
                        }}>
                            <ListItemIcon>
                                <WorkIcon fontSize="small" sx={{ color: "black" }} />
                            </ListItemIcon>
                            Recruitment
                        </MenuItem>
                        <MenuItem onClick={() => {
                            setAnchorElNav(null)
                            if (url != "/event") {
                                cleanStore(dispatch)
                            }
                            navigate(`/event`)
                        }}>
                            <ListItemIcon>
                                <CelebrationIcon fontSize="small" sx={{ color: "black" }} />
                            </ListItemIcon>
                            Event
                        </MenuItem>
                    </Menu>
                </Box>
                {/* Logo responsive */}
                <FavoriteIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: fontcolor }} />
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
                        color: fontcolor,
                        textDecoration: 'none',
                    }}
                >
                    TEAM4
                </Typography>
                {/* Navbar content */}
                <Box sx={{ flexGrow: 1, columnGap: 2, display: { xs: 'none', md: 'flex' } }}>
                    {navbarNavigate.map((navbarItem, index) => (
                        <Box
                            key={index}
                            onClick={() => {
                                if (url != navbarItem.to) {
                                    cleanStore(dispatch)
                                }
                                navigate(navbarItem.to)
                            }}
                            sx={{
                                "&:hover": { borderBottom: `4px solid ${fontcolor}` },
                                borderBottom: navbarItem.active ? `4px solid ${fontcolor}` : `4px solid ${backcolor}`,
                                borderTop: `4px solid ${backcolor}`,
                                height: "69px",
                                cursor: "pointer",
                                display: "flex", alignItems: "center"
                            }}>

                            <Typography
                                variant="button"
                                sx={{
                                    my: 2, color: 'black', display: 'block',
                                    // backgroundColor: navbarItem.active ? "primary.light" : "transparent",
                                    borderRadius: 3,
                                    marginLeft: 1,
                                    marginRight: 1,
                                    color: fontcolor
                                }}
                            >
                                {navbarItem.name}
                            </Typography>
                        </Box>
                    ))}
                </Box>
                {/* Dropdown */}
                <Box sx={{ flexGrow: 0 }}>
                    {role
                        ? <>
                            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                {isSm ? <Typography variant="body1">{user ? user.name : ""}</Typography> : null}
                                <Tooltip>
                                    <IconButton
                                        onClick={(event) => setAnchorElUser(event.currentTarget)}
                                        size="small"
                                        sx={{ ml: 2, padding: 0 }}
                                    >
                                        <Avatar src={user ? user.image : ""}>M</Avatar>
                                    </IconButton>
                                </Tooltip>
                            </Box>
                            <Menu
                                anchorEl={anchorElUser}
                                id="account-menu"
                                open={open}
                                onClose={() => setAnchorElUser(null)}
                                onClick={() => setAnchorElUser(null)}
                                PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        '& .MuiAvatar-root': {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1,
                                        },
                                        '&:before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: 'background.paper',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem onClick={() => {
                                    setAnchorElUser(null)
                                    const sameNavigate = url.includes("/profile") && url.split("/").length == 3
                                    if (!sameNavigate) {
                                        cleanStore(dispatch)
                                    }
                                    navigate(`/profile/${user.userid}`)
                                }}>
                                    <Avatar sx={{ backgroundColor: "black" }} /> {isSm ? "Profile" : (user ? user.name : "")}
                                </MenuItem>
                                <Divider />
                                {role == "candidate" &&
                                    <MenuItem onClick={() => {
                                        setAnchorElUser(null)
                                        const sameNavigate = url.includes("/profile") && url.includes("/cv") && url.split("/").length == 4
                                        if (!sameNavigate) {
                                            cleanStore(dispatch)
                                        }
                                        navigate(`/profile/${user.userid}/cv`)
                                    }}>
                                        <ListItemIcon>
                                            <PictureAsPdfIcon fontSize="small" sx={{ color: "black" }} />
                                        </ListItemIcon>
                                        My CVs
                                    </MenuItem>
                                }
                                {role == "candidate" &&
                                    <MenuItem onClick={() => {
                                        setAnchorElUser(null)
                                        const sameNavigate = url.includes("/profile") && url.includes("/application") && url.split("/").length == 4
                                        if (!sameNavigate) {
                                            cleanStore(dispatch)
                                        }
                                        navigate(`/profile/${user.userid}/application`)
                                    }}>
                                        <ListItemIcon>
                                            <NewspaperIcon fontSize="small" sx={{ color: "black" }} />
                                        </ListItemIcon>
                                        My Applications
                                    </MenuItem>
                                }
                                {role == "candidate" &&
                                    <MenuItem onClick={() => {
                                        setAnchorElUser(null)
                                        const sameNavigate = url.includes("/profile") && url.includes("/interview") && url.split("/").length == 4
                                        if (!sameNavigate) {
                                            cleanStore(dispatch)
                                        }
                                        navigate(`/profile/${user.userid}/interview`)
                                    }}>
                                        <ListItemIcon>
                                            <VideoChatIcon fontSize="small" sx={{ color: "black" }} />
                                        </ListItemIcon>
                                        My Interviews
                                    </MenuItem>
                                }
                                {role == "candidate" &&
                                    <MenuItem onClick={() => {
                                        setAnchorElUser(null)
                                        const sameNavigate = url.includes("/profile") && url.includes("/event") && url.split("/").length == 4
                                        if (!sameNavigate) {
                                            cleanStore(dispatch)
                                        }
                                        navigate(`/profile/${user.userid}/event`)
                                    }}>
                                        <ListItemIcon>
                                            <EmojiEventsIcon fontSize="small" sx={{ color: "black" }} />
                                        </ListItemIcon>
                                        My Events
                                    </MenuItem>
                                }
                                {role == "candidate" &&
                                    <Divider />}
                                <MenuItem onClick={() => {
                                    setAnchorElUser(null)
                                    cleanStore(dispatch)
                                    dispatch({ type: "saga/userLogout" })
                                    sessionStorage.setItem('previousPage', window.location.pathname);
                                    navigate("/login")
                                }}>
                                    <ListItemIcon>
                                        <Logout fontSize="small" sx={{ color: "black" }} />
                                    </ListItemIcon>
                                    Logout
                                </MenuItem>
                            </Menu>
                        </>
                        : <>
                            {isSm ? <Button sx={{
                                color: "black",
                                marginRight: 2
                            }}
                                onClick={() => {
                                    sessionStorage.setItem('previousPage', window.location.pathname);
                                    navigate("/register")
                                }}
                            >
                                Sign up
                            </Button> : null}
                            <Button variant="outlined" sx={{
                                borderColor: "black", color: "black",
                                backgroundColor: "white",
                                "&:hover": {
                                    borderColor: "black",
                                    backgroundColor: "white",
                                }
                            }} onClick={() => {
                                sessionStorage.setItem('previousPage', window.location.pathname);
                                navigate("/login")
                            }}>Log in</Button>
                        </>
                    }
                </Box>
            </Container>
        </>
    );
}

const Navbar = (props) => {
    const open = props.open
    const role = props.role
    const theme = useTheme()
    innerDrawerWidth = props.drawerWidth
    return (
        <>
            {/* <CustomAppBar position="fixed" open={props.open} > */}
            <AppBar

                sx={{
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
                    backgroundColor: backcolor,
                    color: "black",
                    height: "69px"
                    // boxShadow: 0
                }}
            >
                <Toolbar sx={{ height: "100%" }}>
                    {props.showSidebar ? <IconButton
                        aria-label="open drawer"
                        onClick={() => props.setOpen(true)}
                        edge="start"
                        sx={{
                            position: { xs: "block", lg: "absolute" },
                            // zIndex: 2,
                            ...(props.open && { display: 'none' }),
                            color: fontcolor
                        }}
                    >
                        <BusinessIcon />
                    </IconButton> : null}
                    <NavbarContent role={role} />
                </Toolbar>
            </AppBar>
            {/* </CustomAppBar> */}
        </>
    )
}
export default Navbar;