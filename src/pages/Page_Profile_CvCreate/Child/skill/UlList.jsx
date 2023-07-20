import Chip from "@mui/material/Chip";

const UlList = (prop) => {
  return (
    <>
      {prop.comps.map((comp) => (
        <Chip
          key={comp.id}
          label={comp.name}
          sx={{
            m: 0.5,
          }}
          variant="outlined"
          onDelete={() => {
            prop.handleDelete(comp.id);
          }}
        />
      ))}
    </>
  );
};
export default UlList;
