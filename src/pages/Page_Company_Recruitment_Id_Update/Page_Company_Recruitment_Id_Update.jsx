import RecruitForm from "./Child/RercruitForm"
import "./UpdateRecruit.scss"
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import PositionSkeleton from "./Child/positionSkeleton";
const Page_Company_Recruitment_Create = () => {
    const {recruitmentid} = useParams()
    // console.log(recruitmentid)
    return(
        <Box className="CreateRecruit">
            {/* <PositionSkeleton></PositionSkeleton> */}
            <RecruitForm recruitmentid={recruitmentid}></RecruitForm>
        </Box>
    )
}

export default Page_Company_Recruitment_Create