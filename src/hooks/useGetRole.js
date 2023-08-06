import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";
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
    const dispatch = useDispatch()
    const [role, setRole] = useState(null)
    useEffect(() => {
        if (userlocal) {
            let token = `Bearer ${userlocal.token}`
            const config = {
                headers: { Authorization: token },
            }

            axios.get('https://leetun2k2-001-site1.gtempurl.com/api/Authentication/GetRole', config).then(response => {
                if (response.data == "Admin") {
                    setRole("admin")
                }
                else if (response.data == "Recruiter") {
                    setRole("recruiter")
                }
                else if (response.data == "Interviewer") {
                    setRole("interviewer")
                }
                else if (response.data == "Candidate") {
                    setRole("candidate")
                }
                else {
                    setRole(null)
                }
            }).catch(error => {
                console.log("error: ", error)
                dispatch({ type: "saga/userLogout" })
            });
        }
        else {
            setRole(null)
        }

    }, [userlocal])
    return role
}

export default useGetRole







