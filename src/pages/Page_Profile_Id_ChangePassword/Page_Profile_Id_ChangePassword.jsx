import React from "react";
import ProfileMain from "../../components/ProfileMain/ProfileMain";
import { useParams } from "react-router-dom";
import Unauthorized from "../../components/Unauthorized/Unauthorized";
import { useSelector } from "react-redux";


const Page_Profile_Id_ChangePassword = () => {
  const { profileid } = useParams();
  const userId = useSelector(state => state.user.userid)
  // const userId = "bf39957a-5fad-4e81-a8bd-2c2afa10d15a";
  return (
    profileid === userId ? <ProfileMain page='ChangePW'/> : < Unauthorized/>
  );
};

export default Page_Profile_Id_ChangePassword;
