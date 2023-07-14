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
  Container,
  Modal,
  IconButton,
} from "@mui/material";
import { TextareaAutosize } from "@mui/base";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export default function QuestionFormModal(props) {
  return (
    <Box>
    <Modal
      open={props.modalStatus}
      onClose={props.handleModalClose}
      // transition={Slide}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "45%",
          backgroundColor: "white",
          marginTop: 10,
          borderRadius: 3,
        }}
      >
        <Grid
          container
          rowSpacing={2}
          sx={{
            paddingLeft: 5,
            paddingRight: 5,
            paddingTop: 3,
            paddingBottom: 3,
          }}
        >
          <Grid
            item
            xs={11}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                fontSize: 30,
                fontWeight: 600,
                color: "#1565C0",
              }}
            >
              Câu hỏi mới
            </Box>
          </Grid>
          <Grid
            item
            xs={1}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <IconButton onClick={props.handleModalClose}>
              <CloseIcon />
            </IconButton>
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 2,
            }}
          >
            <Box>Câu hỏi</Box>
          </Grid>
          <Grid
            item
            xs={10}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 2,
            }}
          >
            <Grid container>
              <Grid item xs={12}>
                <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                placeholder="Nhập câu hỏi..."
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                value={props.question}
                onChange={(e) => props.handleQuestionChange(e.target.value)}
                error={props.isFillQuestion !== true && props.isFillQuestion !== null}
              />
              </Grid>
              <Grid item xs={12}>
              {props.isFillQuestion === false && (
                <Box sx={{
                  fontSize: 10,
                  fontStyle: "italic",
                  marginTop: 1,
                }}>
                  Vui lòng điền nội dung câu hỏi!
                </Box>
            )}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container rowSpacing={2}>
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
          </Grid>
          <Grid item xs={6}>
            <Grid container rowSpacing={2}>
              <Grid item xs={12}>
                Kỹ năng
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  disablePortal
                  id="combo-box"
                  options={props.options}
                  fullWidth
                  renderInput={(params) => <TextField
                    error={props.isFillSkill !== true && props.isFillSkill !== null}
                    {...params} 
                  />}
                  value={props.skill}
                  onChange={(event, value) => props.handleSkillChange(value)}
                />
                {props.isFillSkill === false && (
                <Box sx={{
                  fontSize: 10,
                  fontStyle: "italic",
                  marginTop: 1,
                }}>
                  Vui lòng chọn kỹ năng!
                </Box>
                )}
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: 250,
                textTransform: "none",
                fontSize: 16,
                backgroundColor: "#1565C0",
              }}
              onClick={props.handleQuestionSubmit}
            >
              Tạo câu hỏi
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
    </Box>
  );
}
