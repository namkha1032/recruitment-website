import { Box, Container, Grid, TextField, Typography } from "@mui/material";
// import Page_Profile_Id_Cv_Id from '../Page_Profile_Id_Cv_Id/Page_Profile_Id_Cv_Id'
import { useParams, useSearchParams } from "react-router-dom";
import CV from "../../components/CV/CV";
import Application from "../../components/Application/Application";
import { useDispatch, useSelector } from "react-redux";
import MissingPage from "../../components/MissingPage/MissingPage";
import { useEffect } from "react";
import Loading from "../../components/Loading/Loading";
import cleanStore from "../../utils/cleanStore";

const Page_Recruitment_Id_Application_Id = () => {
  const infoApplication = useSelector((state) => state.infoApplication);
  const { applicationid, recruitmentid } = useParams();
  const user = useSelector((state) => state.user);
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
      <Application cvid={infoApplication.cv.cvid} page="normal" />
    ) : (
      <MissingPage />
    )
  ) : (
    <Loading />
  );
};

export default Page_Recruitment_Id_Application_Id;
