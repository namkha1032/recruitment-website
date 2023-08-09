import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
// import Page_Profile_Id_Cv_Id from '../Page_Profile_Id_Cv_Id/Page_Profile_Id_Cv'
import CV from "../../components/CV/CV";
import { Link, useParams } from "react-router-dom";
import Application from "../../components/Application/Application";
import { useEffect, useState } from "react";
import MissingPage from "../../components/MissingPage/MissingPage";
import Loading from "../../components/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import cleanStore from "../../utils/cleanStore";
import useGetRole from "../../hooks/useGetRole";

const Page_Company_Recruitment_Id_Application_Id = () => {
  const infoApplication = useSelector((state) => state.infoApplication);
  const user = useSelector((state) => state.user);

  const { applicationid, recruitmentid } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "applicationSaga/getInfoApplication",
      payload: { applicationid: applicationid, token: user.token },
    });
    return () => {
      cleanStore(dispatch);
    };
  }, []);
  return infoApplication !== null ? (
    infoApplication === "none" ? (
      <MissingPage />
    ) : infoApplication.position.positionId === recruitmentid ? (
      <Application cvid={infoApplication.cv.cvid} />
    ) : (
      <MissingPage />
    )
  ) : (
    <Loading />
  );
};

export default Page_Company_Recruitment_Id_Application_Id;
