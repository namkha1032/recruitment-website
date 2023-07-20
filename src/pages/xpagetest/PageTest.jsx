import { useEffect, useState } from "react";
import GigaCard from "../../components/GigaCard/GigaCard"
import GigaCardBody from "../../components/GigaCardBody/GigaCardBody"
import GigaCardHeader from "../../components/GigaCardHeader/GigaCardHeader"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import axios from "axios"
const PageTest = () => {
    let [value, setValue] = useState()
    console.log("value: ", value)
    useEffect(() => {
        async function fetchStuff() {
            try {
                const response = await axios.get("http://leetun2k2-001-site1.gtempurl.com/api/Candidate/GetAllApplications")
                setValue(response.data)
            }
            catch (err) {
                console.log("err: ", err)
            }
        }
        fetchStuff()
    }, [])
    return (
        <>
            <GigaCard>
                <GigaCardHeader color={"primary.main"} headerIcon={<AcUnitIcon sx={{ fontSize: "inherit" }} />}>
                    this is a header
                </GigaCardHeader>
                <GigaCardBody>

                    23456
                </GigaCardBody>
            </GigaCard>
        </>
    )
}

export default PageTest