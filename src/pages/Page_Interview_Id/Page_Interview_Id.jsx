import { Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import { Box } from "@mui/material"
import './Page_Interview_Id.css'
import Page_Profile_Id_Cv_Id from "../Page_Profile_Id_Cv_Id/Page_Profile_Id_Cv"


const styleofbox = {
    borderRadius: "8px",
    border: "1px solid black",
    marginTop: "10px",
    backgroundColor: "#6cbcc4"
}

const titlebox = {
    fontWeight: "bold",
    fontFamily: "Times New Roman",
    fontStyle: "italic",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

const texttitle = {
    fontStyle: "italic",
    fontWeight: "bold",
    fontFamily: "Times New Roman",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: "5px"
}

const textinfo = {
    fontFamily: "Times New Roman",
    display: "flex",
    marginLeft: "5px"
}
const interviewers = [
    {
        id: 1,
        name: "Pham Cong Quoc Viet"
    },
    {
        id: 2,
        name: "Tran Doan Thi Khanh Linh"
    }
]

const Page_Interview_Id = () => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Typography variant="h3" sx={{ fontWeight: "bold", fontFamily: "Times New Roman", fontStyle: "italic"  }}>
                        Detail of the interview
                    </Typography>
                </Grid>
                <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-start" }}>
                    <Typography variant="h4" sx={{ fontWeight: "bold", fontFamily: "Times New Roman", fontStyle: "italic" }}>
                        Position: ReactJS
                    </Typography>
                </Grid>
                <Grid item xs={6} sx={{ display: "flex", flexDirection: "column" }}>
                    <Box sx={styleofbox}>
                        <Typography variant="h5" sx={titlebox}>
                            Detail of the candidate
                        </Typography>
                        <Grid item xs={12} sx={{ display: "flex", flexDirection: "row", letterSpacing: "10px" }}>
                            <Typography variant="h6" sx={texttitle}>
                                Name:
                            </Typography>
                            <Typography variant="h6" sx={textinfo}>
                                Ngo Quang Huy
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ display: "flex", flexDirection: "row" }}>
                            <Typography variant="h6" sx={texttitle}>
                                Email:
                            </Typography>
                            <Typography variant="h6" sx={textinfo}>
                                huy.ngoquanghuy@hcmut.edu.vn
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ display: "flex", flexDirection: "row" }}>
                            <Typography variant="h6" sx={texttitle}>
                                Phone:
                            </Typography>
                            <Typography variant="h6" sx={textinfo}>
                                1234567890
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ display: "flex", flexDirection: "row" }}>
                            <Typography variant="h6" sx={texttitle}>
                                Address:
                            </Typography>
                            <Typography variant="h6" sx={textinfo}>
                                G Floor, F-Town 1 Building, High-tech Park, Tan Phu Ward, District 9, Ho Chi Minh City, Vietnam
                            </Typography>
                        </Grid>
                    </Box>
                    <Box sx={styleofbox}>
                        <Typography variant="h5" sx={titlebox}>
                            Detail of the interviewers
                        </Typography>
                        <Grid container spacing={0} item xs={12} sx={{ display: "flex", flexDirection: "column" }}>
                            <Typography variant="h6" sx={texttitle}>
                                Name:


                            </Typography>
                            <Typography variant="h6" sx={{ fontFamily: "Times New Roman", display: "flex", justifyContent: "flex-start", alignItems: "flex-start", marginLeft: "50px", marginTop: "-50px" }}>
                                <ul>
                                    {interviewers.map((interviewer) =>
                                    (
                                        <li key={interviewer.id}>{interviewer.name}

                                        </li>
                                    )
                                    )}
                                </ul>
                            </Typography>
                        </Grid>
                    </Box>
                    <Box sx={styleofbox}>
                        <Typography variant="h5" sx={titlebox}>
                            Date Time and Room
                        </Typography>
                        <Grid item xs={12} sx={{ display: "flex", flexDirection: "row", letterSpacing: "10px" }}>
                            <Typography variant="h6" sx={texttitle}>
                                Date Time:
                            </Typography>
                            <Typography variant="h6" sx={textinfo}>
                                14:00 12/06/2023
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ display: "flex", flexDirection: "row" }}>
                            <Typography variant="h6" sx={texttitle}>
                                Room:
                            </Typography>
                            <Typography variant="h6" sx={textinfo}>
                                202B4
                            </Typography>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Page_Profile_Id_Cv_Id />
                </Grid>
            </Grid>

        </>
    )
}

export default Page_Interview_Id