import { createSlice } from "@reduxjs/toolkit";

const listcvSlice = createSlice({
    name: 'listcv',
    initialState: {
        listcv:[
            {
              "cvid": 0,
              "name": "CV1",
            }],
        cv:
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
                  "name": "HTML CSS",
                  "decription": "HTML CSS",
                  "Orgranizationname": "HTML CSS",
                  "dateearned": "12-12-2022",
                  "expirationdate": "12-12-2023",
                  "link": "abc.com"
                },
                {
                  "certificateid": 2,
                  "name": "HTML CSS",
                  "decription": "HTML CSS",
                  "Orgranizationname": "HTML CSS",
                  "dateearned": "12-12-2022",
                  "expirationdate": "12-12-2023",
                  "link": "abc.com"
                },
                {
                  "certificateid": 2,
                  "name": "HTML CSS",
                  "decription": "HTML CSS",
                  "Orgranizationname": "HTML CSS",
                  "dateearned": "12-12-2022",
                  "expirationdate": "12-12-2023",
                  "link": "abc.com"
                },
                {
                  "certificateid": 2,
                  "name": "HTML CSS",
                  "decription": "HTML CSS",
                  "Orgranizationname": "HTML CSS",
                  "dateearned": "12-12-2022",
                  "expirationdate": "12-12-2023",
                  "link": "abc.com"
                },
                {
                  "certificateid": 2,
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
                  "decription": "Pythonssss"
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
            }
        
    },
    reducers: {
        setListcv(state, action){
            return action.payload
        }
    }
})

export default listcvSlice;
