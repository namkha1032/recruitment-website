import Box from '@mui/material/Box'
import  Pagination  from '@mui/material/Pagination'
const pageSize=3;
function AppPagination(props){
    return(
        <Box  justifyContent='center' alignItems='center' display='flex' sx={{
            margin:"20px 0px"
        }}>
        
        <Pagination count={3}/>
        </Box>
    )
}
export default AppPagination