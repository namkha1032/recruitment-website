import { Box, Container, Grid, TextField, Typography } from "@mui/material";
// import Page_Profile_Id_Cv_Id from '../Page_Profile_Id_Cv_Id/Page_Profile_Id_Cv_Id'
import { useSearchParams } from "react-router-dom";
import CV from "../../components/CV/CV";
import Application from "../../components/Application/Application";
import { useState } from "react";
const data = {
  "user": {
    "userid": 0,
    "name": "Nguyễn Văn A",
    "email": "0986925857@gmail.com",
    "birth": "24-08-20000",
    "phone": "0986925857aa",
    "address": "Phường Linh Đông Thành Phố Thủ Đức HCM",
    "cvselected": 0,
    "image": "https://pbs.twimg.com/media/EYVxlOSXsAExOpX.jpg"
  },
  "cvs": [
    {
      "cvid": 0,
      "userid": 0,
      "name": "CV1",
      "cvpdf": "",
      "toeic": 500,
      "education": "Đại học",
      "experience": "I have gained valuable experience in React.js, HTML, and interfaces and manage state efficiently. HTML provides the structure of web content, while CSS enables me to style and customize layouts. By combining these technologies, I create modern and engaging web experiences.",
      "certificates": [
        {
          "certificateid": 0,
          "name": "HTML CSS",
          "decription": "HTML CSS",
          "Orgranizationname": "HTML CSS",
          "dateearned": "12-12-2022",
          "expirationdate": "12-12-2023",
          "link": "abc.com"
        },
        {
          "certificateid": 1,
          "name": "REACTJS",
          "decription": "Reactjs",
          "Orgranizationname": "Reactjs",
          "dateearned": "12-12-2022",
          "expirationdate": "12-12-2023",
          "link": "abc.com"
        }
      ],
      "skills": [
        {
          "cvskillid": 0,
          "skillname": "HTML CSS",
          "decription": "HTML CSS"
        },
        {
          "cvskillid": 1,
          "skillname": "ReactJS",
          "decription": "ReactJS"
        },
        {
          "cvskillid": 2,
          "skillname": "JavaScript",
          "decription": "JavaScript"
        },
        {
          "cvskillid": 3,
          "skillname": "Python",
          "decription": "Python"
        }
      ],
      "languages": [
        {
          "cvlanguageid": 0,
          "name": "English",
          "decription": ""
        },
        {
          "cvlanguageid": 1,
          "name": "Korean",
          "decription": ""
        },
        {
          "cvlanguageid": 2,
          "name": "Chinese",
          "decription": ""
        }
      ]
    },
    {
      "cvid": 1,
      "userid": 1,
      "name": "CV2",
      "cvpdf": "",
      "toeic": 500,
      "education": "Đại học",
      "experience": "I have gained valuable experience in React.js, HTML, and interfaces and manage state efficiently. HTML provides the structure of web content, while CSS enables me to style and customize layouts. By combining these technologies, I create modern and engaging web experiences.",
      "certificates": [
        {
          "certificateid": 0,
          "name": "HTML CSS",
          "decription": "HTML CSS",
          "Orgranizationname": "HTML CSS",
          "dateearned": "12-12-2022",
          "expirationdate": "12-12-2023",
          "link": "abc.com"
        }
      ],
      "skills": [
        {
          "cvskillid": 0,
          "skillname": "HTML CSS",
          "decription": "HTML CSS"
        },
        {
          "cvskillid": 1,
          "skillname": "ReactJS",
          "decription": "ReactJS"
        },
        {
          "cvskillid": 2,
          "skillname": "JavaScript",
          "decription": "JavaScript"
        },
        {
          "cvskillid": 3,
          "skillname": "Python",
          "decription": "Python"
        },
        {
          "cvskillid": 2,
          "skillname": "JavaScript",
          "decription": "JavaScript"
        },
        {
          "cvskillid": 3,
          "skillname": "Python",
          "decription": "Python"
        }
      ],
      "languages": [
        {
          "cvlanguageid": 0,
          "name": "English",
          "decription": ""
        },
        {
          "cvlanguageid": 1,
          "name": "Korean",
          "decription": ""
        },
        {
          "cvlanguageid": 2,
          "name": "Chinese",
          "decription": ""
        },
        {
          "cvlanguageid": 2,
          "name": "Chinese",
          "decription": ""
        },
        {
          "cvlanguageid": 2,
          "name": "Chinese",
          "decription": ""
        }
      ]
    }
  ],
  "applications": [
    {
      "applicationid": "0",
      "name": ""
    }
  ]
}
const Page_Recruitment_Id_Application_Id = () => {
  const [user, setUser] = useState(data.user);
    const [CVs, setCVs] = useState(data.cvs);
  // useEffect(() => {
    
  //   const fetchData = async () => {
  //     const response = await axios.get("http://localhost:3001/user");
  //     setUser(response.data);
  //     const response1 = await axios.get("http://localhost:3001/cvs");
  //     setCVs(response1.data);
  //   };
  //   fetchData();
  // }, []);
  return (
    
    user && CVs && <Container>
      <Application cvid={0} user={user} CVs={CVs}/>
      <Box
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "15px",
        }}
      >
        <Typography variant="h5">Date: 30/06/2023 </Typography>
        <em>Status</em>
      </Box>
    </Container>
  );
};

export default Page_Recruitment_Id_Application_Id;

