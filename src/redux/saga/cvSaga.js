// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'
import host from "../host"
function* getCv(action) {
    // console.log(action)
    const res = action.payload.cvid === null ?  yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Authentication/User/${action.payload.userid}`,{
        headers:{ Authorization: `Bearer ${action.payload.token}`}
    }) : {}
    const response1 = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Cv`)
    const data1 = action.payload.cvid !== null ? response1.data.filter(item => item.cvid ===action.payload.cvid) 
        : response1.data.filter(item => item.candidateId ===res.data.candidates[0].candidateId )
    const data4 = data1.filter(item => item.cvName==="My Cv")
    const data5 = data4.length ===0 ?data1: data4
        
    const data = data5.length >= 1  ? data5[0] : null;
    if (data5.length >= 1 ) {

        const compareDates = (date1, date2)  => {
            return new Date(date1.dateEarned) - new Date(date2.dateEarned);
        };
        if (data.certificates.length>1){
            data.certificates.sort(compareDates)
        }  
        const response4 = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/CvHasSkill`)
        const skillsExp = response4.data.filter(item => item.cvid === data.cvid && (() => { 

            for (let i =0 ;i< data.skills.length;i++)
                if (item.skillId===data.skills.skillId)
                    return true

            return false}))
        const skillsNew = data.skills.map((item,index) =>{ return {...item,experienceYear:skillsExp[index].experienceYear}})
        const data2=  {...data,skills:skillsNew}
        yield put({ type: "cv/setCv", payload: data2 })
        const response2 = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Candidate/${data.candidateId}`)
        const response3 = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Authentication/Profile/${response2.data.userId}`,{
            headers:{ Authorization: `Bearer ${action.payload.token}`}
        })

        const data1 = {
            name: response3.data.fullName,
            email:response3.data.email,
            phone:response3.data.phoneNumber,
            address:response3.data.address,
            image:response3.data.imageURL,
        }

        yield put({ type: "candidate/setCandidate", payload: data1 })
    }else{
        yield put({ type: "cv/setCv", payload: 'none' })
    }
}

function* getCvList(action) {
    try {
        
        const config = {
            headers: {
                Authorization: action.payload.token,
            }
        };
        const candidate = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Candidate`, config)
        // const test = candidate.data.filter((prop) => prop.userId === 'bf39957a-5fad-4e81-a8bd-2c2afa10d15a');
        // console.log('test', test);

        const cvlist = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Cv/GetCandidateCvs/${(candidate.data.filter((props) => props.userId === action.payload.userid))[0].candidateId}`, config)

        // const reponse1 = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Cv/GetCandidateCvs`) 
        // const reponse = yield call(axios.get, `/data/CVList.json`)
        // const reponse = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Cv`)
        yield put({ type: 'cvlist/setCvList', payload: cvlist.data })
    } catch (error) {
        // console.log(error)
        yield put({ type: 'cvListError/onError', payload: 'error' })
    }

}

function* cvSaga() {
    yield all([
        takeEvery("cvSaga/getCv", getCv),
        takeEvery("cvSaga/getCvList", getCvList)
    ])
}

export default cvSaga