import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import Grid from "@mui/material/Grid";
import CompHeader from "./compHeader";
import TranslateIcon from "@mui/icons-material/Translate";
import Box from "@mui/material/Box";

const filter = createFilterOptions();
export default function ChooseLanguage(prop) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };
  const handleChange = (event) => {
    prop.setInputValue(event.target.value);
  };
  return (
    <>
      <Grid container spacing={0} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Box sx={{ marginTop: "8px" }}>
            <CompHeader headerIcon={<TranslateIcon />}>Language</CompHeader>
            <Autocomplete
              onKeyDown={handleKeyDown}
              value={prop.lvalue}
              onChange={(event, newValue) => {
                if (typeof newValue === "string") {
                  return () =>
                    prop.setValue({
                      languageName: newValue,
                    });
                } else if (newValue && newValue.inputValue) {
                  prop.setInputValue({
                    languageName: newValue.inputValue,
                  });
                  if (newValue !== null) {
                    prop.handleState(newValue);
                    prop.onPress();
                  }
                } else {
                  prop.setInputValue(newValue);
                  if (newValue !== null) {
                    prop.setLanguages(
                      prop.language.filter(
                        (comp) => comp.languageName === newValue.languageName
                      )[0].languageId
                    );
                    prop.handleState(newValue.languageName);
                  } else {
                    prop.setLanguages(null);
                  }
                }
              }}
              filterOptions={(options, params) => {
                const filtered = filter(options, params);
                const { inputValue } = params;
                const isExisting = options.some(
                  (option) => inputValue === option.languageName
                );
                if (inputValue.trim() !== "" && !isExisting) {
                  filtered.push({
                    inputValue,
                    languageName: `${inputValue}`,
                  });
                }
                return filtered;
              }}
              selectOnFocus
              clearOnBlur
              handleHomeEndKeys
              id="free-solo-with-text-demo"
              options={prop.language}
              getOptionLabel={(option) => {
                if (typeof option === "string") {
                  return option;
                }
                if (option.inputValue) {
                  return option.inputValue;
                }
                return option.languageName;
              }}
              renderOption={(props, option) => (
                <li {...props}>{option.languageName}</li>
              )}
              sx={{
                "& > :not(style)": {
                  m: 1,
                  display: "flex",
                  margin: "0",
                  padding: "0",
                  marginTop: "8px",
                  marginRight: "1%",
                  marginBottom: "16px",
                },
              }}
              freeSolo
              renderInput={(params) => (
                <TextField
                  {...params}
                  id={prop.state}
                  onChange={(e) => handleChange(e)}
                />
              )}
            />
          </Box>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </>
  );
}
