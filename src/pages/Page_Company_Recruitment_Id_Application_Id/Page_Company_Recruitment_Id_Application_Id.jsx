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

const Page_Company_Recruitment_Id_Application_Id = () => {
  const infoApplication = useSelector(state => state.infoApplication )
  const {applicationid,recruitmentid} = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({type:'applicationSaga/getInfoApplication',payload:applicationid})
  },[])
  console.log(infoApplication)
  return (
    infoApplication!== null ? ( infoApplication === 'none' ? <MissingPage/> :
      ( infoApplication.position.positionId === recruitmentid  ?
    <Container>
      <Application cvid={0}/>
      <Box
      xs={12}
      sx={{ display: "flex", justifyContent: "flex-end", padding: "15px" }}
    >
      <Link to={`/company/interview/create?recruitmentid=${recruitmentid}&applicationid=${applicationid}`}>
        {" "} 
        <Button variant="contained" sx={{ marginRight: "50px" }}>
          Create Interview{" "}
        </Button>
      </Link>
      <Button variant="contained">Reject </Button>
    </Box>
    </Container> : <MissingPage/>)) : <Loading/>
     
  );
 
};

export default Page_Company_Recruitment_Id_Application_Id;
