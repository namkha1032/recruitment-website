import { Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import { Chip, Box, Stack } from "@mui/material"
import RadarIcon from '@mui/icons-material/Radar';
import RecommendIcon from '@mui/icons-material/Recommend';
import LanguageIcon from '@mui/icons-material/Language';
import ScheduleIcon from '@mui/icons-material/Schedule';
import RoomIcon from '@mui/icons-material/Room';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import HomeIcon from '@mui/icons-material/Home';
import './Page_Interview_Id.css'
import Divider from "@mui/material/Divider";
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import ArticleIcon from '@mui/icons-material/Article';
import DetailsIcon from '@mui/icons-material/Details';
// import gigacard
import GigaCard from "../../components/GigaCard/GigaCard";
import GigaCardBody from "../../components/GigaCardBody/GigaCardBody";
import GigaCardHeader from "../../components/GigaCardHeader/GigaCardHeader";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import AssistantIcon from '@mui/icons-material/Assistant';
// import Page_Profile_Id_Cv_Id from "../Page_Profile_Id_Cv_Id/Page_Profile_Id_Cv"
import CV from "../../components/CV/CV"


const Page_Interview_Id = ({ cvid }) => {
    const requires = require('../../data/View_recruitment/requires.json');
    const languages = require('../../data/View_recruitment/languages.json');
    let left = 5
    let right = 6
    let gap = 2
    let gridSx = {
        display: "flex", alignItems: "center", columnGap: gap
    }
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                        Detail of the interview
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12} sx={{ display: "flex", flexDirection: "column", rowGap: 2 }}>
                    <Grid container spacing={3}>
                        <Grid item md={6}>
                            <GigaCard>
                                <GigaCardHeader color={"primary.main"} headerIcon={<ArticleIcon sx={{ fontSize: "inherit" }} />}>
                                    General information
                                </GigaCardHeader>
                                <GigaCardBody >
                                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                                        <Grid item md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                            <Box sx={gridSx}>
                                                <ScheduleIcon />
                                                <Typography variant="h6">
                                                    Date time
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                            <Typography variant="h6">
                                                :
                                            </Typography>
                                        </Grid>
                                        <Grid item md={right} sx={gridSx}>
                                            <Typography variant="h6" sx={{ marginLeft: "8px" }}>
                                                14:00 25/07/2023
                                            </Typography>
                                        </Grid>
                                    </Box>
                                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                                        <Grid item md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                            <Box sx={gridSx}>
                                                <RoomIcon />
                                                <Typography variant="h6">
                                                    Room
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                            <Typography variant="h6">
                                                :
                                            </Typography>
                                        </Grid>
                                        <Grid item md={right} sx={gridSx}>
                                            <Typography variant="h6" sx={{ marginLeft: "8px" }}>
                                                202B4
                                            </Typography>
                                        </Grid>
                                    </Box>
                                    <Divider sx={{ marginY: 3 }} />
                                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                                        <Grid item md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                            <Box sx={gridSx}>
                                                <RadarIcon />
                                                <Typography variant="h6">
                                                    Position
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                            <Typography variant="h6">
                                                :
                                            </Typography>
                                        </Grid>
                                        <Grid item md={right} sx={gridSx}>
                                            <Typography variant="h6" sx={{ marginLeft: "8px" }} >
                                                Front-end Development
                                            </Typography>
                                        </Grid>
                                    </Box>
                                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                                        <Grid item md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                            <Box sx={gridSx}>
                                                <RecommendIcon />
                                                <Typography variant="h6">
                                                    Requirement
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                            <Typography variant="h6">
                                                :
                                            </Typography>
                                        </Grid>
                                        <Grid item md={right} sx={gridSx}>
                                            <Stack direction="row" sx={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-start", alignItems: "flex-start" }}>
                                                {requires.map((require) => (

                                                    <Chip key={require.id} sx={{ margin: "0px 0px 5px 8px" }} value={require.name} label={require.name} variant='outlined' size='medium' color="warning" />

                                                ))}
                                            </Stack>
                                        </Grid>
                                    </Box>
                                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                                        <Grid item md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                            <Box sx={gridSx}>
                                                <LanguageIcon />
                                                <Typography variant="h6">
                                                    Language
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                            <Typography variant="h6">
                                                :
                                            </Typography>
                                        </Grid>
                                        <Grid item md={right} sx={gridSx}>
                                            <Stack direction="row" sx={{ display: "flex", flexWrap: "wrap" }}>
                                                {languages.map((language) => (
                                                    <Chip key={language.id} sx={{ margin: "0px 0px 5px 8px" }} value={language.name} label={language.name} variant='outlined' size='medium' color="success" />
                                                ))}
                                            </Stack>
                                        </Grid>
                                    </Box>
                                </GigaCardBody>
                            </GigaCard>
                        </Grid>
                        <Grid item md={6}>
                            <GigaCard>
                                <GigaCardHeader color={"primary.main"} headerIcon={<AssignmentIndIcon sx={{ fontSize: "inherit" }} />}>
                                    Interviewer
                                </GigaCardHeader>
                                <GigaCardBody>
                                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                                        <Grid item md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                            <Box sx={gridSx}>
                                                <AccountBoxIcon />
                                                <Typography variant="h6">
                                                    Name
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                            <Typography variant="h6">
                                                :
                                            </Typography>
                                        </Grid>
                                        <Grid item md={right} sx={gridSx}>
                                            <Typography variant="h6" sx={{ marginLeft: "8px" }} >
                                                Cong Pham Quoc Viet
                                            </Typography>
                                        </Grid>
                                    </Box>
                                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                                        <Grid item md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                            <Box sx={gridSx}>
                                                <EmailIcon />
                                                <Typography variant="h6">
                                                    Email
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                            <Typography variant="h6">
                                                :
                                            </Typography>
                                        </Grid>
                                        <Grid item md={right} sx={gridSx}>
                                            <Typography variant="h6" sx={{ marginLeft: "8px" }}>
                                                vietcpq@fpt.com
                                            </Typography>
                                        </Grid>
                                    </Box>
                                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                                        <Grid item md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                            <Box sx={gridSx}>
                                                <PhoneIphoneIcon />
                                                <Typography variant="h6">
                                                    Phone
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                            <Typography variant="h6">
                                                :
                                            </Typography>
                                        </Grid>
                                        <Grid item md={right} sx={gridSx}>
                                            <Typography variant="h6" sx={{ marginLeft: "8px" }} >
                                                0123456789
                                            </Typography>
                                        </Grid>
                                    </Box>
                                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                                        <Grid item md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                            <Box sx={gridSx}>
                                                <LocationCityIcon />
                                                <Typography variant="h6">
                                                    Department
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                            <Typography variant="h6">
                                                :
                                            </Typography>
                                        </Grid>
                                        <Grid item md={right} sx={gridSx}>
                                            <Typography variant="h6" sx={{ marginLeft: "8px" }} >
                                                ITROOM
                                            </Typography>
                                        </Grid>
                                    </Box>
                                    {/* <Box sx={{ display: "flex", flexDirection: "row" }}>
                                        <Grid item md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                            <Box sx={gridSx}>
                                                <AssistantIcon />
                                                <Typography variant="h6">
                                                    Status
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                            <Typography variant="h6">
                                                :
                                            </Typography>
                                        </Grid>
                                        <Grid item md={right} sx={gridSx}>
                                            <Chip variant='outlined' color="info" sx={{ display: "flex", margin: "0px 0px 5px 8px" }} label="Pending" />
                                        </Grid>
                                    </Box> */}

                                </GigaCardBody>
                            </GigaCard>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={12}>
                    <GigaCard>
                        <GigaCardBody>
                            <CV cvid={cvid} />
                        </GigaCardBody>
                    </GigaCard>
                </Grid>
            </Grid >

        </>
    )
}

export default Page_Interview_Id