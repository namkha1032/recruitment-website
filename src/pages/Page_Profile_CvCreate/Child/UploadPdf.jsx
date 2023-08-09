import { Box, Grid, Button } from "@mui/material";
import { useState } from "react";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import GigaCard from "../../../components/GigaCard/GigaCard";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import CompHeader from "./compHeader";
import DeleteIcon from "@mui/icons-material/Delete";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
function UploadPdf(prop) {
  const fileType = ["application/pdf"];
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));
  function handleDelete(e) {
    prop.setViewPdf(null);
    prop.setPdfFile(null);
    prop.setPdf(null);
    const fileInput = document.getElementById("cvpdf");
    if (fileInput) {
      fileInput.value = "";
    }
  }
  function handleChange(e) {
    let selectedFile = e.target.files[0];
    prop.setPdf(selectedFile);
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = (e) => {
          if (e.target.result !== null) {
            prop.setViewPdf(e.target.result);
            prop.setPdfFile(e.target.result);
          } else {
            prop.setPdfFile(null);
            prop.setPdf(null);
          }
        };
      } else {
        prop.setViewPdf(null);
        prop.setPdfFile(null);
        prop.setPdf(null);
      }
    } else {
      prop.setViewPdf(null);
      prop.setPdf(null);
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
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ marginTop: "", marginBottom: "16px" }}
            >
              *UPLOAD CV PDF ( đã upload lên được và trả về link nhưng link bên back
              end không hoạt động được)
            </Typography>
          </Grid>
          <Grid
            item
            justifyContent="center"
            alignItems="center"
            container
            xs={12}
          >
            <Box sx={{ margin: "auto", display: "flex" }}>
              <label htmlFor="cvpdf" className="pdflabel">
                {" "}
                <CompHeader headerIcon={<PictureAsPdfIcon />}>
                  Choose pdf file
                </CompHeader>
              </label>
              <input
                type="file"
                id="cvpdf"
                className="customfile"
                onChange={handleChange}
              />
              <label htmlFor="deletepdf" className="pdfdel">
                <DeleteIcon />
              </label>
              <Button
                id="deletepdf"
                htmlFor="cvpdf"
                className="pdfdelete"
                onClick={handleDelete}
              ></Button>
            </Box>
          </Grid>
          <Grid
            item
            sx={{ marginTop: "32px" }}
            xs={12}
            justifyContent="center"
            alignItems="center"
          >
            <Box>
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
                {prop.viewPdf ? (
                  <>
                    <GigaCard>
                      <Box
                        sx={{
                          height: isSm ? "940px" : "420px",
                          width: "100%",
                          margin: "auto",
                          marginBottom: "16px",
                          marginTop: "16px",
                        }}
                      >
                        <Viewer fileUrl={prop.viewPdf}></Viewer>
                      </Box>
                    </GigaCard>
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
