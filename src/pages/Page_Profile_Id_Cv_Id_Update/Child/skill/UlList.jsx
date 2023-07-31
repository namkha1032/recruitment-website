import Chip from "@mui/material/Chip";

const UlList = (prop) => {
  return (
    <>
      {prop.comps.map((comp) => (
        <Chip
          key={comp.cvSkillsId}
          label={prop.skillData.filter((compp)=>compp.skillId===comp.skillId)[0].skillName +"(" +comp.experienceYear+")"}
          sx={{
            m: 0.5,
          }}
          variant="outlined"
          onDelete={() => {
            prop.handleDelete(comp.cvSkillsId);
          }}
        />
      ))}
    </>
  );
};
export default UlList;
