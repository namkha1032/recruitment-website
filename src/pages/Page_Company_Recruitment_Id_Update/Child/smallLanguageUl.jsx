import Chip from "@mui/material/Chip";

const SmallLanguageUlList = (comp) => {
  return(<Chip
          key={comp.comp.id}
          label={comp.comp.languageName}
          sx={{
            m: 0.5,
          }}
          variant="outlined"
          onDelete={() => {
            comp.handleDelete(comp.comp.id);
          }}
        />)
};
export default SmallLanguageUlList;
