import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
const InputText = (prop) => {
  return (
    <>
      <Box
        sx={{
          "& > :not(style)": {
            m: 1,
            width: prop.width,
            margin: prop.margin,
            marginTop: "8px",
            marginLeft:prop.marginLeft,
          },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          id="outlined-basic"
          value={prop.value}
          label={prop.state}
          variant="outlined"
          onChange={prop.handleState}
        />
      </Box>
    </>
  );
};
export default InputText;
