import { Modal, Box, Grid, Button } from "@mui/material";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import { LoadingButton } from "@mui/lab";
import { useEffect } from "react";

export default function DeleteAlertModal(props) {
  useEffect(() => {
    if (props.status.status === "success")
      props.handleDeleteModalClose()
  }, [props.status])

  return (
    <Box>
      <Modal
        open={props.deleteModalStatus}
        onClose={() => {
          if (props.status.status !== "loading") {
            props.handleDeleteModalClose()
          }
        }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: {
            xs: 2,
            sm: 0,
            md: 0
          },
          marginRight: {
            xs: 2,
            sm: 0,
            md: 0
          }
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            width: {
              xs: "100%",
              sm: 400,
              md: 400,
            },
            borderRadius: 3,
          }}
        >
          <Grid container spacing={1} sx={{
              paddingLeft: 5,
              paddingRight: 5,
              paddingTop: 3,
              paddingBottom: 3,
            }}>
            <Grid
              item
              xs={12}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <WarningAmberRoundedIcon
                sx={{
                  fontSize: 100,
                //   color: "#cc3300",
                  color: "black",

                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                sx={{
                  fontSize: 30,
                  fontWeight: 600,
                  color: "black",
                }}
              >
                Delete Question
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                sx={{
                  fontSize: 14,
                  marginBottom: 3,
                  textAlign: "center"
                }}
              >
                Are you sure to delete the question with ID <span style={{fontSize: 12}}>{props.value.QuestionId}</span>?
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              {props.status.status !== "loading" && <Button
                variant="outlined"
                sx={{
                  color: "black",
                  border: "1px solid black",
                  textTransform: "none",
                  width: {
                    xs: "100%",
                    sm: 90,
                    md: 90
                  },
                  "&:hover": {
                    border: "1px solid black",
                    backgroundColor: "white",
                    fontWeight: 600,
                  }
                }}
                onClick={() => {
                  if (props.status.status !== "loading") {
                    props.handleDeleteModalClose()
                  }
                }}
              >
                Cancel
              </Button>}
              {props.status.status === "loading" && <Button
                variant="outlined"
                sx={{
                  color: "black",
                  border: "1px solid black",
                  textTransform: "none",
                  width: {
                    xs: "100%",
                    sm: 90,
                    md: 90
                  },
                }}
                disabled
              >
                Cancel
              </Button>}
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              {props.status.status !== "loading" && <Button
                variant="outline"
                sx={{
                  backgroundColor: "black",
                  border: "1px solid black",
                  color: "white",
                  textTransform: "none",
                  width: {
                    xs: "100%",
                    sm: 90,
                    md: 90
                  },
                  "&:hover": {
                    backgroundColor: "black",
                    border: "1px solid black",
                    fontWeight: 600,
                  },
                }}
                onClick={() => {
                    props.handleDeleteQuestion(props.value);
                    // props.handleDeleteModalClose();
                }}
              >
                Delete
              </Button>}
              {props.status.status === "loading" && <LoadingButton
                variant="outline"
                sx={{
                  backgroundColor: "black",
                  border: "1px solid black",
                  color: "white",
                  textTransform: "none",
                  width: {
                    xs: "100%",
                    sm: 90,
                    md: 90
                  },
                  "&:hover": {
                    backgroundColor: "black",
                    border: "1px solid black",
                    fontWeight: 600,
                  },
                  "& .MuiLoadingButton-loadingIndicator": {
                    color: "white",
                  }
                }}
                loading
                loadingPosition="center"
              >
                Delete
              </LoadingButton>}
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
}
