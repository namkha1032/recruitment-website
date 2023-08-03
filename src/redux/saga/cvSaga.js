// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'
import host from "../host"
function* getCv(action) {
    const response1 = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Cv`)
    // const response2 = yield call(axios.get, `${host.name}/data/candidateid.json?candidateid=${response1.data.userid}`)
    const response2 = yield call(axios.get, `${host.name}/data/candidateid.json?candidateid=${0}`)

    // yield put({ type: "saga/getCandidate", payload: response1.data.userid })
    console.log(response1.data[0])
    const data = {...response1.data[0],
        "introduction":`I am a dedicated and highly motivated professional with a passion for web development and front-end technologies. With a Bachelor's degree in Computer Science and several years of experience in designing and implementing user-friendly web applications, I have honed my skills in HTML, CSS, JavaScript, and ReactJS.

        Throughout my career, I have worked on various projects, collaborating with cross-functional teams to deliver high-quality and visually appealing websites. I possess a keen eye for detail, ensuring that each project is thoroughly tested and optimized for optimal performance.
        
        My goal is to continue growing as a developer and contribute my expertise to create innovative digital experiences. I thrive in challenging environments that encourage learning and embracing new technologies. As a self-starter, I am always eager to take initiative and find creative solutions to complex problems.
        
        I am confident in my ability to meet project deadlines and work effectively both independently and as part of a team. I am a proactive learner, constantly seeking opportunities to expand my knowledge and stay up-to-date with the latest industry trends.
        
        In my free time, I enjoy contributing to open-source projects and attending tech meetups, where I can connect with fellow developers and share insights. These activities not only keep me engaged but also foster a collaborative mindset.`
        ,
        experience: `During my professional journey, I have acquired valuable experience in web development, with a primary focus on front-end technologies. Working on various projects, I have collaborated with cross-functional teams to deliver user-friendly and visually appealing websites.

        I am well-versed in HTML, CSS, JavaScript, and ReactJS, and have honed my skills through designing and implementing high-quality web applications. As a detail-oriented developer, I prioritize thorough testing and optimization to ensure optimal performance.
        
        My passion for continuous learning and staying updated with the latest industry trends has helped me thrive in challenging environments. I am a proactive problem-solver, always eager to take initiative and find creative solutions to complex challenges.
        
        Throughout my journey, I have learned to effectively manage project deadlines and work collaboratively with team members to achieve project goals. I take pride in contributing to open-source projects and actively participating in tech meetups to connect with like-minded developers and share insights.
        
        I am excited to further grow as a developer and contribute my expertise to create innovative digital experiences that positively impact users.`
        ,
        education:'Đại học '
        ,"languages": [
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
        }],"certificates": [...response1.data[0].certificates,
        {
            "certificateId": "8483e625-6146-48ec-9abc-e7b3452a48a7",
            "certificateName": "Javascript",
            "description": "Javascript 1 năm",
            "organizationName": "organize",
            "dateEarned": "2023-07-01T00:00:00",
            "expirationDate": "2023-07-01T00:00:00",
            "link": "link",
            "cvid": "d1c51600-6272-4c78-9b50-36af9d403a28",
            "isDeleted": false
          },
          {
            "certificateId": "8483e625-6146-48ec-9abc-e7b3452a48a7",
            "certificateName": "ReactJS ",
            "description": "ReactJS quá dễ",
            "organizationName": "organize",
            "dateEarned": "2023-07-05T00:00:00",
            "expirationDate": "2023-07-05T00:00:00",
            "link": "link",
            "cvid": "d1c51600-6272-4c78-9b50-36af9d403a28",
            "isDeleted": false
          },
          {
            "certificateId": "8483e625-6146-48ec-9abc-e7b3452a48a7",
            "certificateName": "C/C++",
            "description": "C/C++ .......",
            "organizationName": "organize",
            "dateEarned": "2023-07-12T00:00:00",
            "expirationDate": "2023-07-12T00:00:00",
            "link": "link",
            "cvid": "d1c51600-6272-4c78-9b50-36af9d403a28",
            "isDeleted": false
          }
    ]
    }
    const compareDates = (date1, date2) => {
        return new Date(date1.expirationDate.slice(0,10)) - new Date(date2.expirationDate.slice(0,10));
      };
      data.certificates.sort(compareDates)
      console.log(data.certificates)
    yield put({ type: "cv/setCv", payload: data })
    yield put({ type: "candidate/setCandidate", payload: response2.data })
}

function* getCvList(action) {
    try{
        const candidate = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Candidate`) 
        console.log("caninsaga", candidate.data);
        // const test = candidate.data.filter((prop) => prop.userId === 'bf39957a-5fad-4e81-a8bd-2c2afa10d15a');
        // console.log('test', test);
        
        const cvlist = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Cv/GetCandidateCvs/${(candidate.data.filter((props) => props.userId === action.payload))[0].candidateId}`)
        console.log('id', cvlist.data);
        console.log('payload', action.payload);
        // const reponse1 = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Cv/GetCandidateCvs`) 
        // const reponse = yield call(axios.get, `${host.name}/data/CVList.json`)
        // const reponse = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Cv`)
        yield put({ type: 'cvlist/setCvList', payload: cvlist.data })
    } catch(error){
        console.log(error)
    }
    
}

function* cvSaga() {
    yield all([
        takeEvery("saga/getCv", getCv),
        takeEvery("saga/getCvList", getCvList)
    ])
}

export default cvSaga