import * as React from 'react';
import Box from '@mui/material/Box';
import { useSearchParams } from 'react-router-dom';
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { DrawerHeader } from '../../components/Sidebar/Sidebar';
import { styled, useTheme } from '@mui/material/styles';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useGetRole from '../../hooks/useGetRole';
const drawerWidth = 240;



const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => {
        const isMd = useMediaQuery(theme.breakpoints.up('md'));
        return {
            flexGrow: 1,
            // padding: isMd ? theme.spacing(3) : 0,
            paddingBottom: theme.spacing(3),
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginTop: "69px",
            // maxWidth: "100%",
            // height: "100%",
            // maxHeight: "100vh",
            // height: "93vh",
            overflowY: "scroll",
            marginLeft: isMd ? `-${drawerWidth}px` : "0px",
            // width: "100vw",
            // marginLeft: `-${drawerWidth}px`,
            ...(open && {
                transition: theme.transitions.create('margin', {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                marginLeft: 0,
            }),
            backgroundColor: theme.palette.grey[200],
            // backgroundColor: "red"
        }
    },
);

function MainLayout() {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch()
    useEffect(() => {
        const userLocal = window.localStorage.getItem('user')
        const userSession = window.sessionStorage.getItem('user')
        if (userLocal) {
            const user = JSON.parse(userLocal)
            dispatch({ type: "user/setUser", payload: user })
        }
        else if (userSession) {
            const user = JSON.parse(userSession)
            dispatch({ type: "user/setUser", payload: user })
        }
    }, [])
    // const navigate = useNavigate()
    // useEffect(() => {
    //     navigate("/home")
    // }, [navigate])
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const role = useGetRole()

    let userRole = "hahaha"
    let showSidebar = role == "admin" || role == "recruiter" || role == "interviewer" ? true : false

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Navbar open={showSidebar && isMd ? open : false} setOpen={setOpen} drawerWidth={drawerWidth} showSidebar={showSidebar} />
                <Sidebar open={showSidebar ? open : false} setOpen={setOpen} drawerWidth={drawerWidth} showSidebar={showSidebar} />
                <Main open={showSidebar ? open : false}>
                    {/* <DrawerHeader /> */}
                    <Container>
                        <Outlet />
                       
                    </Container>
                    
                </Main> 
                
            </Box>
            <Footer /> 
        </>
    );
}

export default MainLayout
