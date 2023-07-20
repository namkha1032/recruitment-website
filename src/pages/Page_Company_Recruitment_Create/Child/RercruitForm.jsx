import { useState } from "react";
import recruitInfo from "./RecruitData";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { skill, language, department } from "./RecruitData";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import Box1 from "./Box1";
import Box2 from "./Box2";
import Box3 from "./Box3";
function RecruitForm() {
  // Recruiment comps
  const [RName, setRName] = useState(recruitInfo.name);
  const [description, setDescription] = useState(recruitInfo.description);
  const [salary, setSalary] = useState(recruitInfo.salary);
  const [maxHire, setMaxHire] = useState(recruitInfo.maxHiring);
  const [startDate, setStartDate] = useState(recruitInfo.startDate);
  const [endDate, setEndDate] = useState(recruitInfo.endDate);
  const departments = department.filter(
    (comp) => comp.id === recruitInfo.departmentId
  );
  const [languages, setLanguages] = useState(recruitInfo.language);
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
  const [lId, setLId] = useState(languages.length > 0 ? languages.length : 0);
  const [languageId, setLanguageId] = useState(null);
  const [languageName, setLanguageName] = useState("");
  const [lInputValue, setLInputValue] = useState("");
  // Department comps
  const [express, setExpress] = useState(departments[0] ? true : false);
  const [departmentName, setDeparmentName] = useState(
    departments[0] ? departments[0].name : ""
  );
  const [departmentId, setDepartmentId] = useState(
    departments[0] ? departments[0].id : ""
  );
  const [departmentAddress, setDepartmentAddress] = useState(
    departments[0] ? departments[0].address : ""
  );
  const [departmentEmail, setDepartmentEmail] = useState(
    departments[0] ? departments[0].email : ""
  );
  const [departmentPhone, setDepartmentPhone] = useState(
    departments[0] ? departments[0].phone : ""
  );
  const [departmentWeb, setDepartmentWeb] = useState(
    departments[0] ? departments[0].website : ""
  );
  const navigate = useNavigate();
  //FUNCTION
  function handleSubmit(e) {
    e.preventDefault();
    navigate("/company/recruitment/:recruitmentid");
  }
  const handleChange = (event) => {
    if (event.target.value === "") {
      setExpress(false);
      console.log(event.target.value);
      setDeparmentName(event.target.value);
    } else {
      setExpress(true);
      console.log(event.target.value);
      setDeparmentName(event.target.value);
      let arr = department.filter((comp) => comp.name === event.target.value);
      console.log(arr);
      setDepartmentId(arr[0].id);
      setDepartmentAddress(arr[0].address);
      setDepartmentEmail(arr[0].email);
      setDepartmentPhone(arr[0].phone);
      setDepartmentWeb(arr[0].website);
    }
  };
  function handleRname(e) {
    setRName(e.target.value);
    console.log(e.target.value);
  }
  function handleDescription(e) {
    setDescription(e.target.value);
    console.log(e.target.value);
  }
  function handleSalary(e) {
    setSalary(e.target.value);
    console.log(e.target.value);
  }
  function handleMaxHire(e) {
    setMaxHire(e.target.value);
    console.log(e.target.value);
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
      (comp) => comp.name === (lInputValue !== null ? lInputValue.name : "")
    );
    console.log(arr);
    if (arr[0] === undefined) {
      alert("wrong language");
      setLanguageId(null);
      setLanguageName("");
      setLInputValue("");
    } else {
      const newLanguage = {
        id: lId,
        languageId: languageId,
        languageName: languageName,
      };
      console.log(newLanguage);
      setLanguages([...languages, newLanguage]);
      setLanguageId(null);
      setLanguageName("");
      setLInputValue("");
      setLId((prev) => (prev += 1));
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
          <Grid item xs={12} sm={6} sx={{marginTop: "8px",}}>
            <Box
              className={`RecruiteForm Form InputForm`}
              sx={{
                borderRadius: 4,
                boxShadow: 10,
                width:"90%",
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
          <Grid item xs={12} sm={6}  sx={{marginTop: "8px",}}>
            <Box
              className={`RecruiteForm InputForm`}
              sx={{
                borderRadius: 4,
                width:"90%",
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
                width:"95%",
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
                      setSkillName={setSkillName}
                      skillName={skillName}
                      setSkillId={setSkillId}
                      handleRequirementAdd={handleRequirementAdd}
                      languages={languages}
                      handleLanguageDelete={handleLanguageDelete}
                      lInputValue={lInputValue}
                      setLInputValue={setLInputValue}
                      setLanguageName={setLanguageName}
                      languageName={languageName}
                      setLanguageId={setLanguageId}
                      handleLanguageAdd={handleLanguageAdd}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}></Grid>
          <Button variant="contained" className="AddButton" type="submit">
            Submit
          </Button>
        </Grid>
      </form>
    </>
  );
}
export default RecruitForm;
