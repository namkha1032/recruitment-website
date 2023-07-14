import InputText from "./InputText";
import Button from "@mui/material/Button";
import FreeSoloCreateOptionDialog from "./ChooseList";
import Certificate from "./Certificate/Certificate";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

const CreateCv = (prop)=>{
    return (
        <form onSubmit={prop.handleSubmit}>
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
                    state={"Introduction"}
                    handleState={prop.handleIntro}
                    width="98%"
                    value={prop.intro}
                  />
                  <Divider variant="middle" />
                </Grid>
                <Grid item xs={10}>
                  <InputText
                    state={"Education"}
                    handleState={prop.handleEdu}
                    width="98%"
                    value={prop.education}
                  />
                  <Divider variant="middle" />
                </Grid>
    
                <Grid item xs={12}>
                  <div className="parentFlex">
                    <div className="leftFlex">
                      <FreeSoloCreateOptionDialog
                        skills={prop.skills}
                        handleSkilltDelete={prop.handleSkilltDelete}
                        SExp={prop.SExp}
                        setSExp={prop.setSExp}
                        state={"Skill"}
                        handleState={prop.setName}
                        value={prop.name}
                        onPress={prop.handleSkillAdd}
                      />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className="parentFlex">
                    <div className="leftFlex">
                      <Certificate
                        cvalue={prop.cvalue}
                        setCValue={prop.setCValue}
                        open={prop.open}
                        setOpen={prop.setOpen}
                        certs={prop.certs}
                        handleCertDelete={prop.handleCertDelete}
                        setCName={prop.setCName}
                        setOrganize={prop.setOrganize}
                        setStart={prop.setStartDate}
                        setEnd={prop.setEndDate}
                        handleCertificateAdd={prop.handleCertificateAdd}
                        Cname={prop.Cname}
                        startDate={prop.startDate}
                        endDate={prop.endDate}
                        organize={prop.organize}
                        detail={prop.detail}
                        setDetail={prop.setDetail}
                        link={prop.link}
                        setLink={prop.setLink}
                        handleSetOpen={prop.handleSetOpen}
                        handleClose={prop.handleClose}
                      />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={10}>
                  <InputText
                    state={"Experience"}
                    handleState={prop.handleExp}
                    width="98%"
                    value={prop.experience}
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
export default CreateCv