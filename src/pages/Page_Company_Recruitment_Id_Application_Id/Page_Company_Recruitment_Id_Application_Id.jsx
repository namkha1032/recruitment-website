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
import { Link } from "react-router-dom";
import Application from "../../components/Application/Application";

const Page_Company_Recruitment_Id_Application_Id = () => {
  return (
    <Container>
      <Application />
      <Box
        xs={12}
        sx={{ display: "flex", justifyContent: "flex-end", padding: "15px" }}
      >
        <Link to="/company/interview/create">
          {" "}
          <Button variant="contained" sx={{ marginRight: "50px" }}>
            Create Interview{" "}
          </Button>
        </Link>
        <Button variant="contained">Reject </Button>
      </Box>
    </Container>
  );
};

export default Page_Company_Recruitment_Id_Application_Id;
