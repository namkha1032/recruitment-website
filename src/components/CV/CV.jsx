import {
  EmojiEvents,
  IntegrationInstructions,
  Language,
  Person,
  School,
} from "@mui/icons-material";
import {
  Box,
  Chip,
  Divider,
  Grid,
  Popover,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CV = ({ cvid }) => {
  console.log(cvid);
  const dispatch = useDispatch();
  const cv = useSelector((state) => state.listcv.cv);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    // dispatch({ type: "saga/getCv", payload: cvid });
    return () => {
      // dispatch({ type: "listcv/setCv", payload: null });
    };
  }, []);

  return (
    cv !== null && (
      <Box sx={{ padding: "16px 0 16px 0" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            bottom: "25px",
          }}
        >
          <Box
            component="img"
            sx={{
              borderRadius: "50%",
              border: "1px solid #ccc",
              width: "100px",
              height: "100px",
            }}
            src={user.image}
            alt=""
          />
          <Box component="h1" sx={{ margin: "24px 0px 0px  24px" }}>
            {user.name}
          </Box>
        </Box>
        <Grid container spacing={2} sx={{ mt: "10px" }}>
          <Grid item lg={8} md={12}>
            <Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <Person sx={{ mr: "15px" }} />
                <Box
                  component="h2"
                  sx={{ position: "relative", top: "5.5px", m: 0 }}
                >
                  Profile
                </Box>
              </Box>
              <Box sx={{ padding: "10px 0 0 40px" }}>{cv.experience}</Box>
            </Box>
            <Divider sx={{ backgroundColor: "black", mt: "16px" }} />
            <Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <IntegrationInstructions sx={{ mr: "15px" }} />
                <Box
                  component="h2"
                  sx={{ position: "relative", top: "6.5px", m: 0 }}
                >
                  Skills
                </Box>
              </Box>
              <Box sx={{ padding: "0px 0 0 40px" }}>
                <Stack
                  direction="row"
                  sx={{ display: "flex", flexWrap: "wrap" }}
                >
                  {cv.skills.map((skill, index) => (
                    <Chip
                      key={index}
                      sx={{ margin: "10px 16px 0 0" }}
                      label={skill.skillname}
                    />
                  ))}
                </Stack>
              </Box>
            </Box>

            <Divider sx={{ backgroundColor: "black", mt: "16px" }} />
            <Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <EmojiEvents sx={{ mr: "15px" }} />
                <Box
                  component="h2"
                  sx={{ position: "relative", top: "6.5px", m: 0 }}
                >
                  Certificates
                </Box>
              </Box>
              <Box sx={{ padding: "0px 0 0 40px" }}>
                <Stack
                  direction="row"
                  sx={{ display: "flex", flexWrap: "wrap" }}
                >
                  {cv.certificates.map((certificate, index) => (
                    <Chip
                      key={index}
                      label={certificate.name}
                      sx={{ margin: "10px 16px 0 0" }}
                    />
                  ))}
                </Stack>
              </Box>
            </Box>
            <Divider sx={{ backgroundColor: "black", mt: "16px" }} />
            <Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <Language sx={{ mr: "15px" }} />
                <Box
                  component="h2"
                  sx={{ position: "relative", top: "5.5px", m: 0 }}
                >
                  Language
                </Box>
              </Box>
              <Box sx={{ padding: "10px 0 0 40px" }}>
                {cv.languages.map((language, index) => (
                  <Box key={index}>&bull; {language.name}</Box>
                ))}
              </Box>
            </Box>
            <Divider sx={{ backgroundColor: "black", mt: "16px" }} />
            <Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <School sx={{ mr: "15px" }} />
                <Box
                  component="h2"
                  sx={{ position: "relative", top: "5.5px", m: 0 }}
                >
                  Education
                </Box>
              </Box>
              <Box sx={{ padding: "10px 0 0 40px" }}>{cv.education}</Box>
            </Box>
          </Grid>
          <Grid item lg={4} md={12}>
            <Divider
              sx={{ backgroundColor: "black", display: { lg: "none" } }}
            />
            <Box
              component="h2"
              sx={{ position: "relative", top: "5.5px", m: 0 }}
            >
              Details
            </Box>
            <Box sx={{ padding: "10px 0 0 0" }}>
              <Box>{user.address}</Box>
              <Box>{user.phone}</Box>
              <Box>
                <a>{user.email}</a>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    )
  );
};

export default CV;
