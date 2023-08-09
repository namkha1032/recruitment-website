import CVForm from "./Child/CVForm";
import "./CreateCV.scss";
import Box from "@mui/material/Box";


const Page_Profile_CvCreate = () => {
  return (
    <Box className="CreateCV">
      <CVForm></CVForm>
    </Box>
  );
};

export default Page_Profile_CvCreate;
