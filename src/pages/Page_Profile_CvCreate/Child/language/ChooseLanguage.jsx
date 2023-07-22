import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
// import Fab from "@mui/material/Fab";

const filter = createFilterOptions();
export default function ChooseLanguage(prop) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const inputValue = event.target.value;
      console.log(prop.lInputValue);
      console.log(inputValue);
      if (prop.lInputValue === null) {
        if (inputValue.trim() !== "") {
          prop.setInputValue(null);
          prop.handleState(inputValue);
        }
      } else {
        prop.setInputValue(null);
        return prop.onPress();
      }
    }
  };
  return (
    <>
      <Grid container spacing={0} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Autocomplete
            value={prop.lInputValue}
            onChange={(event, newValue) => {
              if (typeof newValue === "string") {
                return () =>
                  prop.setValue({
                    name: newValue,
                  });
              } else if (newValue && newValue.inputValue) {
                prop.setInputValue({
                  name: newValue.inputValue,
                });
                console.log(newValue.name);
                if (newValue !== null) {
                  console.log(newValue);
                  prop.handleState(newValue);
                }
              } else {
                prop.setInputValue(newValue);
                if (newValue !== null) {
                  console.log(newValue);
                  prop.setSkillId(
                    prop.languageData.filter(
                      (comp) => comp.name === newValue.name
                    )[0].id
                  );
                  prop.handleState(newValue.name);
                }
              }
            }}
            onKeyDown={handleKeyDown}
            filterOptions={(options, params) => {
              const filtered = filter(options, params);
              const { inputValue } = params;
              const isExisting = options.some(
                (option) => inputValue === option.name
              );
              if (inputValue.trim() !== "" && !isExisting) {
                filtered.push({
                  inputValue,
                  name: `${inputValue}`,
                });
              }
              return filtered;
            }}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            id="free-solo-with-text-demo"
            options={prop.languageData}
            getOptionLabel={(option) => {
              if (typeof option === "string") {
                return option;
              }
              if (option.inputValue) {
                return option.inputValue;
              }
              return option.name;
            }}
            renderOption={(props, option) => <li {...props}>{option.name}</li>}
            sx={{
              "& > :not(style)": {
                m: 1,
                display: "flex",
                margin: "0",
                padding: "0",
                marginLeft: "1%",
                width: "98%",
              },
            }}
            freeSolo
            renderInput={(params) => (
              <TextField {...params} label={prop.state} id={prop.state} />
            )}
          />
        </Grid>
        <Button
          sx={{
            margin: "auto",
          }}
          color="primary"
          size="medium"
          variant="outlined"
          className="AddCompButton"
          startIcon={<AddIcon />}
          onClick={() => {
            prop.onPress();
          }}
        >
          Add
        </Button>
          {/* <Fab
            variant="extended"
            className="AddCompButton"
            sx={{
              backgroundColor: "White",
              border: 0.1,
              borderColor: "primary.main",
              color: "primary.main",
            }}
            onClick={() => {
              prop.onPress();
            }}
          >
            <AddIcon sx={{ mr: 1 }} />
            Add
          </Fab> */}
        <Grid item xs={12}></Grid>
      </Grid>
    </>
  );
}
