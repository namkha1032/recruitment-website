import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import host from "../redux/host";
//import { useLayoutEffect } from "react";
// -------------------README !!!---------------------------
// Hook này có thể trả về 1 trong 5 giá trị:
// - "admin"
// - "recruiter"
// - "interviewer"
// - "candidate"
// - null
// -------------------README !!!---------------------------


function useGetRole() {
    const userlocal = useSelector(state => state.user)
    console.log("user: ", userlocal)
    // const userlocal = JSON.parse(window.localStorage.getItem("user"))
    const [role, setRole] = useState(null)
    useEffect(() => {
        if (userlocal) {

            let token = `Bearer ${userlocal.token}`
            const config = {
                headers: { Authorization: token },
            }
            axios.get('https://leetun2k2-001-site1.gtempurl.com/api/Authentication/CurrentRole', config).then(response => {
                console.log("response is: ", response.data.role[0])
                if (response.data.role[0] == "Admin") {
                    setRole("admin")
                }
                else if (response.data.role[0] == "Recruiter") {
                    setRole("recruiter")
                }
                else if (response.data.role[0] == "Interviewer") {
                    setRole("interviewer")
                }
                else if (response.data.role[0] == "Candidate") {
                    setRole("candidate")
                }
                else {
                    setRole(null)
                }
            })
        }
        else {
            setRole(null)
        }
        
    }, [userlocal])
    return role
}

export default useGetRole


// function useGetRole() {
//     const user = useSelector(state => state.user)
//     const [role, setRole] = useState(null)
//     useEffect(() => {
//         if (user) {
//             // -----------------------------------------------------------
//             let api = ""
//             if (user.token == "hentai.jav.admin") {
//                 api = `${host.name}/data/roleAdmin.json`
//             }
//             else if (user.token == "hentai.jav.recruiter") {
//                 api = `${host.name}/data/roleRecruiter.json`
//             }
//             else if (user.token == "hentai.jav.interviewer") {
//                 api = `${host.name}/data/roleInterviewer.json`
//             }
//             else if (user.token == "hentai.jav.candidate") {
//                 api = `${host.name}/data/roleCandidate.json`
//             }
//             // -----------------------------------------------------------
//             let token = `Bearer ${user.token}`
//             const config = {
//                 headers: { Authorization: token },
//             }
//             axios.get(api, config).then(response => {
//                 if (response.data.roleName == "admin") {
//                     setRole("admin")
//                 }
//                 else if (response.data.roleName == "recruiter") {
//                     setRole("recruiter")
//                 }
//                 else if (response.data.roleName == "interviewer") {
//                     setRole("interviewer")
//                 }
//                 else if (response.data.roleName == "candidate") {
//                     setRole("candidate")
//                 }
//                 else {
//                     setRole(null)
//                 }
//             })
//         }
//         else {
//             setRole(null)
//         }
//     }, [user])
//     return role
// }

// export default useGetRole







