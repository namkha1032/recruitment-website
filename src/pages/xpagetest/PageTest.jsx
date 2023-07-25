import axios from "axios"
import { useEffect, useState } from "react"
const PageTest = () => {
    const [value, setValue] = useState(null)
    // useEffect(() => {
    //     async function getApi() {
    //         let response = await axios.get("http://leetun2k2-001-site1.gtempurl.com/api/Department/GetAllDepartment")
    //         let peo = await response.data
    //         setValue(peo)
    //     }
    //     getApi()
    // }, [])
    console.log("value: ", value)
    return (
        <>
        </>
    )
}

export default PageTest