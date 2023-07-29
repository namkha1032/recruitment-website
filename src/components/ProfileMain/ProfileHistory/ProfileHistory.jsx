import { Box } from "@mui/material";
import React from "react";
import useGetRole from "../../../hooks/useGetRole";
import HistoryCandidate from "./HistoryCandidate";
import HistoryRecruiter from "./HistoryRecruiter";
import HistoryInterviewer from "./HistoryInterviewer";



const  ProfileHistory = () => {
  const role = useGetRole()
  return (
    role !== null ?
   role==='candidate' ?  <HistoryCandidate/>:
    role==='candidate' ?  <HistoryRecruiter/> :
    <HistoryInterviewer/> : <></>
  );
}

export default ProfileHistory;
