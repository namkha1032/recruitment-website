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

const Page_Company_Recruitment_Id_Application_Id = () => {
  const infoApplication = useSelector(state => state.infoApplication )
  const user = useSelector(state => state.user)
  const cv = useSelector(state => state.cv)

  const {applicationid,recruitmentid} = useParams()
  const dispatch = useDispatch()
  const [status,setStatus] = useState("Pending")
  useEffect(() => {
    dispatch({type:'applicationSaga/getInfoApplication',payload:{applicationid:applicationid,token:user.token}})
    return () => {
      cleanStore(dispatch)
    };
  },[])
  useEffect(() => {
    
      setStatus(infoApplication ? infoApplication.company_Status : "Pending" )
    
  },[infoApplication])
  console.log(infoApplication)
  const  handleReject = () => {
      dispatch({type:'applicationSaga/rejectApplication',payload:{applicationid:applicationid,candidate_Status:infoApplication.candidate_Status,token:user.token}})
      setStatus("Rejected")
  }
  return (
    infoApplication!== null ? ( infoApplication === 'none' ? <MissingPage/> :
      ( infoApplication.position.positionId === recruitmentid  ?
    <Container>
      <Application cvid={infoApplication.cv.cvid}/>
      {cv && <Box
      xs={12}
      sx={{ display: "flex", justifyContent: "flex-end", padding: "15px" }}
    >
    {status === "Pending" ? <>
      <Link to={`/company/interview/create?recruitmentid=${recruitmentid}&applicationid=${applicationid}`}>
        {" "} 
        <Button variant="contained" sx={{ marginRight: "50px" }}>
          Create Interview{" "}
        </Button>
      </Link>
      <Button variant="contained" onClick={handleReject}> Reject </Button>
      </> : status === "Rejected"  ? <Box component='h2' m={0} color="red">Rejected </Box> : <Box component='h2' m={0} color='blue'> Accepted </Box>}
    </Box>}
    </Container> : <MissingPage/>)) : <Loading/>
     
  );
 
};

export default Page_Company_Recruitment_Id_Application_Id;
