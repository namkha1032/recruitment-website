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

export default function QuestionModal(props) {
  const [question, setQuestion] = useState(props.value.QuestionName);
  const [skill, setSkill] = useState(props.value.Skill);
  const [category, setCategory] = useState(props.value.Category);

  const [isFillQuestion, setIsFillQuestion] = useState(true);
  const [isFillSkill, setIsFillSkill] = useState(true);
  const [isFillCategory, setIsFillCategory] = useState(true);

  function handleResetForm() {
    setQuestion("");
    setSkill(null);
    setIsFillQuestion(null);
    setIsFillCategory("Chuyên môn");
    setIsFillSkill(null);
  }

  function handleQuestionChange(value) {
    if (value !== "") {
      setIsFillQuestion(true);
    }
    setQuestion(value);
  }

  function handleSkillChange(value) {
    if (value !== undefined) {
      setIsFillSkill(true);
    }
    setSkill(value);
  }

  function handleCategoryChange(value) {
    if (value !== undefined) {
      setIsFillCategory(true);
    }
    setSkill(null);
    setCategory(value);
  }

  function handleSubmitClick() {
    if (question === "" || question === "null") {
      setIsFillQuestion(false);
    }
    if ((skill === null && category !== "Kỹ năng mềm") || skill === undefined) {
      setIsFillSkill(false);
    }
    if (category === null) {
      setIsFillCategory(false);
    }
    if (
      question !== "" &&
      (skill !== null || (skill === null && category === "Kỹ năng mềm")) &&
      skill !== undefined &&
      category !== null
    ) {
      props.handleUpdateQuestion({
        id: props.value.id,
        question: question,
        category: category,
        skill: skill,
      });
      props.handleModalClose();
    }
  }

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
              md={11}
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
                {props.type === true ? "Cập nhật câu hỏi" : "Câu hỏi"}
              </Box>
            </Grid>
            <Grid
              item
              xs={1}
              md={1}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <IconButton
                onClick={() => {
                  props.handleModalClose();
                }}
              >
                <CloseIcon />
              </IconButton>
            </Grid>
            <Grid
              item
              xs={12}
              md={2}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 1,
              }}
            >
              <Box>Câu hỏi</Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={10}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 1,
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
                    value={question}
                    onChange={(e) => handleQuestionChange(e.target.value)}
                    error={isFillQuestion !== true && isFillQuestion !== null}
                    disabled={!props.type}
                  />
                </Grid>
                <Grid item xs={12}>
                  {isFillQuestion === false && (
                    <Box
                      sx={{
                        fontSize: 10,
                        fontStyle: "italic",
                        marginTop: 1,
                      }}
                    >
                      Vui lòng điền nội dung câu hỏi!
                    </Box>
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              md={2}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              Phân loại
            </Grid>
            <Grid
              item
              xs={12}
              md={10}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <FormControl>
                {/* <FormLabel id="demo-radio-buttons-group-label" sx={{fontSize: 12}}>Chọn một</FormLabel> */}
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  // defaultValue="Chuyên môn"
                  name="radio-buttons-group"
                  value={category}
                  onChange={(event, value) => handleCategoryChange(value)}
                >
                  <FormControlLabel
                    value="Chuyên môn"
                    control={<Radio />}
                    label="Chuyên môn"
                    disabled={!props.type}
                  />
                  <FormControlLabel
                    value="Ngôn ngữ"
                    control={<Radio />}
                    label="Ngôn ngữ"
                    disabled={!props.type}
                  />
                  <FormControlLabel
                    value="Kỹ năng mềm"
                    control={<Radio />}
                    label="Kỹ năng mềm"
                    disabled={!props.type}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            {isFillCategory === false && (
              <Box
                sx={{
                  fontSize: 10,
                  fontStyle: "italic",
                  marginTop: 1,
                }}
              >
                Vui lòng chọn phân loại!
              </Box>
            )}
            <Grid
              item
              xs={12}
              md={2}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              {category === "Chuyên môn" && "Chuyên môn"}
              {category === "Ngôn ngữ" && "Ngôn ngữ"}
            </Grid>
            <Grid
              item
              xs={12}
              md={10}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid container>
                <Grid item xs={12}>
                  {category === "Chuyên môn" && (
                    <Autocomplete
                      disablePortal
                      id="combo-box-123"
                      options={props.options.skill}
                      fullWidth
                      renderInput={(params) => (
                        <TextField
                          error={isFillSkill !== true && isFillSkill !== null}
                          {...params}
                        />
                      )}
                      value={skill}
                      onChange={(event, value) => handleSkillChange(value)}
                      disabled={!props.type}
                    />
                  )}
                  {category === "Ngôn ngữ" && (
                    <Autocomplete
                      disablePortal
                      id="combo-box-456"
                      options={props.options.language}
                      fullWidth
                      renderInput={(params) => (
                        <TextField
                          error={isFillSkill !== true && isFillSkill !== null}
                          {...params}
                        />
                      )}
                      value={skill}
                      onChange={(event, value) => handleSkillChange(value)}
                      disabled={!props.type}
                    />
                  )}
                </Grid>
                <Grid item xs={12}>
                  {isFillSkill === false && category !== "Kỹ năng mềm" && (
                    <Box
                      sx={{
                        fontSize: 10,
                        fontStyle: "italic",
                        marginTop: 1,
                      }}
                    >
                      Vui lòng chọn {category}!
                    </Box>
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 1,
              }}
            >
              <Button
                variant="contained"
                sx={{
                  width: {
                    md: 250,
                    xs: "100%",
                  },
                  textTransform: "none",
                  fontSize: 16,
                  backgroundColor: "#1565C0",
                }}
                onClick={() => {
                  if (props.type === true) {
                    handleSubmitClick();
                  } else {
                    props.setType(true);
                  }
                }}
              >
                {props.type === true ? "Cập nhật câu hỏi" : "Chỉnh sửa câu hỏi"}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
}
