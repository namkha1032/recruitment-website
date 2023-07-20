import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { language } from "./RecruitData";
import AddIcon from "@mui/icons-material/Add";

const filter = createFilterOptions();
export default function ChooseLanguage(prop) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const inputValue = event.target.value;
      console.log(prop.value);
      console.log(inputValue);
      if (prop.value === null) {
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
            value={prop.inputValue}
            onChange={(event, newValue) => {
              if (typeof newValue === "string") {
                return ()=>prop.setValue({
                  name: newValue,
                });
              } else if (newValue && newValue.inputValue) {
                
                prop.setInputValue({
                  name: newValue.inputValue,
                });
                console.log(newValue.name)
                if (newValue !== null) {
                  console.log(newValue);
                  prop.handleState(newValue);
                }
              } else {
                prop.setInputValue(newValue);
                if (newValue !== null) {
                  console.log(newValue);
                  prop.setSkillId(language.filter((comp) => comp.name === newValue.name)[0].id);
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
            options={language}
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
                marginRight: "1%",
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
        <Grid item xs={12}></Grid>
      </Grid>
    </>
  );
}
