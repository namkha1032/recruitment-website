import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import useGetRole from "../../hooks/useGetRole";
// import Unauthorized from "../Unauthorized/Unauthorized";
// import Missing from "../MissingPage/MissingPage";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";



const ProtectedRoute = (props) => {
    const { allowed } = props
    const location = useLocation();
    const role = useGetRole()
    const user = useSelector(state => state.user)

    if (user) {
        if (allowed.includes(role)) {
            return (
                <Outlet />
            )
        }
        else if (role) {
            return (
                //<Unauthorized />
                <Navigate to="/unauthorized" state={{ from: location }} replace/>
            )
        }
        // else {
        //     return (
        //         <Missing />
        //     )
        // }
    }
    else {
        return (
            //<Unauthorized />
            <Navigate to="/unauthorized" state={{ from: location }} replace/>
        )
    }
}

export default ProtectedRoute