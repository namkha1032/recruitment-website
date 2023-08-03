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
import Slide from "@mui/material/Slide";
import Backdrop from "@mui/material/Backdrop";
import { TextareaAutosize } from "@mui/base";
import CloseIcon from "@mui/icons-material/Close";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import CategoryIcon from "@mui/icons-material/Category";
import SchoolIcon from "@mui/icons-material/School";
import LanguageIcon from "@mui/icons-material/Language";
import SubjectRoundedIcon from "@mui/icons-material/SubjectRounded";
import LoadingButton from "@mui/lab/LoadingButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import { useEffect, useState } from "react";

// props.value: {
//   QuestionId: params.row.QuestionId,
//   QuestionName: params.row.QuestionName,
//   CategoryId: params.row.CategoryId,
//   CategoryName: params.row.CategoryName,
//   TypeId: params.row.TypeId,
//   TypeName: params.row.TypeName,
// }

export default function QuestionModal(props) {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  const [question, setQuestion] = useState(props.value.QuestionName);

  const [skillChoose, setSkillChoose] = useState({
    skillId: props.value.TypeId,
    skillName: props.value.TypeName,
  });
  const [languageChoose, setLanguageChoose] = useState({
    languageId: props.value.TypeId,
    languageName: props.value.TypeName,
  });

  const [category, setCategory] = useState(props.value.CategoryName);

  const [isFillQuestion, setIsFillQuestion] = useState(true);
  const [isFillType, setIsFillType] = useState(true);
  const [isFillCategory, setIsFillCategory] = useState(true);

  useEffect(() => {
    if (props.status.status === "success") {
      handleResetForm();
      props.handleModalClose();
    }
  }, [props.status]);

  function handleResetForm() {
    setQuestion("");
    setSkillChoose(null);
    setLanguageChoose(null);
    setIsFillQuestion(null);
    setIsFillCategory("Technology");
    setIsFillType(null);
  }

  function handleQuestionChange(value) {
    if (value !== "") {
      setIsFillQuestion(true);
    }
    setQuestion(value);
  }

  function handleSkillChange(value) {
    if (value !== undefined) {
      setIsFillType(true);
    }
    setSkillChoose(value);
  }

  function handleLanguageChange(value) {
    if (value !== undefined) {
      setIsFillType(true);
    }
    setLanguageChoose(value);
  }

  function handleCategoryChange(value) {
    if (value !== undefined) {
      setIsFillCategory(true);
    }
    setSkillChoose(null);
    setLanguageChoose(null);
    setCategory(value);
  }

  function handleSubmitClick() {
    if (question === "" || question === "null") {
      setIsFillQuestion(false);
    }
    if (
      category === "Technology" &&
      (skillChoose === null || skillChoose === undefined || skillChoose === "")
    ) {
      setIsFillType(false);
    } else if (
      category === "Language" &&
      (languageChoose === null ||
        languageChoose === undefined ||
        languageChoose === "")
    ) {
      setIsFillType(false);
    } else {
      if (category === "Technology") {
        props.handleUpdateQuestion({
          QuestionId: props.value.QuestionId,
          QuestionName: question,
          CategoryName: category,
          TypeId: skillChoose.skillId,
          TypeName: skillChoose.skillName,
        });
      } else if (category === "Language") {
        props.handleUpdateQuestion({
          QuestionId: props.value.QuestionId,
          QuestionName: question,
          CategoryName: category,
          TypeId: languageChoose.languageId,
          TypeName: languageChoose.languageName,
        });
      } else {
        props.handleUpdateQuestion({
          QuestionId: props.value.QuestionId,
          QuestionName: question,
          CategoryName: category,
          TypeId: null,
          TypeName: null,
        });
      }
      // handleResetForm();
      // props.handleModalClose();
    }
  }

  return (
    <Box>
      {isXs && <Modal
        open={props.modalStatus}
        onClose={() => {
          if (props.status.status !== "loading") {
            handleResetForm();
            props.handleModalClose();
          }
        }}
        // transition={Slide}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 2,
        }}
        // closeAfterTransition
        // slots={{ backdrop: Backdrop }}
        // slotProps={{
        //   backdrop: {
        //     timeout: 500,
        //   },
        // }}
      >
        <Slide in={props.modalStatus} timeout={500}>
          <Box
            sx={{
              maxWidth: 600,
              backgroundColor: "white",
              borderRadius: 3,
            }}
          >
            <Grid
              container
              rowSpacing={2}
              sx={{
                paddingLeft: 2,
                paddingRight: 2,
                paddingTop: 3,
                paddingBottom: 3,
              }}
            >
              <Grid
                item
                xs={11}
                sm={11}
                md={11}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    fontSize: 25,
                    fontWeight: 600,
                    color: "black",
                  }}
                >
                  {props.type === true ? "Update question" : "Question "}
                </Box>
              </Grid>
              <Grid
                item
                xs={1}
                sm={1}
                md={1}
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <IconButton
                  onClick={() => {
                    if (props.status.status !== "loading") {
                      handleResetForm();
                      props.handleModalClose();
                    }
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Grid>
              <Grid
                item
                xs={3}
                sm={3}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <QuestionMarkIcon sx={{ marginRight: 1 }} />
                <Box sx={{ fontWeight: 600 }}>ID</Box>
              </Grid>
              <Grid
                item
                xs={9}
                sm={9}
                md={9}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  fontSize: 12
                }}
              >
                {props.value.QuestionId}
              </Grid>
              <Grid
                item
                xs={12}
                sm={3}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <SubjectRoundedIcon sx={{ marginRight: 1 }} />
                <Box sx={{ fontWeight: 600 }}>Question</Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={9}
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
                      InputProps={{
                        readOnly: props.type ? false : true,
                      }}
                      disabled={props.status.status === "loading"}
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
                sm={3}
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
                sm={9}
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
                      control={
                        <Radio
                          sx={{
                            color: "black",
                            "&.Mui-checked": {
                              color: "black",
                            },
                          }}
                        />
                      }
                      label="Tech"
                      disabled={
                        !props.type || props.status.status === "loading"
                      }
                    />
                    <FormControlLabel
                      value="Language"
                      control={
                        <Radio
                          sx={{
                            color: "black",
                            "&.Mui-checked": {
                              color: "black",
                            },
                          }}
                        />
                      }
                      label="Lang"
                      disabled={
                        !props.type || props.status.status === "loading"
                      }
                    />
                    <FormControlLabel
                      value="Soft Skills"
                      control={
                        <Radio
                          sx={{
                            color: "black",
                            "&.Mui-checked": {
                              color: "black",
                            },
                          }}
                        />
                      }
                      label="Soft"
                      disabled={
                        !props.type || props.status.status === "loading"
                      }
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
                sm={3}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                {category === "Technology" && (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <SchoolIcon sx={{ marginRight: 1 }}></SchoolIcon>
                    <Box sx={{ fontWeight: 600 }}>Skill</Box>
                  </Box>
                )}
                {category === "Language" && (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <LanguageIcon sx={{ marginRight: 1 }}></LanguageIcon>
                    <Box sx={{ fontWeight: 600 }}>Language</Box>
                  </Box>
                )}
              </Grid>
              <Grid
                item
                xs={12}
                sm={9}
                md={9}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Grid container>
                  <Grid item xs={12}>
                    {category === "Technology" && props.type === true && (
                      <Autocomplete
                        disablePortal
                        id="combo-box-123"
                        options={props.options.skill}
                        fullWidth
                        renderInput={(params) => (
                          <TextField
                            error={isFillType !== true && isFillType !== null}
                            {...params}
                          />
                        )}
                        getOptionLabel={(option) => option.skillName || ""}
                        renderOption={(props, option) => (
                          <li {...props} key={option.skillId}>
                            {option.skillName}
                          </li>
                        )}
                        isOptionEqualToValue={(option, value) => {
                          return option.skillName === value.skillName;
                        }}
                        value={skillChoose}
                        onChange={(event, value) => handleSkillChange(value)}
                        disabled={props.status.status === "loading"}
                      />
                    )}
                    {category === "Technology" && props.type === false && (
                      <TextField
                        hiddenLabel
                        id="filled-hidden-label-small"
                        placeholder="Empty"
                        variant="outlined"
                        fullWidth
                        value={skillChoose ? skillChoose.skillName : null}
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                    )}
                    {category === "Language" && props.type === true && (
                      <Autocomplete
                        disablePortal
                        id="combo-box-456"
                        options={props.options.language}
                        fullWidth
                        renderInput={(params) => (
                          <TextField
                            error={isFillType !== true && isFillType !== null}
                            {...params}
                          />
                        )}
                        getOptionLabel={(option) => option.languageName || ""}
                        renderOption={(props, option) => (
                          <li {...props} key={option.languageId}>
                            {option.languageName}
                          </li>
                        )}
                        isOptionEqualToValue={(option, value) => {
                          return option.languageName === value.languageName;
                        }}
                        value={languageChoose}
                        onChange={(event, value) => handleLanguageChange(value)}
                        disabled={props.status.status === "loading"}
                      />
                    )}
                    {category === "Language" && props.type === false && (
                      <TextField
                        hiddenLabel
                        id="filled-hidden-label-small"
                        placeholder="Empty"
                        variant="outlined"
                        fullWidth
                        value={
                          languageChoose ? languageChoose.languageName : ""
                        }
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    {isFillType === false && category !== "Soft Skills" && (
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
                sm={12}
                md={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 1,
                }}
              >
                {props.status.status !== "loading" && props.status.status !== "success" && (
                  <Button
                    // variant="outlined"
                    // sx={{
                    //   color: "black",
                    //   border: "1px solid black",
                    //   textTransform: "none",
                    //   height: 50,
                    //   width: "100%",
                    //   textTransform: "none",
                    //   "&:hover": {
                    //     backgroundColor: "black",
                    //     color: "white",
                    //   },
                    // }}
                    variant="contained"
                    sx={{
                      height: 50,
                      width: "100%",
                      textTransform: "none",
                      backgroundColor: "black",
                      "&:hover": {
                        backgroundColor: "grey",
                      },
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
                )}
                {(props.status.status === "loading" || props.status.status === "success") && (
                  <LoadingButton
                    variant="outlined"
                    sx={{
                      color: "black",
                      border: "1px solid black",
                      textTransform: "none",
                      height: 50,
                      width: "100%",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "black",
                        color: "white",
                      },
                    }}
                    loading
                    loadingPosition="center"
                  >
                    Updating
                  </LoadingButton>
                )}
              </Grid>
            </Grid>
          </Box>
        </Slide>
      </Modal>}

      {!isXs && <Modal
        open={props.modalStatus}
        onClose={() => {
          if (props.status.status !== "loading") {
            handleResetForm();
            props.handleModalClose();
          }
        }}
        // transition={Slide}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 2,
        }}
        // closeAfterTransition
        // slots={{ backdrop: Backdrop }}
        // slotProps={{
        //   backdrop: {
        //     timeout: 500,
        //   },
        // }}
      >
        <Slide in={props.modalStatus} timeout={500}>
          <Box
            sx={{
              maxWidth: 600,
              backgroundColor: "white",
              borderRadius: 3,
            }}
          >
            <Grid
              container
              rowSpacing={2}
              sx={{
                paddingLeft: { md: 5, sm: 5, xs: 1 },
                paddingRight: { md: 5, sm: 5, xs: 1 },
                paddingTop: { md: 3, sm: 3, xs: 2 },
                paddingBottom: { md: 3, sm: 3, xs: 2 },
              }}
            >
              <Grid
                item
                xs={11}
                sm={11}
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
                    color: "black",
                  }}
                >
                  {props.type === true ? "Update question" : "Question "}
                </Box>
              </Grid>
              <Grid
                item
                xs={1}
                sm={1}
                md={1}
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <IconButton
                  onClick={() => {
                    if (props.status.status !== "loading") {
                      handleResetForm();
                      props.handleModalClose();
                    }
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Grid>
              <Grid
                item
                xs={3}
                sm={3}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginBottom: 1,
                }}
              >
                <QuestionMarkIcon sx={{ marginRight: 1 }} />
                <Box sx={{ fontWeight: 600 }}>ID</Box>
              </Grid>
              <Grid
                item
                xs={9}
                sm={9}
                md={9}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginBottom: 1,
                }}
              >
                {props.value.QuestionId}
              </Grid>
              <Grid
                item
                xs={12}
                sm={3}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginBottom: 1,
                }}
              >
                <SubjectRoundedIcon sx={{ marginRight: 1 }} />
                <Box sx={{ fontWeight: 600 }}>Question</Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={9}
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
                      InputProps={{
                        readOnly: props.type ? false : true,
                      }}
                      disabled={props.status.status === "loading"}
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
                sm={3}
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
                sm={9}
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
                    sx={{
                      display: "flex",
                      flexDirection: {
                        md: "row",
                        sm: "row",
                        xs: "column",
                      },
                    }}
                    onChange={(event, value) => handleCategoryChange(value)}
                  >
                    <FormControlLabel
                      value="Technology"
                      control={
                        <Radio
                          sx={{
                            color: "black",
                            "&.Mui-checked": {
                              color: "black",
                            },
                          }}
                        />
                      }
                      label="Technology"
                      disabled={
                        !props.type || props.status.status === "loading"
                      }
                    />
                    <FormControlLabel
                      value="Language"
                      control={
                        <Radio
                          sx={{
                            color: "black",
                            "&.Mui-checked": {
                              color: "black",
                            },
                          }}
                        />
                      }
                      label="Language"
                      disabled={
                        !props.type || props.status.status === "loading"
                      }
                    />
                    <FormControlLabel
                      value="Soft Skills"
                      control={
                        <Radio
                          sx={{
                            color: "black",
                            "&.Mui-checked": {
                              color: "black",
                            },
                          }}
                        />
                      }
                      label="Soft Skills"
                      disabled={
                        !props.type || props.status.status === "loading"
                      }
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
                sm={3}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                {category === "Technology" && (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <SchoolIcon sx={{ marginRight: 1 }}></SchoolIcon>
                    <Box sx={{ fontWeight: 600 }}>Skill</Box>
                  </Box>
                )}
                {category === "Language" && (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <LanguageIcon sx={{ marginRight: 1 }}></LanguageIcon>
                    <Box sx={{ fontWeight: 600 }}>Language</Box>
                  </Box>
                )}
              </Grid>
              <Grid
                item
                xs={12}
                sm={9}
                md={9}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Grid container>
                  <Grid item xs={12}>
                    {category === "Technology" && props.type === true && (
                      <Autocomplete
                        disablePortal
                        id="combo-box-123"
                        options={props.options.skill}
                        fullWidth
                        renderInput={(params) => (
                          <TextField
                            error={isFillType !== true && isFillType !== null}
                            {...params}
                          />
                        )}
                        getOptionLabel={(option) => option.skillName || ""}
                        renderOption={(props, option) => (
                          <li {...props} key={option.skillId}>
                            {option.skillName}
                          </li>
                        )}
                        isOptionEqualToValue={(option, value) => {
                          return option.skillName === value.skillName;
                        }}
                        value={skillChoose}
                        onChange={(event, value) => handleSkillChange(value)}
                        disabled={props.status.status === "loading"}
                      />
                    )}
                    {category === "Technology" && props.type === false && (
                      <TextField
                        hiddenLabel
                        id="filled-hidden-label-small"
                        placeholder="Empty"
                        variant="outlined"
                        fullWidth
                        value={skillChoose ? skillChoose.skillName : null}
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                    )}
                    {category === "Language" && props.type === true && (
                      <Autocomplete
                        disablePortal
                        id="combo-box-456"
                        options={props.options.language}
                        fullWidth
                        renderInput={(params) => (
                          <TextField
                            error={isFillType !== true && isFillType !== null}
                            {...params}
                          />
                        )}
                        getOptionLabel={(option) => option.languageName || ""}
                        renderOption={(props, option) => (
                          <li {...props} key={option.languageId}>
                            {option.languageName}
                          </li>
                        )}
                        isOptionEqualToValue={(option, value) => {
                          return option.languageName === value.languageName;
                        }}
                        value={languageChoose}
                        onChange={(event, value) => handleLanguageChange(value)}
                        disabled={props.status.status === "loading"}
                      />
                    )}
                    {category === "Language" && props.type === false && (
                      <TextField
                        hiddenLabel
                        id="filled-hidden-label-small"
                        placeholder="Empty"
                        variant="outlined"
                        fullWidth
                        value={
                          languageChoose ? languageChoose.languageName : ""
                        }
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    {isFillType === false && category !== "Soft Skills" && (
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
                sm={12}
                md={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 2,
                }}
              >
                {props.status.status !== "loading" && props.status.status !== "success" &&(
                  <Button
                    // variant="outlined"
                    // sx={{
                    //   color: "black",
                    //   border: "1px solid black",
                    //   textTransform: "none",
                    //   height: 50,
                    //   width: "100%",
                    //   textTransform: "none",
                    //   "&:hover": {
                    //     backgroundColor: "black",
                    //     color: "white",
                    //   },
                    // }}
                    variant="contained"
                    sx={{
                      height: 50,
                      width: "100%",
                      textTransform: "none",
                      backgroundColor: "black",
                      "&:hover": {
                        backgroundColor: "grey",
                      },
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
                )}
                {(props.status.status === "loading" || props.status.status === "success") && (
                  <LoadingButton
                    variant="outlined"
                    sx={{
                      color: "black",
                      border: "1px solid black",
                      textTransform: "none",
                      height: 50,
                      width: "100%",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "black",
                        color: "white",
                      },
                    }}
                    loading
                    loadingPosition="center"
                  >
                    Updating
                  </LoadingButton>
                )}
              </Grid>
            </Grid>
          </Box>
        </Slide>
      </Modal>}
      
    </Box>
  );
}
