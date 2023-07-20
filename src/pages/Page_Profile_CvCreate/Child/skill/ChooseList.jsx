import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import InputText from "../InputText";
import UlList from "./UlList";
import AddIcon from '@mui/icons-material/Add';
import NotRInputText from "../NotRequiredText";

const filter = createFilterOptions();

export default function FreeSoloCreateOption(prop) {
  const [value, setValue] = React.useState(null);
  function handleSExp(e) {
    console.log(e.target.value);
    prop.setSExp(e.target.value);
  }
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const inputValue = event.target.value;
      console.log(value);
      console.log(inputValue);
      if (value === null) {
        if (inputValue.trim() !== "") {
          setValue(null);
          prop.handleState(inputValue);
        }
      } else {
        setValue(null);
        return prop.onPress();
      }
    }
  };
  return (
    <>
      <Grid container spacing={0} justifyContent="center" alignItems="center">
        <UlList comps={prop.skills} handleDelete={prop.handleSkilltDelete} />
        <Grid item xs={12}></Grid>
        <Grid item xs={9}>
          <Autocomplete
            value={value}
            onChange={(event, newValue) => {
              if (typeof newValue === "string") {
                setValue({
                  name: newValue,
                });
              } else if (newValue && newValue.inputValue) {
                setValue({
                  name: newValue.inputValue,
                });
                if (newValue !== null) {
                  console.log(newValue.name);
                  prop.handleState(newValue.name);
                }
              } else {
                setValue(newValue);
                if (newValue !== null) {
                  console.log(newValue.name);
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
            options={prop.skillData}
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
                marginTop: "8px",
                padding: "0",
                marginLeft: "1%",
              },
            }}
            freeSolo
            renderInput={(params) => (
              <TextField {...params} label={prop.state} id={prop.state} />
            )}
          />
        </Grid>

        <Grid item xs={3}>
          <NotRInputText
            type="number"
            state={"Experiece(Year)"}
            width="90%"
            value={prop.SExp}
            margin="0"
            marginLeft="6%"
            handleState={handleSExp}
          />
        </Grid>

        <Grid item xs={12}></Grid>
        <Button
          sx={{
            margin: "auto",
          }}
          color="primary"
          size="medium"
          variant="outlined"
          className="AddCompButton"
          startIcon={<AddIcon/>}
          onClick={() => {
            prop.onPress();
            setValue(null);
          }}
        >
          Add
        </Button>
        <Grid item xs={12}></Grid>
      </Grid>
    </>
  );
}