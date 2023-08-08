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
import Snackbar from "@mui/material/Snackbar";
import axios from "axios";
import { delay } from "../../../utils/delay";
import Alert from "@mui/material/Alert";
import AlertDialog from "../../../components/AlertDialog/AlertDialog";
import CvSkeleton from "./cvSkeleton";

//http://localhost:3000/profile/1/cv/d1c51600-6272-4c78-9b50-36af9d403a28/update
const SkillAlert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const CertAlert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function CVForm(prop) {
  const profileid = prop.profileid;
  const cvid = prop.cvid;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: "cvInforsaga/getCvinfor",
      payload: cvid,
    });
    dispatch({
      type: "saga/getLanguage",
      payload: { token: `Bearer ${userlocal.token}` },
    });
    dispatch({
      type: "skillSaga/getSkill",
      payload: { token: `Bearer ${userlocal.token}` },
    });
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
  const newError = useSelector((state) => state.error);
  const userlocal = useSelector((state) => state.user);

  let [errorSnackbar, setErrorSnackbar] = useState(false);

  const [skillData, setSkillData] = useState([]);
  const [skillOption, setSkillOption] = useState([]);
  const [languageData, setLanguage] = useState([]);

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
  const [SExp, setSExp] = useState(0);
  const [sInputValue, setSInputValue] = useState("");
  // Language comps
  const [lId, setLId] = useState(languages.length > 0 ? languages.length : 0);
  const [languageId, setLanguageId] = useState(null);
  const [languageName, setLanguageName] = useState("");
  const [lInputValue, setLInputValue] = useState("");
  // pdf form
  const [pdfFile, setPdfFile] = useState(`/data/CA.pdf`);
  const [viewPdf, setViewPdf] = useState(`/data/CA.pdf`);
  const [pdf, setPdf] = useState(`/data/CA.pdf`);
  ///////////////////
  const [skillOpen, setSkillOpen] = useState(false);
  let [openAlert, setOpenAlert] = useState(false);
  //FUNCTION
  useEffect(() => {
    if (newError.status == "no") {
      setTimeout(() => {
        const idToNavigate = newError.message;
        cleanStore(dispatch);
        navigate(`/profile/${profileid}/cv/${idToNavigate}`);
      }, 2000);
    }
    const canid = userlocal.candidateId;
    if (newError.status == "yes") {
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
    if (languageList) {
      setLanguage(
        languageList ? (languageList !== [] ? languageList : []) : []
      );
    }
    if (skillList) {
      setSkillData(skillList ? (skillList !== [] ? skillList : []) : []);
    }
  }, [skillList, languageList]);
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
      setSkillOption(
        skillData.filter(
          (item1) => !cvSkill.some((item2) => item1.skillId === item2.skillId)
        )
      );
    }
  }, [cvSkill, skillData]);
  function handleSExp(event) {
    let midleScore =
      parseFloat(event.target.value) >= 0 ? parseFloat(event.target.value) : 0;
    setSExp(midleScore);
  }
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
    let arr = skillData.filter(
      (comp) =>
        comp.skillName === (sInputValue !== null ? sInputValue.skillName : "")
    );
    if (arr[0] === undefined) {
      handleSetSkillOpen();
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
      setSkills([...skills, newSkill]);
      setAddSkills([...addSkills, newSkill]);
      setSkillOption(skillOption.filter((prop) => prop.skillId !== skillId));
      setSkillId(null);
      setSName("");
      setSInputValue("");
      setSExp("");
      setSid((prev) => (prev += 1));
    }
  }
  function handleSkilltDelete(id) {
    let delReq = skills.filter((component) => component.cvSkillsId === id);
    let newSkill = skillData.filter(
      (prop) => prop.skillId === delReq[0].skillId
    );
    setSkillOption([...skillOption, newSkill[0]]);
    setSkills(skills.filter((component) => component.cvSkillsId !== id));
    let delskill = baseSkills.filter((prop) => prop.cvSkillsId === id);
    if (delskill[0]) {
      setDelSkills([...delSkills, delskill[0]]);
    } else {
      setAddSkills(
        addSkills.filter((component) => component.cvSkillsId !== id)
      );
    }
  }
  function handleCertificateAdd() {
    if (
      Cname !== "" &&
      organize !== "" &&
      startDate !== null &&
      link !== "" &&
      endDate !== null
    ) {
      const newCert = {
        certificateId: Cid,
        certificateName: Cname,
        description: detail,
        organizationName: organize,
        dateEarned: startDate.toJSON(),
        expirationDate: endDate !== null ? endDate.toJSON() : endDate,
        link: link,
        cvid: cvid,
        isDeleted: false,
      };

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

  function handleCertDelete(id) {
    setCerts(certs.filter((component) => component.certificateId !== id));
    let delcert = baseCerts.filter((prop) => prop.certificateId === id);
    if (delcert[0]) {
      setDelCerts([...delCerts, delcert[0]]);
    } else {
      setAddCerts(
        addCerts.filter((component) => component.certificateId !== id)
      );
    }
  }

  function handleLanguageAdd() {
    let arr = languageData.filter(
      (comp) =>
        comp.languageName ===
        (lInputValue !== null ? lInputValue.languageName : "")
    );
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

  const handleSetSkillOpen = () => {
    setSkillOpen(true);
  };
  const handleSkillClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSkillOpen(false);
  };
  console.log(
    "UPLOAD CV ( đã upload lên được và trả về link nhưng link bên back end không hoạt động được)"
  );
  async function handleSubmit(e) {
    // e.preventDefault();
    let token = userlocal.token;
    let handleToken = `Bearer ${userlocal.token}`;
    const config = {
      headers: { Authorization: handleToken },
    };
    try {
      dispatch({
        type: "updateCvsaga/getUpdateCv",
        payload: {
          token: token,
          Cvid: cvid,
          candidateId: profileid,
          CvName: cvtitle,
          Introduction: intro,
          Education: education,
          Experience: experience,
          Skills: skills,
          delSkills: delSkills,
          addSkills: addSkills,
          Certificates: certs,
          delCerts: delCerts,
          addCerts: addCerts,
        },
      });

      if (typeof pdf !== "string") {
        const formData = new FormData();

        formData.append("File", pdf);
        if (pdf !== null) {
          const response3 = await axios.post(
            `https://leetun2k2-001-site1.gtempurl.com/api/Cv/UploadCvPdf/${cvid}`,
            formData,
            config
          );
        }
      }
      delay(1000);
      dispatch({
        type: "error/setError",
        payload: { status: "no", message: cvid },
      });
    } catch (err) {
      dispatch({
        type: "error/setError",
        payload: { status: "yes", message: err.response.data.error },
      });
      // console.log("err: ", err);
    }
  }
  function preProcessing() {
    const messArr = [];
    if (skills.length === 0) {
      messArr.push("skill");
    }
    if (cvtitle == "") {
      messArr.push("title");
    }
    if (education == "") {
      messArr.push("education");
    }
    if (experience == "") {
      messArr.push("work experience");
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
        payload: { status: "yes", message: `please fill ${messString}` },
      });
    } else {
      setOpenAlert(true);
    }
  }
  //COMPS
  return (
    <>
      {cv === null ? (
        <CvSkeleton></CvSkeleton>
      ) : (
        <Box>
          <Grid
            container
            spacing={0}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <CreateCv
                //////////Skill////////
                preProcessing={preProcessing}
                handleSExp={handleSExp}
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
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <CertAlert
              onClose={handleClose}
              severity="error"
              sx={{ width: "100%" }}
            >
              Lack of certificate's information
            </CertAlert>
          </Snackbar>
          <Snackbar
            // anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            open={errorSnackbar}
            autoHideDuration={4000}
            onClose={() => {
              setErrorSnackbar(false);
            }}
            // message="I love snacks"
            // key={vertical + horizontal}
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
            alertMessage={"Are you sure you want to update?"}
            successfulMessage={"Update successfully"}
            handleSubmit={handleSubmit}
          />
        </Box>
      )}
    </>
  );
}
export default CVForm;
