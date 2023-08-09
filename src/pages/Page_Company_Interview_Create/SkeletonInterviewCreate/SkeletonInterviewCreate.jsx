
// import MUI components
import {
    Skeleton
} from "@mui/material";
import Grid from "@mui/material/Grid";
// import components




const SkeletonInterviewCreate = (props) => {
    return (
        <>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Skeleton variant="rounded" sx={{ height: "100%", width: "100%" }} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Skeleton variant="rounded" sx={{ height: "100%", width: "100%" }} />
                </Grid>
                <Grid item md={12}>
                    <Grid container>
                        <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column" }}>

                        </Grid>
                        <Grid item xs={12} md={6}>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default SkeletonInterviewCreate