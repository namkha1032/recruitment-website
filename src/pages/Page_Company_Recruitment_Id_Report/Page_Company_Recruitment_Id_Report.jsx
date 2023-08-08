import { useState, useMemo, useEffect, useCallback } from "react";
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
  CircularProgress,
} from "@mui/material";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import {
  NoRowsOverlay,
  NoResultsOverlay,
} from "../../components/DataRick/DataRick";
import TableViewIcon from "@mui/icons-material/TableView";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import {
  NullString,
  NotStart,
  Pending,
  Completed,
  Postpone,
  Fail,
  Pass,
} from "../../components/Label/Label";
import { useLocation, useNavigate } from "react-router-dom";
import ReportDataGrid from "./ReportDataGrid";
import ReportGraph from "./ReportGraph";
import ReportStatistic from "./ReportStatistic";
import GigaCard from "../../components/GigaCard/GigaCard";
import GigaCardBody from "../../components/GigaCardBody/GigaCardBody";
import { useDispatch, useSelector } from "react-redux";
import cleanStore from "../../utils/cleanStore";
import { reportStatistic } from "../../utils/reportStatistic";
import { formatDate, formatToDate } from "../../utils/formatDate";

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

// const data = {
//   AppliedTotal: 835,
//   Average: 8.89,
//   Median: 6.5,
//   Mode: 8,
//   Value: [
//     6.67, 7.67, 6.67, 8.33, 7.0, 8.33, 8.0, 7.33, 8.33, 9.33, 6.0, 8.67, 9.0,
//     7.67, 6.0, 8.67, 5.67, 7.0, 8.0, 8.33, 6.67, 9.0, 7.33, 9.0, 9.33, 6.33,
//     8.67, 7.67, 8.67, 7.67, 6.33, 6.0, 8.33, 8.0, 7.0, 9.0, 8.0, 8.0, 8.0, 8.33,
//     6.67, 5.67, 8.33, 7.0, 6.67, 6.67, 8.33, 9.33, 8.67, 9.33, 8.0, 9.67, 7.67,
//     8.67, 8.67, 8.33, 9.0, 6.67, 8.0, 8.33, 6.67, 8.67, 7.67, 7.67, 8.67, 7.67,
//     9.33, 8.67, 8.33, 7.0, 6.67, 8.0, 6.33, 8.67, 7.67, 8.67, 7.0, 7.33, 6.67,
//     7.33, 7.67, 7.67, 8.0, 8.67, 7.33, 8.33, 7.0, 6.67, 8.33, 5.67, 8.33, 6.67,
//     8.67, 7.0, 7.33, 8.33, 9.0, 8.0, 7.0, 6.0, 7.67, 7.0, 7.33, 7.67, 6.0, 7.33,
//     8.33, 5.33, 8.67, 7.0, 9.0, 7.0, 9.0, 8.0, 7.67, 7.33, 8.0, 9.0, 8.67, 6.67,
//     8.0, 9.67, 8.0, 7.33, 8.33, 8.33, 8.0, 9.0, 9.0, 8.33, 9.33, 8.67, 9.0,
//     7.33, 9.0, 9.33, 9.0, 8.0, 7.67, 8.0, 8.33, 9.67, 8.0, 9.0, 8.33, 9.0, 9.0,
//     9.0, 6.0, 7.67, 9.0, 8.0, 9.33, 8.0, 9.33, 7.67, 4.33, 8.33, 7.67, 5.0,
//     8.67, 7.0, 4.33, 8.0, 7.67, 7.33, 9.33, 3.67, 7.33, 6.67, 9.0, 8.67, 7.33,
//     6.67, 7.33, 8.33, 8.0, 8.0, 8.0, 9.0, 7.0, 7.0, 8.33, 7.67, 7.0, 9.0, 8.0,
//     8.0, 8.33, 8.0, 6.67, 7.0, 7.33, 7.33, 8.67, 7.67, 7.0, 8.33, 8.67, 7.0,
//     8.67, 7.67, 8.67, 7.33, 8.33, 8.0, 7.33, 7.67, 8.33, 9.33, 7.0, 9.33, 8.33,
//     8.33, 6.67, 8.67, 8.67, 8.0, 6.67, 3.33, 4.67, 8.33, 8.0, 8.0, 8.33, 0.0,
//     7.33, 9.0, 7.67, 7.33, 6.67, 7.67, 6.67, 9.0, 8.33, 8.0, 8.67, 6.0, 9.67,
//     5.67, 7.33, 9.67, 7.67, 5.67, 6.33, 8.67, 9.67, 4.67, 5.33, 7.0, 7.67, 9.0,
//     7.0, 5.67, 8.33, 8.33, 8.33, 8.33, 8.0, 8.33, 8.33, 7.0, 6.33, 8.0, 8.33,
//     8.0, 8.33, 7.67, 9.33, 9.33, 7.33, 8.33, 0.0, 6.67, 8.0, 8.33, 7.67, 7.67,
//     6.33, 7.67, 8.67, 8.0, 8.0, 9.33, 8.33, 7.67, 7.0, 7.33, 7.0, 8.67, 7.33,
//     5.67, 9.0, 9.0, 7.67, 9.0, 9.0, 8.33, 6.67, 8.33, 9.33, 8.67, 6.67, 6.33,
//     9.0, 9.0, 7.0, 7.0, 8.67, 8.33, 8.67, 9.0, 9.33, 9.0, 7.33, 8.33, 7.0, 9.0,
//     7.33, 7.67, 8.0, 8.67, 8.33, 6.67, 9.0, 8.0, 6.67, 7.0, 7.33, 7.67, 9.0,
//     7.67, 9.33, 7.33, 7.0, 7.0, 8.33, 8.33, 7.33, 8.67, 8.0, 9.0, 7.67, 9.33,
//     8.67, 7.0, 8.0, 8.0, 8.67, 8.67, 8.0, 8.67, 6.67, 8.0, 8.67, 6.33, 7.0, 8.0,
//     7.67, 7.33, 8.67, 6.33, 8.0, 8.67, 5.67, 9.33, 7.0, 9.0, 7.33, 8.67, 9.33,
//     8.67, 8.0, 8.33, 8.33, 8.0, 8.0, 6.33, 7.33, 8.67, 9.0, 7.0, 8.0, 9.33,
//     8.33, 8.0, 8.67, 6.67, 7.0, 8.67, 9.0, 9.0, 5.33, 8.67, 7.67, 6.67, 8.67,
//     8.0, 8.0, 8.33, 9.67, 7.67, 7.33, 8.33, 9.33, 9.0, 8.0, 5.33, 6.67, 6.67,
//     8.33, 8.0, 8.0, 8.0, 6.33, 8.0, 9.67, 8.0, 7.33, 8.33, 8.67, 9.0, 6.0, 8.0,
//     8.67, 8.33, 8.0, 6.33, 8.33, 9.0, 8.0, 9.0, 8.0, 7.67, 9.33, 7.33, 9.0,
//     7.67, 7.33, 9.33, 6.67, 8.67, 9.67, 9.0, 7.0, 8.0, 7.67, 8.33, 7.0, 8.67,
//     7.33, 7.67, 6.33, 8.0, 7.67, 7.33, 7.0, 7.67, 7.67, 9.0, 7.67, 6.33, 6.67,
//     8.0, 8.33, 9.0, 5.67, 8.33, 9.33, 9.33, 9.0, 8.67, 7.0, 8.33, 7.67, 7.33,
//     6.67, 7.33, 7.33, 9.0, 7.67, 7.0, 8.0, 9.67, 9.0, 7.0, 7.0, 7.67, 8.33,
//     8.33, 7.33, 9.0, 6.67, 8.33, 7.33, 9.33, 5.33, 9.0, 7.0, 8.0, 7.0, 8.33,
//     9.0, 7.67, 7.0, 9.0, 9.33, 9.0, 8.0, 7.0, 8.67, 8.67, 9.0, 9.33, 7.33, 8.33,
//     6.67, 9.0, 8.33, 8.33, 8.33, 7.67, 7.0, 8.0, 9.0, 7.67, 7.33, 8.33, 7.0,
//     8.0, 9.0, 7.0, 8.0, 8.0, 7.67, 6.33, 7.0, 7.33, 4.33, 7.67, 7.67, 8.67,
//     7.67, 7.33, 8.33, 8.0, 8.33, 9.67, 7.33, 7.0, 3.33, 8.33, 5.67, 9.67, 8.0,
//     8.33, 8.0, 6.33, 7.0, 8.67, 8.67, 7.0, 9.0, 8.33, 4.33, 8.0, 8.67, 8.33,
//     8.33, 9.0, 6.33, 9.67, 8.33, 8.67, 9.0, 8.0, 6.33, 7.67, 8.67, 9.0, 8.0,
//     7.0, 8.67, 8.0, 8.0, 7.0, 7.33, 8.33, 7.33, 8.0, 8.0, 8.0, 6.67, 9.0, 8.67,
//     7.67, 7.67, 9.0, 7.0, 8.67, 6.67, 6.67, 7.0, 7.33, 8.67, 8.0, 8.67, 6.67,
//     7.33, 7.0, 7.67, 5.33, 8.67, 8.0, 7.0, 7.67, 7.0, 9.33, 6.67, 7.67, 8.33,
//     8.33, 8.0, 7.0, 9.0, 7.0, 5.33, 8.67, 7.33, 6.67, 8.33, 7.67, 7.0, 8.33,
//     7.33, 7.67, 9.33, 6.0, 8.67, 7.33, 8.67, 9.0, 8.33, 6.33, 8.0, 7.0, 7.0,
//     7.0, 7.67, 7.0, 7.33, 6.0, 9.33, 7.67, 5.33, 8.67, 9.0, 7.67, 7.33, 8.67,
//     8.0, 8.67, 5.33, 8.33, 6.33, 8.33, 7.0, 8.0, 8.0, 8.33, 4.33, 7.67, 8.67,
//     8.67, 8.67, 8.33, 7.0, 8.67, 8.67, 9.33, 8.33, 7.33, 8.67, 7.0, 8.0, 7.0,
//     6.67, 7.33, 8.0, 8.67, 9.0, 6.0, 6.67, 7.67, 7.33, 6.33, 9.67, 8.67, 8.33,
//     8.67, 6.67, 8.0, 9.0, 7.0, 7.67, 8.67, 5.67, 8.0, 7.0, 8.67, 7.0, 8.0, 7.67,
//     7.33, 7.33, 5.0, 8.67, 8.0, 8.33, 8.0, 8.33, 9.33, 0.0, 5.33, 5.33, 8.0,
//     7.33, 7.0, 0.0, 9.0, 8.33, 8.67, 7.67, 0.0, 8.0, 8.33, 8.0, 8.0, 8.0, 7.67,
//     6.67, 9.67, 7.67, 7.33, 8.33, 6.33, 6.33, 7.33, 7.67, 8.33, 8.67, 7.33,
//     5.67, 6.33, 6.33, 7.33, 7.33, 7.67, 6.33, 7.0, 9.0, 7.0, 9.0, 8.0, 8.0,
//     6.67, 8.33, 7.67, 7.67, 9.0, 7.33, 7.33, 6.33, 8.67, 7.67, 7.33, 7.0, 6.0,
//     4.33, 9.0, 7.0, 8.0, 6.67, 7.33, 7.33, 7.0, 8.33, 7.67, 6.67, 8.33, 8.33,
//     7.33, 8.33, 8.33, 7.33, 7.0, 6.67, 8.33, 8.33, 7.67, 6.0, 8.33, 7.0, 7.67,
//     7.0, 7.33, 9.0, 7.67, 4.67, 6.67, 7.0, 8.67, 7.67, 7.67, 9.0, 7.0, 9.0,
//     7.67, 9.33, 9.33, 4.67, 8.0, 5.33, 7.67, 8.67, 8.33, 9.0, 8.33, 8.0, 0.0,
//     5.33, 8.0, 8.0, 7.67,
//   ],
// };

export default function Page_Company_Recruitment_Id_Report(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const positionId = useMemo(() => location.state.positionId, [location]);
  const positionName = useMemo(() => location.state.positionName, [location]);

  // -- Navigate in Company/Recruitment
  // navigate(`./${value}/report`, {
  //   state: {
  //     positionId: value,
  //   },
  // });

  // TEMPORARY
  // const positionId = useMemo(() => location.state.positionId);

  const rows = useSelector((state) => state.report);
  const loading = useSelector((state) => state.loading);
  const user = useSelector((state) => state.user);

  const data_draft = rows ? rows : [];
  const data = reportStatistic(data_draft);

  useEffect(() => {
    dispatch({
      type: "reportSaga/getReport",
      payload: {
        positionId: positionId,
        token: `Bearer ${user.token}`,
      },
    });
    return () => cleanStore(dispatch);
  }, []);

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
    window.open(`/profile/${value}`);
  }

  function handleInterviewerClick(value) {
    window.open(`/profile/${value}`);
  }

  const columns = useMemo(() => [
    {
      field: "InterviewId",
      type: "string",
      headerAlign: "left",
      align: "left",
      width: 40,
      flex: 0.1,
      renderHeader: () => <span>ID</span>,
      renderCell: (params) => {
        if (params.value === undefined) return NullString();
        return (
          <Tooltip title={params.value} arrow>
            <Box
              sx={{
                "&:hover": {
                  cursor: "pointer",
                  textDecoration: "underline",
                },
              }}
            >
              {params.value.slice(0, 4) + "..."}
            </Box>
          </Tooltip>
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
        return formatToDate(params.value);
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
        return formatDate(params.value);
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
          case "Passed":
            return <Pass />;
          case "Failed":
            return <Fail />
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
            return (
              <Box sx={{ color: "#cc3300", fontWeight: 600 }}>
                {params.value}
              </Box>
            );
          } else if (params.value < 8.5) {
            return <Box sx={{ color: "black" }}>{params.value}</Box>;
          } else {
            return (
              <Box sx={{ color: "#008631", fontWeight: 600 }}>
                {params.value}
              </Box>
            );
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
    <Box
      sx={{
        marginTop: 3,
      }}
    >
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
                {positionName.length > 25 ? positionName.slice(0,25) + "..." : positionName}
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
                {/* <Tab
                  value="2"
                  label="Export (Coming soon)"
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
                /> */}
              </Tabs>
              <Divider
                sx={{
                  borderColor: "gray.100",
                }}
              ></Divider>
            </Grid>
          </Grid>

          {tabValue === "0" && rows !== null && (
            <ReportDataGrid
              columns={columns}
              rows={rows}
              loading={loading}
              handleDetailClick={handleDetailClick}
              handleCandidateClick={handleCandidateClick}
              handleInterviewerClick={handleInterviewerClick}
            />
          )}

          {tabValue === "0" && rows === null && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 50,
              }}
            >
              <CircularProgress
                sx={{
                  color: "black",
                }}
              />
            </Box>
          )}

          {tabValue === "1" && rows !== null && (
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                  <ReportGraph title={"General"} data={data.general.value} />
                </Grid>
                <Grid item xs={12} md={4}>
                  <ReportStatistic
                    Total={data.general.generalNum}
                    Mean={data.general.generalMean}
                    Median={data.general.generalMedian}
                    Mode={data.general.generalMode}
                  />
                </Grid>

                <Grid item xs={12} md={12}>
                  <Divider
                    sx={{
                      borderColor: "gray.100",
                    }}
                  ></Divider>
                </Grid>

                <Grid item xs={12} md={8}>
                  <ReportGraph
                    title={"Technology"}
                    data={data.technology.value}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <ReportStatistic
                    Total={data.technology.techNum}
                    Mean={data.technology.techMean}
                    Median={data.technology.techMedian}
                    Mode={data.technology.techMode}
                  />
                </Grid>

                <Grid item xs={12} md={12}>
                  <Divider
                    sx={{
                      borderColor: "gray.100",
                    }}
                  ></Divider>
                </Grid>

                <Grid item xs={12} md={8}>
                  <ReportGraph title={"Language"} data={data.language.value} />
                </Grid>
                <Grid item xs={12} md={4}>
                  <ReportStatistic
                    Total={data.language.langNum}
                    Mean={data.language.langMean}
                    Median={data.language.langMedian}
                    Mode={data.language.langMode}
                  />
                </Grid>

                <Grid item xs={12} md={12}>
                  <Divider
                    sx={{
                      borderColor: "gray.100",
                    }}
                  ></Divider>
                </Grid>

                <Grid item xs={12} md={8}>
                  <ReportGraph
                    title={"Soft Skills"}
                    data={data.softskill.value}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <ReportStatistic
                    Total={data.softskill.softNum}
                    Mean={data.softskill.softMean}
                    Median={data.softskill.softMedian}
                    Mode={data.softskill.softMode}
                  />
                </Grid>
              </Grid>
            </Box>
          )}

          {tabValue === "1" && rows === null && (
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 50,
                    }}
                  >
                    <CircularProgress
                      sx={{
                        color: "black",
                      }}
                    />
                  </Box>
                </Grid>

                <Grid item xs={12} md={12}>
                  <Divider
                    sx={{
                      borderColor: "gray.100",
                    }}
                  ></Divider>
                </Grid>

                <Grid item xs={12} md={12}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 50,
                    }}
                  >
                    <CircularProgress
                      sx={{
                        color: "black",
                      }}
                    />
                  </Box>
                </Grid>

                <Grid item xs={12} md={12}>
                  <Divider
                    sx={{
                      borderColor: "gray.100",
                    }}
                  ></Divider>
                </Grid>

                <Grid item xs={12} md={12}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 50,
                    }}
                  >
                    <CircularProgress
                      sx={{
                        color: "black",
                      }}
                    />
                  </Box>
                </Grid>

                <Grid item xs={12} md={12}>
                  <Divider
                    sx={{
                      borderColor: "gray.100",
                    }}
                  ></Divider>
                </Grid>

                <Grid item xs={12} md={12}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 50,
                    }}
                  >
                    <CircularProgress
                      sx={{
                        color: "black",
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          )}
        </GigaCardBody>
      </GigaCard>
    </Box>
  );
}
