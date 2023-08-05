import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import GigaCard from "../../../components/GigaCard/GigaCard";

const CvSkeleton = () => {
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
            sx={{ fontSize: 70, width: "230px", marginTop: 0, margin: "auto" }}
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
            <Box className={`CVForm InputForm`}>
              <GigaCard>
                <Grid
                  item
                  container
                  xs={12}
                  justifyContent="center"
                  alignItems="center"
                  sx={{ marginTop: "30px" }}
                >
                  <Grid item xs={4}>
                    <Skeleton
                      variant="circular"
                      width={60}
                      height={60}
                      sx={{ margin: "auto" }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Skeleton
                      variant="circular"
                      width={60}
                      height={60}
                      sx={{ margin: "auto" }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Skeleton
                      variant="circular"
                      width={60}
                      height={60}
                      sx={{ margin: "auto" }}
                    />
                  </Grid>
                  <Box sx={{ width: "80%" }}>
                    <Grid item xs={12} sx={{ marginTop: "84px" }}>
                      <Skeleton
                        variant="text"
                        sx={{ fontSize: "1rem" }}
                        height={40}
                        width={110}
                      />
                      <Skeleton
                        variant="rounded"
                        width="100%"
                        height={55}
                        sx={{ marginTop: "6px" }}
                      />
                    </Grid>
                    <Grid item xs={12} sx={{ marginTop: "8px" }}>
                      <Skeleton
                        variant="text"
                        sx={{ fontSize: "1rem" }}
                        height={40}
                        width={170}
                      />
                      <Skeleton
                        variant="rounded"
                        width="100%"
                        height={55}
                        sx={{ marginTop: "6px" }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Skeleton
                        variant="text"
                        sx={{ fontSize: "1rem" }}
                        height={40}
                        width={170}
                      />
                      <Skeleton
                        variant="rounded"
                        width="100%"
                        height={190}
                        sx={{ marginTop: "6px" }}
                      />
                    </Grid>
                    <Grid
                      item
                      container
                      xs={12}
                      sx={{ marginTop: "32px", marginBottom: "40px" }}
                    >
                      <Grid item xs={6}>
                        <Skeleton
                          variant="rounded"
                          width="102px"
                          height={39}
                          sx={{ marginTop: "6px", marginLeft: "8px" }}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Skeleton
                          variant="rounded"
                          width="102px"
                          height={39}
                          sx={{
                            marginTop: "6px",
                            right: "8px",
                            marginLeft: "350px",
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </GigaCard>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Skeleton variant="rounded" width={310} height={60} sx={{margin:"auto"}} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CvSkeleton;
