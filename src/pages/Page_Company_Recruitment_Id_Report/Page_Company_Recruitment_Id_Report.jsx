import { useState, useMemo } from "react";
import { Box, Grid, Tabs, Tab, Divider, Table, Chip, IconButton } from "@mui/material";
import { DataGrid, GridActionsCellItem, GridToolbar} from "@mui/x-data-grid";
import TableViewIcon from '@mui/icons-material/TableView';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import datasjson from "./Page_Company_Recruitment_Id_Report_Data.json";
import { NullString, NotStart, Pending, Completed, Postpone } from "../../components/Label/Label";
import { useLocation, useNavigate } from "react-router-dom";
import ReportDataGrid from "./ReportDataGrid";
import ReportGraph from "./ReportGraph";
import ReportStatistic from "./ReportStatistic";


export default function Page_Company_Recruitment_Id_Report(props) {

  const navigate = useNavigate();
  const location = useLocation();

  const positionId = useMemo(() => location.state.positionId);

  const [rows, setRows] = useState(datasjson);

  const [tabValue, setTabValue] = useState("0");

  function handleTabChange(value) {
    setTabValue(value);
  }

  function handleDetailClick(value) {
    navigate(`/company/interview/${value}`)
  }

  function handlePositionIdClick() {
    navigate(`/company/recruitment/${positionId}`)
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
      renderHeader: () => <span>Tên ứng viên</span>,
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
      renderHeader: () => <span>Ngày ứng tuyển</span>,
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
      renderHeader: () => <span>Người phỏng vấn</span>,
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
      renderHeader: () => <span>Ngày phỏng vấn</span>,
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
      renderHeader: () => <span>Trạng thái</span>,
      renderCell: (params) => {
        switch (params.value) {
          case "Chưa bắt đầu":
            return <NotStart />;
          case "Đang diễn ra":
            return <Pending />;
          case "Kết thúc":
            return <Completed />;
          default:
            return <Postpone />;
        }
      },
    },
    {
      field: "Score",
      type: "string",
      headerAlign: "center",
      align: "center",
      renderHeader: () => <span>Điểm</span>,
      renderCell: (params) => {
        if (params.value !== null && params.value !== undefined) {
          return params.value
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
        <IconButton onClick={() => handleDetailClick(params.row.InterviewId)}>
          <InfoIcon sx={{color: "#1565C0"}}/>
        </IconButton>
      ],
    },
  ]);

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{
              fontSize: 40,
              fontWeight: 600,
              color: "#1565C0",
            }}>
          Vị trí <Box sx={{
            display: "inline-block",
            cursor: "pointer",
            "&:hover": {
              textDecoration: "underline",
            }
          }}
          onClick={handlePositionIdClick}
          >{positionId}</Box> - Báo cáo
        </Grid>
        <Grid item xs={12} sx={{
          marginBottom: 5,
        }}>
        <Tabs
              value={tabValue}
              onChange={(event, value) => handleTabChange(value)}
              // textColor="secondary"
              // indicatorColor="secondary"
              // aria-label="secondary tabs example"
            >
              <Tab
                value="0"
                label="Danh sách ứng viên"
                icon={<TableViewIcon />}
                sx={{
                  textTransform: "none",
                  fontWeight: 500,
                  width: 180,
                  color: "rgba(0, 0, 0, 0.85)",
                  "&:hover": {
                    color: "rgba(21, 101, 192, 0.8)",
                    opacity: 1,
                  },
                  "&.Mui-selected": {
                    color: "#1565C0",
                  },
                  "&.Mui-focusVisible": {
                    backgroundColor: "#d1eaff",
                  },
                }}
              />
              <Tab
                value="1"
                label="Biểu đồ thống kê"
                icon={<EqualizerIcon />}
                sx={{
                  textTransform: "none",
                  fontWeight: 500,
                  width: 150,
                  color: "rgba(0, 0, 0, 0.85)",
                  "&:hover": {
                    color: "rgba(21, 101, 192, 0.8)",
                    opacity: 1,
                  },
                  "&.Mui-selected": {
                    color: "#1565C0",
                  },
                  "&.Mui-focusVisible": {
                    backgroundColor: "#d1eaff",
                  },
                }}
              />
              <Tab
                value="2"
                label="Xuất báo cáo"
                icon={<FileDownloadIcon />}
                disabled
                sx={{
                  textTransform: "none",
                  fontWeight: 500,
                  width: 150,
                  color: "rgba(0, 0, 0, 0.85)",
                  "&:hover": {
                    color: "rgba(21, 101, 192, 0.6)",
                    opacity: 1,
                  },
                  "&.Mui-selected": {
                    color: "#1565C0",
                  },
                  "&.Mui-focusVisible": {
                    backgroundColor: "#d1eaff",
                  },
                }}
              />
            </Tabs>
            <Divider sx={{
              borderColor: "gray.400"
            }}>
            </Divider> 
        </Grid>
      </Grid>
      
      {tabValue === "0" && <ReportDataGrid 
        columns={columns}
        rows={rows}
        handleDetailClick={handleDetailClick}
      />}

      {tabValue === "1" && 
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
      }

      
    </Box>
  );
}
