import { useState } from "react";
import InputText from "./InputText";
import cvinfo from "./CvData";
import { language } from "./CvData";
import Button from "@mui/material/Button";
import FreeSoloCreateOptionDialog from "./ChooseList";
import Certificate from "./Certificate/Certificate";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";
import ChooseLanguage from "./ChooseLanguage";
import LanguageUlList from "./LanguageUlList";

function CVForm() {
  const navigate = useNavigate();
  // CV COMPS
  const [cvtitle, setTitle] = useState(cvinfo.title);
  const [intro, setIntro] = useState(cvinfo.intro);
  const [education, setEducation] = useState(cvinfo.education);
  const [experience, setExperience] = useState(cvinfo.experience);
  const [certs, setCerts] = useState(cvinfo.certificates);
  const [skills, setSkills] = useState(cvinfo.skills);
  const [languages, setLanguages] = useState(cvinfo.language);
  // CERTIFICATE COMPS
  const [Cid, setCid] = useState(0);
  const [Cname, setCName] = useState("");
  const [organize, setOrganize] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [detail, setDetail] = useState("");
  const [link, setLink] = useState("");
  const [cvalue, setCValue] = useState(null);
  const [open, setOpen] = useState(false);
  //SKILL COMPS
  const [name, setName] = useState("");
  const [Sid, setSid] = useState(0);
  const [SExp, setSExp] = useState("");
  // Language comps
  const [lId, setLId] = useState(languages.length > 0 ? languages.length : 0);
  const [languageId, setLanguageId] = useState(null);
  const [languageName, setLanguageName] = useState("");
  const [lInputValue, setLInputValue] = useState("");
  //FUNCTION
  function handleTitle(e) {
    setTitle(e.target.value);
    console.log(e.target.value);
  }
  function handleIntro(e) {
    setIntro(e.target.value);
  }
  function handleEdu(e) {
    setEducation(e.target.value);
  }
  function handleExp(e) {
    setExperience(e.target.value);
  }
  function handleSkillAdd() {
    console.log(name);
    console.log(SExp);
    const newSkill = {
      id: Sid,
      name: name,
      skillExperienc: SExp,
    };
    if (name !== "") {
      setSkills([...skills, newSkill]);
      setName("");
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
    <form onSubmit={handleSubmit}>
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
                state={"Title"}
                handleState={handleTitle}
                width="98%"
                value={cvtitle}
              />
              <Divider variant="middle" />
            </Grid>
            <Grid item xs={10}>
              <InputText
                state={"Introduction"}
                handleState={handleIntro}
                width="98%"
                value={intro}
              />
              <Divider variant="middle" />
            </Grid>
            <Grid item xs={10}>
              <InputText
                state={"Education"}
                handleState={handleEdu}
                width="98%"
                value={education}
              />
              <Divider variant="middle" />
            </Grid>

            <Grid item xs={12}>
              <div className="parentFlex">
                <div className="leftFlex">
                  <FreeSoloCreateOptionDialog
                    skills={skills}
                    handleSkilltDelete={handleSkilltDelete}
                    SExp={SExp}
                    setSExp={setSExp}
                    state={"Skill"}
                    handleState={setName}
                    value={name}
                    onPress={handleSkillAdd}
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
            <Grid item xs={12}>
              <div className="parentFlex">
                <div className="leftFlex">
                  <Certificate
                    cvalue={cvalue}
                    setCValue={setCValue}
                    open={open}
                    setOpen={setOpen}
                    certs={certs}
                    handleCertDelete={handleCertDelete}
                    setCName={setCName}
                    setOrganize={setOrganize}
                    setStart={setStartDate}
                    setEnd={setEndDate}
                    handleCertificateAdd={handleCertificateAdd}
                    Cname={Cname}
                    startDate={startDate}
                    endDate={endDate}
                    organize={organize}
                    detail={detail}
                    setDetail={setDetail}
                    link={link}
                    setLink={setLink}
                    handleSetOpen={handleSetOpen}
                    handleClose={handleClose}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={10}>
              <InputText
                state={"Experience"}
                handleState={handleExp}
                width="98%"
                value={experience}
              />
            </Grid>
            <Grid item xs={12}></Grid>
            <Button
              variant="contained"
              className="AddButton"
              type="submit"
              // onClick={handleClick}
            >
              Submit
            </Button>
          </Grid>
        </div>
      </div>
    </form>
  );
}
export default CVForm;
