import { useState, useEffect } from "react";
import recruitInfo from "./RecruitData";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Box1 from "./Box1";
import Box2 from "./Box2";
import Box3 from "./Box3";
import GigaCard from "../../../components/GigaCard/GigaCard";
import GigaCardBody from "../../../components/GigaCardBody/GigaCardBody";
import dayjs from "dayjs";
function RecruitForm() {
  const dispatch = useDispatch();
  // fetch Data
  useEffect(() => {
    dispatch({ type: "saga/getDepartment" });
    dispatch({ type: "saga/getLanguage" });
    dispatch({ type: "saga/getSkill" });
    dispatch({ type: "saga/getPositioninfor" });
    return () => {
      dispatch({ type: "skill/setSkill", payload: null });
      dispatch({ type: "language/setLanguage", payload: null });
      dispatch({ type: "department/setDepartment", payload: null });
      dispatch({ type: "positionInfor/setCvInfor", payload: null });
      dispatch({ type: "positionRequire/setPositionRequire", payload: null });
    };
  }, [dispatch]);
  // CV COMPS
  const skillList = useSelector((state) => state.skill);
  const languageList = useSelector((state) => state.language);
  const departmentList = useSelector((state) => state.department);
  const positionInfor = useSelector((state) => state.positionInfor);
  const positionRequire = useSelector((state) => state.positionRequire);
  // const skill = skillList ? skillList : [];
  // const language = languageList ? languageList : [];
  // const department = departmentList ? departmentList : [];
  console.log(positionRequire);
  // Recruiment comps
  const [RName, setRName] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("");
  const [maxHire, setMaxHire] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [departmentChoose, setDepartmentChoose] = useState(
    recruitInfo.departmentId
  );
  const [languages, setLanguages] = useState("");
  const [requirement, setRequirement] = useState([]);
  const [skill, setSkill] = useState([]);
  const [language, setLanguage] = useState([]);
  const [department, setDepartment] = useState([]);

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
    }
  }, [departmentList,skillList,languageList]);
  // useEffect(() => {
  //   if (skillList) {
  //     setSkill(skillList ? (skillList !== [] ? skillList : []) : []);
  //   }
  // }, [skillList]);
  // useEffect(() => {
  //   if (languageList) {
  //     setLanguage(
  //       languageList ? (languageList !== [] ? languageList : []) : []
  //     );
  //   }
  // }, [languageList]);

  useEffect(() => {
    if (positionInfor) {
      setRName(
        positionInfor
          ? positionInfor[0].positionName !== null
            ? positionInfor[0].positionName
            : "data still null"
          : ""
      );
      setDescription(
        positionInfor
          ? positionInfor[0].description !== null
            ? positionInfor[0].description
            : "data still null"
          : ""
      );
      setSalary(
        positionInfor
          ? positionInfor[0].salary !== null
            ? positionInfor[0].salary
            : ""
          : ""
      );
      setStartDate(
        positionInfor
          ? positionInfor[0].startDate !== null
            ? dayjs(positionInfor[0].startDate)
            : ""
          : ""
      );
      setEndDate(
        positionInfor
          ? positionInfor[0].endDate !== null
            ? dayjs(positionInfor[0].endDate)
            : ""
          : ""
      );
      setLanguages(
        positionInfor
          ? positionInfor[0].languageId !== null
            ? positionInfor[0].languageId
            : ""
          : ""
      );
      setDepartmentChoose(
        positionInfor
          ? positionInfor[0].departmentId !== null
            ? positionInfor[0].departmentId
            : ""
          : ""
      );
    }
  }, [positionInfor]);

  useEffect(() => {
    if (positionRequire) {
      setRequirement(
        positionRequire ? (positionRequire !== [] ? positionRequire : []) : []
      );
    }
  }, [positionRequire]);

  const departments = department.filter(
    (comp) => comp.departmentId === departmentChoose
  );

  // const [recruiterId, setRecruiterId] = useState(recruitInfo.recruiterId);
  // const [status, setStatus] = useState(recruitInfo.status);

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
  function handleSubmit(e) {
    e.preventDefault();
    navigate("/company/recruitment/:recruitmentid");
  }
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
      (comp) => comp.skillName === (inputValue !== null ? inputValue.skillName : "")
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
        requirementId: rId,
        skillId: skillId,
        experience: experience,
        notes: note,
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
    setRequirement(
      requirement.filter((component) => component.requirementId !== id)
    );
  }
  function handleLanguageAdd2() {
    console.log(lInputValue);
    let arr = language.filter((comp) => comp.languageName === lInputValue);
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
        <Grid container spacing={2} justifyContent="center" alignItems="center">
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
          <Button variant="contained" className="AddButton" type="submit">
            Submit
          </Button>
        </Grid>
      </form>
    </>
  );
}
export default RecruitForm;
