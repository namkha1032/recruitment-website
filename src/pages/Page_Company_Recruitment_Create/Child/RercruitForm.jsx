import { useState } from "react";
import InputText from "./InputText";
import recruitInfo from "./RecruitData";
import Button from "@mui/material/Button";
import ChooseList from "./ChooseSkill";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import RequireUlList from "./RequireUlList";
import { skill, language, department } from "./RecruitData";
import ChooseLanguage from "./ChooseLanguage";
import LanguageUlList from "./LanguageUlList";
import Department from "./Department";
import SelectDate from "./SelectDate";

function RecruitForm() {
  // Recruiment comps
  const [RName, setRName] = useState(recruitInfo.name);
  const [description, setDescription] = useState(recruitInfo.description);
  const [salary, setSalary] = useState(recruitInfo.salary);
  const [maxHire, setMaxHire] = useState(recruitInfo.maxHiring);
  const [hired, setHired] = useState(recruitInfo.hired);
  const [startDate, setStartDate] = useState(recruitInfo.startDate);
  const [endDate, setEndDate] = useState(recruitInfo.endDate);
  const [departments, setDepartments] = useState(department.filter((comp)=>comp.id === recruitInfo.departmentId));
  const [languages, setLanguages] = useState(recruitInfo.language);
  const [recruiterId, setRecruiterId] = useState(recruitInfo.recruiterId);
  const [status, setStatus] = useState(recruitInfo.status);
  const [requirement, setRequirement] = useState(recruitInfo.requirement);

  // Requirement comps
  const [rId, setRId] = useState(0);
  const [skillId, setSkillId] = useState(null);
  const [skillName, setSkillName] = useState("");
  const [experience, setExperience] = useState(0);
  const [note, setNote] = useState("");
  const [inputValue, setInputValue] = useState("");
  // Language comps
  const [lId, setLId] = useState(0);
  const [languageId, setLanguageId] = useState(null);
  const [languageName, setLanguageName] = useState("");
  const [lInputValue, setLInputValue] = useState("");
  // Department comps
  const [express, setExpress] = useState(departments[0]?true:false);
  const [departmentName, setDeparmentName] = useState(departments[0]?departments[0].name:"");
  const [departmentId, setDepartmentId] = useState(departments[0]?departments[0].id:"");
  const [departmentAddress, setDepartmentAddress] = useState(departments[0]?departments[0].address:"");
  const [departmentEmail, setDepartmentEmail] = useState(departments[0]?departments[0].email:"");
  const [departmentPhone, setDepartmentPhone] = useState(departments[0]?departments[0].phone:"");
  const [departmentWeb, setDepartmentWeb] = useState(departments[0]?departments[0].website:"");
  //FUNCTION
  function handleClick() {
    console.log("Submit:")
    console.log(RName)
    console.log(description)
    console.log(requirement)
    console.log(languages)
    console.log(salary)
    console.log(departmentId)
    console.log(departmentName)
    console.log(startDate)
    console.log(endDate)
    console.log(maxHire)
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
      setExperience(0);
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
      <div className={`CVForm InputForm`}>
        <div className="Container">
          <Grid
            container
            spacing={0}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={10}>
              <InputText
                state={"Recuite Name"}
                handleState={handleRname}
                width="98%"
                value={RName}
              />
            </Grid>
            <Grid item xs={10}>
              <InputText
                state={"Description"}
                handleState={handleDescription}
                width="98%"
                value={description}
              />
            </Grid>
            <Grid item xs={12}>
              <div className="parentFlex">
                <div className="leftFlex">
                  <RequireUlList
                    comps={requirement}
                    handleDelete={handleRequirementDelete}
                  />
                  <ChooseList
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    experience={experience}
                    setExperience={setExperience}
                    note={note}
                    setNote={setNote}
                    state={"Skill"}
                    handleState={setSkillName}
                    value={skillName}
                    setSkillId={setSkillId}
                    onPress={handleRequirementAdd}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="parentFlex">
                <div className="leftFlex">
                  <LanguageUlList
                    comps={languages}
                    handleDelete={handleLanguageDelete}
                  />
                  <ChooseLanguage
                    inputValue={lInputValue}
                    setInputValue={setLInputValue}
                    state={"language"}
                    handleState={setLanguageName}
                    value={languageName}
                    setSkillId={setLanguageId}
                    onPress={handleLanguageAdd}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={10}>
              <InputText
                state={"Salary"}
                handleState={handleSalary}
                width="98%"
                value={salary}
              />
            </Grid>
            <Grid item xs={10}>
              <Department
                handleChange={handleChange}
                departmentName={departmentName}
                express={express}
                departmentId={departmentId}
                departmentAddress={departmentAddress}
                departmentEmail={departmentEmail}
                departmentPhone={departmentPhone}
                departmentWeb={departmentWeb}
              />
            </Grid>
            <Grid item xs={10}>
              <Grid container spacing={0}>
                <Grid item xs={10}>
                  <SelectDate
                    handleEnd={handleEnd}
                    handleStart={handleStart}
                    startDate={startDate}
                    endDate={endDate}
                  />
                </Grid>
                <Grid item xs={2}>
                  <InputText
                    state={"Hire number"}
                    handleState={handleMaxHire}
                    width="88%"
                    value={maxHire}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}></Grid>
            <Button
              variant="contained"
              className="AddButton"
              onClick={handleClick}
            >
              Submit
            </Button>
          </Grid>
        </div>
      </div>
    </>
  );
}
export default RecruitForm;
