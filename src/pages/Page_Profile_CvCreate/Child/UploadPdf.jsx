import { Box, Grid, Button } from "@mui/material";
import { useState } from "react";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import GigaCard from "../../../components/GigaCard/GigaCard";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import CompHeader from "./compHeader";
import DeleteIcon from "@mui/icons-material/Delete";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
function UploadPdf(prop) {
  function pdfToBinaryString(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = () => {
        const binaryString = reader.result;
        resolve(binaryString);
      };
  
      reader.onerror = () => {
        reject(new Error('Failed to read the PDF file'));
      };
  
      reader.readAsBinaryString(file);
    });
  }
  const fileType = ["application/pdf"];
  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (prop.pdfFile !== null) {
  //     prop.setViewPdf(prop.pdfFile);
  //   } else {
  //     prop.setPdfFile(null);
  //   }
  // };
  // console.log(prop.viewPdf);
  function handleDelete(e) {
    prop.setViewPdf(null);

    // Reset the pdfFile state to null to remove the selected PDF file
    prop.setPdfFile(null);

    // Reset the pdf state to null to remove the selected PDF file
    prop.setPdf(null);

    // Reset the file input element to allow selecting the same file again
    const fileInput = document.getElementById("cvpdf");
    if (fileInput) {
      fileInput.value = "";
    }
  }
  function handleChange(e) {
    console.log("open");
    let selectedFile = e.target.files[0];
    prop.setPdf(selectedFile);
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
       
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = (e) => {
          // test view pdf without press view
          if (e.target.result !== null) {
            // const base64String = reader.result.split(',')[1];
            // prop.setPdf(base64String);
            prop.setViewPdf(e.target.result);
            prop.setPdfFile(e.target.result);
          } else {
            prop.setPdfFile(null);
            prop.setPdf(null);
          }
          ////////////////////////////////////////
        };
      } else {
        prop.setViewPdf(null);
        prop.setPdfFile(null);
        prop.setPdf(null);
      }
    } else {
      prop.setViewPdf(null);
      prop.setPdf(null);
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
          {/*           
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
          </Button> */}
          <Grid
            item
            sx={{ marginTop: "32px" }}
            xs={12}
            justifyContent="center"
            alignItems="center"
          >
            <Box>
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
                {prop.viewPdf ? (
                  <>
                    <GigaCard>
                      <Box
                        sx={{
                          height:isSm? "940px":"420px",
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
