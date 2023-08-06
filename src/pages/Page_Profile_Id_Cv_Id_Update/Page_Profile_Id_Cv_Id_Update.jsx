import CVForm from "./Child/CVForm";
import "./UpdateCv.scss";
import { useParams } from "react-router-dom";
import CvSkeleton from "./Child/cvSkeleton";
import { Box } from "@mui/material";
const Page_Profile_Id_Cv_Id_Update = () => {
  
    const {profileid, cvid} = useParams()
    // console.log("proid: ", profileid)
    // console.log("cvidf: ", cvid)
  return (
    <Box className="UpdateCV">
      {/* <CvSkeleton></CvSkeleton> */}
      <CVForm profileid={profileid} cvid={cvid} ></CVForm>
    </Box>
  );
};

export default Page_Profile_Id_Cv_Id_Update;
