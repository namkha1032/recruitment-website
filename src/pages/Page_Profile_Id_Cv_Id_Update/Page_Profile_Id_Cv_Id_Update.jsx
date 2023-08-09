import CVForm from "./Child/CVForm";
import "./UpdateCv.scss";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
const Page_Profile_Id_Cv_Id_Update = () => {
  
    const {profileid, cvid} = useParams()
  return (
    <Box className="UpdateCV">
      <CVForm profileid={profileid} cvid={cvid} ></CVForm>
    </Box>
  );
};

export default Page_Profile_Id_Cv_Id_Update;
