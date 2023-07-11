import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import Grid from "@mui/material/Grid";
import EmptyTextarea from "./AutoText";
import DateComp from "./CertDate";
import CertButton from "./CertButton";
import InputText from "../InputText";

const filter = createFilterOptions();
export default function CertificateForm(prop) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const inputValue = event.target.value;
      console.log(prop.cvalue);
      console.log(inputValue);
      if (prop.cvalue === null) {
        if (inputValue.trim() !== "") {
          prop.setCValue(null);
          prop.handleState(inputValue);
        }
      } else {
        prop.setCValue(null);
        return prop.onPress();
      }
    }
  };
  function handleLink(e) {
    console.log(e.target.value);
    prop.setLink(e.target.value);
  }
  return (
    <>
      <Grid container spacing={0} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <div className="AutocompBox">
            <Autocomplete
              value={prop.cvalue}
              onChange={(event, newValue) => {
                if (typeof newValue === "string") {
                  prop.setCValue({
                    name: newValue,
                  });
                } else if (newValue && newValue.inputValue) {
                  prop.setCValue({
                    name: newValue.inputValue,
                  });
                  if (newValue !== null) {
                    console.log(newValue.name);
                    prop.handleState(newValue.name);
                  }
                } else {
                  prop.setCValue(newValue);
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
              options={top100Films}
              getOptionLabel={(option) => {
                if (typeof option === "string") {
                  return option;
                }
                if (option.inputValue) {
                  return option.inputValue;
                }
                return option.name;
              }}
              renderOption={(props, option) => (
                <li {...props}>{option.name}</li>
              )}
              sx={{
                "& > :not(style)": {
                  m: 1,
                  display: "flex",
                  margin: "0",
                  marginBottom: "8px",
                  padding: "0",
                },
              }}
              freeSolo
              renderInput={(params) => (
                <TextField {...params} label={prop.state} id={prop.state} />
              )}
            />
          </div>
        </Grid>
        <DateComp
          error={prop.error}
          setError={prop.setError}
          startday={prop.startDate}
          endday={prop.endDate}
          setStart={prop.setStart}
          setEnd={prop.setEnd}
          setOrganize={prop.setOrganize}
          organize={prop.organize}
        />
        <Grid item xs={12}>
          <InputText
            state={"Link"}
            width="100%"
            margin="0"
            handleState={handleLink}
            value={prop.link}
            setLink={prop.setLink}
            onPress={prop.onPress}
          />
        </Grid>
        <Grid item xs={12}>
          <EmptyTextarea
            value={prop.detail}
            setDetail={prop.setDetail}
            linkError={prop.linkError}
            setLinkError={prop.setLinkError}
          />
        </Grid>
        <Grid item xs={2}>
          <CertButton
            open={prop.open}
            setOpen={prop.setOpen}
            error={prop.error}
            setError={prop.setError}
            linkError={prop.linkError}
            setLinkError={prop.setLinkError}
            onPress={prop.onPress}
            setStart={prop.setStart}
            setEnd={prop.setEnd}
            setValue={prop.setCValue}
            setOrganize={prop.setOrganize}
            setDetail={prop.setDetail}
            handleSetOpen={prop.handleSetOpen}
            handleClose={prop.handleClose}
          />
        </Grid>
      </Grid>
    </>
  );
}
const top100Films = [
  { name: "css" },
  { name: "html" },
  { name: "python" },
  { name: "javaScript" },
];
