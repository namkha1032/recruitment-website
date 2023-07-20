import GigaCard from "../../components/GigaCard/GigaCard"
import GigaCardBody from "../../components/GigaCardBody/GigaCardBody"
import GigaCardHeader from "../../components/GigaCardHeader/GigaCardHeader"
import AcUnitIcon from '@mui/icons-material/AcUnit';
const PageTest = () => {
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