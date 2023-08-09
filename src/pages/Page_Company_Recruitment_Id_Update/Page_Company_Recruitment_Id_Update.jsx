import RecruitForm from "./Child/RercruitForm"
import "./UpdateRecruit.scss"
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
const Page_Company_Recruitment_Create = () => {
    const {recruitmentid} = useParams()
    return(
        <Box className="CreateRecruit">
            <RecruitForm recruitmentid={recruitmentid}></RecruitForm>
        </Box>
    )
}

export default Page_Company_Recruitment_Create