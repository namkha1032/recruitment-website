import { useState, useEffect } from "react";
import cvinfo from "./CvData";
import CreateCv from "./CreateCv";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import cleanStore from "../../../utils/cleanStore";
import * as React from "react";
import { Box } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar"
// import ViewCv from "./ViewCv";
//http://localhost:3000/profile/1/cv/d1c51600-6272-4c78-9b50-36af9d403a28/update
const SkillAlert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const CertAlert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function CVForm(prop) {
  const profileid=prop.profileid 
  const cvid=prop.cvid
  console.log(cvid)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // fetch Data
  useEffect(() => {
    dispatch({ type: "cvInforsaga/getCvinfor", 
    // payload:cvid 
    payload:"d1c51600-6272-4c78-9b50-36af9d403a28"
  });
    dispatch({ type: "saga/getLanguage" });
    dispatch({ type: "skillSaga/getSkill" });
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
    }
  }, [skillList, languageList]);
  const [loading, setLoading] = useState(false);
  const [cvtitle, setTitle] = useState("");
  const [intro, setIntro] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  ///////////////////////////////////////////////////
  const [certs, setCerts] = useState([]);
  const [baseCerts, setBaseCerts] = useState([]);
  const [delCerts, setDelCerts] = useState([]);
  const [addCerts, setAddCerts] = useState([]);
  /////////////////////////////////////////////////
  const [skills, setSkills] = useState([]);
  const [baseSkills, setBaseSkills] = useState([]);
  const [delSkills, setDelSkills] = useState([]);
  const [addSkills, setAddSkills] = useState([]);
  ///////////////////////////////////////////////////////
  const [languages, setLanguages] = useState(cvinfo.language);

  useEffect(() => {
    if (cv) {
      // Data is available, update the local state
      setTitle(
        cv ? (cv[0].cvName !== null ? cv[0].cvName : "data still null") : ""
      );
      setIntro(
        cv
          ? cv[0].introduction !== null
            ? cv[0].introduction
            : "data still null"
          : ""
      );
      setEducation(
        cv
          ? cv[0].education !== null
            ? cv[0].education
            : "data still null"
          : ""
      );
      setExperience(
        cv
          ? cv[0].experience !== null
            ? cv[0].experience
            : "data still null"
          : ""
      );
    }
  }, [cv]);
  useEffect(() => {
    if (cvCertificate) {
      setCerts(
        cvCertificate ? (cvCertificate !== [] ? cvCertificate : []) : []
      );
      setBaseCerts(
        cvCertificate ? (cvCertificate !== [] ? cvCertificate : []) : []
      );
    }
  }, [cvCertificate]);
  useEffect(() => {
    if (cvSkill) {
      setSkills(cvSkill ? (cvSkill !== [] ? cvSkill : []) : []);
      setBaseSkills(cvSkill ? (cvSkill !== [] ? cvSkill : []) : []);
      setSkillOption(skillData.filter(
        (item1) => !cvSkill.some((item2) => item1.skillId === item2.skillId)
      ))
    }
  }, [cvSkill,skillData]);

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
  // pdf form
  const [pdfFile, setPdfFile] = useState(null);
  const [viewPdf, setViewPdf] = useState(null);
  const [pdf, setPdf] = useState(null);
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
    console.log(sInputValue);
    console.log(languageName);
    console.log(skillData);
    let arr = skillData.filter(
      (comp) =>
        comp.skillName === (sInputValue !== null ? sInputValue.skillName : "")
    );
    console.log(arr);
    if (arr[0] === undefined) {
      handleSetSkillOpen()
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
      setAddSkills([...addSkills, newSkill]);
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
    setSkillOption([...skillOption, newSkill[0]])
    setSkills(skills.filter((component) => component.cvSkillsId !== id));
    let delskill = baseSkills.filter((prop) => prop.cvSkillsId === id);
    console.log(delskill);
    if (delskill[0]) {
      console.log("add delete");
      setDelSkills([...delSkills, delskill[0]]);
    } else {
      console.log("delete add");
      setAddSkills(
        addSkills.filter((component) => component.cvSkillsId !== id)
      );
    }
  }
  console.log(delSkills);
  function handleCertificateAdd() {
    console.log(startDate);
    if (Cname !== "" && organize !== "" && startDate !== null && link !== "") {
    const newCert = {
      certificateId: Cid,
      certificateName: Cname,
      description: detail,
      organizationName: organize,
      dateEarned: startDate.toJSON(),
      expirationDate: endDate !== null ? endDate.toJSON() : endDate,
      link: link,
      cvid: cvid,
      isDeleted:false,
    };
    console.log(newCert);
    
      setCerts([...certs, newCert]);
      setAddCerts([...addCerts, newCert]);
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
  console.log(certs);
  function handleCertDelete(id) {
    setCerts(certs.filter((component) => component.certificateId !== id));
    let delcert = baseCerts.filter((prop) => prop.certificateId === id);
    console.log(delcert);
    if (delcert[0]) {
      console.log("add delete");
      setDelCerts([...delCerts, delcert[0]]);
    } else {
      console.log("delete add");
      setAddCerts(
        addCerts.filter((component) => component.certificateId !== id)
      );
    }
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
      cleanStore(dispatch);
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
  const [skillOpen, setSkillOpen] = useState(false);
  const handleSetSkillOpen = () => {
    setSkillOpen(true);
  };
  const handleSkillClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSkillOpen(false);
  };
  async function handleSubmit(e) {
    e.preventDefault();
    try {
    //   // setLoading(true);
    //   // const formData = new FormData();
    //   // formData.append("Cvid", "d1c51600-6272-4c78-9b50-36af9d403a28");
    //   // formData.append("CandidateId", "00000000-0000-0000-0000-000000000001");
    //   // formData.append("Experience", experience);
    //   // formData.append("CvPdf", null);
    //   // formData.append("CvFile", pdf);
    //   // formData.append("CvName", cvtitle);
    //   // formData.append("Introduction", intro);
    //   // formData.append("Education", education);
    //   // formData.append("IsDeleted", false);

    //   // const response = await axios.put(
    //   //   `https://leetun2k2-001-site1.gtempurl.com/api/Cv/d1c51600-6272-4c78-9b50-36af9d403a28`,
    //   //   formData
    //   // );
    //   // console.log("FINISHED!!!!!!!!!!!!");
    //   // console.log(response);
      dispatch({
        type: "updateCvsaga/getUpdateCv",
        payload: {
          // Cvid: cvid,
          Cvid: "d1c51600-6272-4c78-9b50-36af9d403a28",
          CvName: cvtitle,
          Introduction: intro,
          Education:education,
          Experience: experience,
          Skills: skills,
          delSkills: delSkills,
          addSkills: addSkills,
          Certificates: certs,
          delCerts: delCerts,
          addCerts: addCerts,
        },
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
    cleanStore(dispatch);
    navigate(`/profile/:profileid/cv/${cvid}`);
  }
  //COMPS
  return (
    <>
    <Box >
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
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <CertAlert
          onClose={handleClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          Lack of certificate's information
        </CertAlert>
      </Snackbar>
      </Box>
    </>
  );
}
export default CVForm;
