import { useState, useMemo } from "react";
import {
  Box,
  Grid,
  Tabs,
  Tab,
  Divider,
  Table,
  Chip,
  IconButton,
  Tooltip,
} from "@mui/material";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import TableViewIcon from "@mui/icons-material/TableView";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import datasjson from "./Page_Company_Recruitment_Id_Report_Data.json";
import {
  NullString,
  NotStart,
  Pending,
  Completed,
  Postpone,
} from "../../components/Label/Label";
import { useLocation, useNavigate } from "react-router-dom";
import ReportDataGrid from "./ReportDataGrid";
import ReportGraph from "./ReportGraph";
import ReportStatistic from "./ReportStatistic";
import GigaCard from "../../components/GigaCard/GigaCard";
import GigaCardBody from "../../components/GigaCardBody/GigaCardBody";

// JSON <- getReportList
// {
//   "InterviewId": 2,
//    "CandidateId": 2,
//    "CandidateName": "Nguyễn Văn B",
//    "InterviewerId": 2,
//    "InterviewerName": "Trần Thị Y",
//    "ApplyDate": "21/07/2023",
//    "InterviewDate": "25/07/2023",
//    "Status": ["Pending", "Finish"], ~ Interview.Company_Status
//    "Score":...,
//    "TechScore":....,
//    "LangScore":....,
//    "SoftScore":....,
// }

export default function Page_Company_Recruitment_Id_Report(props) {
  const navigate = useNavigate();
  const location = useLocation();

  // -- Navigate in Company/Recruitment
  // navigate(`./${value}/report`, {
  //   state: {
  //     positionId: value,
  //   },
  // });
  const positionId = useMemo(() => location.state.positionId);

  const [rows, setRows] = useState(datasjson);

  const [tabValue, setTabValue] = useState("0");

  function handleTabChange(value) {
    setTabValue(value);
  }

  function handleDetailClick(value) {
    navigate(`/company/interview/${value}`);
  }

  function handlePositionIdClick() {
    navigate(`/company/recruitment/${positionId}`);
  }

  function handleCandidateClick(value) {
    navigate(`/profile/${value}`)
  }

  function handleInterviewerClick(value) {
    navigate(`/profile/${value}`)
  }

  const columns = useMemo(() => [
    {
      field: "InterviewId",
      type: "number",
      headerAlign: "left",
      align: "left",
      width: 40,
      flex: 0.1,
      renderHeader: () => <span>ID</span>,
      renderCell: (params) => {
        if (params.value === undefined) return NullString();
        return (
          <Box
            sx={{
              "&:hover": {
                cursor: "pointer",
                textDecoration: "underline",
              },
            }}
          >
            {params.value}
          </Box>
        );
      },
    },
    {
      field: "CandidateName",
      type: "string",
      headerAlign: "left",
      align: "left",
      minWidth: 100,
      flex: 0.3,
      renderHeader: () => <span>Candidate</span>,
      renderCell: (params) => {
        if (params.value === undefined) return NullString();
        return (
          <Box
            sx={{
              "&:hover": {
                cursor: "pointer",
                textDecoration: "underline",
              },
            }}
          >
            {params.value}
          </Box>
        );
      },
    },
    {
      field: "ApplyDate",
      type: "string",
      headerAlign: "left",
      align: "left",
      renderHeader: () => <span>Apply on</span>,
      minWidth: 100,
      flex: 0.3,
      renderCell: (params) => {
        if (params.value === undefined) return NullString();
      },
    },
    {
      field: "InterviewerName",
      type: "string",
      headerAlign: "left",
      align: "left",
      renderHeader: () => <span>Interviewer</span>,
      minWidth: 100,
      flex: 0.3,
      renderCell: (params) => {
        if (params.value === undefined) return NullString();
        return (
          <Box
            sx={{
              "&:hover": {
                cursor: "pointer",
                textDecoration: "underline",
              },
            }}
          >
            {params.value}
          </Box>
        );
      },
    },
    {
      field: "InterviewDate",
      type: "string",
      headerAlign: "left",
      align: "left",
      renderHeader: () => <span>Interview on</span>,
      minWidth: 100,
      flex: 0.3,
      renderCell: (params) => {
        if (params.value === undefined) return NullString();
      },
    },
    {
      field: "Status",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      renderHeader: () => <span>Status</span>,
      renderCell: (params) => {
        switch (params.value) {
          case "Pending":
            return <Pending />;
          case "Finished":
            return <Completed />;
        }
      },
    },
    {
      field: "Score",
      type: "string",
      headerAlign: "center",
      align: "center",
      renderHeader: () => <span>Score</span>,
      renderCell: (params) => {
        if (params.value !== null && params.value !== undefined) {
          if (params.value < 6) {
            return <Box sx={{color: "#cc3300", fontWeight: 600}}>{params.value}</Box>;
          }
          else if (params.value < 8.5) {
            return <Box sx={{color: "black"}}>{params.value}</Box>;
          }
          else {
            return <Box sx={{color: "#008631", fontWeight: 600}}>{params.value}</Box>;
          }
        }
      },
      minWidth: 80,
    },
    {
      field: "actions",
      type: "actions",
      width: 30,
      headerAlign: "right",
      align: "center",
      getActions: (params) => [
        <Tooltip title="Detail" arrow>
          <IconButton onClick={() => handleDetailClick(params.row.InterviewId)}>
            <InfoIcon sx={{ color: "black" }} />
          </IconButton>
        </Tooltip>,
      ],
    },
  ]);

  return (
    <Box>
      <GigaCard>
        <GigaCardBody>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sx={{
                fontSize: 30,
                fontWeight: 600,
                color: "black",
              }}
            >
              Position{" "}
              <Box
                sx={{
                  display: "inline-block",
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
                onClick={handlePositionIdClick}
              >
                {positionId}
              </Box>{" "}
              - Report
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                marginBottom: 5,
              }}
            >
              <Tabs
                value={tabValue}
                onChange={(event, value) => handleTabChange(value)}
                sx={{
                  "& .MuiTabs-indicator": {
                    backgroundColor: "black",
                  },
                }}
              >
                <Tab
                  value="0"
                  label="Candidate List"
                  icon={<TableViewIcon />}
                  sx={{
                    textTransform: "none",
                    fontWeight: 500,
                    width: 150,
                    color: "rgba(0, 0, 0, 0.85)",
                    "&:hover": {
                      color: "rgba(190, 190, 190, 0.85)",
                    },
                    "&.Mui-selected": {
                      color: "black",
                    },
                  }}
                />
                <Tab
                  value="1"
                  label="Statistic"
                  icon={<EqualizerIcon />}
                  sx={{
                    textTransform: "none",
                    fontWeight: 500,
                    width: 150,
                    color: "rgba(0, 0, 0, 0.85)",
                    "&:hover": {
                      color: "rgba(190, 190, 190, 0.85)",
                    },
                    "&.Mui-selected": {
                      color: "black",
                    },
                  }}
                />
                <Tab
                  value="2"
                  label="Export"
                  icon={<FileDownloadIcon />}
                  disabled
                  sx={{
                    textTransform: "none",
                    fontWeight: 500,
                    width: 150,
                    color: "rgba(0, 0, 0, 0.85)",
                    "&:hover": {
                      color: "rgba(190, 190, 190, 0.85)",
                    },
                    "&.Mui-selected": {
                      color: "black",
                    },
                  }}
                />
              </Tabs>
              <Divider
                sx={{
                  borderColor: "gray.100",
                }}
              ></Divider>
            </Grid>
          </Grid>

          {tabValue === "0" && (
            <ReportDataGrid
              columns={columns}
              rows={rows}
              handleDetailClick={handleDetailClick}
              handleCandidateClick={handleCandidateClick}
              handleInterviewerClick={handleInterviewerClick}
            />
          )}

          {tabValue === "1" && (
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                  <ReportGraph />
                </Grid>
                <Grid item xs={12} md={4}>
                  <ReportStatistic />
                </Grid>
              </Grid>
            </Box>
          )}
        </GigaCardBody>
      </GigaCard>
    </Box>
  );
}
