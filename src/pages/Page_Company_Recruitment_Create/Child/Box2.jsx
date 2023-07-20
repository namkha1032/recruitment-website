import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import InputText from "./InputText";
import Department from "./Department";
import SelectDate from "./SelectDate";

function Box2(prop) {
  return (
    <>
      <Box>
        <Grid item xs={12}>
          <InputText
            state={"Salary"}
            handleState={prop.handleSalary}
            width="98%"
            value={prop.salary}
          />
        </Grid>
        <Grid item xs={12}>
          <Department
            handleChange={prop.handleChange}
            departmentName={prop.departmentName}
            express={prop.express}
            departmentId={prop.departmentId}
            departmentAddress={prop.departmentAddress}
            departmentEmail={prop.departmentEmail}
            departmentPhone={prop.departmentPhone}
            departmentWeb={prop.departmentWeb}
          />
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={0}>
            <Grid item xs={10}>
              <SelectDate
                handleEnd={prop.handleEnd}
                handleStart={prop.handleStart}
                startDate={prop.startDate}
                endDate={prop.endDate}
              />
            </Grid>
            <Grid item xs={2}>
              <InputText
                state={"Hire number"}
                handleState={prop.handleMaxHire}
                width="88%"
                type="number"
                value={prop.maxHire}
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
export default Box2;
