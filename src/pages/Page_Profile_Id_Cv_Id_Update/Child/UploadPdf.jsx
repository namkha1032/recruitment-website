import { Box, Grid, Button } from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

function UploadPdf(prop) {
  const [pdfFile, setPdfFile] = useState(null);
  const [viewPdf, setViewPdf] = useState(null);
  const fileType = ["application/pdf"];
  const handleSubmit = (e) => {
    e.preventDefault();
    if (pdfFile !== null) {
      setViewPdf(pdfFile);
    } else {
      setPdfFile(null);
    }
  };
  function handleChange(e) {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = (e) => {
          setPdfFile(e.target.result);
        };
      } else {
        setViewPdf(null)
        setPdfFile(null);
      }
    } else {
      setViewPdf(null)
      console.log("please select");
    }
  }
  return (
    <>
      <Box>
        <Grid
          item
          justifyContent="center"
          alignItems="center"
          container
          xs={12}
        >
          <Grid
            item
            justifyContent="center"
            alignItems="center"
            container
            xs={12}
          >
            <Box sx={{ margin: "auto" ,marginTop:"16px"}}>
              <input type="file" onChange={handleChange} />
            </Box>
          </Grid>

          <Button
            sx={{
              margin: "auto",
            }}
            color="primary"
            size="medium"
            variant="outlined"
            className="AddCompButton"
            startIcon={<AddIcon />}
            onClick={handleSubmit}
          >
            Upload
          </Button>
          <Grid
            item
            sx={{ marginTop: "16px" }}
            xs={12}
            justifyContent="center"
            alignItems="center"
          >
            <Box>
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
                {viewPdf ? (
                  <>
                    <Box
                      sx={{
                        height: "940px",
                        width: "100%",
                        margin: "auto",
                        marginBottom:"16px"
                      }}
                    >
                      <Viewer fileUrl={viewPdf}></Viewer>
                    </Box>
                  </>
                ) : (
                  ""
                )}
              </Worker>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default UploadPdf;
