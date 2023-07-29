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






