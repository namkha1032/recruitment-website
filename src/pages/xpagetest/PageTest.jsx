import axios from "axios"
import { useEffect, useState } from "react"
const PageTest = () => {
    useEffect(() => {
        axios.get("http://leetun2k2-001-site1.gtempurl.com/api/Department").then(response=>{
            console.log("res: ", response.data)
        })
    }, [])
    return (
        <>
        </>
    )
}

export default PageTest