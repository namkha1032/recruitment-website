import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import UlList from "./UlList";
import NotRInputText from "../NotRequiredText";
import Box from "@mui/material/Box";
import ConstructionIcon from "@mui/icons-material/Construction";
import CompHeader from "../compHeader";
import TimerIcon from "@mui/icons-material/Timer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const filter = createFilterOptions();
export default function ChooseSkill(prop) {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };
  return (
    <>
      <Grid container spacing={0} justifyContent="center" alignItems="center">
        <UlList
          comps={prop.skills}
          skillData={prop.skillData}
          handleDelete={prop.handleSkilltDelete}
        />
        <Grid item xs={12}></Grid>
        <Grid item xs={isMd ? 9 : 12}>
          <Box sx={{ marginTop: "8px" }}>
            <CompHeader headerIcon={<ConstructionIcon />}>Skill</CompHeader>

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
                  if (newValue !== null) {
                    prop.handleState(newValue);
                  }
                } else {
                  prop.setSInputValue(newValue);
                  if (newValue !== null) {
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
              options={prop.skillOption}
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
                },
              }}
              freeSolo
              renderInput={(params) => (
                <TextField {...params} id={prop.state} />
              )}
            />
          </Box>
        </Grid>
        <Grid item xs={isMd ? 3 : 12}>
          <NotRInputText
            headerIcon={<TimerIcon />}
            type="number"
            state={"Experience(Year)"}
            width={isMd ? "94%" : "100%"}
            value={prop.SExp}
            margin="0"
            marginLeft={isMd ? "6%" : "auto"}
            handleState={prop.handleSExp}
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
