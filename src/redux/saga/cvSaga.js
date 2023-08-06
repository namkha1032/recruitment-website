// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'
import host from "../host"
function* getCv(action) {
    console.log(action)
    const res = action.payload.cvid === null ?  yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Authentication/User/${action.payload.userid}`,{
        headers:{ Authorization: `Bearer ${action.payload.token}`}
    }) : {}
    const response1 = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Cv`)
    const data1 = action.payload.cvid !== null ? response1.data.filter(item => item.cvid ===action.payload.cvid) 
        : response1.data.filter(item => item.candidateId ===res.data.candidates[0].candidateId)
    console.log(data1)
    const data = data1.length >= 1  ? data1[0] : null;
    if (data1.length >= 1 ) {
        
        const compareDates = (date1, date2) => {
            return new Date(date1.expirationDate.slice(0,10)) - new Date(date2.expirationDate.slice(0,10));
        };
        data.certificates.sort(compareDates)
        console.log(data.certificates)
        yield put({ type: "cv/setCv", payload: data })
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
        console.log("caninsaga", candidate.data);
        // const test = candidate.data.filter((prop) => prop.userId === 'bf39957a-5fad-4e81-a8bd-2c2afa10d15a');
        // console.log('test', test);

        const cvlist = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Cv/GetCandidateCvs/${(candidate.data.filter((props) => props.userId === action.payload.userid))[0].candidateId}`, config)
        console.log('id', cvlist.data);
        console.log('payload', action.payload);
        // const reponse1 = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Cv/GetCandidateCvs`) 
        // const reponse = yield call(axios.get, `/data/CVList.json`)
        // const reponse = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Cv`)
        yield put({ type: 'cvlist/setCvList', payload: cvlist.data })
    } catch (error) {
        console.log(error)
    }

}

function* cvSaga() {
    yield all([
        takeEvery("cvSaga/getCv", getCv),
        takeEvery("cvSaga/getCvList", getCvList)
    ])
}

export default cvSaga