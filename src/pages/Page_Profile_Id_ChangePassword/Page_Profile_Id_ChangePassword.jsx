import React from "react";
import ProfileMain from "../../components/ProfileMain/ProfileMain";
import { useParams } from "react-router-dom";
import Unauthorized from "../../components/Unauthorized/Unauthorized";
import { useSelector } from "react-redux";


const Page_Profile_Id_ChangePassword = () => {
  const { profileid } = useParams();
  const userId = useSelector(state => state.user.userid)
  return (
    profileid === userId ? <ProfileMain page='ChangePW'/> : < Unauthorized/>
  );
};

export default Page_Profile_Id_ChangePassword;
