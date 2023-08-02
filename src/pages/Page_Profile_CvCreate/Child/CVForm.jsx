import { useState, useEffect } from "react";
// import cvinfo from "./CvData";
import CreateCv from "./CreateCv";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import cleanStore from "../../../utils/cleanStore";
// import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects";
// import axios from "axios";

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

  const [skillData, setSkillData] = useState([]);
  const [skillOption, setSkillOption] = useState([]);
  const [languageData, setLanguage] = useState([]);
  useEffect(() => {
    if (languageList) {
      setLanguage(
        languageList ? (languageList !== [] ? languageList : []) : []
      );
    }
    if (skillList) {
      setSkillData(skillList ? (skillList !== [] ? skillList : []) : []);
      setSkillOption(skillList ? (skillList !== [] ? skillList : []) : []);
    }
  }, [skillList, languageList]);
  const [loading, setLoading] = useState(false);
  const [cvtitle, setTitle] = useState("");
  const [intro, setIntro] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [certs, setCerts] = useState([]);
  const [skills, setSkills] = useState([]);
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
  // const [lId, setLId] = useState(0);
  // const [languageId, setLanguageId] = useState(null);
  // const [languageName, setLanguageName] = useState("");
  // const [lInputValue, setLInputValue] = useState("");
  // PDF
  const [pdfFile, setPdfFile] = useState(null);
  const [viewPdf, setViewPdf] = useState(null);
  const [pdf, setPdf] = useState(null);
  console.log(pdf);
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
    // console.log(lInputValue);
    // console.log(languageName);
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
      setSkillOption(skillOption.filter((prop)=>prop.skillId!==skillId))
      setSkillId(null);
      setSName("");
      setSInputValue("");
      setSExp("");
      setSid((prev) => (prev += 1));
    }
  }
  function handleSkilltDelete(id) {
    let delReq = skills.filter((component) => component.cvSkillsId === id)
    let newSkill = skillData.filter((prop)=>prop.skillId===delReq[0].skillId)
    setSkills(skills.filter((component) => component.cvSkillsId !== id));
    setSkillOption([...skillOption, newSkill[0]])
  }
  function handleCertificateAdd() {
    console.log(startDate);
    if (Cname !== "" && organize !== "" && startDate !== null && link !== "") {
      const newCert = {
        certificateId: Cid,
        certificateName: Cname,
        organizationName: organize,
        dateEarned: startDate.toJSON(),
        expirationDate: endDate !== null ? endDate.toJSON() : endDate,
        description: detail,
        link: link,
        isDeleted:false
      };
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
    setCerts(certs.filter((component) => component.certificateId !== id));
  }

  // function handleLanguageAdd() {
  //   console.log(lInputValue);
  //   console.log(languageName);
  //   let arr = languageData.filter(
  //     (comp) =>
  //       comp.languageName ===
  //       (lInputValue !== null ? lInputValue.languageName : "")
  //   );
  //   console.log(arr);
  //   if (arr[0] === undefined) {
  //     alert("wrong language");
  //     setLanguageId(null);
  //     setLanguageName("");
  //     setLInputValue("");
  //   } else {
  //     const newLanguage = {
  //       id: lId,
  //       languageId: languageId,
  //       languageName: languageName,
  //     };
  //     console.log(newLanguage);
  //     setLanguages([...languages, newLanguage]);
  //     setLanguageId(null);
  //     setLanguageName("");
  //     setLInputValue("");
  //     setLId((prev) => (prev += 1));
  //   }
  // }
  // function handleLanguageDelete(id) {
  //   setLanguages(languages.filter((component) => component.id !== id));
  // }
  const handleSetOpen = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      dispatch({
        type: "saga/getCreateCv",
        payload:{
          CvName: cvtitle,
          Introduction: intro,
          Education:education,
          Experience: experience,
          Skills:skills,
          Certificates:certs,
        }
      })
      // const formData = new FormData();
      // formData.append("CvName", cvtitle);
      // formData.append("Introduction", intro);
      // formData.append("Education", education);
      // formData.append("Experience", experience);
      // formData.append("CvFile", pdf); // Make sure to provide the actual file here
      // formData.append("CvPdf", null);
      // formData.append("IsDeleted", false);
      // formData.append("CandidateId", "daa3769b-5dd9-47f7-97de-f97e4e705971");
      // formData.append("Cvid", "1f357759-6d1e-47e7-a04b-01a92e73c115");
      // const response = await axios.post(
      //   `https://leetun2k2-001-site1.gtempurl.com/api/Cv`,
      //   formData
      // );
      // console.log("FINISHED!!!!!!!!!!!!");
      // console.log(response);
      // dispatch({
      //   type: "saga/getCreateCv",
      //   payload: {
      //     CvName: cvtitle,
      //     Introduction: intro,
      //     Education: education,
      //     Experience: experience,
      //     Skills: skills,
      //     Certificates: certs,
      //   },
      // });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
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
            skillOption={skillOption}
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
            // handleLanguageDelete={handleLanguageDelete}
            // lInputValue={lInputValue}
            // setLInputValue={setLInputValue}
            // setLanguageName={setLanguageName}
            // languageName={languageName}
            // setLanguageId={setLanguageId}
            // handleLanguageAdd={handleLanguageAdd}
            cvtitle={cvtitle}
            handleTitle={handleTitle}
            skillData={skillData}
            languageData={languageData}
            // cvpfd
            pdfFile={pdfFile}
            setPdfFile={setPdfFile}
            viewPdf={viewPdf}
            setViewPdf={setViewPdf}
            setPdf={setPdf}
          />
        </Grid>
      </Grid>
      {loading && <p>Loading...</p>}
    </>
  );
}
export default CVForm;
