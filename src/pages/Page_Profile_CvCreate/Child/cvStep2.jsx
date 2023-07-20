import Grid from "@mui/material/Grid";
import LanguageUlList from "./language/LanguageUlList";
import ChooseLanguage from "./language/ChooseLanguage";
import FreeSoloCreateOptionDialog from "./skill/ChooseList";
import Box from "@mui/material/Box";
import EmptyTextarea from "./AutoText";

function CvStep1(prop) {
  return (
    <>
      <Box sx={{ width: "80%", margin: "auto", marginTop: "50px" }}>
        <Grid container spacing={0} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <FreeSoloCreateOptionDialog
              skillData={prop.skillData}
              skills={prop.skills}
              handleSkilltDelete={prop.handleSkilltDelete}
              SExp={prop.SExp}
              setSExp={prop.setSExp}
              state={"Skill"}
              handleState={prop.setName}
              value={prop.name}
              onPress={prop.handleSkillAdd}
            />
          </Grid>
          <Grid item xs={12}>
            <LanguageUlList
              comps={prop.languages}
              handleDelete={prop.handleLanguageDelete}
            />
            <ChooseLanguage
              languageData={prop.languageData}
              lInputValue={prop.lInputValue}
              setInputValue={prop.setLInputValue}
              state={"language"}
              handleState={prop.setLanguageName}
              value={prop.languageName}
              setSkillId={prop.setLanguageId}
              onPress={prop.handleLanguageAdd}
            />
          </Grid>
          <Grid item xs={12}>
            <EmptyTextarea
              state={"Experience"}
              setDetail={prop.setExperience}
              width="98%"
              marginLeft="1%"
              value={prop.experience}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default CvStep1;
