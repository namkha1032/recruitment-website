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
  console.log(user )

  const params = useParams();
 
  return (
    user && ( 
      <>     
        <Box mt={6}>
          <CV cvid={params.cvid} page="profile_cv"/>
        </Box>
      </>
    )
  );
};

export default Page_Profile_Id_Cv_Id;
