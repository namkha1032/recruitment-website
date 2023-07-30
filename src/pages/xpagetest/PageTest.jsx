import { useState, useEffect } from "react"
import axios from "axios"
import { useDispatch } from "react-redux";

const arr = [
    {
        "shiftId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "shiftTimeStart": 8,
        "shiftTimeEnd": 9
    },
    {
        "shiftId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "shiftTimeStart": 9,
        "shiftTimeEnd": 10
    },
    {
        "shiftId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "shiftTimeStart": 10,
        "shiftTimeEnd": 11
    },
    {
        "shiftId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "shiftTimeStart": 11,
        "shiftTimeEnd": 12
    },
    {
        "shiftId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "shiftTimeStart": 13,
        "shiftTimeEnd": 14
    },
    {
        "shiftId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "shiftTimeStart": 14,
        "shiftTimeEnd": 15
    },
    {
        "shiftId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "shiftTimeStart": 15,
        "shiftTimeEnd": 16
    },
    {
        "shiftId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "shiftTimeStart": 16,
        "shiftTimeEnd": 17
    }
];


const testArr = [
    {
        title: "namkha",
        author: "deptrai"
    },
    {
        title: "songoku",
        author: "songphandieu"
    },
    {
        title: "naruto",
        author: "uzumaki"
    }
]


const App = () => {
    const [pass, setPass] = useState("")
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    async function handleAdd() {
        if (pass == "add") {
            setLoading(true)
            // for (let content of arr) {
            //     const newObj = {
            //         roomId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            //         roomName: content
            //     }
            //     // await axios.post("http://leetun2k2-001-site1.gtempurl.com/api/Shift", content)
            //     // const response = await axios.get("https://leetun2k2-001-site1.gtempurl.com/api/Interview")
            //     // console.log("res: ", response.data)
            //     // const response = await axios.get("http://leetun2k2-001-site1.gtempurl.com/api/Question")
            //     // const resarr = await response.data
            //     // for (let res in resarr) {
            //     //     if (res.questionString == ques) {
            //     //         const newQS = {
            //     //             questionSkillsId: "00000000-0000-0000-0000-000000000008",
            //     //             questionId: res.questionId,
            //     //             skillId: "00000000-0000-0000-0000-000000000001"
            //     //         }
            //     //         await axios.post("http://leetun2k2-001-site1.gtempurl.com/api/QuestionSkill", newQS)
            //     //     }
            //     // }
            // }
            dispatch({ type: "saga/getStuff", payload: testArr })
        }
        setPass("")
        setLoading(false)
    }
    return (
        <>
            <input type="text" onChange={(e) => { setPass(e.target.value) }} value={pass} />
            <br />
            <button onClick={() => { handleAdd() }}>add</button>
            {loading ? <p>loading...</p> : null}
        </>
    )
}

export default App