import React, { useEffect } from "react";

import ProfileMain from "../../components/ProfileMain/ProfileMain";
import { useDispatch, useSelector } from "react-redux";
import MissingPage from "../../components/MissingPage/MissingPage";
import Loading from "../../components/Loading/Loading";
import { useParams } from "react-router-dom/dist";
import cleanStore from "../../utils/cleanStore";

const Profile = () => {
  return <ProfileMain page="Profile" />;
};

export default Profile;
