import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Require from "./Require";
import ChooseLanguage from "./ChooseLanguage";

function Box3(prop) {
  return (
    <>
      <Box>
        <Grid item xs={12}>
          <Require
            skill={prop.skill}
            requirement={prop.requirement}
            handleRequirementDelete={prop.handleRequirementDelete}
            inputValue={prop.inputValue}
            setInputValue={prop.setInputValue}
            experience={prop.experience}
            setExperience={prop.setExperience}
            note={prop.note}
            setNote={prop.setNote}
            setSkillName={prop.setSkillName}
            skillName={prop.skillName}
            setSkillId={prop.setSkillId}
            handleRequirementAdd={prop.handleRequirementAdd}
          />
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ margin: "auto", width: "100%", marginTop: "8px" }}>
            <ChooseLanguage
              setLanguages={prop.setLanguages}
              lvalue={prop.lvalue}
              language={prop.language}
              inputValue={prop.lInputValue}
              setInputValue={prop.setLInputValue}
              state={"language"}
              handleState={prop.setLanguageName}
              value={prop.languageName}
              setSkillId={prop.setLanguageId}
              onPress={prop.handleLanguageAdd}
            />
          </Box>
        </Grid>
      </Box>
    </>
  );
}
export default Box3;
