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
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            width: 400,
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
                  color: "#1565C0",

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
                  color: "#1565C0",
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
                }}
              >
                Bạn chắc chắn muốn xoá câu hỏi có mã là {props.id}?
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Button
                variant="outlined"
                sx={{
                  textTransform: "none",
                  width: 90,
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
              xs={6}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Button
                variant="contained"
                sx={{
                backgroundColor: "#1565C0",
                  textTransform: "none",
                  width: 90,
                }}
                onClick={() => {
                    props.handleDeleteQuestion(props.id);
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
