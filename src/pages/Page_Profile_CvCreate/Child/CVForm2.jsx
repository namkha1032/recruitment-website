import { useState } from "react";
import cvinfo from "./CvState";
import CreateCv from "./CreateCv";
import Grid from "@mui/material/Grid";
import ViewCv from "./ViewCv";
function CVForm() {
  // CV COMPS
  const [intro, setIntro] = useState(cvinfo.intro);
  const [education, setEducation] = useState(cvinfo.education);
  const [experience, setExperience] = useState(cvinfo.experience);
  const [certs, setCerts] = useState(cvinfo.certificates);
  const [skills, setSkills] = useState(cvinfo.skills);
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
  //FUNCTION
  function handleClick() {
    console.log(intro);
    console.log(education);
    console.log(experience);
    console.log(skills);
    console.log(certs);
  }
  function handleIntro(e) {
    setIntro(e.target.value);
    console.log(e.target.value);
  }
  function handleEdu(e) {
    setEducation(e.target.value);
    console.log(e.target.value);
  }
  function handleExp(e) {
    setExperience(e.target.value);
    console.log(e.target.value);
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
  }
  //COMPS
  return (
    <>
      <Grid container spacing={0} justifyContent="center" alignItems="center">
        <Grid item xs={6}>
          <CreateCv
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
            cvalue={cvalue}
            open={open}
            setOpen={setOpen}
            name={name}
            setName={setName}
            Sid={Sid}
            setSid={setSid}
            SExp={SExp}
            setSExp={setSExp}
            handleClick={handleClick}
            handleIntro={handleIntro}
            handleEdu={handleEdu}
            handleExp={handleExp}
            handleSkillAdd={handleSkillAdd}
            handleSkilltDelete={handleSkilltDelete}
            handleCertificateAdd={handleCertificateAdd}
            handleCertDelete={handleCertDelete}
            handleSetOpen={handleSetOpen}
            handleClose={handleClose}
            handleSubmit={handleSubmit}
          />
        </Grid>
        <Grid item xs={6}>
          <ViewCv
            intro={intro}
            education={education}
            experience={experience}
            certs={certs}
            skills={skills}
            Cid={Cid}
            Cname={Cname}
            organize={organize}
            startDate={startDate}
            endDate={endDate}
            detail={detail}
            link={link}
            cvalue={cvalue}
            open={open}
            name={name}
            Sid={Sid}
            SExp={SExp}
          />
        </Grid>
      </Grid>
    </>
  );
}
export default CVForm;
