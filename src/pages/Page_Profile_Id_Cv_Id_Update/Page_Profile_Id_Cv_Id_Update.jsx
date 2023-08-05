import CVForm from "./Child/CVForm";
import "./UpdateCv.scss";
import { useParams } from "react-router-dom";
// import CvSkeleton from "./Child/cvSkeleton";

const Page_Profile_Id_Cv_Id_Update = () => {
  
    const {profileid, cvid} = useParams()
    console.log("proid: ", profileid)
    console.log("cvidf: ", cvid)
  return (
    <div className="UpdateCV">
      {/* <CvSkeleton></CvSkeleton> */}
      <CVForm profileid={profileid} cvid={cvid} ></CVForm>
    </div>
  );
};

export default Page_Profile_Id_Cv_Id_Update;
