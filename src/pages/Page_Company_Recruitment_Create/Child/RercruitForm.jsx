import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Box1 from "./Box1";
import Box2 from "./Box2";
import Box3 from "./Box3";
import GigaCard from "../../../components/GigaCard/GigaCard";
import GigaCardBody from "../../../components/GigaCardBody/GigaCardBody";
import cleanStore from "../../../utils/cleanStore";
import TitleDivider from "../../../components/TitleDivider/TitleDivider";
import { Typography } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertDialog from "../../../components/AlertDialog/AlertDialog";

const SkillAlert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function RecruitForm() {
  const dispatch = useDispatch();
  // fetch Data
  useEffect(() => {
    
    dispatch({ type: "departmentSaga/getDepartment" , payload:{ token: `Bearer ${userlocal.token}`}});
    dispatch({ type: "languageSaga/getLanguage", payload:{ token: `Bearer ${userlocal.token}`} });
    dispatch({ type: "skillSaga/getSkill", payload:{ token: `Bearer ${userlocal.token}`} });
    return () => {
      dispatch({ type: "skill/setSkill", payload: null });
      dispatch({ type: "language/setLanguage", payload: null });
      dispatch({ type: "department/setDepartment", payload: null });
    };
  }, [dispatch]);
  // CV COMPS
  const skillList = useSelector((state) => state.skill);
  const languageList = useSelector((state) => state.language);
  const departmentList = useSelector((state) => state.department);
  const newError = useSelector((state) => state.error);
  const userlocal = useSelector((state) => state.user);
  const recruiterId= userlocal.recruiterId
  // Skill data
  const [skill, setSkill] = useState([]);
  const [skillData, setSkillData] = useState([]);

  const [language, setLanguage] = useState([]);
  const [department, setDepartment] = useState([]);

  // Recruiment comps
  const [RName, setRName] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState(0);
  const [maxHire, setMaxHire] = useState(0);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [departmentChoose, setDepartmentChoose] = useState(null);
  const departments = department.filter(
    (comp) => comp.departmentId === departmentChoose
  );
  const [skillOpen, setSkillOpen] = useState(false);
  const [languages, setLanguages] = useState(null);
  const [requirement, setRequirement] = useState([]);
  // Requirement comps
  const [rId, setRId] = useState(
    requirement.length > 0 ? requirement.length : 0
  );
  const [skillId, setSkillId] = useState(null);
  const [skillName, setSkillName] = useState("");
  const [experience, setExperience] = useState(0);
  const [note, setNote] = useState("Note");
  const [inputValue, setInputValue] = useState("");
  // Language comps
  const [languageName, setLanguageName] = useState("");
  const lvalues = language.filter((prop) => prop.languageId === languages);
  let lvalue = lvalues[0] ? lvalues[0].languageName : "";
  const [lInputValue, setLInputValue] = useState("");
  // Department comps
  let express = departments[0] ? true : false;
  let departmentName = departments[0] ? departments[0].departmentName : "";
  let departmentId = departments[0] ? departments[0].departmentId : null;
  let departmentAddress = departments[0] ? departments[0].address : "";
  let departmentEmail = departments[0] ? departments[0].email : "";
  let departmentPhone = departments[0] ? departments[0].phone : "";
  let departmentWeb = departments[0] ? departments[0].website : "";
  const navigate = useNavigate();
  //FUNCTION
  const handleSetSkillOpen = () => {
    setSkillOpen(true);
  };
  const handleSkillClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSkillOpen(false);
  };

  let [errorSnackbar, setErrorSnackbar] = useState(false);
  ////////////////////////////////////////////////////
  useEffect(() => {
    if (newError.status === "no") {
      setTimeout(() => {
        const idToNavigate = newError.message;
        cleanStore(dispatch);
        navigate(`/company/recruitment/${idToNavigate}`);
      }, 2000);
    }
    if (newError.status === "yes") {
      setErrorSnackbar(true);
      setTimeout(() => {
        setErrorSnackbar(false);
        dispatch({
          type: "error/setError",
          payload: { status: "idle", message: "" },
        });
      }, 5000);
    }
  }, [newError]);
  useEffect(() => {
    if (departmentList) {
      setDepartment(
        departmentList ? (departmentList !== [] ? departmentList : []) : []
      );
    }
    if (languageList) {
      setLanguage(
        languageList ? (languageList !== [] ? languageList : []) : []
      );
    }
    if (skillList) {
      setSkill(skillList ? (skillList !== [] ? skillList : []) : []);
      setSkillData(skillList ? (skillList !== [] ? skillList : []) : []);
    }
  }, [departmentList, skillList, languageList]);
  const handleChange = (event) => {
    if (event.target.value === "") {
      setDepartmentChoose(null);
    } else {
      let arr = department.filter(
        (comp) => comp.departmentName === event.target.value
      );
      setDepartmentChoose(arr[0].departmentId);
    }
  };
  function handleRname(e) {
    setRName(e.target.value);
  }
  function handleDescription(e) {
    setDescription(e.target.value);
  }
  function handleSalary(event) {
    let midleScore =
      parseFloat(event.target.value) >= 0
        ? parseFloat(event.target.value)
        : "0";
    setSalary(midleScore);
  }
  function handleMaxHire(event) {
    let midleScore =
      parseFloat(event.target.value) >= 0
        ? parseFloat(event.target.value)
        : "0";
    setMaxHire(midleScore);
  }
  function handleRequirementAdd() {
    let arr = skill.filter(
      (comp) =>
        comp.skillName === (inputValue !== null ? inputValue.skillName : "")
    );
    // console.log(arr);
    if (arr[0] === undefined) {
      handleSetSkillOpen();
      setSkillId(null);
      setSkillName("");
      setInputValue("");
      setExperience(0);
      setNote("");
    } else {
      const newRequire = {
        requirementId: rId,
        positionId: "00000000-0000-0000-0000-000000000001",
        skillId: skillId,
        skillname: skillName,
        experience: experience.toString(),
        notes: note,
        isDeleted: false,
      };
      // console.log(newRequire);
      setRequirement([...requirement, newRequire]);
      setSkill(skill.filter((prop) => prop.skillId !== skillId));
      setSkillName("");
      setSkillId(null);
      setRId((prev) => (prev += 1));
      setExperience(0);
      setInputValue("");
    }
  }
  function handleRequirementDelete(id) {
    let delReq = requirement.filter(
      (component) => component.requirementId === id
    );
    let newSkill = skillData.filter(
      (prop) => prop.skillId === delReq[0].skillId
    );
    setRequirement(
      requirement.filter((component) => component.requirementId !== id)
    );

    setSkill([...skill, newSkill[0]]);
  }
  function handleLanguageAdd2() {
    let arr = language.filter((comp) => comp.languageName === lInputValue);
    if (arr[0] === undefined) {
      alert("wrong language");
      setLanguageName("");
      setLInputValue("");
    }
  }
  function handleLanguageDelete(id) {
    setLanguages(languages.filter((component) => component.id !== id));
  }
  const handleStart = (date) => {
    setStartDate(date);
  };
  function handleEnd(date) {
    setEndDate(date);
  }

  let [openAlert, setOpenAlert] = useState(false);

  function handleSubmit(e) {
    let token = `Bearer ${userlocal.token}`;
    try {
      dispatch({
        type: "createPositionsaga/getCreatePosition",
        payload: {
          token:token,
          positionName: RName,
          description: description,
          salary: salary,
          maxHiringQty: maxHire,
          startDate: startDate !== null ? startDate.toJSON() : startDate,
          endDate: endDate !== null ? endDate.toJSON() : endDate,
          departmentId: departmentChoose,
          languageId: languages,
          recruiterId: recruiterId,
          requirement: requirement,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
  function preProcessing() {
    const messArr = [];
    if (RName === "") {
      messArr.push("position name");
    }
    if (requirement.length === 0) {
      messArr.push("requirement");
    }
    if (languages == null) {
      messArr.push("language");
    }
    if (departmentChoose == null) {
      messArr.push("department");
    }
    if (startDate === null || endDate === null) {
      messArr.push("date");
    }
    let messString = "";
    if (messArr.length > 0) {
      messArr.forEach((x, index) => {
        messString = messString + x;
        if (index < messArr.length - 1) {
          messString = messString + ", ";
        } else {
          messString = messString + ".";
        }
      });
      dispatch({
        type: "error/setError",
        payload: { status: "yes", message: `Please choose ${messString}` },
      });
    } else {
      setOpenAlert(true);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
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
                variant="h3"
                sx={{ fontWeight: "bold", marginBottom: "16px" }}
              >
                Create Position
              </Typography>
            </Grid>
            <GigaCard>
              <GigaCardBody>
                <Grid
                  container
                  spacing={0}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xs={10}>
                    <Box1
                      setDescription={setDescription}
                      handleRname={handleRname}
                      RName={RName}
                      handleDescription={handleDescription}
                      description={description}
                    />
                  </Grid>
                </Grid>
              </GigaCardBody>
            </GigaCard>
          </Grid>
          <Grid item xs={12}>
            <TitleDivider>Detail</TitleDivider>
          </Grid>
          <Grid item xs={12}>
            <GigaCard>
              <GigaCardBody>
                <Grid
                  container
                  spacing={0}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xs={10}>
                    <Box2
                      handleSalary={handleSalary}
                      salary={salary}
                      handleChange={handleChange}
                      departmentName={departmentName}
                      express={express}
                      departmentId={departmentId}
                      departmentAddress={departmentAddress}
                      departmentEmail={departmentEmail}
                      departmentPhone={departmentPhone}
                      departmentWeb={departmentWeb}
                      handleEnd={handleEnd}
                      handleStart={handleStart}
                      startDate={startDate}
                      endDate={endDate}
                      handleMaxHire={handleMaxHire}
                      maxHire={maxHire}
                      department={department}
                    />
                  </Grid>
                </Grid>
              </GigaCardBody>
            </GigaCard>
          </Grid>
          <Grid item xs={12}>
            <TitleDivider>Requirement</TitleDivider>
          </Grid>
          <Grid item xs={12}>
            <GigaCard>
              <GigaCardBody>
                <Grid
                  container
                  spacing={0}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xs={10}>
                    <Box3
                      requirement={requirement}
                      handleRequirementDelete={handleRequirementDelete}
                      inputValue={inputValue}
                      setInputValue={setInputValue}
                      experience={experience}
                      setExperience={setExperience}
                      note={note}
                      setNote={setNote}
                      skill={skill}
                      setSkillName={setSkillName}
                      skillName={skillName}
                      setSkillId={setSkillId}
                      handleRequirementAdd={handleRequirementAdd}
                      language={language}
                      languages={languages}
                      handleLanguageDelete={handleLanguageDelete}
                      lInputValue={lInputValue}
                      setLInputValue={setLInputValue}
                      setLanguages={setLanguages}
                      setLanguageName={setLanguageName}
                      languageName={languageName}
                      // setLanguageId={setLanguageId}
                      lvalue={lvalue}
                      handleLanguageAdd={handleLanguageAdd2}
                    />
                  </Grid>
                </Grid>
              </GigaCardBody>
            </GigaCard>
          </Grid>
          <Grid item xs={12}></Grid>
          <img src="./img/logo.png" alt="" />
          <Button
            variant="contained"
            className="AddButton"
            onClick={preProcessing}
          >
            Create
          </Button>
        </Grid>
      </form>
      <Snackbar
        open={skillOpen}
        autoHideDuration={3000}
        onClose={handleSkillClose}
      >
        <SkillAlert
          onClose={handleSkillClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          Wrong skill's name
        </SkillAlert>
      </Snackbar>
      <Snackbar
        open={errorSnackbar}
        autoHideDuration={4000}
        onClose={() => {
          setErrorSnackbar(false);
        }}
      >
        <Alert
          variant="filled"
          onClose={() => {
            setErrorSnackbar(false);
          }}
          severity="error"
          sx={{ width: "100%" }}
        >
          {newError.message}
        </Alert>
      </Snackbar>
      <AlertDialog
        openAlert={openAlert}
        setOpenAlert={setOpenAlert}
        alertMessage={"Are you sure you want to create?"}
        successfulMessage={"Create successfully"}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
export default RecruitForm;
