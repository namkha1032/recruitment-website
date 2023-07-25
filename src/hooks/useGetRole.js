import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
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
    const user = useSelector(state => state.user)
    const [role, setRole] = useState(null)
    useEffect(() => {
        if (user) {
            // -----------------------------------------------------------
            let api = ""
            if (user.token == "hentai.jav.admin") {
                api = `${host.name}/data/roleAdmin.json`
            }
            else if (user.token == "hentai.jav.recruiter") {
                api = `${host.name}/data/roleRecruiter.json`
            }
            else if (user.token == "hentai.jav.interviewer") {
                api = `${host.name}/data/roleInterviewer.json`
            }
            else if (user.token == "hentai.jav.candidate") {
                api = `${host.name}/data/roleCandidate.json`
            }
            // -----------------------------------------------------------
            let token = `Bearer ${user.token}`
            const config = {
                headers: { Authorization: token },
            }
            axios.get(api, config).then(response => {
                if (response.data.roleName == "admin") {
                    setRole("admin")
                }
                else if (response.data.roleName == "recruiter") {
                    setRole("recruiter")
                }
                else if (response.data.roleName == "interviewer") {
                    setRole("interviewer")
                }
                else if (response.data.roleName == "candidate") {
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
    }, [user])
    return role
}

export default useGetRole