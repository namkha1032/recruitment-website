import Box from '@mui/material/Box'
import  Pagination  from '@mui/material/Pagination'
import { useEffect, useState } from 'react';
import Service from '../Service';
import { useDispatch, useSelector } from 'react-redux';
function AppPagination({setChangeList, data, pageSize}){
    // const data = useSelector(state => state.eventList)

    const [pagination,setPagination] =useState({
        count:0,
        from:0,
        to:pageSize
    })

    

    useEffect(()=> {
        Service.getData(data,pagination.from,pagination.to).then(response => {
            setPagination({...pagination,count:response.count})
            setChangeList(response.data)
        })
    },[pagination.from,pagination.to,data])
    const handleChangePage = (event,page) => {
        setPagination({...pagination,from:(page-1)*pageSize,to:(page-1)*pageSize+pageSize})
    }
    return(
        <Box  justifyContent='center' alignItems='center' display='flex' sx={{
            margin:"20px 0px"
        }}>

        <Pagination 
            count={Math.ceil(pagination.count/pageSize)}

            onChange={handleChangePage}
            />
        </Box>
    )
}
export default AppPagination