import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import GigaCard from "../../../components/GigaCard/GigaCard";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const PositionSkeleton = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      <Grid
        container
        spacing={0}
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: 0, padding: "0px" }}
      >
        <Grid item xs={12}>
          <Skeleton
            variant="text"
            sx={{ fontSize:isSm?70:100, width:isSm?"390px":"200px", marginTop: 0, margin: "auto" }}
          />
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "32px",
              
            }}
          >
            <Box sx={{ width: "100%" }}>
              <GigaCard>
                <Grid
                  item
                  container
                  xs={12}
                  justifyContent="center"
                  alignItems="center"
                  sx={{ marginTop: "30px",width:"100%" }}
                >
                  <Box sx={{ width: "80%" }}>
                    <Grid item xs={12}>
                      <Skeleton
                        variant="text"
                        sx={{ fontSize: "1rem" }}
                        height={40}
                        width={180}
                      />
                      <Skeleton variant="rounded" width="100%" height={55} />
                    </Grid>
                    <Grid item xs={12} sx={{ marginBottom: "48px" }}>
                      <Skeleton
                        variant="text"
                        sx={{ fontSize: "1rem" }}
                        height={40}
                        width={160}
                      />
                      <Skeleton variant="rounded" width="100%" height={251} />
                    </Grid>
                  </Box>
                </Grid>
              </GigaCard>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Skeleton
              variant="rounded"
              width="10%"
              height={55}
              sx={{ margin: "auto", minWidth: "140px" }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "34px",
              marginTop: "33px",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <GigaCard>
                <Grid
                  item
                  container
                  xs={12}
                  justifyContent="center"
                  alignItems="center"
                  sx={{ marginTop: "55px" }}
                >
                  <Box sx={{ width: "80%" }}>
                    <Grid
                      item
                      container
                      xs={12}
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Grid item xs={isSm?8:12}>
                        <Skeleton
                          variant="text"
                          sx={{ fontSize: "1rem" }}
                          height={40}
                          width={120}
                        />
                        <Skeleton variant="rounded" width={isSm?"98%":"100%"} height={55} />
                      </Grid>
                      <Grid item xs={isSm?4:12}>
                        <Skeleton
                          variant="text"
                          sx={{ fontSize: "1rem" }}
                          height={40}
                          width={180}
                        />
                        <Skeleton variant="rounded" width="100%" height={55} />
                      </Grid>
                    </Grid>

                    <Grid item xs={12}>
                      <Skeleton
                        variant="text"
                        sx={{ fontSize: "1rem" }}
                        height={40}
                        width={160}
                      />
                      <Skeleton variant="rounded" width="100%" height={210} />
                    </Grid>
                    <Grid item xs={12} sx={{ marginBottom: "48px" }}>
                      <Skeleton
                        variant="text"
                        sx={{ fontSize: "1rem" }}
                        height={40}
                        width={160}
                      />
                      <Skeleton variant="rounded" width="100%" height={55} />
                    </Grid>
                  </Box>
                </Grid>
              </GigaCard>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Skeleton
              variant="rounded"
              width="10%"
              height={55}
              sx={{ margin: "auto", minWidth: "140px" }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "34px",
              marginTop: "33px",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <GigaCard>
                <Grid
                  item
                  container
                  xs={12}
                  justifyContent="center"
                  alignItems="center"
                  sx={{ marginTop: "55px" }}
                >
                  <Box sx={{ width: "80%" }}>
                    <Grid
                      item
                      container
                      xs={12}
                      justifyContent="center"
                      alignItems="center"
                      sx={{ marginTop: "32px" }}
                    >
                      <Grid item xs={isSm?9:12}>
                        <Skeleton
                          variant="text"
                          sx={{ fontSize: "1rem" }}
                          height={40}
                          width={120}
                        />
                        <Skeleton variant="rounded" width={isSm?"98%":"100%"} height={55} />
                      </Grid>
                      <Grid item xs={isSm?3:12}>
                        <Skeleton
                          variant="text"
                          sx={{ fontSize: "1rem" }}
                          height={40}
                          width={180}
                        />
                        <Skeleton variant="rounded" width="100%" height={55} />
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Skeleton
                        variant="rounded"
                        width="10%"
                        height={55}
                        sx={{
                          margin: "auto",
                          minWidth: "140px",
                          marginTop: "12px",
                        }}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sx={{ marginTop: "10px", marginBottom: "46px" }}
                    >
                      <Skeleton
                        variant="text"
                        sx={{ fontSize: "1rem" }}
                        height={40}
                        width={160}
                      />
                      <Skeleton variant="rounded" width="100%" height={55} />
                    </Grid>
                  </Box>
                </Grid>
              </GigaCard>
              <Grid item xs={12}>
                <Skeleton
                  variant="rounded"
                  width="10%"
                  height={44}
                  sx={{ margin: "auto", minWidth: "120px", marginTop: "28px" }}
                />
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default PositionSkeleton;
