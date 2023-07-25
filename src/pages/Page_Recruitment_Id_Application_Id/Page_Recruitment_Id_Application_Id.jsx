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
      <Application cvid={0} user={user}/>
      <Box
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "15px",
        }}
      >
        <Typography variant="h5">Date: 30/06/2023 </Typography>
        <em>Status</em>
      </Box>
    </Container>
  );
};

export default Page_Recruitment_Id_Application_Id;

