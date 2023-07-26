import { useState, useEffect } from "react";
import cvinfo from "./CvData";
import CreateCv from "./CreateCv";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// import ViewCv from "./ViewCv";
function CVForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // fetch Data
  useEffect(() => {
    dispatch({ type: "saga/getCvinfor"});
    dispatch({ type: "saga/getLanguage" });
    dispatch({ type: "saga/getSkill" });
    return () => {
      dispatch({ type: "skill/setSkill", payload: null });
      dispatch({ type: "language/setLanguage", payload: null });
      dispatch({ type: "cvHasSkill/setCvHasSkill", payload: null });
      dispatch({ type: "cvInfor/setCvInfor", payload: null });
      dispatch({ type: "cvHasCertificate/setCvHasCertificate", payload: null });
    };
  }, [dispatch]);
  // CV COMPS
  const skillList = useSelector((state) => state.skill);
  const languageList = useSelector((state) => state.language);
  const cv = useSelector((state) => state.cvInfor);
  const cvSkill = useSelector((state) => state.cvHasSkill);
  const cvCertificate = useSelector((state) => state.cvHasCertificate);
  const cvSkillData = cvSkill ? cvSkill : [];
  const cvData = cv ? cv : [];
  console.log(cvSkill)
  const skillData = skillList ? skillList : [];
  const languageData = languageList ? languageList : [];
  const [cvtitle, setTitle] = useState("");
  const [intro, setIntro] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [certs, setCerts] = useState([]);
  const [skills, setSkills] = useState([]);
  const [languages, setLanguages] = useState(cvinfo.language);
  useEffect(() => {
    if (cv) {
      // Data is available, update the local state
      setTitle(cv?(cv[0].cvName!==null?cv[0].experience:"data still null" ):"");
      setIntro(cv?(cv[0].introduction!==null?cv[0].introduction:"data still null" ):"");
      setEducation(cv?(cv[0].education!==null?cv[0].education:"data still null" ):"");
      setExperience(cv?(cv[0].experience!==null?cv[0].experience:"data still null" ):"");
    }
  }, [cv]); 
  useEffect(() => {
    if (cvCertificate) {
      setCerts(cvCertificate?(cvCertificate!==[]?cvCertificate:[] ):[]);
    }
  }, [cvCertificate]); 
  useEffect(() => {
    if (cvSkill) {
      setSkills(cvSkill?(cvSkill!==[]?cvSkill:[] ):[]);
    }
  }, [cvSkill]); 
  
  
  // CERTIFICATE COMPS
  const [Cid, setCid] = useState(certs.length > 0 ? certs.length : 0);
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
  const [Sid, setSid] = useState(skills.length > 0 ? skills.length : 0);
  const [SExp, setSExp] = useState("");
  const [sInputValue, setSInputValue] = useState("");
  // Language comps
  const [lId, setLId] = useState(languages.length > 0 ? languages.length : 0);
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
  // function handleSkillAdd() {
  //   console.log(sname);
  //   console.log(SExp);
  //   const newSkill = {
  //     id: Sid,
  //     name: sname,
  //     skillExperienc: SExp,
  //   };
  //   if (sname !== "") {
  //     setSkills([...skills, newSkill]);
  //     setSName("");
  //     setSExp("");
  //     setSid((prev) => (prev += 1));
  //   }
  // }
  function handleSkillAdd2() {
    console.log(lInputValue);
    console.log(languageName);
    let arr = skillData.filter(
      (comp) => comp.name === (sInputValue !== null ? sInputValue.name : "")
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
    const newCert = {
      certificateId: Cid,
      certificateName: Cname,
      organizationName: organize,
      dateEarned: startDate,
      expirationDate: endDate,
      description: detail,
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
  console.log(certs)
  function handleCertDelete(id) {
    setCerts(certs.filter((component) => component.certificateId !== id));
  }

  function handleLanguageAdd() {
    console.log(lInputValue);
    console.log(languageName);
    let arr = languageData.filter(
      (comp) => comp.languageName === (lInputValue !== null ? lInputValue.languageName : "")
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
