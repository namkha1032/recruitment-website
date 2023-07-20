import * as React from "react";
import Grid from "@mui/material/Grid";
import EmptyTextarea from "../AutoText";
import DateComp from "./CertDate";
import CertButton from "./CertButton";
import NotRInputText from "../NotRequiredText";
import Box from "@mui/material/Box";

export default function CertificateForm(prop) {
  function handleLink(e) {
    console.log(e.target.value);
    prop.setLink(e.target.value);
  }
  function handleCert(e) {
    prop.handleState(e.target.value);
    console.log(e.target.value);
  }
  return (
    <>
      <Box sx={{ marginTop: "8px" }}>
        <Grid container spacing={0} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <Box className="AutocompBox">
              <NotRInputText
                state={"Certificate"}
                width="100%"
                margin="0"
                value={prop.value}
                handleState={handleCert}
              />
            </Box>
          </Grid>
          <DateComp
            startday={prop.startDate}
            endday={prop.endDate}
            setStart={prop.setStart}
            setEnd={prop.setEnd}
            setOrganize={prop.setOrganize}
            organize={prop.organize}
          />

          <Grid item xs={12}>
            <NotRInputText
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
              width="100%"
              state="Detail"
              value={prop.detail}
              setDetail={prop.setDetail}
            />
          </Grid>

          <CertButton
            open={prop.open}
            onPress={prop.onPress}
            handleClose={prop.handleClose}
          />
        </Grid>
      </Box>
    </>
  );
}
