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
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import CategoryIcon from "@mui/icons-material/Category";
import SchoolIcon from "@mui/icons-material/School";
import LanguageIcon from '@mui/icons-material/Language';
import { TextareaAutosize } from "@mui/base";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export default function QuestionFormModal(props) {
  const [question, setQuestion] = useState("");
  const [skill, setSkill] = useState(null);
  const [category, setCategory] = useState("Technology");

  const [isFillQuestion, setIsFillQuestion] = useState(null);
  const [isFillSkill, setIsFillSkill] = useState(null);
  const [isFillCategory, setIsFillCategory] = useState(null);

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
    if ((skill === null && category !== "Soft Skills") || skill === undefined) {
      setIsFillSkill(false);
    }
    if (category === null) {
      setIsFillCategory(false);
    }
    if (
      question !== "" &&
      (skill !== null || (skill === null && category === "Soft Skills")) &&
      skill !== undefined &&
      category !== null
    ) {
      props.handleSubmitQuestion({
        question: question,
        category: category,
        skill: skill,
      });
      handleResetForm();
      props.handleAddModalClose();
    }
  }

  return (
    <Box>
      <Modal
        open={props.addModalStatus}
        onClose={props.handleAddModalClose}
        // transition={Slide}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "80%",
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
                Create question
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
                  handleResetForm();
                  props.handleAddModalClose();
                }}
              >
                <CloseIcon />
              </IconButton>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                marginBottom: 1,
              }}
            >
              <QuestionMarkIcon sx={{ marginRight: 1 }} />
              <Box sx={{ fontWeight: 600 }}>Question</Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={9}
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
              md={3}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <CategoryIcon sx={{ marginRight: 1 }} />
              <Box sx={{ fontWeight: 600 }}>Category</Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={9}
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
                  />
                  <FormControlLabel
                    value="Language"
                    control={<Radio />}
                    label="Language"
                  />
                  <FormControlLabel
                    value="Soft Skills"
                    control={<Radio />}
                    label="Soft Skills"
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
              md={3}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              {category === "Technology" && (
                <Box sx={{
                  display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                }}>
                  <SchoolIcon sx={{ marginRight: 1 }}></SchoolIcon>
                  <Box sx={{fontWeight: 600}}>Skill</Box>
                </Box>
              )}
              {category === "Language" && (
                <Box sx={{
                  display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                }}>
                  <LanguageIcon sx={{ marginRight: 1 }}></LanguageIcon>
                  <Box sx={{fontWeight: 600}}>Language</Box>
                </Box>
              )}
            </Grid>
            <Grid
              item
              xs={12}
              md={9}
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
                      Please select a {category}!
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
                onClick={handleSubmitClick}
              >
                Create
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
}
