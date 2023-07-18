import { Box, Container, Grid, TextField, Typography } from "@mui/material";
// import Page_Profile_Id_Cv_Id from '../Page_Profile_Id_Cv_Id/Page_Profile_Id_Cv_Id'
import { useSearchParams } from "react-router-dom";
import CV from "../../components/CV/CV";
import Application from "../../components/Application/Application";

const Page_Recruitment_Id_Application_Id = () => {
  return (
    <Container>
      <Application />
      <Box
        item
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
