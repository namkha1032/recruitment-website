import ChooseList from "./ChooseSkill";
import RequireUlList from "./RequireUlList";
import { Box } from "@mui/material";

function Require(prop) {
  return (
    <>
      <Box sx={{ width: "100%", margin: "auto" }}>
        <RequireUlList
          comps={prop.requirement}
          handleDelete={prop.handleRequirementDelete}
        />
        <ChooseList
          skill={prop.skill}
          inputValue={prop.inputValue}
          setInputValue={prop.setInputValue}
          experience={prop.experience}
          setExperience={prop.setExperience}
          note={prop.note}
          setNote={prop.setNote}
          state={"Skill"}
          handleState={prop.setSkillName}
          value={prop.skillName}
          setSkillId={prop.setSkillId}
          onPress={prop.handleRequirementAdd}
        />
      </Box>
    </>
  );
}
export default Require;
