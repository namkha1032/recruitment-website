import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import UlList from "./UlList";
import NotRInputText from "../NotRequiredText";

const filter = createFilterOptions();
export default function ChooseSkill(prop) {
  function handleSExp(e) {
    console.log(e.target.value);
    prop.setSExp(e.target.value);
  }
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      // const inputValue = event.target.value;
      // console.log(prop.lInputValue);
      // console.log(inputValue);
      // if (prop.sInputValue === null) {
      //   if (inputValue.trim() !== "") {
      //     prop.setSInputValue(null);
      //     prop.handleState(inputValue);
      //   }
      // } else {
      //   prop.setSInputValue(null);
      //   return prop.onPress();
      // }
    }
  };
  return (
    <>
      <Grid container spacing={0} justifyContent="center" alignItems="center">
        <UlList comps={prop.skills} skillData={prop.skillData} handleDelete={prop.handleSkilltDelete} />
        <Grid item xs={12}></Grid>
        <Grid item xs={9}>
          <Autocomplete
            value={prop.sInputValue}
            onChange={(event, newValue) => {
              if (typeof newValue === "string") {
                return () =>
                  prop.setValue({
                    skillName: newValue,
                  });
              } else if (newValue && newValue.inputValue) {
                prop.setSInputValue({
                  skillName: newValue.inputValue,
                });
                console.log(newValue.skillName);
                if (newValue !== null) {
                  console.log(newValue);
                  prop.handleState(newValue);
                }
              } else {
                prop.setSInputValue(newValue);
                if (newValue !== null) {
                  console.log(newValue);
                  prop.setSkillId(
                    prop.skillData.filter(
                      (comp) => comp.skillName === newValue.skillName
                    )[0].skillId
                  );
                  prop.handleState(newValue.skillName);
                }
              }
            }}
            onKeyDown={handleKeyDown}
            filterOptions={(options, params) => {
              const filtered = filter(options, params);
              const { inputValue } = params;
              const isExisting = options.some(
                (option) => inputValue === option.skillName
              );
              if (inputValue.trim() !== "" && !isExisting) {
                filtered.push({
                  inputValue,
                  skillName: `${inputValue}`,
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
              return option.skillName;
            }}
            renderOption={(props, option) => <li {...props}>{option.skillName}</li>}
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
