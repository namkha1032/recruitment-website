import Grid from "@mui/material/Grid";
// import FreeSoloCreateOptionDialog from "./skill/ChooseList";
import Box from "@mui/material/Box";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ChooseSkill from "./skill/ChooseSkill";

function CvStep2(prop) {
  console.log(prop.skills)
  return (
    <>
      <Box sx={{ width: "80%", margin: "auto", marginTop: "50px" }}>
        <Grid container spacing={0} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            
            <ChooseSkill
              sInputValue={prop.sInputValue}
              setSInputValue={prop.setSInputValue}
              skillData={prop.skillData}
              skills={prop.skills}
              handleSkilltDelete={prop.handleSkilltDelete}
              SExp={prop.SExp}
              setSExp={prop.setSExp}
              state={"Skill"}
              handleState={prop.setName}
              value={prop.name}
              onPress={prop.handleSkillAdd}
              setSkillId={prop.setSkillId}
            />
          </Grid>

          <Grid item xs={12}>
            {/* <EmptyTextarea
              state={"Experience"}
              setDetail={prop.setExperience}
              width="98%"
              marginLeft="1%"
              value={prop.experience}
            /> */}
            <ReactQuill
              theme="snow"
              style={{ width: "98%", margin: "auto", height: "200px" }}
              value={prop.experience}
              onChange={prop.setExperience}
              className="QuillCss"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default CvStep2;
