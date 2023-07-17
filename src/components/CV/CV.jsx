import { Box } from "@mui/material"
import { useEffect } from "react"
const CV = (props) => {
    const { cvid } = props
    useEffect(() => {
        // goi api lấy thông tin CV của cvid về
    }, [])
    return (
        <>
            <Box component="h4" sx={{ margin: 0 }}>
                CV1
            </Box>
            <Box sx={{ mt: "16px" }}>
                <Box
                    component="h5"
                    sx={{ m: 0, borderBottom: "2px solid #000" }}
                >
                    Skills
                </Box>
                <Box>&bull; HTML CSS </Box>
                <Box>&bull; JavaScript </Box>
                <Box>&bull; ReactJS</Box>
                <Box>&bull; Python </Box>
                <Box
                    component="h5"
                    sx={{
                        m: "16px 0px 0px 0px",
                        borderBottom: "2px solid #000",
                    }}
                >
                    Certificates
                </Box>
                <Box>&bull; HTML CSS </Box>
                <Box>&bull; JavaScript </Box>
                <Box>&bull; ReactJS</Box>
                <Box>&bull; Python </Box>
                <Box
                    component="h5"
                    sx={{
                        m: "16px 0px 0px 0px",
                        borderBottom: "2px solid #000",
                    }}
                >
                    Experience
                </Box>
                I have gained valuable experience in React.js, HTML, and
                CSS. React.js has allowed me to build dynamic user
                interfaces and manage state efficiently. HTML provides the
                structure of web content, while CSS enables me to style and
                customize layouts. By combining these technologies, I create
                modern and engaging web experiences.
            </Box>
        </>
    )
}

export default CV