import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import useGetRole from "../../hooks/useGetRole";
import Unauthorized from "../Unauthorized/Unauthorized";
const ProtectedRoute = (props) => {
    const { allowed } = props
    const role = useGetRole()
    const user = useSelector(state => state.user)
    if (user) {
        if (allowed.includes(role)) {
            return (
                <Outlet />
            )
        }
        else if(role) {
            return (
                <Unauthorized />
            )
        }
    }
    else {
        return (
            <Unauthorized />
        )
    }
}

export default ProtectedRoute