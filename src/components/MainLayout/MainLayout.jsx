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

const drawerWidth = 240;



const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => {
        const isMd = useMediaQuery(theme.breakpoints.up('md'));
        return {
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginTop: "68.5px",
            // maxWidth: "100%",
            // height: "100%",
            // maxHeight: "100vh",
            overflowY: "scroll",
            marginLeft: isMd ? `-${drawerWidth}px` : "0px",
            // marginLeft: `-${drawerWidth}px`,
            ...(open && {
                transition: theme.transitions.create('margin', {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                marginLeft: 0,
            }),
            // backgroundColor: "red",
        }
    },
);

function MainLayout() {
    const [open, setOpen] = React.useState(false);
    const [params, setParams] = useSearchParams();

    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'));

    let userRole = useSelector(state => state.user.roleName)

    console.log(userRole)
    let showSidebar = userRole != "candidate" ? true : false

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
                    <Footer />
                </Main>
            </Box>
        </>
    );
}

export default MainLayout
