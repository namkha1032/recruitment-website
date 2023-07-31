import { Box, Container, Grid, TextField, Typography } from "@mui/material";
// import Page_Profile_Id_Cv_Id from '../Page_Profile_Id_Cv_Id/Page_Profile_Id_Cv_Id'
import { useSearchParams } from "react-router-dom";
import CV from "../../components/CV/CV";
import Application from "../../components/Application/Application";
import { useSelector } from "react-redux";



const Page_Recruitment_Id_Application_Id = () => {
  const user = useSelector(state => state.user )
  // useEffect(() => {
    
  //   const fetchData = async () => {
  //     const response = await axios.get("http://localhost:3001/user");
  //     setUser(response.data);
  //     const response1 = await axios.get("http://localhost:3001/cvs");
  //     setCVs(response1.data);
  //   };
  //   fetchData();
  // }, []);
  return (
    
    user && <Container>
      <Application cvid={0} page="normal"/>
    
    </Container>
  );
};

export default Page_Recruitment_Id_Application_Id;

