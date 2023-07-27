import { useState, useEffect } from "react";
import cvinfo from "./CvData";
import CreateCv from "./CreateCv";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import cleanStore from "../../../utils/cleanStore";

// import ViewCv from "./ViewCv";
function CVForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // fetch Data
  useEffect(() => {
    dispatch({ type: "saga/getLanguage" });
    dispatch({ type: "saga/getSkill" });
    return () => {
      dispatch({ type: "skill/setSkill", payload: null });
      dispatch({ type: "language/setLanguage", payload: null });
    };
  }, [dispatch]);
  // CV COMPS
  const skillList = useSelector((state) => state.skill);
  const languageList = useSelector((state) => state.language);

  const [skillData, setSkill] = useState([]);
  const [languageData, setLanguage] = useState([]);
  useEffect(() => {
    if (languageList) {
      setLanguage(
        languageList ? (languageList !== [] ? languageList : []) : []
      );
    }
    if (skillList) {
      setSkill(skillList ? (skillList !== [] ? skillList : []) : []);
    }
  }, [skillList, languageList]);

  const [cvtitle, setTitle] = useState("");
  const [intro, setIntro] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [certs, setCerts] = useState([]);
  const [skills, setSkills] = useState([]);
  const [languages, setLanguages] = useState(cvinfo.language);
  // CERTIFICATE COMPS
  const [Cid, setCid] = useState(0);
  const [Cname, setCName] = useState("");
  const [organize, setOrganize] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [detail, setDetail] = useState("");
  const [link, setLink] = useState("");
  const [open, setOpen] = useState(false);
  //SKILL COMPS
  const [sname, setSName] = useState("");
  const [skillId, setSkillId] = useState(null);
  const [Sid, setSid] = useState(0);
  const [SExp, setSExp] = useState("");
  const [sInputValue, setSInputValue] = useState("");
  // Language comps
  const [lId, setLId] = useState(0);
  const [languageId, setLanguageId] = useState(null);
  const [languageName, setLanguageName] = useState("");
  const [lInputValue, setLInputValue] = useState("");
  //FUNCTION
  function handleTitle(e) {
    setTitle(e.target.value);
  }
  function handleIntro(e) {
    setIntro(e.target.value);
  }
  function handleExp(e) {
    setExperience(e.target.value);
  }
  function handleSkillAdd2() {
    console.log(lInputValue);
    console.log(languageName);
    let arr = skillData.filter(
      (comp) =>
        comp.skillName === (sInputValue !== null ? sInputValue.skillName : "")
    );
    console.log(arr);
    if (arr[0] === undefined) {
      alert("wrong skill");
      setSkillId(null);
      setSName("");
      setSInputValue("");
      setSExp("");
    } else {
      const newSkill = {
        cvSkillsId: Sid,
        skillId: skillId,
        experienceYear: SExp,
      };
      console.log(newSkill);
      setSkills([...skills, newSkill]);
      setSkillId(null);
      setSName("");
      setSInputValue("");
      setSExp("");
      setSid((prev) => (prev += 1));
    }
  }
  function handleSkilltDelete(id) {
    setSkills(skills.filter((component) => component.id !== id));
  }
  function handleCertificateAdd() {
    console.log(startDate);
    const newCert = {
      id: Cid,
      name: Cname,
      organize: organize,
      startDate: startDate,
      endDate: endDate,
      detail: detail,
      link: link,
    };
    console.log(newCert);
    if (Cname !== "" && organize !== "" && startDate !== null && link !== "") {
      setCerts([...certs, newCert]);
      setCName("");
      setOrganize("");
      setStartDate(null);
      setEndDate(null);
      setDetail("");
      setLink("");
      setCid((prev) => (prev += 1));
    } else {
      handleSetOpen();
    }
  }
  function handleCertDelete(id) {
    setCerts(certs.filter((component) => component.id !== id));
  }

  function handleLanguageAdd() {
    console.log(lInputValue);
    console.log(languageName);
    let arr = languageData.filter(
      (comp) =>
        comp.languageName ===
        (lInputValue !== null ? lInputValue.languageName : "")
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
  const handleSetOpen = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  function handleSubmit(e) {
    e.preventDefault();
    cleanStore(dispatch);
    navigate("/profile/:profileid/cv/:cvid");
  }
  //COMPS
  return (
    <>
      <Grid container spacing={0} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <CreateCv
            //////////Skill////////
            setSkillId={setSkillId}
            intro={intro}
            setIntro={setIntro}
            education={education}
            setEducation={setEducation}
            experience={experience}
            setExperience={setExperience}
            certs={certs}
            setCerts={setCerts}
            skills={skills}
            setSkills={setSkills}
            Cid={Cid}
            setCid={setCid}
            Cname={Cname}
            setCName={setCName}
            organize={organize}
            setOrganize={setOrganize}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            detail={detail}
            setDetail={setDetail}
            link={link}
            setLink={setLink}
            open={open}
            setOpen={setOpen}
            name={sname}
            setName={setSName}
            Sid={Sid}
            setSid={setSid}
            SExp={SExp}
            setSExp={setSExp}
            sInputValue={sInputValue}
            setSInputValue={setSInputValue}
            handleIntro={handleIntro}
            handleExp={handleExp}
            handleSkillAdd={handleSkillAdd2}
            handleSkilltDelete={handleSkilltDelete}
            handleCertificateAdd={handleCertificateAdd}
            handleCertDelete={handleCertDelete}
            handleSetOpen={handleSetOpen}
            handleClose={handleClose}
            handleSubmit={handleSubmit}
            languages={languages}
            handleLanguageDelete={handleLanguageDelete}
            lInputValue={lInputValue}
            setLInputValue={setLInputValue}
            setLanguageName={setLanguageName}
            languageName={languageName}
            setLanguageId={setLanguageId}
            handleLanguageAdd={handleLanguageAdd}
            cvtitle={cvtitle}
            handleTitle={handleTitle}
            skillData={skillData}
            languageData={languageData}
          />
        </Grid>
      </Grid>
      
    </>
  );
}
export default CVForm;
