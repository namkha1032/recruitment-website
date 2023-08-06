import RecruitForm from "./Child/RercruitForm"
import "./CreateRecruit.scss"
import Box from "@mui/material/Box";
import PositionSkeleton from "./Child/positionSkeleton";

const Page_Company_Recruitment_Create = () => {
    return(
        <Box className="CreateRecruit">
            {/* <PositionSkeleton></PositionSkeleton> */}
            <RecruitForm></RecruitForm>
        </Box>
    )
}

export default Page_Company_Recruitment_Create