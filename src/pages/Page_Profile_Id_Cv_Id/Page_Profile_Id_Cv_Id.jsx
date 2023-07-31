import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router";
import CV from "../../components/CV/CV";
import { useEffect, useState } from "react";
import axios from "axios";
import GigaCard from "../../components/GigaCard/GigaCard";
import GigaCardBody from "../../components/GigaCardBody/GigaCardBody";
import { useSelector } from "react-redux";

const Page_Profile_Id_Cv_Id = () => {
  const user = useSelector((state) => state.user);
  const params = useParams();
  const navigate = useNavigate();

  return (
    user && (
      <>
        
        <Box mt={6}>
          <CV user={user} cv={params.cvid} />
        </Box>
     
        <Box sx={{ display: "flex", justifyContent: "flex-end", marginY: 4 }}>
          <Button
            variant="contained"
            color="warning"
            onClick={() => navigate("/profile/1/cv/1/update")}
          >
            update
          </Button>
        </Box>
      </>
    )
  );
};

export default Page_Profile_Id_Cv_Id;
