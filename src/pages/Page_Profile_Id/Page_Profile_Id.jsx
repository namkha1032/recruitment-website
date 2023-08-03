import React, { useEffect } from "react";

import ProfileMain from "../../components/ProfileMain/ProfileMain";
import { useDispatch, useSelector } from "react-redux";
import MissingPage from "../../components/MissingPage/MissingPage";
import Loading from "../../components/Loading/Loading";

const Profile = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const profile = useSelector((state) => state.profile);
  useEffect(() => {
    dispatch({type:'profileSaga/getProfile',payload:{token:user.token,userid:user.userid}})
  },[])
  return (
  user && profile ? profile==='none' ? <MissingPage/> :

  <ProfileMain page="Profile" />  : <Loading/>
  );
};

export default Profile;
