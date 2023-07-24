import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Box, Stack } from "@mui/material";

export function NoRowsOverlay() {
  return (
    <Stack
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        color: "#E0E0E0",
        fontSize: 16
      }}
    >
      <CloseRoundedIcon sx={{
        fontSize: 50
      }}/>
      No rows
    </Stack>
  );
}

export function NoResultsOverlay() {
    return (
      <Stack
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          color: "#E0E0E0",
          fontSize: 16
        }}
      >
        <CloseRoundedIcon sx={{
          fontSize: 50
        }}/>
        No results
      </Stack>
    );
  }
