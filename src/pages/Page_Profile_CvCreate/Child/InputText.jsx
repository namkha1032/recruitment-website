import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import EnterButton from "./Certificate/EnterButton";

const InputText = (prop) => {
  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": {
            m: 1,
            width: prop.width,
            margin: prop.margin,
            marginTop: "8px",
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
          // onKeyDown={(event) =>
          //   EnterButton(
          //     event,
          //     prop.setLink,
          //     prop.onPress,
          //     prop.linkError,
          //     prop.setLinkError,
              
          //   )
          // }
        />
      </Box>
    </>
  );
};
export default InputText;
