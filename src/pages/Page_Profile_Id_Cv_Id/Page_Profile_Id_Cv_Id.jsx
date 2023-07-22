import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import CV from "../../components/CV/CV";
import { useEffect, useState } from "react";
import axios from "axios";
import GigaCard from "../../components/GigaCard/GigaCard";
import GigaCardBody from "../../components/GigaCardBody/GigaCardBody";
// import Error from "../../components/Error/Error";
// import { checkuser } from "../../assets/js/checkuser";
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
const Page_Profile_Id_Cv_Id = () => {
  // const userid = localStorage.getItem("userid");
  // console.log(data)
  // const data1 = JSON.parse(data)
  const [user, setUser] = useState(data.user);
  const [cv, setCv] = useState(data.cvs);
  // const location = useLocation();
  const navigate = useNavigate();
  // const segments = location.pathname.split("/");
  // const lastSegment = segments[segments.length - 1];
  // const Cvid = parseInt(lastSegment)

  // {useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(
  //       `http://localhost:3001/user?userid=${userid}`
  //     );
  //     setUser(response.data);
  //     const response1 = await axios.get(`http://localhost:3001/cvs?cvid=${Cvid}`);
  //     setCv(response1.data);
  //   };
  //   fetchData();
  // }, []);}
  // if (cv !== null) {
  //   if(cv.length===0)
  //     return (
  //       <Error/>
  //     )
  // }
  // if (checkuser(location,3)===true ){
  //   return (
  //     <Error/>
  //   )
  // }

  return (
    user &&
    cv && (
      <>
        <GigaCard>
          <GigaCardBody>
            <Box sx={{ padding: 10 }}>
              <CV user={user} cv={cv} />
            </Box>
          </GigaCardBody>
        </GigaCard>
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
