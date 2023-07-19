import * as React from 'react';
import Box from '@mui/material/Box';
import { useSearchParams } from 'react-router-dom';
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { DrawerHeader } from '../../components/Sidebar/Sidebar';
import { styled } from '@mui/material/styles';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
const drawerWidth = 240;


const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
        backgroundColor: theme.palette.grey[300]
    }),
);

function MainLayout() {
    const [open, setOpen] = React.useState(false);
    const [params, setParams] = useSearchParams();
    let showSidebar = params.get("can") == "true" ? false : true
    // let showSidebar = false
    return (
        <Box sx={{ display: 'flex' }}>
            <Navbar open={showSidebar ? open : false} setOpen={setOpen} drawerWidth={drawerWidth} showSidebar={showSidebar} />
            <Sidebar open={showSidebar ? open : false} setOpen={setOpen} drawerWidth={drawerWidth} showSidebar={showSidebar} />
            <Main open={showSidebar ? open : false}>
                <DrawerHeader />
                <Container>
                    <Outlet />
                </Container>
            </Main>
        </Box>
    );
}

export default MainLayout
