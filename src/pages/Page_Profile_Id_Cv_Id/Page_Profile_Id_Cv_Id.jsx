import { Box } from "@mui/material"
import { Button } from "@mui/material"
import { useNavigate } from "react-router"
import CV from "../../components/CV/CV"
const Page_Profile_Id_Cv_Id = () => {
  const navigate = useNavigate()
  return (
    <>
      <Box sx={{ border: "1px solid black", padding: 10, borderRadius: 4 ,mb:5}}>
        <CV />
      </Box>
      <Box sx={{display:'flex',justifyContent:'flex-end'}}>
            <Button  variant="contained" color="warning" onClick={() => navigate("/profile/1/cv/1/update")}>update</Button>
      </Box>
    </>
  )
}

export default Page_Profile_Id_Cv_Id