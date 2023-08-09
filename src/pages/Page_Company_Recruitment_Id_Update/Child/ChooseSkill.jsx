import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import NotRInputText from "./NotRequiredText";
import EmptyTextarea from "./AutoText";
import AddIcon from "@mui/icons-material/Add";
import CompHeader from "./compHeader";
import ConstructionIcon from "@mui/icons-material/Construction";
import Box from "@mui/material/Box";
import TimerIcon from "@mui/icons-material/Timer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const filter = createFilterOptions();
export default function ChooseList(prop) {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  function handleRExp(event) {
    let midleScore = parseFloat(event.target.value) >= 0? parseFloat(event.target.value) : 0
    prop.setExperience(midleScore);
  }
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const inputValue = event.target.value;
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
      <Grid container spacing={1} justifyContent="center" alignItems="center">
        <Grid item xs={isMd?9:(isSm?6:12)}>
          <Box sx={{marginTop: "8px" }}>
            <CompHeader headerIcon={<ConstructionIcon />}>Skill</CompHeader>
            <Autocomplete
              value={prop.inputValue}
              onChange={(event, newValue) => {
                if (typeof newValue === "string") {
                  return () =>
                    prop.setValue({
                      skillName: newValue,
                    });
                } else if (newValue && newValue.inputValue) {
                  prop.setInputValue({
                    skillName: newValue.inputValue,
                  });
                  if (newValue !== null) {
                    prop.handleState(newValue);
                  }
                } else {
                  prop.setInputValue(newValue);
                  if (newValue !== null) {
                    prop.setSkillId(
                      prop.skill.filter(
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
              options={prop.skill}
              getOptionLabel={(option) => {
                if (typeof option === "string") {
                  return option;
                }
                if (option.inputValue) {
                  return option.inputValue;
                }
                return option.skillName;
              }}
              renderOption={(props, option) => (
                <li {...props}>{option.skillName}</li>
              )}
              sx={{
                "& > :not(style)": {
                  m: 1,
                  display: "flex",
                  margin: "0",
                  marginTop: "8px",
                  padding: "0",
                  marginRight:isMd? "1%":0,
                },
              }}
              freeSolo
              renderInput={(params) => (
                <TextField {...params} id={prop.state} />
              )}
            />
          </Box>
        </Grid>

        <Grid item xs={isMd?3:(isSm?6:12)}>
          <NotRInputText
            headerIcon={<TimerIcon />}
            state={"Experience(Year)"}
            width="100%"
            type="number"
            value={prop.experience}
            margin="0"
            handleState={handleRExp}
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
