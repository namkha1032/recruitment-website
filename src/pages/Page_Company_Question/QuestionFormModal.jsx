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
  Slide,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import CategoryIcon from "@mui/icons-material/Category";
import SchoolIcon from "@mui/icons-material/School";
import LanguageIcon from "@mui/icons-material/Language";
import { PsychologyRounded } from "@mui/icons-material";
import { TextareaAutosize } from "@mui/base";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function QuestionFormModal(props) {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  const [question, setQuestion] = useState("");
  const [category, setCategory] = useState("Technology");

  const [skillChoose, setSkillChoose] = useState({
    skillId: "",
    skillName: "",
  });
  const [languageChoose, setLanguageChoose] = useState({
    languageId: "",
    languageName: "",
  });

  useEffect(() => {
    if (props.status.status === "success") {
      handleResetForm();
      props.handleAddModalClose();
    }
  }, [props.status]);

  const [isFillQuestion, setIsFillQuestion] = useState(null);
  const [isFillType, setIsFillType] = useState(null);
  const [isFillCategory, setIsFillCategory] = useState(null);

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
      (skillChoose === null ||
        skillChoose === undefined ||
        skillChoose.skillName === "")
    ) {
      setIsFillType(false);
    } else if (
      category === "Language" &&
      (languageChoose === null ||
        languageChoose === undefined ||
        languageChoose.skillName === "")
    ) {
      setIsFillType(false);
    } else {
      if (category === "Technology") {
        props.handleSubmitQuestion({
          question: question,
          category: category,
          typeId: skillChoose.skillId,
          typeName: skillChoose.skillName,
        });
      } else if (category === "Language") {
        props.handleSubmitQuestion({
          question: question,
          category: category,
          typeId: languageChoose.languageId,
          typeName: languageChoose.languageName,
        });
      } else {
        props.handleSubmitQuestion({
          question: question,
          category: category,
          typeId: null,
          typeName: null,
        });
      }
      // if (props.status.status === "success") {
      //   handleResetForm();
      //   props.handleAddModalClose();
      // }
    }
  }

  return (
    <Box>
      {isXs && (
        <Modal
          open={props.addModalStatus}
          onClose={() => {
            if (props.status.status !== "loading") {
              handleResetForm();
              props.handleAddModalClose();
            }
          }}
          // transition={Slide}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Slide in={props.addModalStatus} timeout={500}>
            <Box
              sx={{
                maxWidth: 600,
                width: "90%",
                backgroundColor: "white",
                borderRadius: 3,
              }}
            >
              <Grid
                container
                rowSpacing={1}
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
                      if (props.status.status !== "loading") {
                        handleResetForm();
                        props.handleAddModalClose();
                      }
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
                        error={
                          isFillQuestion !== true && isFillQuestion !== null
                        }
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
                    justifyContent: "space-between",
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
                        label={
                          <Box sx={{ display: "flex" }}>
                            {/* <SchoolIcon sx={{ marginRight: 0.1 }}></SchoolIcon> */}
                            <Box>Tech</Box>
                          </Box>
                        }
                        disabled={props.status.status === "loading"}
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
                        label={
                          <Box sx={{ display: "flex" }}>
                            {/* <LanguageIcon
                              sx={{ marginRight: 0.1 }}
                            ></LanguageIcon> */}
                            <Box>Lang</Box>
                          </Box>
                        }
                        disabled={props.status.status === "loading"}
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
                        label={
                          <Box sx={{ display: "flex" }}>
                            {/* <PsychologyRounded sx={{ marginRight: 0.1 }} /> */}
                            <Box>Soft</Box>
                          </Box>
                        }
                        disabled={props.status.status === "loading"}
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
                            return option.skillId === value.skillId;
                          }}
                          value={skillChoose}
                          onChange={(event, value) => handleSkillChange(value)}
                          disabled={props.status.status === "loading"}
                        />
                      )}
                      {category === "Language" && (
                        <Autocomplete
                          disablePortal
                          id="combo-box-4567"
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
                            return option.languageId === value.languageId;
                          }}
                          value={languageChoose}
                          onChange={(event, value) =>
                            handleLanguageChange(value)
                          }
                          disabled={props.status.status === "loading"}
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
                    marginTop: 2,
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
                      onClick={handleSubmitClick}
                    >
                      Create
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
                      Create
                    </LoadingButton>
                  )}
                </Grid>
              </Grid>
            </Box>
          </Slide>
        </Modal>
      )}

      {!isXs && (
        <Modal
          open={props.addModalStatus}
          onClose={() => {
            if (props.status.status !== "loading") {
              handleResetForm();
              props.handleAddModalClose();
            }
          }}
          // transition={Slide}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Slide in={props.addModalStatus} timeout={500}>
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
                      color: "black",
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
                      if (props.status.status !== "loading") {
                        handleResetForm();
                        props.handleAddModalClose();
                      }
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
                        error={
                          isFillQuestion !== true && isFillQuestion !== null
                        }
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
                        disabled={props.status.status === "loading"}
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
                        disabled={props.status.status === "loading"}
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
                        disabled={props.status.status === "loading"}
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
                            return option.skillId === value.skillId;
                          }}
                          value={skillChoose}
                          onChange={(event, value) => handleSkillChange(value)}
                          disabled={props.status.status === "loading"}
                        />
                      )}
                      {category === "Language" && (
                        <Autocomplete
                          disablePortal
                          id="combo-box-4567"
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
                            return option.languageId === value.languageId;
                          }}
                          value={languageChoose}
                          onChange={(event, value) =>
                            handleLanguageChange(value)
                          }
                          disabled={props.status.status === "loading"}
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
                    marginTop: 2,
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
                      onClick={handleSubmitClick}
                    >
                      Create
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
                      Create
                    </LoadingButton>
                  )}
                </Grid>
              </Grid>
            </Box>
          </Slide>
        </Modal>
      )}
    </Box>
  );
}
