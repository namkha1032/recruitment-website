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
// import Page_Profile_Id_Cv_Id from "../Page_Profile_Id_Cv_Id/Page_Profile_Id_Cv"
import CV from "../../components/CV/CV"

const styleofbox = {
    borderRadius: "8px",
    boxShadow: 10,
    marginTop: "10px",
    display: "flex",
    flexDirection: "row",
    padding: 2,
}

const boxcandidate = {
    borderRadius: "8px",
    boxShadow: 10,
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
    padding: 2

}

const titlebox = {
    fontWeight: "bold",

    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

const texttitle = {
   
    fontWeight: "bold",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: "5px"
}

const textinfo = {
    display: "flex",
    marginLeft: "5px",
    flexWrap: "wrap",

}


const Page_Interview_Id = () => {
    const requires = require('../../data/View_recruitment/requires.json');
    const languages = require('../../data/View_recruitment/languages.json');
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Typography variant="h3" sx={{ fontWeight: "bold", fontStyle: "italic" }}>
                        Detail of the interview
                    </Typography>
                </Grid>
                <Grid item xs={12} sx={{ display: "flex", flexDirection: "column" }}>
                    <Box sx={styleofbox}>
                        <Grid item xs={6}>
                            <Typography variant="h5" sx={titlebox}>
                                General information
                            </Typography>
                            <Grid item xs={12} sx={{ display: "flex", flexDirection: "row" }}>
                                <Typography variant="h6" sx={texttitle}>
                                    <RadarIcon></RadarIcon> Position:
                                </Typography>
                                <Typography variant="h6" sx={textinfo}>
                                    Front-end Developer
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ display: "flex", flexDirection: "row" }}>
                                <Typography variant="h6" sx={texttitle}>
                                    <RecommendIcon></RecommendIcon> Requirement:
                                </Typography>
                                <Stack direction="row" sx={{ display: "flex", flexWrap: "wrap" }}>
                                    {requires.map((require) => (

                                        <Chip key={require.id} sx={{ margin: "0px 0px 5px 15px" }} value={require.name} label={require.name} variant='outlined' size='medium' color="warning" />

                                    ))}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} sx={{ display: "flex", flexDirection: "row", marginTop: "5px", marginBottom: "5px" }}>
                                <Typography variant="h6" sx={texttitle}>
                                    <LanguageIcon></LanguageIcon>  Language:
                                </Typography>
                                <Stack direction="row" sx={{ display: "flex", flexWrap: "wrap" }}>
                                    {languages.map((language) => (
                                        <Chip key={language.id} sx={{ margin: "0px 0px 5px 15px" }} value={language.name} label={language.name} variant='outlined' size='medium' color="success" />
                                    ))}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} sx={{ display: "flex", flexDirection: "row", letterSpacing: "10px" }}>
                                <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                                    <Typography variant="h6" sx={texttitle}>
                                        <ScheduleIcon></ScheduleIcon> Date Time:
                                    </Typography>
                                    <Typography variant="h6" sx={textinfo}>
                                        14:00 12/06/2023
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sx={{ display: "flex", flexDirection: "row", letterSpacing: "10px" }}>
                                <Typography variant="h6" sx={texttitle}>
                                    <RoomIcon></RoomIcon> Room:
                                </Typography>
                                <Typography variant="h6" sx={textinfo}>
                                    202B4
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} sx={{ display: "flex", flexDirection: "column" }}>
                            <Typography variant="h5" sx={titlebox}>
                                Detail of the interviewer
                            </Typography>
                            <Grid item xs={12} sx={{ display: "flex", flexDirection: "row" }}>
                                <Typography variant="h6" sx={texttitle}>
                                    <AccountBoxIcon></AccountBoxIcon>  Name:
                                </Typography>
                                <Typography variant="h6" sx={textinfo}>
                                    Cong Pham  Quoc Viet
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ display: "flex", flexDirection: "row", letterSpacing: "10px" }}>
                                <Typography variant="h6" sx={texttitle}>
                                    <EmailIcon></EmailIcon> Email:
                                </Typography>
                                <Typography variant="h6" sx={textinfo}>
                                    vietcpq@fpt.com
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ display: "flex", flexDirection: "row", letterSpacing: "10px" }}>
                                <Typography variant="h6" sx={texttitle}>
                                    <PhoneIphoneIcon></PhoneIphoneIcon> Phone:
                                </Typography>
                                <Typography variant="h6" sx={textinfo}>
                                    09123456788
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ display: "flex", flexDirection: "row", letterSpacing: "10px" }}>
                                <Typography variant="h6" sx={texttitle}>
                                    <LocationCityIcon></LocationCityIcon> Department:
                                </Typography>
                                <Typography variant="h6" sx={textinfo}>
                                    ITROOM
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>

                <Grid item xs={6} >
                    <Box sx={boxcandidate}>
                        <Typography variant="h5" sx={titlebox}>
                            Detail of the candidate
                        </Typography>
                        <Grid item xs={12} sx={{ display: "flex", flexDirection: "row" }}>
                            <Typography variant="h6" sx={texttitle}>
                                <AccountBoxIcon></AccountBoxIcon>  Name:
                            </Typography>
                            <Typography variant="h6" sx={textinfo}>
                                Ngo Quang Huy
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ display: "flex", flexDirection: "row" }}>
                            <Typography variant="h6" sx={texttitle}>
                                <EmailIcon></EmailIcon>  Email:
                            </Typography>
                            <Typography variant="h6" sx={{ ...textinfo, wordBreak: "break-word" }}>
                                huy.ngoquanghuy@hcmut.edu.vn
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ display: "flex", flexDirection: "row" }}>
                            <Typography variant="h6" sx={texttitle}>
                                <PhoneIphoneIcon></PhoneIphoneIcon>  Phone:
                            </Typography>
                            <Typography variant="h6" sx={textinfo}>
                                1234567890
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ display: "flex", flexDirection: "row" }}>
                            <Typography variant="h6" sx={texttitle}>
                                <HomeIcon></HomeIcon> Address:
                            </Typography>
                            <Typography variant="h6" sx={textinfo}>
                                G Floor, F-Town 1 Building, High-tech Park, Tan Phu Ward, District 9, Ho Chi Minh City, Vietnam
                            </Typography>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <CV />
                </Grid>
            </Grid >

        </>
    )
}

export default Page_Interview_Id