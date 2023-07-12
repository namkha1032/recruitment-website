import {
  Box,
  Grid,
  TextField,
  FormControl,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Radio,
  Autocomplete,
  Button,
  Container
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export default function QuestionForm(props) {
  return (
    <Box
      sx={{
        width: "50%",
        height: 450,
        border: "1px solid gray",
        marginTop: 10,
      }}
    >
      <Grid container rowSpacing={2} sx={{
        marginTop: 3,
        marginLeft: 2,
      }}>
        <Grid item xs={11} sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
        }}>
          Câu hỏi mới
        </Grid>
        <Grid item xs={1}>
          <CloseIcon />
        </Grid>
        <Grid item xs={12}>
          Câu hỏi
          <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            placeholder="Nhập câu hỏi..."
            variant="filled"
          />
        </Grid>
        <Grid container xs={6} rowSpacing={2}>
          <Grid item xs={12}>
            Phân loại
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              {/* <FormLabel id="demo-radio-buttons-group-label" sx={{fontSize: 12}}>Chọn một</FormLabel> */}
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Chuyên môn"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Chuyên môn"
                  control={<Radio />}
                  label="Chuyên môn"
                />
                <FormControlLabel
                  value="Ngôn ngữ"
                  control={<Radio />}
                  label="Ngôn ngữ"
                />
                <FormControlLabel
                  value="Kỹ năng mềm"
                  control={<Radio />}
                  label="Kỹ năng mềm"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container xs={6} rowSpacing={2}>
          <Grid item xs={12}>
            Kỹ năng
          </Grid>
          <Grid item xs={12}>
            <Autocomplete
              disablePortal
              id="combo-box"
              options={[]}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
            <Button variant="contained">Tạo câu hỏi</Button>
        </Grid>
      </Grid>
    </Box>
  );
}
