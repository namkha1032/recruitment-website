import { 
  useLocation, 
  Outlet, 
  Navigate 
} from "react-router-dom";
import { useSelector } from "react-redux";
import { all } from "axios";

const RequireAuth = ({ allowedRoles }) => {
  const location = useLocation();
  const user = useSelector((state) => state.user);
  //console.log(user)
  let roleName = "";
  if (user) {
    roleName = user.roleName;
  }
  //console.log(user)
  return (
    <>
      {
        !user ? (
          <Navigate to="/login" state={{ from: location }} replace/>
        ) : !allowedRoles.includes(roleName) ? (
          <Navigate to="/unauthorized" state={{ from: location }} replace/>
        ) : (
          <Outlet />
        )
      }
    </>
  );
};

export default RequireAuth;
