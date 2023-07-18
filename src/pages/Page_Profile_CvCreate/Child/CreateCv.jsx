import * as React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CvStep1 from "./cvStep1";
import CvStep2 from "./cvStep2";
import CvStep3 from "./cvStep3";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import { styled } from "@mui/material/styles";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import PersonIcon from "@mui/icons-material/Person";
import Check from "@mui/icons-material/Check";
import PropTypes from "prop-types";
import HandymanIcon from "@mui/icons-material/Handyman";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
//////////////////////////////////////////////////////
const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color:
    // theme.palette.mode === "dark" ? theme.palette.grey[700] :
    "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: "#784af4",
  }),
  "& .QontoStepIcon-completedIcon": {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
  "& .QontoStepIcon-circle": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));
const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient( 110deg,rgb(25, 118, 210 ) 0%,rgb(25, 118, 249) 50%,rgb(133, 193, 233) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient( 120deg,rgb(25, 118, 210 ) 0%,rgb(25, 118, 249) 50%,rgb(133, 193, 233) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
}));
function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}
function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <PersonIcon />,
    2: <HandymanIcon />,
    3: <WorkspacePremiumIcon />,
  };

  return (
    <ColorlibStepIconRoot
      sx={{ cursor: "pointer" }}
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 120deg,rgb(36, 113, 163 ) 0%,rgb(40, 116, 166) 50%,rgb(133, 193, 233) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 120deg,rgb(36, 113, 163 ) 0%,rgb(40, 116, 166) 50%,rgb(133, 193, 233) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      // theme.palette.mode === "dark" ? theme.palette.grey[800] :
      "#eaeaf0",
    borderRadius: 1,
  },
}));

///////////////////////////////////////////////////////
const CreateCv = (prop) => {
  const steps = ["Introduction", "Yout Experience", "Yout Certificate"];
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    const newActiveStep = activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleStep = (step) => () => {
    setActiveStep(step);
  };
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
            <Grid item xs={12}>
              <Stepper
                alternativeLabel
                activeStep={activeStep}
                connector={<ColorlibConnector />}
              >
                {steps.map((label, index) => (
                  <Step key={label}>
                    <StepLabel
                      StepIconComponent={ColorlibStepIcon}
                      onClick={handleStep(index)}
                    >
                      {label}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Grid>
            <Grid item xs={12}>
              <div>
                <React.Fragment>
                  {activeStep === 0 ? (
                    <Grid item xs={12}>
                      <CvStep1
                        handleTitle={prop.handleTitle}
                        cvtitle={prop.cvtitle}
                        handleIntro={prop.handleIntro}
                        intro={prop.intro}
                        handleEdu={prop.handleEdu}
                        education={prop.education}
                      />
                    </Grid>
                  ) : activeStep === 1 ? (
                    <Grid item xs={12}>
                      <CvStep2
                        skills={prop.skills}
                        handleSkilltDelete={prop.handleSkilltDelete}
                        SExp={prop.SExp}
                        setSExp={prop.setSExp}
                        setName={prop.setName}
                        name={prop.name}
                        handleSkillAdd={prop.handleSkillAdd}
                        languages={prop.languages}
                        handleLanguageDelete={prop.handleLanguageDelete}
                        linputValue={prop.lInputValue}
                        setLInputValue={prop.setLInputValue}
                        setLanguageName={prop.setLanguageName}
                        languageName={prop.languageName}
                        setLanguageId={prop.setLanguageId}
                        handleLanguageAdd={prop.handleLanguageAdd}
                      />
                    </Grid>
                  ) : (
                    <Grid item xs={12}>
                      <CvStep3
                        cvalue={prop.cvalue}
                        setCValue={prop.setCValue}
                        open={prop.open}
                        setOpen={prop.setOpen}
                        certs={prop.certs}
                        handleCertDelete={prop.handleCertDelete}
                        setCName={prop.setCName}
                        setOrganize={prop.setOrganize}
                        setStartDate={prop.setStartDate}
                        setEndDate={prop.setEndDate}
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
                    </Grid>
                  )}

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      pt: 2,
                      width: "80%",
                      margin: "auto",
                    }}
                  >
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      variant="contained"
                      className="AddButton"
                      sx={{ mr: 1 }}
                    >
                      Back
                    </Button>
                    <Box sx={{ flex: "1 1 auto" }} />
                    {activeStep === 2 ? (
                      <Button
                        variant="contained"
                        className="AddButton"
                        onClick={prop.handleSubmit}
                      >
                        Finish
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        className="AddButton"
                        onClick={handleNext}
                        sx={{ mr: 1 }}
                      >
                        Next
                      </Button>
                    )}
                  </Box>
                </React.Fragment>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </form>
  );
};

export default CreateCv;
