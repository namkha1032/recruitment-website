
import "./Page_Profile_Id.css";

import React, { useEffect} from "react";



import { useDispatch, useSelector } from "react-redux";
import ProfileMain from "../../components/ProfileMain/ProfileMain";

// import { checkuser } from "../../assets/js/checkuser";
// import Error from "../../components/Error/Error";

const Profile = () => {


  const dispatch = useDispatch();



 
  // const [change, setChange] = useState(true);
  // console.log(user.cvselected)
  useEffect(() => {
    // dispatch({ type: "saga/getListcv" });
    return () => {
      // dispatch({ type: "listcv/setListcv", payload: null });
    };
  }, []);
  // useEffect(() => {
  //   // dispatch({ type: "saga/getUserSaga" });
  //   return () => {
  //     // dispatch({ type: "user/setUser", payload: null });
  //   };
  // }, [change]);
  return (
      <ProfileMain page='Profile'/>
    )
};

export default Profile;
