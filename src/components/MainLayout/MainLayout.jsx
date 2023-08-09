import { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import { useLocation } from "react-router-dom";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import useGetRole from "../../hooks/useGetRole";
import SkeletonDemo from "../SkeletonDemo/SkeletonDemo";
const drawerWidth = 240;




const MainSection = (props) => {
    const open = props.open
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up("md"));
    const location = useLocation()
    const path = location.pathname
    const mainRef = useRef()
    useEffect(() => {
        mainRef.current.scrollTo(0, 0);
    }, [path])
    return (
        <main ref={mainRef} style={{
            flexGrow: 1,
            // padding: isMd ? theme.spacing(3) : 0,
            // paddingBottom: theme.spacing(3),
            paddingTop: theme.spacing(3),
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
        }}>
            {props.children}
        </main>
    )
}

function MainLayout() {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const userStore = useSelector(state => state.user)
    // const open = useSelector(state => state.sidebar)
    // function setOpen(value) {
    //     dispatch({ type: "sidebar/setSidebar", payload: value })
    // }
    useEffect(() => {
        const userLocal = window.localStorage.getItem("user");
        const userSession = window.sessionStorage.getItem("user");
        if (userLocal) {
            const user = JSON.parse(userLocal);
            dispatch({ type: "user/setUser", payload: user });
        } else if (userSession) {
            const user = JSON.parse(userSession);
            dispatch({ type: "user/setUser", payload: user });
        }
        return () => {
            dispatch({ type: 'profile/setProfile', payload: null })
        }
    }, []);
    // const navigate = useNavigate()
    // useEffect(() => {
    //     navigate("/home")
    // }, [navigate])
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up("md"));
    const role = useGetRole();


    let showSidebar =
        role == "admin" || role == "recruiter" || role == "interviewer"
            ? true
            : false;

    return (
        <>
            {userStore && role == null ?
                <SkeletonDemo />
                :
                <Box sx={{ display: 'flex' }}>
                    <Navbar open={showSidebar && isMd ? open : false} setOpen={setOpen} drawerWidth={drawerWidth} showSidebar={showSidebar} role={role} />
                    <Sidebar open={showSidebar ? open : false} setOpen={setOpen} drawerWidth={drawerWidth} showSidebar={showSidebar} />
                    <MainSection open={showSidebar ? open : false}>
                        <Container sx={{ paddingBottom: 4 }}>
                            <Outlet />
                        </Container>
                        <Footer />
                    </MainSection>
                </Box>
            }
        </>
    );
}
// hihihirhrhrhr
export default MainLayout;
export { MainSection }
