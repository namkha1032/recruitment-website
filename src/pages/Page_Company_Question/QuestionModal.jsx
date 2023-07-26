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

  console.log(props.value.QuestionId)
  const [isFillQuestion, setIsFillQuestion] = useState(true);
  const [isFillSkill, setIsFillSkill] = useState(true);
  const [isFillCategory, setIsFillCategory] = useState(true);

  function handleResetForm() {
    setQuestion("");
    setSkill(null);
    setIsFillQuestion(null);
    setIsFillCategory("Technology");
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
    if ((skill === null && category !== "Soft skills") || skill === undefined) {
      setIsFillSkill(false);
    }
    if (category === null) {
      setIsFillCategory(false);
    }
    if (
      question !== "" &&
      (skill !== null || (skill === null && category === "Soft skills")) &&
      skill !== undefined &&
      category !== null
    ) {
      props.handleUpdateQuestion({
        QuestionId: props.value.QuestionId,
        QuestionName: question,
        Category: category,
        Skill: skill,
      });
      handleResetForm();
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
                {props.type === true ? "Update question" : "Question " + props.value.QuestionId}
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
              <Box>Question</Box>
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
                    placeholder="Enter the question..."
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    value={question}
                    onChange={(e) => handleQuestionChange(e.target.value)}
                    error={isFillQuestion !== true && isFillQuestion !== null}
                    InputProps={{
                      readOnly: props.type ? false : true,
                    }}
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
                      Please fill in Question field!
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
              Category
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
                    value="Technology"
                    control={<Radio />}
                    label="Technology"
                    disabled={!props.type}
                  />
                  <FormControlLabel
                    value="Language"
                    control={<Radio />}
                    label="Language"
                    disabled={!props.type}
                  />
                  <FormControlLabel
                    value="Soft Skills"
                    control={<Radio />}
                    label="Soft Skills"
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
                Please select a category!
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
              {category === "Technology" && "Technology"}
              {category === "Language" && "Language"}
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
                  {category === "Technology" && (
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
                  {category === "Language" && (
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
                  {isFillSkill === false && category !== "Soft Skills" && (
                    <Box
                      sx={{
                        fontSize: 10,
                        fontStyle: "italic",
                        marginTop: 1,
                      }}
                    >
                      Please select {category}!
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
                {props.type === true ? "Update" : "Edit question"}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
}
