import { Button, Chip, Grid, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import {
  CreditScore,
  HourglassBottom,
  HourglassEmpty,
  Language,
  Radar,
  Recommend,
  ZoomIn,
} from "@mui/icons-material";
import CV from "../CV/CV";
import GigaCard from "../GigaCard/GigaCard";
import InfoApplication from "../InfoApplication/InfoApplication";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useLocation } from "react-router-dom";
import { CalendarIcon } from "@mui/x-date-pickers";
import useGetRole from "../../hooks/useGetRole";
import { Accepted, Rejected, Pending, Pass } from "../Label/LabelNo";

const Application = ({ cvid, page }) => {
  const theme = useTheme()
  const { recruitmentid, applicationid } = useParams();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));
  const infoApplication = useSelector((state) => state.infoApplication);
  const skill = useSelector((state) => state.skill);
  const detailposition = useSelector((state) => state.position);
  const candidate = useSelector((state) => state.candidate);
  const cv = useSelector(state => state.cv)
  const role = useGetRole()
  const [status, setStatus] = useState("Pending")
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const location = useLocation()
  const path = location.pathname
  console.log("path: ", path)
  console.log("include?: ", path.includes("company"))
  useEffect(() => {

    setStatus(infoApplication ? infoApplication.company_Status : "Pending")

  }, [infoApplication])
  const handleReject = () => {
    dispatch({ type: 'applicationSaga/rejectApplication', payload: { applicationid: applicationid, candidate_Status: infoApplication.candidate_Status, token: user.token } })
    setStatus("Rejected")
  }
  console.log(recruitmentid);
  return (
    <>

      <Typography variant={isSm ? "h3" : "h4"} align="center" m={3}>
        <b>Detail of the Application</b>

      </Typography>

      <InfoApplication
        applicationid={applicationid}
        recruitmentid={recruitmentid}

      />
      {infoApplication && skill && candidate && detailposition &&
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <CV cvid={cvid} />
          </Grid>
          <Grid item xs={12}>
            {/* <GigaCard> */}
            {cv && <Box

              sx={{
                display: "flex",
                justifyContent: "space-between",
                // padding: "24px",
              }}
            >
              <Typography variant="h5" sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}><CalendarIcon /></Box>  <b>Date:&nbsp; </b>{infoApplication.dateTime.slice(0, 10)}
              </Typography>
              {path.includes("company")
                ? <Box>
                  {/* Company Status */}
                  {infoApplication.company_Status == "Pending" && role === "recruiter"
                    ? <Box
                      sx={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <Link to={`/company/interview/create?recruitmentid=${recruitmentid}&applicationid=${applicationid}`}>
                        {" "}
                        <Button variant="contained" color="primary"
                          style={{ textTransform: "none", backgroundColor: "black" }} sx={{ marginRight: "50px" }} >
                          CREATE INTERVIEW{" "}
                        </Button>
                      </Link>
                      <Button variant="contained" onClick={handleReject} style={{ textTransform: "none", backgroundColor: "black" }} > REJECT</Button>
                    </Box>
                    : null}
                  {infoApplication.company_Status == "Accepted"
                    ? <Accepted />
                    : null}
                  {infoApplication.company_Status == "Rejected"
                    ? <Rejected />
                    : null}
                </Box>
                : <Box>
                  {/* Candidate Status */}
                  {infoApplication.candidate_Status == "Pending"
                    ? <Pending />
                    : null}
                  {infoApplication.candidate_Status == "Passed"
                    ? <Pass />
                    : null}
                </Box>}
            </Box>}
            {/* {page !== "normal" && cv && <Box
              sx={{ display: "flex", justifyContent: "space-between", padding: "24px" }}
            >
              <Typography variant="h5" sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}><HourglassEmpty /></Box>  <b style={{ display: 'flex', alignItems: 'center' }}>Status: </b>
              </Typography>
              {status === "Pending" ? <Box component='h2' m={0} color="#1976d2">Pending </Box> : status === "Rejected" ? <Box component='h2' m={0} color="#ed6c02">Rejected </Box> : <Box component='h2' m={0} color='#1b5e20'> Accepted </Box>}
            </Box>} */}
            {/* </GigaCard> */}
          </Grid>
          {/* <Grid item xs={12}>
            {cv && status === "Pending" && role === "recruiter" && <Box
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Link to={`/company/interview/create?recruitmentid=${recruitmentid}&applicationid=${applicationid}`}>
                {" "}
                <Button variant="contained" color="primary"
                  style={{ textTransform: "none", backgroundColor: "black" }} sx={{ marginRight: "50px" }} >
                  CREATE INTERVIEW{" "}
                </Button>
              </Link>
              <Button variant="contained" onClick={handleReject} style={{ textTransform: "none", backgroundColor: "black" }} > REJECT</Button>
            </Box>}
          </Grid> */}
        </Grid>}

    </>
  );
};

export default Application;
