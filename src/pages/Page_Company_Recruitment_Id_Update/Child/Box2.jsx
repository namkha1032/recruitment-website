import { Box, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import InputText from "./InputText";
import Department from "./Department";
import SelectDate from "./SelectDate";
import { forwardRef } from "react";
import { NumericFormat } from "react-number-format";
import CompHeader from "./compHeader";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const NumericFormatCustom = forwardRef(function NumericFormatCustom(
  props,
  ref
) {
  const { onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      valueIsNumericString
      prefix="$"
    />
  );
});

function Box2(prop) {
  return (
    <>
      <Box
      // sx={{ height: "343.88px" }}
      >
        <Grid item container xs={12} sx={{ marginTop: "16px" }}>
          <Grid item xs={8}>
            <Box
              sx={{
                "& > :not(style)": {
                  m: 1,
                  width: "98%",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <CompHeader headerIcon={<AttachMoneyIcon />}>Salary</CompHeader>
              <TextField
                required
                value={prop.salary}
                onChange={prop.handleSalary}
                name="numberformat"
                id="formatted-numberformat-input"
                variant="outlined"
                InputProps={{
                  inputComponent: NumericFormatCustom,
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <InputText
              headerIcon={<PersonAddIcon/>}
              state={"Hire number"}
              handleState={prop.handleMaxHire}
              width="94%"
              type="number"
              value={prop.maxHire}
            />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Department
            handleChange={prop.handleChange}
            departmentName={prop.departmentName}
            express={prop.express}
            department={prop.department}
            departmentId={prop.departmentId}
            departmentAddress={prop.departmentAddress}
            departmentEmail={prop.departmentEmail}
            departmentPhone={prop.departmentPhone}
            departmentWeb={prop.departmentWeb}
          />
        </Grid>

        <Grid item xs={12} sx={{ marginBottom: "16px" }}>
          <Grid container spacing={0}>
            <SelectDate
              handleEnd={prop.handleEnd}
              handleStart={prop.handleStart}
              startDate={prop.startDate}
              endDate={prop.endDate}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
export default Box2;
