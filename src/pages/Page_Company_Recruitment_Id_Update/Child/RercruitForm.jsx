import { useState, useEffect } from "react";
import recruitInfo from "./RecruitData";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Box1 from "./Box1";
import Box2 from "./Box2";
import Box3 from "./Box3";
import Box4 from "./box4";
function RecruitForm() {
  const dispatch = useDispatch();
  // fetch Data
  useEffect(() => {
    dispatch({ type: "saga/getDepartment" });
    dispatch({ type: "saga/getLanguage" });
    dispatch({ type: "saga/getSkill" });
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
  const skill = skillList ? skillList : [];
  const language = languageList ? languageList : [];
  const department = departmentList ? departmentList : [];
  // Recruiment comps
  const [RName, setRName] = useState(recruitInfo.name);
  const [description, setDescription] = useState(recruitInfo.description);
  const [salary, setSalary] = useState(recruitInfo.salary);
  const [maxHire, setMaxHire] = useState(recruitInfo.maxHiring);
  const [startDate, setStartDate] = useState(recruitInfo.startDate);
  const [endDate, setEndDate] = useState(recruitInfo.endDate);
  const [departmentChoose, setDepartmentChoose] = useState(
    recruitInfo.departmentId
  );
  const departments = department.filter(
    (comp) => comp.departmentId === departmentChoose
  );

  const [languages, setLanguages] = useState(recruitInfo.languageId);
  // const [recruiterId, setRecruiterId] = useState(recruitInfo.recruiterId);
  // const [status, setStatus] = useState(recruitInfo.status);
  const [requirement, setRequirement] = useState(recruitInfo.requirement);
  // Requirement comps
  const [rId, setRId] = useState(
    requirement.length > 0 ? requirement.length : 0
  );
  const [skillId, setSkillId] = useState(null);
  const [skillName, setSkillName] = useState("");
  const [experience, setExperience] = useState("");
  const [note, setNote] = useState("");
  const [inputValue, setInputValue] = useState("");
  // Language comps
  const [languageName, setLanguageName] = useState("");
  const lvalues = (language.filter((prop)=>prop.languageId===languages));
  let lvalue= (lvalues[0]?lvalues[0].languageName:"");
  const [lInputValue, setLInputValue] = useState("");
  // Department comps
  let express = departments[0] ? true : false;
  let departmentName = departments[0] ? departments[0].departmentName : "";
  let departmentId = departments[0] ? departments[0].departmentId : null;
  let departmentAddress = departments[0]
    ? departments[0].address
    : "";
  let departmentEmail = departments[0] ? departments[0].email : "";
  let departmentPhone = departments[0] ? departments[0].phone : "";
  let departmentWeb = departments[0] ? departments[0].website : "";
  const navigate = useNavigate();
  //FUNCTION
  function handleSubmit(e) {
    e.preventDefault();
    navigate("/company/recruitment/:recruitmentid");
  }
  const handleChange = (event) => {
    if (event.target.value === "") {
      // setExpress(false);
      setDepartmentChoose(null);
      // setDeparmentName(event.target.value);
    } else {
      // setExpress(true);
      // setDeparmentName(event.target.value);
      let arr = department.filter(
        (comp) => comp.departmentName === event.target.value
      );
      setDepartmentChoose(arr[0].departmentId);
      // setDepartmentId(arr[0].departmentId);
      // setDepartmentAddress(arr[0].departmentAddress);
      // setDepartmentEmail(arr[0].departmentEmail);
      // setDepartmentPhone(arr[0].departmentPhone);
      // setDepartmentWeb(arr[0].departmentWebsite);
    }
  };
  function handleRname(e) {
    setRName(e.target.value);
  }
  function handleDescription(e) {
    setDescription(e.target.value);
  }
  function handleSalary(e) {
    setSalary(e.target.value);
  }
  function handleMaxHire(e) {
    setMaxHire(e.target.value);
  }
  function handleRequirementAdd() {
    console.log(inputValue);
    console.log(skillName);
    let arr = skill.filter(
      (comp) => comp.name === (inputValue !== null ? inputValue.name : "")
    );
    console.log(arr);
    if (arr[0] === undefined) {
      alert("wrong skill");
      setSkillId(null);
      setSkillName("");
      setInputValue("");
      setExperience(0);
      setNote("");
    } else {
      const newRequire = {
        id: rId,
        skillId: skillId,
        skillname: skillName,
        experience: experience,
        note: note,
      };
      console.log(newRequire);
      setRequirement([...requirement, newRequire]);
      setSkillName("");
      setSkillId(null);
      setRId((prev) => (prev += 1));
      setExperience("");
      setNote("");
      setInputValue("");
    }
  }
  function handleRequirementDelete(id) {
    setRequirement(requirement.filter((component) => component.id !== id));
  }

  function handleLanguageAdd() {
    console.log(lInputValue);
    console.log(languageName);
    let arr = language.filter(
      (comp) => comp.languageName === (lInputValue !== null ? lInputValue.languageName : "")
    );
    console.log(arr);
    if (arr[0] === undefined) {
      alert("wrong language");
      // setLanguageId(null);
      setLanguageName("");
      setLInputValue("");
    } else {
      // const newLanguage = {
      //   languageId: languageId,
      //   languageName: languageName,
      // };
      // console.log(newLanguage);
      // setLanguages(newLanguage);
    }
  }
  function handleLanguageAdd2() {
    console.log(lInputValue);
    let arr = language.filter(
      (comp) => comp.languageName === lInputValue
    );
    console.log(arr);
    if (arr[0] === undefined) {
      alert("wrong language");
      // setLanguageId(null);
      setLanguageName("");
      setLInputValue("");
    }
  }
  function handleLanguageDelete(id) {
    setLanguages(languages.filter((component) => component.id !== id));
  }
  const handleStart = (date) => {
    setStartDate(date);
    console.log(date);
  };
  function handleEnd(date) {
    setEndDate(date);
    console.log(date);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={0} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={6} sx={{ marginTop: "8px" }}>
            <Box
              className={`RecruiteForm Form InputForm`}
              sx={{
                borderRadius: 4,
                boxShadow: 10,
                width: "90%",
                backgroundColor: "white",
                border: (theme) => `1px solid ${theme.palette.divider}`,
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box className="Container">
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
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ marginTop: "8px" }}>
            <Box
              className={`RecruiteForm Form InputForm`}
              sx={{
                borderRadius: 4,
                boxShadow: 10,
                width: "90%",
                backgroundColor: "white",
                border: (theme) => `1px solid ${theme.palette.divider}`,
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box className="Container">
                <Grid
                  container
                  spacing={0}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xs={10}>
                    <Box4 />
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ marginTop: "16px" }}>
            <Box
              className={`RecruiteForm InputForm`}
              sx={{
                borderRadius: 4,
                width: "95%",
                boxShadow: 10,
                backgroundColor: "white",
                border: (theme) => `1px solid ${theme.palette.divider}`,
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box className="Container">
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
              </Box>
            </Box>
          </Grid>
          <Grid sx={{ marginTop: "16px" }} item xs={12}>
            <Box
              className={`RecruiteForm InputForm`}
              sx={{
                borderRadius: 4,
                boxShadow: 10,
                width: "95%",
                backgroundColor: "white",
                border: (theme) => `1px solid ${theme.palette.divider}`,
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box className="Container">
                <Grid
                  container
                  spacing={0}
                  justifyContent="center"
                  alignItems="center"
                  sx={{ paddingTop: "16px" }}
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
                      lvalue = {lvalue}
                      handleLanguageAdd={handleLanguageAdd2}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}></Grid>
          <img src="./img/logo.png" alt="" />
          <Button variant="contained" className="AddButton" type="submit">
            Submit
          </Button>
        </Grid>
      </form>
    </>
  );
}
export default RecruitForm;
