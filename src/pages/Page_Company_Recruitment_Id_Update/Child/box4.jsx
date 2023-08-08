import { Box, Grid, Button } from "@mui/material";
import { useState, useRef } from "react";
import AddIcon from "@mui/icons-material/Add";

function Box4(prop) {
  const inputRef = useRef(null);
  const [image, setImage] = useState("");
  const handleImageClick = () => {
    inputRef.current.click();
  };
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };
  return (
    <>
      <Box sx={{ height: "343.88px" }}>
        <Grid
          item
          justifyContent="center"
          alignItems="center"
          container
          xs={12}
        >
          <Grid item sx={{ marginTop: "16px" }} xs={12}>
            <Box
              sx={{ width: "350px", height: "250px", margin: "auto" }}
            >
              {image ? (
                <img
                  className="ImgDisplay"
                  src={URL.createObjectURL(image)}
                  alt=""
                />
              ) : (
                <img 
                  className="ImgDisplay" 
                  src="../../../logo.png" 
                  alt="" />
              )}
              <input
                type="file"
                ref={inputRef}
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
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
            onClick={handleImageClick}
          >
            Upload
          </Button>
        </Grid>
      </Box>
    </>
  );
}
export default Box4;
