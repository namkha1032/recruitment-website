import { Modal, Box, Grid, Button } from "@mui/material";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";

export default function DeleteAlertModal(props) {
  return (
    <Box>
      <Modal
        open={props.deleteModalStatus}
        onClose={props.handleDeleteModalClose}
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
                Xoá câu hỏi
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
                Bạn chắc chắn muốn xoá câu hỏi có ID là {props.id}?
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
              <Button
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
                    props.handleDeleteModalClose();
                }}
              >
                Quay về
              </Button>
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
              <Button
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
                  }
                }}
                onClick={() => {
                    props.handleDeleteQuestion(props.value);
                    props.handleDeleteModalClose();
                }}
              >
                Đồng ý
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
}
