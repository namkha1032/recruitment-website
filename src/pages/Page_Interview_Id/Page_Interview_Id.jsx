import { Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import { Box } from "@mui/material"
const InterviewComponent = () => {
    return (
        <Grid item md={4}>
            <Box sx={{ border: "1px solid black" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, dolorum ducimus. Exercitationem doloribus magni aspernatur odit repellat delectus in laudantium. Ab voluptate explicabo, laudantium corrupti adipisci id earum voluptatibus excepturi!</Box>
        </Grid>
    )
}

const Page_Interview_Id = () => {
    return (
        <>
            <Typography variant="body1" >Page_Interview_Id</Typography>
            <Grid container>
                <InterviewComponent />
                <InterviewComponent />
                <InterviewComponent />
            </Grid>
        </>
    )
}

export default Page_Interview_Id